# Stage 1
FROM node:16 as build-step

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 5173