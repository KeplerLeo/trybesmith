# Trybesmith

## About

TypeScript, Node.js and Express.js project developed at the end of Section 8 Back-end Development Module of Trybe Web Development course.

We had to create a RESTful API using MSC (Model-Service-Controller) architecture using TypeScript and a MySQL database. It's an API for a medieval items store.

## Developed Skills

* Create an Express.js application
* Create a RESTful API using MSC (Model-Service-Controller) architecture
* Create an application using TypeScript
* Use TypeScript features such as Type Aliases, Generics, Interfaces, and more.

## Tools

* TypeScript
* Node.js
* Express.js
* Express Async Errors
* DotEnv
* Docker
* MySQL

## Execution

To run this application you need to have **Git**, **Docker** and **Docker Compose** installed on your machine. Docker Compose needs to be at **1.29** version or superior.

### 1 - Clone the repository

```sh
git clone git@github.com:KeplerLeo/trybesmith.git
```

### 2 - Run the containers by running the command below in the application folder

```sh
docker-compose up -d --buid
```

### 3 - Run the SQL Script to create the database

Connect to the MySQL server running on the 3306 port using a MySQL client of your choice. With the following credentials:

* host: `db`
* user: `root`
* password: `password`

Then, in the client, run the script in the `Trybesmith.sql` file.

### 4 - Run this command to attach the container to your terminal

```sh
docker exec -it trybesmith bash
```

### 5 - On the attached container, install the dependencies and run the application

Install the dependencies:

```sh
npm install
```

Run the application:

```sh
npm start
```
