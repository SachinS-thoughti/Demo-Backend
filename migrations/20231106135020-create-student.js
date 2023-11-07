"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Students", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      student_Id: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
          notNull: {
            msg: "studentId cannot be null",
          },
          notEmpty: {
            msg: "studentId cannot be empty",
          },
        },
      },
      first_Name: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
          notNull: {
            msg: "firstName cannot be null",
          },
          notEmpty: {
            msg: "firstName cannot be empty",
          },
        },
      },
      middle_Name: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      last_Name: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
          notNull: {
            msg: "lastName cannot be null",
          },
          notEmpty: {
            msg: "lastName cannot be empty",
          },
        },
      },
      father_Name: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
          notNull: {
            msg: "fatherName cannot be null",
          },
          notEmpty: {
            msg: "fatherName cannot be empty",
          },
        },
      },
      father_Occupation: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      mother_Name: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
          notNull: {
            msg: "motherName cannot be null",
          },
          notEmpty: {
            msg: "motherName cannot be empty",
          },
        },
      },
      mother_Occupation: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      class: {
        type: Sequelize.ENUM(
          "Class 1",
          "Class 2",
          "Class 3",
          "Class 4",
          "Class 5",
          "Class 6",
          "Class 7",
          "Class 8",
          "Class 9",
          "Class 10",
          "Class 11",
          "Class 12"
        ),
        allowNull: false,
        validate: {
          notNull: {
            msg: "class cannot be null",
          },
          notEmpty: {
            msg: "class cannot be empty",
          },
        },
      },
      aadhar_Card: {
        type: Sequelize.STRING,
        allowNull: true,
      },

      birth_Certificate: {
        type: Sequelize.STRING,
        allowNull: true,
      },

      transfer_Certificate: {
        type: Sequelize.STRING,
        allowNull: true,
      },

      marksheet: {
        type: Sequelize.STRING,
        allowNull: true,
      },

      father_AadharCard: {
        type: Sequelize.STRING,
        allowNull: true,
      },

      mother_AadharCard: {
        type: Sequelize.STRING,
        allowNull: true,
      },

      phone_Number: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
          notNull: {
            msg: "phoneNumber cannot be null",
          },
          notEmpty: {
            msg: "phoneNumber cannot be empty",
          },
        },
      },

      alternate_Number: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      current_Address: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
          notNull: {
            msg: "currentAddress cannot be null",
          },
          notEmpty: {
            msg: "currentAddress cannot be empty",
          },
        },
      },
      permanent_Address: {
        type: Sequelize.STRING,
        allowNull: true,
      },

      email: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      previous_School_Name: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
          notNull: {
            msg: "previousSchoolName cannot be null",
          },
          notEmpty: {
            msg: "previousSchoolName cannot be empty",
          },
        },
      },
      previous_School_Address: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
          notNull: {
            msg: "previousSchoolAddress cannot be null",
          },
          notEmpty: {
            msg: "previousSchoolAddress cannot be empty",
          },
        },
      },
      user_Name: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
          notNull: {
            msg: "Please enter username",
          },
          notEmpty: {
            msg: "userName cannot be empty",
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
        },
        notEmpty: {
          msg: "password cannot be empty",
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
    await queryInterface.dropTable("Students");
  },
};
