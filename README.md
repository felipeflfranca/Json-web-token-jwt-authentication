# Json web token (jwt) authentication with node.js and blacklist for invalid tokens + Example app (Android, iOS and Web)

## About

This code is a dockerized example of a login API service with Json web token (JWT) and a simple app for Android, iOS and web with React Native and React Native Web.

The API service allows logging in, retrieving logged user data and logging out.
- When logging out the token is included in a table (blacklist) 
- There is a cron configured on the ``server > .env > CLEAR_BLACK_LIST`` that erases the already peeked tokens

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

<img width="932" alt="Captura de Tela 2022-11-08 às 00 58 44" src="https://user-images.githubusercontent.com/34171021/200557229-70738544-e7cf-4477-953d-ee49c144bddb.png">

- After completing open the browser and access:
```
localhost:3000
```
## Accessing the logs
![Animação](https://user-images.githubusercontent.com/34171021/156743956-a99061e5-5f63-4e47-96e4-9cb0ee0b45f5.gif)


## Using the API

### Clinics

Insert a new clinic - HTTP /POST

- cURL
```
curl --location --request POST 'localhost:3001/api/clinics' \
--header 'Content-Type: application/json' \
--data-raw '{
    "name": "Clinica vida",
    "cnpj": "46563575000113",
    "address": {
      "place": "Avenida Dois de Abril",
      "number": "208",
      "district": "Urupa",
      "city": "Ji-Parana",
      "postalCode": "76900213",
      "state": "Roraima",
      "country": "Brasil",
      "lat": -10.867678,
      "lng": -61.970721
    }
  }'
```

Get all clinic - HTTP /GET

- cURL
```
curl --location --request GET 'localhost:3001/api/clinics'
```
