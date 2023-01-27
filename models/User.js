import { Sequelize } from "sequelize";
import useBcrypt from "sequelize-bcrypt";
import { dbAbsensi } from "../config/database.js";
const { DataTypes } = Sequelize;

const User = dbAbsensi.define(
  "tbl_user",
  {
    id_user: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
    },
    username: {
      type: DataTypes.STRING(20),
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    full_name: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    image: {
      type: DataTypes.STRING(500),
      allowNull: false,
    },
    id_level: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    is_active: {
      type: DataTypes.DOUBLE,
      allowNull: false,
    },
    emp_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
  },
  {
    freezeTableName: true,
    timestamps: false,
  }
);

const options = {
  field: "password", // secret field to hash, default: 'password'
  rounds: 12, // used to generate bcrypt salt, default: 12
  compare: "authenticate", // method used to compare secrets, default: 'authenticate'
};
useBcrypt(User, options);

export default User;
