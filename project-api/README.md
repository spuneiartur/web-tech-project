# Web app for taking notes during courses/labs - Backend

# Getting started
To run the project locally, you'll need to follow these steps:

## Initiate a PostgreSQL Database:

Make sure you have PostgreSQL installed on your machine.
Create a new database for your project.
Note down the connection details, including the database name, username, password, host, and port.

## Complete Environmental Variables:

Create a .env file in the root of your project to store environment variables.
Add the following variables to your .env file, replacing the placeholder values with your actual database connection details:
```bash
DB_NAME=your_database_name
DB_USER=your_database_user
DB_PASSWORD=your_database_password
DB_HOST=your_database_host
DB_PORT=your_database_port
```

## Install dependencies

```bash
npm ci
```

## Copy the example environment variables

```bash
cp .env.example .env
```

## **(Optional)** Add seeds to your Postgres database
```bash
npm run seed
```

## Start the local server

```bash
npm run dev
```

# API Documentation

TODO
