#official Node.js 18 as base image
FROM node:18-alpine AS build
#set working directory to /app
WORKDIR /app
#copies package.json and package-lock.json files
COPY package*.json .
#ignore the prepare command due to husky 
RUN npm pkg set scripts.prepare=" "
#installs the application's dependencies using npm install
RUN npm install -g @angular/cli @angular-devkit/build-angular && npm install
COPY .. .
#rest of the application files are copied to the image, and the Angular application is built using npm run build
RUN npm run build
#tells docker that the container listens on the specified network ports at runtime
#port 49153 enables hot reloading
EXPOSE 4200 49153
#this will execute the npm start command when we start the Docker virtual machine.
CMD ["npm", "run", "dev"]
