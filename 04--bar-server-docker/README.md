# Dockerize Bar Server

This repo contains the Dockerfile, docker-entrypoint.sh and the commands used to build, run, and publish a Docker image for the developed `Bar` server.

## Commands

### Docker Build

```sh
docker build -t <image-name> <context>
```

```sh
docker build -t athiththan11/bar-server:1.0.0 .
```

### Docker Run

```sh
docker run [-d] --name <container-name> [COMMANDS] <image-name>
```

```sh
docker run -d --name bar-server-container -p 4000:4000 -e BAR_SERVER_ENV_MESSAGE="Another custom message set using the environment variable" athiththan11/bar-server:1.0.0
```

### Docker Logs

```sh
docker logs -f <container-name>
```

```sh
docker logs -f bar-server-container
```

### Docker Push

```sh
docker push <image-name>
```

```sh
docker push athiththan11/bar-server:1.0.0
```
