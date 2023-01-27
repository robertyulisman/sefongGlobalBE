import { Sequelize } from "sequelize";
import { db } from "../config/database.js";
const { DataTypes } = Sequelize;

const PrLin = db.define(
  "prlin",
  {
    AppID: {
      type: DataTypes.CHAR(4),
      allowNull: true,
    },
    SysID: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
    },
    OrigTmpSysID: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    PRNo: {
      type: DataTypes.CHAR(7),
      allowNull: true,
      defaultValue: "-",
    },
    DepID: {
      type: DataTypes.CHAR(5),
      allowNull: true,
      defaultValue: "-",
    },
    PONo: {
      type: DataTypes.CHAR(15),
      allowNull: true,
      defaultValue: "-",
    },
    SupID: {
      type: DataTypes.CHAR(5),
      allowNull: true,
      defaultValue: "-",
    },
    PRDate: {
      type: DataTypes.DATEONLY,
      allowNull: true,
    },
    ReqDate: {
      type: DataTypes.DATEONLY,
      allowNull: true,
    },
    RevToReqDate: {
      type: DataTypes.DATEONLY,
      allowNull: true,
    },
    EstDateArrival: {
      type: DataTypes.DATEONLY,
      allowNull: true,
    },
    LinType: {
      type: DataTypes.CHAR(1),
      allowNull: false,
      defaultValue: "-",
    },
    OrigSysID: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    CustPONo: {
      type: DataTypes.CHAR(30),
      allowNull: true,
      defaultValue: "-",
    },
    CustPOItemID: {
      type: DataTypes.CHAR(50),
      allowNull: true,
      defaultValue: "-",
    },
    CustPOQty: {
      type: DataTypes.DOUBLE,
      allowNull: true,
      defaultValue: 0,
    },
    PRItemID: {
      type: DataTypes.CHAR(100),
      allowNull: true,
      defaultValue: "-",
    },
    PRDesc1: {
      type: DataTypes.CHAR(150),
      allowNull: true,
      defaultValue: "-",
    },
    PRDesc2: {
      type: DataTypes.CHAR(80),
      allowNull: true,
      defaultValue: "-",
    },
    UOM: {
      type: DataTypes.CHAR(5),
      allowNull: true,
      defaultValue: "-",
    },
    OrdQty: {
      type: DataTypes.DOUBLE,
      allowNull: true,
      defaultValue: 0,
    },
    AdjOrdQty: {
      type: DataTypes.DOUBLE,
      allowNull: false,
      defaultValue: 0,
    },
    DelvQty: {
      type: DataTypes.DOUBLE,
      allowNull: true,
      defaultValue: 0,
    },
    OrdQtyRem: {
      type: DataTypes.DOUBLE,
      allowNull: true,
      defaultValue: 0,
    },
    CurID: {
      type: DataTypes.STRING(5),
      allowNull: true,
      defaultValue: "-",
    },
    UnitPrice: {
      type: DataTypes.DOUBLE,
      allowNull: true,
      defaultValue: 0,
    },
    TotPrice: {
      type: DataTypes.DOUBLE,
      allowNull: true,
      defaultValue: 0,
    },
    Remarks: {
      type: DataTypes.CHAR(50),
      allowNull: true,
      defaultValue: "-",
    },
    LotNo: {
      type: DataTypes.STRING(255),
      allowNull: true,
      defaultValue: "-",
    },
    SubmittedBy: {
      type: DataTypes.CHAR(10),
      allowNull: true,
    },
    SubmittedDate: {
      type: DataTypes.DATEONLY,
      allowNull: true,
    },
    ApprovedBy: {
      type: DataTypes.CHAR(10),
      allowNull: true,
    },
    DocNo: {
      type: DataTypes.CHAR(10),
      allowNull: true,
      defaultValue: "-",
    },
    DocDate: {
      type: DataTypes.DATEONLY,
      allowNull: true,
    },
    SupDONo: {
      type: DataTypes.CHAR(30),
      allowNull: true,
      defaultValue: "-",
    },
    InspectedBy: {
      type: DataTypes.STRING(10),
      allowNull: true,
      defaultValue: "-",
    },
    InspectedDate: {
      type: DataTypes.DATEONLY,
      allowNull: true,
    },
    CheckedBy: {
      type: DataTypes.STRING(10),
      allowNull: true,
      defaultValue: "-",
    },
    CheckedDate: {
      type: DataTypes.DATEONLY,
      allowNull: true,
    },
    ReceivedBy: {
      type: DataTypes.STRING(10),
      allowNull: true,
      defaultValue: "-",
    },
    ReceivedDate: {
      type: DataTypes.DATEONLY,
      allowNull: true,
    },
    LineSts: {
      type: DataTypes.CHAR(1),
      allowNull: false,
      defaultValue: "N",
    },
    ProSelect: {
      type: DataTypes.CHAR(1),
      allowNull: true,
      defaultValue: "-",
    },
    Status: {
      type: DataTypes.CHAR(50),
      allowNull: true,
      defaultValue: "-",
    },
    PurchaseType: {
      type: DataTypes.CHAR(10),
      allowNull: true,
      defaultValue: "PO",
    },
    AssetX: {
      type: DataTypes.CHAR(1),
      allowNull: true,
      defaultValue: "N",
    },
    AssetNo: {
      type: DataTypes.CHAR(15),
      allowNull: true,
      defaultValue: "-",
    },
    MCNo: {
      type: DataTypes.CHAR(3),
      allowNull: true,
      defaultValue: "-",
    },
    AccNo: {
      type: DataTypes.CHAR(15),
      allowNull: true,
      defaultValue: "-",
    },
    LineType: {
      type: DataTypes.CHAR(2),
      allowNull: true,
      defaultValue: "-",
    },
    Spare1txt: {
      type: DataTypes.CHAR(50),
      allowNull: true,
      defaultValue: "-",
    },
    Spare1qty: {
      type: DataTypes.DOUBLE,
      allowNull: true,
      defaultValue: 0,
    },
    RecUser: {
      type: DataTypes.CHAR(10),
      allowNull: true,
    },
    RecDate: {
      type: DataTypes.DATEONLY,
      allowNull: true,
      defaultValue: Sequelize.Sequelize.fn("current_timestamp"),
    },
    RecTime: {
      type: DataTypes.TIME,
      allowNull: true,
      defaultValue: Sequelize.Sequelize.fn("current_timestamp"),
    },
    TimeStamp: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: Sequelize.Sequelize.fn("current_timestamp"),
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
        fields: [{ name: "SysID" }],
      },
    ],
  }
);

export default PrLin;
