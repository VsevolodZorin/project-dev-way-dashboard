FROM node:18.13.0

WORKDIR /app

COPY package*.json yarn.lock  ./

RUN yarn

COPY . .

RUN yarn build

RUN npm install -g serve

