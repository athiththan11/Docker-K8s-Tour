# Introduction to Docker Compose

Docker Compose used to define and run multi-container Docker applications. This repo contains the `docker-compose.yaml` developed to run both `Foo` and `Bar` servers with a single command.

> cURL commands can be found under [repo/Utils/05--docker-compose](../Utils/05--docker-compose/docker-compose.http)

## Compose Commands

### Build & Up

```sh
docker-compose up [-d] --build
```

### Down

```sh
docker-compose down
```
