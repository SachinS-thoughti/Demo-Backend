"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("Tokens", [
      {
        token:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InRlc3RAc2Nob29sLmNvbSIsInJvbGUiOiJHbG9iYWwgQWRtaW4iLCJpYXQiOjE2OTkzNTU3MzIsImV4cCI6MTY5OTQ0MjEzMn0.hvRhj3w0zG4zHX-3Fw0vsqI3irLLZXa-eIilqojf1J8",
        expired: "0",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Tokens", null, {});
  },
};
