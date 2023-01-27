import { Sequelize } from "sequelize";
import { dbAbsensi } from "../config/database.js";
const { DataTypes } = Sequelize;

const Departement = dbAbsensi.define(
  "departement",
  {
    dep_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
    },
    nama_dep: {
      type: DataTypes.STRING(150),
      allowNull: false,
    },
  },
  {
    freezeTableName: true,
    timestamps: false,
  }
);

export default Departement;
