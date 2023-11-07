"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Users", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      first_Name: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
          notNull: {
            msg: "Please enter firstName",
          },
          notEmpty: {
            msg: "Please enter firstName",
          },
        },
      },
      last_Name: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
          notNull: {
            msg: "Please enter lastName",
          },
          notEmpty: {
            msg: "Please enter lastName",
          },
        },
      },
      email: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
          notNull: {
            msg: "Please enter email address",
          },
          notEmpty: {
            msg: "Please enter email address",
          },
          isEmail: {
            msg: "Please enter valid email address",
          },
        },
      },
      phone: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
          notNull: {
            msg: "Please enter phone",
          },
          notEmpty: {
            msg: "Please enter phone",
          },
        },
      },
      password: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
          notNull: {
            msg: "Please enter password",
          },
          notEmpty: {
            msg: "Please enter password",
          },
        },
      },
      role: {
        type: Sequelize.ENUM(
          "Global Admin",
          "Super Admin",
          "Admin",
          "Principal",
          "Teacher",
          "Student"
        ),
        allowNull: false,
        validate: {
          notNull: {
            msg: "Please enter role",
          },
          notEmpty: {
            msg: "Please enter role",
          },
        },
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("Users");
  },
};
