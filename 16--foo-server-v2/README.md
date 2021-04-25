# Foo Server

A simple backend server built with Express. Please find the usages of the `Foo` server and the supported configurations in the following sections.

## APIs & Resources

The `Foo` server contains and exposes the following set of resources which sends back respective JSON responses.

### `v1/meta`

```http
GET /v1/meta
Hostname: localhost
Port: 3000
```

```json
{
    "server": "Foo Server",
    "env_message": "a custom message set via the FOO_SERVER_ENV_MESSAGE environment var"
}
```

### `v1/messages`

#### GET

```http
GET /v1/messages
Hostname: localhost
Port: 3000
```

```json
[
    {
        "id": 1,
        "message": "Added from Init SQL Script"
    }
]
```

#### POST

```http
POST /v1/messages
Hostname: localhost
Port: 3000

{
    "message": "single line message"
}
```

## Environment Variables

Given below are the list of supported environment variables of the `Foo` server

- `FOO_SERVER_PORT`: an environment variable to configure the server startup/listening port; default is `3000`
- `FOO_SERVER_ENV_MESSAGE`: an environment variable to set a custom message that can be returned with the server response
- `POSTGRES_USERNAME`: username of the `Postgre` DB instance
- `POSTGRES_PASSWORD`: password of the `Postgre` DB instance
- `POSTGRES_HOST`: hostname of the `Postgre` DB instance
- `POSTGRES_PORT`: port of the `Postgre` DB instance
- `POSTGRES_DB`: database name

## Installing Dep & Running

### Installing Dependencies

Execute the following `npm` command to install the required dependencies to run the `Foo` server

> To run `npm` commands, it is required to have the NodeJS installed in your local environment

```sh
# execute the following command from the 01--foo-server directory
npm install
```

### Setting up Postgre

The `scripts` directory contains the Postgre SQL script to create the required tables and data entries. Execute the `init.sql` in your Postgre DB instance to create the required data tables and entries to store and retrieve the data.

### Running the Server

The following command will start the server and serves the request on port `3000`

```sh
npm run start
```
