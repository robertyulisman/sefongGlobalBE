import { Sequelize } from "sequelize";
import { dbAbsensi } from "../config/database.js";
const { DataTypes } = Sequelize;

const Jabatan = dbAbsensi.define(
  "jabatan",
  {
    id_jabatan: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
    },
    nama_jabatan: {
      type: DataTypes.STRING(150),
      allowNull: false,
    },
  },
  {
    freezeTableName: true,
    timestamps: false,
  }
);

Jabatan.associate = function (models) {
  Jabatan.hasMany(models.karyawan, {
    sourceKey: "id_jabatan",
    foreignKey: "jabatan",
  });
};
export default Jabatan;
