# Dockerize Foo Server

This repo contains the Dockerfile and the commands used to build, run, and publish a Docker image for the developed `Foo` server.

## Commands

### Docker Build

```sh
docker build -t <image-name> <context>
```

```sh
docker build -t athiththan11/foo-server:1.0.0 .
```

### Docker Run

```sh
docker run [-d] --name <container-name> [COMMANDS] <image-name>
```

```sh
docker run -d --name foo-server-container -p 3000:3000 -e FOO_SERVER_ENV_MESSAGE="A custom message set using the environment variable" athiththan11/foo-server:1.0.0
```

### Docker Logs

```sh
docker logs -f <container-name>
```

```sh
docker logs -f foo-server-container
```

### Docker Push

```sh
docker push <image-name>
```

```sh
docker push athiththan11/foo-server:1.0.0
```
