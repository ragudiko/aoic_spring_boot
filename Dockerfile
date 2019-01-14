FROM node:6.4
WORKDIR /app
COPY package.json /app
RUN npm install
COPY . /app
CMD node blogger-api-2
EXPOSE 8081

