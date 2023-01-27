import { Sequelize } from "sequelize";
import { dbAbsensi } from "../config/database.js";
const { DataTypes } = Sequelize;

const Karyawan = dbAbsensi.define(
  "karyawan",
  {
    AppID: {
      type: DataTypes.STRING(3),
      allowNull: false,
      defaultValue: "HR",
    },
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
    },
    id_karyawan: {
      type: DataTypes.STRING(20),
      allowNull: true,
    },
    badge: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 20,
    },
    nama_karyawan: {
      type: DataTypes.STRING(30),
      allowNull: true,
    },
    sisa_cuti: {
      type: DataTypes.DOUBLE,
      allowNull: true,
    },
    jabatan: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    id_shift: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    gedung_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    dep_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    date_join: {
      type: DataTypes.DATEONLY,
      allowNull: true,
    },
    date_end_join: {
      type: DataTypes.DATEONLY,
      allowNull: true,
    },
    date_fc_re: {
      type: DataTypes.DATEONLY,
      allowNull: true,
    },
    emp_status: {
      type: DataTypes.STRING(50),
      allowNull: true,
    },
    contrat_status: {
      type: DataTypes.STRING(50),
      allowNull: true,
    },
    marital_status: {
      type: DataTypes.STRING(10),
      allowNull: true,
    },
    image: {
      type: DataTypes.STRING(255),
      allowNull: true,
    },
    pend: {
      type: DataTypes.STRING(255),
      allowNull: true,
    },
    status_karyawan: {
      type: DataTypes.STRING(200),
      allowNull: false,
    },
    gender: {
      type: DataTypes.STRING(2),
      allowNull: false,
    },
    birtday: {
      type: DataTypes.STRING(200),
      allowNull: false,
    },
    resign_date: {
      type: DataTypes.STRING(200),
      allowNull: false,
    },
    cost: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    indrect_one: {
      type: DataTypes.STRING(10),
      allowNull: false,
    },
    thn: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    a_n_a: {
      type: DataTypes.STRING(100),
      allowNull: true,
    },
    tanda: {
      type: DataTypes.STRING(10),
      allowNull: false,
    },
    jenis_kelamin: {
      type: DataTypes.STRING(200),
      allowNull: false,
    },
    religion: {
      type: DataTypes.STRING(200),
      allowNull: false,
    },
    race: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    place: {
      type: DataTypes.STRING(200),
      allowNull: false,
    },
    cek: {
      type: DataTypes.STRING(10),
      allowNull: false,
    },
    cek_data: {
      type: DataTypes.STRING(2),
      allowNull: false,
    },
    cek_magang: {
      type: DataTypes.STRING(1),
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    job: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    opn_kntr: {
      type: DataTypes.STRING(2),
      allowNull: false,
    },
    hp: {
      type: DataTypes.STRING(15),
      allowNull: true,
    },
    bln_tmb_cuti: {
      type: DataTypes.DATEONLY,
      allowNull: false,
    },
    sts_tmb_cuti: {
      type: DataTypes.STRING(2),
      allowNull: false,
    },
  },
  {
    freezeTableName: true,
    timestamps: false,
  }
);

Karyawan.associate = function (models) {
  Karyawan.belongsTo(models.jabatan, { foreignKey: "jabatan" });
};

export default Karyawan;
