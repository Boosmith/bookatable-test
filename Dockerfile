FROM node:latest
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm ci
COPY ./dist .
EXPOSE 8080
CMD ["node", "./bin/www.js"]
