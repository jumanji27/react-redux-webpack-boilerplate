import datetime
import json
import os
import textwrap
import re

from plumbum import cli, FG
from plumbum.cmd import git


class Deploy(cli.Application):
    def main(self, raw_branches, message):
        if raw_branches and message:
            branches = raw_branches.split(',')

            print('')

            for branch in branches:
                git['merge', 'origin/%s' % branch] & FG

            now = datetime.datetime.now()
            now_week = f'{now.isocalendar()[1]:02}'
            now_year = str(now.year)
            now_year_for_version = now_year[-2:]
            now_major = '%s%s' % (now_year_for_version, now_week)
            branches_manifest = re.sub(
                r'(?<=[.,])(?=[^\s])',
                r' ',
                raw_branches,
            )
            version = None

            MANIFEST = 'client/public/manifest.json'

            with open(MANIFEST, 'r') as manifest_json:
                manifest = json.load(manifest_json)
                major = manifest['version'][:4]
                minor_str = manifest['version'][-1:]
                minor = 0

                if now_major == major:
                    minor = int(minor_str) + 1

                version = '%s.%s' % (now_major, minor)
                merge_commit = git['rev-parse', '--short', 'HEAD']()[:-1]

                manifest['version'] = version
                manifest['release_notes'] = message
                manifest['branches'] = branches_manifest
                manifest['merge_commit'] = merge_commit

            os.remove(MANIFEST)

            with open(MANIFEST, 'w') as manifest_json:
                json.dump(manifest, manifest_json, indent=2)

            git['add', '-A', '.'] & FG
            git['commit', '-m', 'release and version autobump'] & FG
            git['tag', version, '-m', message] & FG
            git['push', '--tags'] & FG

            print('')
            print('Send to deploy: %s' % branches_manifest)
            print('Version: %s' % version)
            print('Release notes: %s' % message)
            print('')
        else:
            ERROR = textwrap.dedent('''\
                Enter the names of the branches and release notes
                you want to release\
            ''')

            print(ERROR)


if __name__ == '__main__':
    Deploy.run()
