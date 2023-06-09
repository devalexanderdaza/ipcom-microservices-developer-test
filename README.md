
# IPCOM - API Gateway with Microservices for Sr. Fullstack Software Developer position

This is a project created with the purpose of providing evidence for the position of "Sr. Fullstack Software Developer position" on IPCom with Cloud Architecture and Microservices.

## Monorepository

This is a mono repository, it has two folders, one for the api grateway and one for the microservices powered by NestJS workspaces.

## Features

- API Rest with NestJS (API Gateway)
- Swagger documentation
- Microservices with NestJS (Cloud architecture) using TCP
- Message Patterns for connect microservices and API Gateway
- Custom @ipcom/shared library for share code between microservices and API Gateway
- Interfaces and DTOs for share code between microservices and API Gateway
- Upload and validate csv files with users and roles for custom organizations (in root folder has a file example for upload - users.csv and users.xlsx)
- Cors
- Validation
- Guards
- Compression
- API Versioning

## Authors

- [@devalexanderdaza](https://www.github.com/devalexanderdaza)


## API Reference

This project has a Swagger documentation, you can see it in the following link

```http
  http://localhost:5000/documentation
```


## Environment Variables

To run this project, you will need to add the following environment variables to your .env file (see example in .env.example)

`APP_DEBUG`

`API_GATEWAY_HOST`

`API_GATEWAY_PORT`

`API_GATEWAY_URL`

`API_GATEWAY_VERSION`

`API_GATEWAY_NAME`

`API_GATEWAY_DESCRIPTION`

`API_GATEWAY_CONTACT_NAME`

`API_GATEWAY_CONTACT_URL`

`API_GATEWAY_CONTACT_EMAIL`

`API_GATEWAY_LICENSE_NAME`

`API_GATEWAY_LICENSE_URL`

## Installation

Install with yarn

```bash
  yarn install
```

Run first the sales microservice

```bash
  yarn run start:dev:microservice:sales
```

After run the API Gateway

```bash
  yarn run start:dev:api
```

Build API Gateway

```bash
  yarn run build:api
```

Build microservices

```bash
  yarn run build:microservice:sales
```

Build @ipcom/shared library

```bash
  yarn run build:library:shared
```

```bash
  yarn run build:microservice:sales
```

After run in development mode the backend run on 

```bash
  http://localhost:5000
```

and the documentation on

```bash
  http://localhost:5000/documentation
```

## Running Tests

To run tests, run the following command (Tests for API Gateway and microservices finished)

```bash
  yarn run test
```
    
## Acknowledgements

 - [NestJS](https://nestjs.com/)