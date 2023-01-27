import { Sequelize } from "sequelize";
import { dbPTSIB } from "../config/database.js";
const { DataTypes } = Sequelize;

const UtCur = dbPTSIB.define(
  "utcur",
  {
    CurrID: {
      type: DataTypes.CHAR(5),
      allowNull: false,
      primaryKey: true,
    },
    CurrDesc: {
      type: DataTypes.CHAR(30),
      allowNull: true,
    },
    CurrSymbol: {
      type: DataTypes.CHAR(10),
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
    freezeTableName: true,
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [{ name: "CurrID" }],
      },
    ],
  }
);

export default UtCur;
