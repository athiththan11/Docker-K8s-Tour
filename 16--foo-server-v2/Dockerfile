# -------------------
# Dockerfile to build an image for Foo server
# -------------------

# create a docker image using the base image of node:alpine
FROM node:alpine

# set the working directory as /usr/app
WORKDIR /usr/app

# copy the package.json from the local directory (16--foo-server-v2) to the container
COPY ./package.json ./

# run npm install in the container to install the dependencies
RUN npm install

# copy the server.js from the local directory to the container
COPY ./server.js .

COPY . .

# the entry command of the container
CMD [ "npm", "start" ]