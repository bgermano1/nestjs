FROM node:21.7.1-alpine3.19

WORKDIR /app
ADD package*.json ./
RUN npm install
ADD . .

# RUN npm run build
CMD [ "npm", "start" ]