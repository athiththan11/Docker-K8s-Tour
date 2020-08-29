# Foo Server

A simple backend server built with Express. Please find the usages of the `Foo` server and the supported configurations in the following sections.

## APIs & Resources

The `Foo` server contains and exposes a single `GET` resource which sends back a JSON response with the server name and a custom message that is set via environment variable (see section [environment-variables](#environment-variables))

```http
GET /v1/meta
Hostname: localhost
Port: 3000
```

```json
{
    "server": "Foo Server",
    "env_message": "a custom messagee set via the FOO_SERVER_ENV_MESSAGE environment var"
}
```

## Environment Variables

Given below are the list of supported environment variables of the `Foo` server

- `FOO_SERVER_PORT`: an environment variable to configure the server startup/listening port; default is `3000`
- `FOO_SERVER_ENV_MESSAGE`: an environment variable to set a custom message that can be returned with the server response

## Installing Dep & Running

### Installing Dependencies

Execute the following `npm` command to install the required dependencies to run the `Foo` server

> To run `npm` commands, it is required to have the NodeJS installed in your local environment

```sh
# execute the following command from the 01--foo-server directory
npm install
```

### Running the Server

The following command will start the server and serves the request on port `3000`

```sh
npm run start
```
