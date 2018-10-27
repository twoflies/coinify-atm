FROM node:8

WORKDIR /api

COPY package*.json ./
RUN npm install

COPY . .
RUN npm run build

ENV APP_PORT=80
EXPOSE 80
CMD [ "npm", "start" ]