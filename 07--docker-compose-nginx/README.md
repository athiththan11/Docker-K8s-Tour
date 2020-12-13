# Docker Compose

This repo contains the enhanced `docker-compose.yaml` to run our multi-container Docker application with Nginx routes.

> Please note that the port mapping configurations of the `foo-service` and the `bar-service` in the `docker-compose.yaml` are commented because the Nginx server is configured to route the traffics to each service based on the listening ports (ex: `8300` and `8400`). See [default.conf](./nginx/default.conf) for more information

> cURL commands can be found under [repo/Utils/07--docker-compose](../Utils/07--docker-compose-nginx/docker-compose.http)

## Compose Commands

### Build & Up

```sh
docker-compose up [-d] --build
```

### Down

```sh
docker-compose down
```

### Start

```sh
docker-compose start
```

### Logs

```sh
docker-compose logs -f
```

### Stop

```sh
docker-compose stop
```
