FROM node:16-slim

ARG NODE_ENV=production
ENV NODE_ENV=${NODE_ENV}

WORKDIR /app
COPY package.json ./

RUN npm install -only=production --ignore-scripts

COPY ./dist/apps/api-gateway ./

CMD node ./main.js
