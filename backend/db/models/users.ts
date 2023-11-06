import { DataTypes} from 'sequelize';
const sequelize = require("../dbConn");

const User = sequelize.define(
  "User",
  {
    firstName: {
      type: DataTypes.STRING,
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
    lastName: {
      type: DataTypes.STRING,
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
      type: DataTypes.STRING,
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
      type: DataTypes.STRING,
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
      type: DataTypes.STRING,
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
      type: DataTypes.ENUM(
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
  },
  {
    // Other model options go here
    tableName: "Users",
  }
);

module.exports = User;
