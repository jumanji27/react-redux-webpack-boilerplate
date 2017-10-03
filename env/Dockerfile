FROM nginx

ADD env/nginx.conf /etc/nginx/nginx.conf
RUN sed -i -e 's|index  index.html index.htm;|try_files $uri /index.html;|g' /etc/nginx/conf.d/default.conf

RUN rm -rf /usr/share/nginx/html/*

RUN mkdir /root/react-redux-webpack-boilerplate
ADD . /root/react-redux-webpack-boilerplate

RUN apt-get update -y
RUN apt-get install -y curl gnupg2
RUN curl -sL https://deb.nodesource.com/setup_6.x | bash
RUN apt-get install -y nodejs

RUN npm install -g yarn@0.17.2 cross-env@5.0.0

RUN cd /root/react-redux-webpack-boilerplate/client/builder/env && cp dev.json.example dev.json \
  && cp prod.json.example prod.json
RUN cd /root/react-redux-webpack-boilerplate && yarn install && yarn build
RUN cp -r /root/react-redux-webpack-boilerplate/client/public/* /usr/share/nginx/html
RUN rm -rf /root/react-redux-webpack-boilerplate/

EXPOSE 80
