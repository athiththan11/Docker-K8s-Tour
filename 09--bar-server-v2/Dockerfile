# -------------------
# Dockerfile to build an image for Bar server v2
# -------------------

# create a docker image using the base of node:alpine
FROM node:alpine

# install bash in the node container
RUN \
    apk add --no-cache \
    bash

# creating a directory to store artifacts and to move them to the server 
# directory once the container is starting
RUN \
    mkdir /usr/artifacts

# set the working directory as /usr/app
WORKDIR /usr/app

# copy the package.json from the local directory to the container
COPY ./package.json .

# run npm install in the container to install the dependencies
RUN npm install

# copy all left-over artifacts from the local directory to the container
COPY . .

# the entry point sh of the container
ENTRYPOINT ["/usr/app/docker-entrypoint.sh"]
