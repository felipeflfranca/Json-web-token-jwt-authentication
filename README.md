# Json web token (jwt) authentication and blacklist for invalid tokens + Example app (Android, iOS and Web)

## About

This code is a dockerized example of a login API service with Json web token (JWT) and a simple app for Android, iOS and web with React Native and React Native Web.

The API service allows logging in, retrieving logged user data and logging out.
- When logging out the token is included in a table (blacklist) 
- There is a cron configured on the ``server > .env > CLEAR_BLACK_LIST`` that erases the already peeked tokens

Observation: 
Application under construction (No login form)

## Setting up the development environment
Install Xcode and Android studio and follow the [react native instructions](https://reactnative.dev/docs/environment-setup)

## Development

- REST API backend is powered by Express.js, Node.js with Typescript and PostgreSQL database
- The app is developed in React Native and React Native Web

## Prerequisites

- Docker is required to run the application (Note: My docker version - 4.5.1)

## Running the application

- To start go to the project root directory and run the following command in your terminal
```
docker-compose up -d
```
<img width="932" alt="200557229-70738544-e7cf-4477-953d-ee49c144bddb" src="https://user-images.githubusercontent.com/34171021/200647376-8428e4f0-8180-4ec5-b4db-d233e97cc706.png">

- After completing open the browser and access:
```
localhost:3000
```
## Accessing the logs
<img width="930" alt="Captura de Tela 2022-11-08 às 13 38 56" src="https://user-images.githubusercontent.com/34171021/200647027-8f268532-6f93-42bb-9dcc-2c3e3aa57a48.png">

<img width="929" alt="Captura de Tela 2022-11-08 às 13 40 03" src="https://user-images.githubusercontent.com/34171021/200647094-e1d75d7c-5814-4c7c-b44c-99089e52aa17.png">

## Using the API

### Login

Login - HTTP /POST

- cURL
```
curl --location --request POST 'localhost:3001/api/auth/login' \
--header 'Content-Type: application/json' \
--data-raw '{
    "email": "admin.admin@gmail.com",
    "password": "123456"
}'
```

Get user data - HTTP /GET

- cURL
```
curl --location --request GET 'localhost:3001/api/user' \
--header 'authorization: ${TOKEN}'
```

Get all users - HTTP /GET

- cURL
```
curl --location --request GET 'localhost:3001/api/user/all' \
--header 'authorization: ${TOKEN}'
```

Logout - HTTP /GET

- cURL
```
curl --location --request GET 'localhost:3001/api/auth/logout' \
--header 'authorization: ${TOKEN}'
```
