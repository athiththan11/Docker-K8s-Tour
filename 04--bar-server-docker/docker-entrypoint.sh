#!/bin/bash

# an echo message to be printed when starting up the container
echo 'Executing the docker-entrypoint.sh and starting the container'

# change the directory to the /usr/app
cd /app

# start the Bar server using the npm start command
npm start
