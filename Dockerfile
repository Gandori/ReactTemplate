FROM node:latest AS build

WORKDIR /frontend

COPY package.json package.json

COPY webpack.config.prod.js webpack.config.prod.js

COPY .babelrc .babelrc

COPY public public

COPY src src

RUN npm i

RUN npm run build:prod

FROM nginx:alpine

COPY --from=build /build/ /usr/share/nginx/html