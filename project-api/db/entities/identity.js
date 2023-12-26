import { hash, genSaltSync, compare } from "bcrypt";
import Sequelize from "sequelize";
import dbConnection from "../db.js";

const Identity = dbConnection.define(
  "identities",
  {
    _id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    firstName: {
      type: Sequelize.STRING,
      field: "first_name",
      allowNull: false,
    },
    lastName: {
      type: Sequelize.STRING,
      field: "last_name",
      allowNull: false,
    },
    email: {
      type: Sequelize.STRING,
      allowNull: false,
      unique: true,
    },
    password: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    role: {
      type: Sequelize.ENUM("admin", "user"),
      defaultValue: "user",
    },
  },
  {
    freezeTableName: true,
    hooks: {
      beforeCreate: async (identity) => {
        if (identity.password) {
          identity.password = await hash(identity.password, genSaltSync(8));
        }
      },
      beforeUpdate: async (identity) => {
        if (identity.changed("password")) {
          identity.password = await hash(identity.password, genSaltSync(8));
        }
      },
    },
  }
);

Identity.prototype.validPassword = async function (password) {
  return compare(password, this.password);
};

export default Identity;
