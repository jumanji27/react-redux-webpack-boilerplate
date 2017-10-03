### React Redux Webpack Boilerplate

NodeJS 8.4.0 / NPM 5.4.1

Install deps:

    npm install -g yarn@0.17.2 cross-env@5.0.0
    yarn install

Create all (it's important) env configs (client/builder/env) from examples

    cd client/builder/env && cp dev.json.example dev.json && cp prod.json.example prod.json

Dev server:

    yarn server:dev

Production:

    yarn build

Docker

    docker build -t react-redux-webpack-boilerplate -f env/Dockerfile .
    docker run -it -d -p 8080:80 <id>