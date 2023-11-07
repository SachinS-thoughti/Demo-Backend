"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Student extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Student.init(
    {
      student_Id: {
        type: DataTypes.STRING,
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
        type: DataTypes.STRING,
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
        type: DataTypes.STRING,
        allowNull: true,
      },
      last_Name: {
        type: DataTypes.STRING,
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
        type: DataTypes.STRING,
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
        type: DataTypes.STRING,
        allowNull: true,
      },
      mother_Name: {
        type: DataTypes.STRING,
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
        type: DataTypes.STRING,
        allowNull: true,
      },
      class: {
        type: DataTypes.ENUM(
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
        type: DataTypes.STRING,
        allowNull: true,
      },

      birth_Certificate: {
        type: DataTypes.STRING,
        allowNull: true,
      },

      transfer_Certificate: {
        type: DataTypes.STRING,
        allowNull: true,
      },

      marksheet: {
        type: DataTypes.STRING,
        allowNull: true,
      },

      father_AadharCard: {
        type: DataTypes.STRING,
        allowNull: true,
      },

      mother_AadharCard: {
        type: DataTypes.STRING,
        allowNull: true,
      },

      phone_Number: {
        type: DataTypes.STRING,
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
        type: DataTypes.STRING,
        allowNull: true,
      },
      current_Address: {
        type: DataTypes.STRING,
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
        type: DataTypes.STRING,
        allowNull: true,
      },

      email: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      previous_School_Name: {
        type: DataTypes.STRING,
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
        type: DataTypes.STRING,
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
        type: DataTypes.STRING,
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
        type: DataTypes.STRING,
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
    },
    {
      sequelize,
      modelName: "Student",
      tableName: "Students",
    }
  );
  return Student;
};
