# Bar Server

Another simple backend server built with Express. Please find the usages of the `Bar` server and the supported configurations in the following sections.

## APIs & Resources

### `/v1/meta`

A `GET` resource which sends back a JSON response with the server name and a custom message that is set via environment variable (see section [environment-variables](#environment-variables))

```http
GET /v1/meta
Hostname: localhost
Port: 4000
```

```json
{
    "server": "Bar Server",
    "env_message": "a custom message set via the BAR_SERVER_ENV_MESSAGE environment var"
}
```

### `/v1/info`

A `GET` resource which responds back with the content of the `info.txt` that is placed in the server.

```http
GET /v1/info
Hostname: localhost
Port: 4000
```

```json
# success response

{
    "info_content": "content of the info.txt"
}
```

```json
# failure response

{
    "code": 19,
    "message": "No info.txt found in the server",
    "error": "error message collected when there is an error reading the info.txt"
}
```

## Environment Variables

Given below are the list of supported environment variables of the `Bar` server

- `BAR_SERVER_PORT`: an environment variable to configure the server startup/listening port; default is `4000`
- `BAR_SERVER_ENV_MESSAGE`: an environment variable to set a custom message that can be returned with the server response

## Installing Dep & Running

### Installing Dependencies

Execute the following `npm` command to install the required dependencies to run the `Bar` server

> To run `npm` commands, it is required to have the NodeJS installed in your local environment

```sh
# execute the following command from the 03--bar-server directory
npm install
```

### Running the Server

The following command will start the server and serves the request on port `4000`

```sh
npm run start
```
