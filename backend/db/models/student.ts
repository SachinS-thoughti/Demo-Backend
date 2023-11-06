import { DataTypes} from 'sequelize';
const sequelize = require("../dbConn");

const Student = sequelize.define(
  "Student",
  {
    studentId: {
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
    firstName: {
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
    middleName: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    lastName: {
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
    fatherName: {
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
    fatherOccupation: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    motherName: {
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
    motherOccupation: {
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
    aadharCard: {
      type: DataTypes.STRING,
      allowNull: true,
    },

    birthCertificate: {
      type: DataTypes.STRING,
      allowNull: true,
    },

    transferCertificate: {
      type: DataTypes.STRING,
      allowNull: true,
    },

    marksheet: {
      type: DataTypes.STRING,
      allowNull: true,
    },

    fatherAadharCard: {
      type: DataTypes.STRING,
      allowNull: true,
    },

    motherAadharCard: {
      type: DataTypes.STRING,
      allowNull: true,
    },

    phoneNumber: {
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

    alternateNumber: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    currentAddress: {
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
    permanentAddress: {
      type: DataTypes.STRING,
      allowNull: true,
    },

    email: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    previousSchoolName: {
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
    previousSchoolAddress: {
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
    userName: {
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
    // Other model options go here
    tableName: "Students",
  }
);

module.exports = Student;
