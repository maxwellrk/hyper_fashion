FROM node:10
WORKDIR /TYCHE
COPY package.json /TYCHE
RUN npm install
COPY . /TYCHE
CMD npm start
EXPOSE 3000