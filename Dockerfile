FROM nginx

ADD env/nginx.conf /etc/nginx/nginx.conf
RUN sed -i -e 's|index  index.html index.htm;|try_files $uri /index.html;|g' /etc/nginx/conf.d/default.conf

RUN rm -rf /usr/share/nginx/html/*

RUN mkdir /root/dealer-front
ADD . /root/dealer-front

RUN apt-get update -y
RUN apt-get install -y curl
RUN curl -sL https://deb.nodesource.com/setup_6.x | bash
RUN apt-get install -y nodejs

RUN npm install -g yarn@0.17.2
RUN npm install -g webpack@1.13.1

RUN cd /root/dealer-front/client/builder/env && cp dev.json.example dev.json && cp prod.json.example prod.json
RUN cd /root/dealer-front && yarn install && yarn build
RUN cp -r /root/dealer-front/client/public/* /usr/share/nginx/html

EXPOSE 80
