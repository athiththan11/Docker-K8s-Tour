#!/bin/bash

# an echo message to be printed when starting up the container
echo 'Executing the docker-entrypoint.sh and starting the container'

# copy the content from the artifacts directory to the server directory
echo 'Copying artifacts from /usr/artifacts directory to the server directory'
cp -r /usr/artifacts/. /usr/app

# change the directory to the /usr/app
cd /app

# start the Bar server using the npm start command
echo 'Starting Bar server'
npm start