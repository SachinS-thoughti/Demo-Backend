# My Node.js Application

This is a simple Node.js application that [briefly describe what your application does].

## Prerequisites

Before you begin, ensure you have met the following requirements:

- [Node.js](https://nodejs.org/) installed on your local machine.
- [MySQL](https://www.mysql.com/) database server installed and running.

## Configuration

To configure this application, follow these steps:

1. Create a `.env` file in the project root directory.

2. Inside the `.env` file, add the following environment variables with their respective values:

- `PORT`: The port on which the application will run.

- `APP_URL`: The URL at which the application can be accessed.

- `LOCAL_HOST`: The local host name or IP address.

- `DB_HOST`: The hostname or IP address of your MySQL database server.

- `DB_USER`: The username for accessing the database.

- `DB_PASS`: The password for the database user.

- `DB_NAME`: The name of the database used by the application.

- `DB_SERVER`: The type of database server (e.g., MySQL).

- `SECRET_KEY`: The secret key used for security measures.

- `EXPIRES_IN`: The duration for which certain tokens are valid (e.g., JWT tokens).

3. Make sure to set the values of these environment variables according to your specific configuration requirements. Save the `.env` file in the project root directory. This file will be automatically loaded by the application to configure its settings.

- Remember to keep your sensitive information, such as passwords and secret keys, secure and do not share them publicly.

## Installation

1. Open your terminal and navigate to the project directory.
2. Run the following command to install project dependencies.

   ```bash

   npm install or npm i

   ```

# Setting Up Configuration for Your Node.js Application

To configure your Node.js application using Sequelize, you can follow these steps to create a `config.json` file:

## Step 1: Create a `config.json` File

Use the following command to create a `config.json` file in your application. This command will also create a `config` folder with the `config.json` file.

```bash
npx sequelize-cli init
```

## Step 2: Make sure to update your database configuration in `config.json` file

### To run database migration, Go to directory & run following command

(Please note that, this command will delete all tables in database & create new tables with dummy data, according to schemas defined in migration. It will also create a dummy data for testing.)

```bash
npm run migrate:dus

```

#### Once database dump imported, it will create below test admin credentials

**Admin Credentials:**

- Username: **test@school.com**
- Password: **Test@123**
- Login Path: **/login**

## Start Application

1. Use the below command to start the application.

```bash
  npm run dev
```

- The application will be available at http://localhost:PORT. (`PORT` given in `.env` file)

- Access the Application: Open a web browser and navigate to the URL provided (e.g., http://localhost:PORT) to access the application.

- That's it! You've successfully set up and started the application.
