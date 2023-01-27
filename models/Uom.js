import { Sequelize } from "sequelize";
import { dbPTSIB } from "../config/database.js";
const { DataTypes } = Sequelize;

const Uom = dbPTSIB.define(
  "inuom",
  {
    InUomID: {
      type: DataTypes.CHAR(5),
      allowNull: false,
      primaryKey: true,
    },
    InUomDesc: {
      type: DataTypes.CHAR(40),
      allowNull: true,
    },
    RecUser: {
      type: DataTypes.CHAR(10),
      allowNull: true,
    },
    RecDate: {
      type: DataTypes.DATEONLY,
      allowNull: true,
    },
    RecTime: {
      type: DataTypes.TIME,
      allowNull: true,
    },
  },
  {
    timestamps: false,
    freezeTableName: true,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [{ name: "InUomID" }],
      },
    ],
  }
);

export default Uom;
