### React Redux Webpack Boilerplate

NodeJS 8.4.0 / NPM 5.4.1

Install deps:

    npm install -g yarn@1.1.0 cross-env@5.0.0
    yarn install

Create all (it's important) env configs (builder/env) from examples

    cd builder/env && cp dev.json.example dev.json && cp prod.json.example prod.json

Dev server:

    yarn server:dev

Production:

    yarn build

Deploy and Docker build (with Python3):

    python3 env/deploy.py <branches> <release notes>

    # Example:
    python3 env/deploy.py A-1,B-2 bug\ fixes\ and\ new\ bugs

    docker build -t react-redux-webpack-boilerplate -f env/Dockerfile .
    docker run -it -d -p 8080:80 <id>