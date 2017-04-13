### Our Current Boilerplate

NodeJS 6.0.0 / NPM 3.8.6

Install deps:

    npm install -g yarn@0.17.2 webpack@1.13.1 webpack-dev-server@1.14.1 eslint@3.13.1
    yarn install

Create all (it's important) env configs (client/builder/env) from examples

    cd client/builder/env && cp dev.json.example dev.json && cp prod.json.example prod.json

Dev server:

    yarn server:dev

Production:

    yarn build

Docker

    docker build -t react-redux-webpack-boilerplate -f env/Dockerfile .