# Docker Volumes

This repo contains the Docker commands and the `docker-compose.yaml` used to mount and configure volumes with the `Bar` server. You can follow either the Docker commands or the Compose commands to try-out the Docker volumes and mounting configurations.

> Building a Docker image for `Bar` server is instructed under `04--bar-server-docker`

## Commands

### Docker Run

```sh
docker run [-d] --name <container-name> [COMMANDS] <image-name>
```

```sh
docker run -d --name bar-server-container-volume -p 4000:4000 -e BAR_SERVER_ENV_MESSAGE="Another custom message set using the environment variable" -v /usr/app/node_modules -v ./bar-server:/usr/app athiththan11/bar-server:1.0.0
```

### Docker Logs

```sh
docker logs -f <container-name>
```

```sh
docker logs -f bar-server-container
```

## Compose Commands

### Build & Up

```sh
docker-compose up [-d] --build
```

### Down

```sh
docker-compose down
```
