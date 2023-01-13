import { Sequelize } from "sequelize";
import { dbAbsensi } from "../config/database.js";
const { DataTypes } = Sequelize;

const Whatsapp = dbAbsensi.define(
  "wathzap",
  {
    no_hp: {
      type: DataTypes.STRING(50),
      allowNull: true,
    },
    pesan: {
      type: DataTypes.STRING(20),
      allowNull: true,
    },
    status: {
      type: DataTypes.STRING(2),
      allowNull: false,
    },
  },
  {
    freezeTableName: true,
    timestamps: false,
  }
);

export default Whatsapp;
