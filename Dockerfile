FROM node:latest

WORKDIR /usr/src/app/proxy

COPY package*.json ./

RUN npm install
COPY . .
ENV PORT=80

EXPOSE 80
CMD [ "npm", "run", "start:prod" ]