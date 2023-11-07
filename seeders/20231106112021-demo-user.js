"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("Users", [
      {
        first_Name: "John",
        last_Name: "Doe",
        email: "test@school.com",
        phone: "5263545625",
        password:
          "$2a$12$wOWUpBLQxznvnWe0qN1qBOcxdlR0Ox1wtZgYtPYCqX9zWSIrPe5CG",
        role: "1",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Users", null, {});
  },
};
