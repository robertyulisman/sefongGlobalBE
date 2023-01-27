import { Sequelize } from "sequelize";
import { dbPTSIB } from "../config/database.js";
const { DataTypes } = Sequelize;

const InventoryMaster = dbPTSIB.define(
  "inmst",
  {
    ItemID: {
      type: DataTypes.CHAR(100),
      allowNull: false,
      defaultValue: "NEW",
      primaryKey: true,
    },
    ItemDesc1: {
      type: DataTypes.CHAR(150),
      allowNull: true,
    },
    ItemDesc2: {
      type: DataTypes.CHAR(50),
      allowNull: true,
    },
    GrpItemID: {
      type: DataTypes.CHAR(100),
      allowNull: true,
      defaultValue: "-",
    },
    PartNo: {
      type: DataTypes.CHAR(100),
      allowNull: true,
    },
    InternalPartNo: {
      type: DataTypes.CHAR(100),
      allowNull: true,
    },
    PartCode: {
      type: DataTypes.STRING(100),
      allowNull: true,
      defaultValue: "-",
    },
    Grade: {
      type: DataTypes.CHAR(20),
      allowNull: true,
    },
    ColourCode: {
      type: DataTypes.CHAR(15),
      allowNull: true,
    },
    ColID: {
      type: DataTypes.CHAR(3),
      allowNull: true,
      defaultValue: "-",
    },
    RefNo: {
      type: DataTypes.CHAR(30),
      allowNull: true,
      defaultValue: "-",
    },
    Category: {
      type: DataTypes.CHAR(50),
      allowNull: true,
      defaultValue: "-",
    },
    ItemGrp: {
      type: DataTypes.CHAR(5),
      allowNull: true,
    },
    ItemType: {
      type: DataTypes.CHAR(3),
      allowNull: true,
    },
    ItemSubType: {
      type: DataTypes.CHAR(3),
      allowNull: true,
    },
    PrdID: {
      type: DataTypes.CHAR(5),
      allowNull: true,
    },
    PdnAllowance: {
      type: DataTypes.DOUBLE,
      allowNull: true,
      defaultValue: 0,
    },
    PurAllowance: {
      type: DataTypes.DOUBLE,
      allowNull: false,
      defaultValue: 0,
    },
    ItemUom: {
      type: DataTypes.CHAR(5),
      allowNull: true,
    },
    ConvUOM: {
      type: DataTypes.CHAR(5),
      allowNull: true,
      defaultValue: "-",
    },
    QtyStdPerPack: {
      type: DataTypes.DOUBLE,
      allowNull: true,
      defaultValue: 0,
    },
    ItemStatus: {
      type: DataTypes.CHAR(2),
      allowNull: true,
      defaultValue: "A",
    },
    DefLocID: {
      type: DataTypes.CHAR(5),
      allowNull: true,
      defaultValue: "STO",
    },
    QtyStock: {
      type: DataTypes.DOUBLE,
      allowNull: true,
      defaultValue: 0,
    },
    QtyPrd: {
      type: DataTypes.DOUBLE,
      allowNull: true,
      defaultValue: 0,
    },
    QtyPur: {
      type: DataTypes.DOUBLE,
      allowNull: true,
      defaultValue: 0,
    },
    QtyOrd: {
      type: DataTypes.DOUBLE,
      allowNull: true,
      defaultValue: 0,
    },
    QtyReq: {
      type: DataTypes.DOUBLE,
      allowNull: true,
      defaultValue: 0,
    },
    QtyOrdUnCommitted: {
      type: DataTypes.DOUBLE,
      allowNull: true,
      defaultValue: 0,
    },
    QtyPNLoc: {
      type: DataTypes.DOUBLE,
      allowNull: true,
      defaultValue: 0,
    },
    QtyWIPLoc: {
      type: DataTypes.DOUBLE,
      allowNull: true,
      defaultValue: 0,
    },
    QtyQCLoc: {
      type: DataTypes.DOUBLE,
      allowNull: true,
      defaultValue: 0,
    },
    QtyOpenBalPending: {
      type: DataTypes.DOUBLE,
      allowNull: true,
      defaultValue: 0,
    },
    QtyPending: {
      type: DataTypes.DOUBLE,
      allowNull: true,
      defaultValue: 0,
    },
    QtyPerformaDO: {
      type: DataTypes.DOUBLE,
      allowNull: true,
      defaultValue: 0,
    },
    WOWaitingPOQty: {
      type: DataTypes.DOUBLE,
      allowNull: true,
      defaultValue: 0,
    },
    QtyAvailable: {
      type: DataTypes.DOUBLE,
      allowNull: true,
      defaultValue: 0,
    },
    QtyMinStock: {
      type: DataTypes.DOUBLE,
      allowNull: true,
      defaultValue: 0,
    },
    QtyMaxStock: {
      type: DataTypes.DOUBLE,
      allowNull: true,
      defaultValue: 0,
    },
    QtyMinOrd: {
      type: DataTypes.DOUBLE,
      allowNull: true,
      defaultValue: 0,
    },
    QtyMinPur: {
      type: DataTypes.DOUBLE,
      allowNull: true,
      defaultValue: 0,
    },
    ConversionFactor: {
      type: DataTypes.DOUBLE,
      allowNull: true,
      defaultValue: 1,
    },
    LeadTime: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0,
    },
    LifeTime: {
      type: DataTypes.DOUBLE,
      allowNull: true,
      defaultValue: 0,
    },
    RetainYear: {
      type: DataTypes.DOUBLE,
      allowNull: true,
      defaultValue: 0,
    },
    SalesPrc: {
      type: DataTypes.DOUBLE,
      allowNull: true,
      defaultValue: 0,
    },
    BuyPrc: {
      type: DataTypes.DOUBLE,
      allowNull: true,
      defaultValue: 0,
    },
    StdCost: {
      type: DataTypes.DOUBLE,
      allowNull: true,
      defaultValue: 0,
    },
    CustID: {
      type: DataTypes.CHAR(5),
      allowNull: true,
      defaultValue: "-",
    },
    LastOrdQty: {
      type: DataTypes.DOUBLE,
      allowNull: true,
      defaultValue: 0,
    },
    SOMoq: {
      type: DataTypes.DOUBLE,
      allowNull: true,
      defaultValue: 0,
    },
    SOQty: {
      type: DataTypes.DOUBLE,
      allowNull: true,
      defaultValue: 0,
    },
    PDSQty: {
      type: DataTypes.DOUBLE,
      allowNull: true,
      defaultValue: 0,
    },
    FCQty: {
      type: DataTypes.DOUBLE,
      allowNull: true,
      defaultValue: 0,
    },
    SalesCurID: {
      type: DataTypes.CHAR(5),
      allowNull: true,
      defaultValue: "-",
    },
    SupplID: {
      type: DataTypes.CHAR(5),
      allowNull: true,
      defaultValue: "-",
    },
    BuyCurID: {
      type: DataTypes.CHAR(5),
      allowNull: true,
      defaultValue: "-",
    },
    POMoq1: {
      type: DataTypes.DOUBLE,
      allowNull: true,
      defaultValue: 0,
    },
    POMoq2: {
      type: DataTypes.DOUBLE,
      allowNull: true,
      defaultValue: 0,
    },
    POMoq3: {
      type: DataTypes.DOUBLE,
      allowNull: true,
      defaultValue: 0,
    },
    POMoq4: {
      type: DataTypes.DOUBLE,
      allowNull: true,
      defaultValue: 0,
    },
    POPrice1: {
      type: DataTypes.DOUBLE,
      allowNull: true,
      defaultValue: 0,
    },
    POPrice2: {
      type: DataTypes.DOUBLE,
      allowNull: true,
      defaultValue: 0,
    },
    POPrice3: {
      type: DataTypes.DOUBLE,
      allowNull: true,
      defaultValue: 0,
    },
    POPrice4: {
      type: DataTypes.DOUBLE,
      allowNull: true,
      defaultValue: 0,
    },
    PreparedBy: {
      type: DataTypes.CHAR(10),
      allowNull: true,
      defaultValue: "-",
    },
    PreparedDateTime: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    EntrySalPrcBy: {
      type: DataTypes.CHAR(10),
      allowNull: true,
      defaultValue: "-",
    },
    EntrySalPrcDateTime: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    EntryBuyPrcBy: {
      type: DataTypes.CHAR(10),
      allowNull: true,
      defaultValue: "-",
    },
    EntryBuyPrcDateTime: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    EntryStdCostBy: {
      type: DataTypes.CHAR(10),
      allowNull: true,
      defaultValue: "-",
    },
    EntryStdCostDateTime: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    Spare1Number: {
      type: DataTypes.DOUBLE,
      allowNull: true,
      defaultValue: 0,
    },
    Spare2Number: {
      type: DataTypes.DOUBLE,
      allowNull: true,
      defaultValue: 0,
    },
    Spare3Number: {
      type: DataTypes.DOUBLE,
      allowNull: false,
      defaultValue: 0,
    },
    Spare4Number: {
      type: DataTypes.DOUBLE,
      allowNull: false,
      defaultValue: 0,
    },
    Spare5txt: {
      type: DataTypes.CHAR(20),
      allowNull: false,
      defaultValue: "-",
    },
    Spare7txt: {
      type: DataTypes.CHAR(20),
      allowNull: false,
      defaultValue: "-",
    },
    Spare8txt: {
      type: DataTypes.CHAR(20),
      allowNull: false,
      defaultValue: "-",
    },
    Spare9txt: {
      type: DataTypes.CHAR(20),
      allowNull: false,
      defaultValue: "-",
    },
    MatAllowance: {
      type: DataTypes.DOUBLE,
      allowNull: true,
      defaultValue: 0,
    },
    QtyAllowance: {
      type: DataTypes.DOUBLE,
      allowNull: true,
      defaultValue: 0,
    },
    QtyWOStock: {
      type: DataTypes.DOUBLE,
      allowNull: true,
      defaultValue: 0,
    },
    QtyWOReq: {
      type: DataTypes.DOUBLE,
      allowNull: true,
      defaultValue: 0,
    },
    QtyCLMix: {
      type: DataTypes.DOUBLE,
      allowNull: false,
      defaultValue: 0,
    },
    LastInTrnDate: {
      type: DataTypes.DATEONLY,
      allowNull: true,
    },
    LastOutTrnDate: {
      type: DataTypes.DATEONLY,
      allowNull: true,
    },
    StatusDesc: {
      type: DataTypes.CHAR(30),
      allowNull: true,
      defaultValue: "-",
    },
    StatusEffectedDate: {
      type: DataTypes.DATEONLY,
      allowNull: true,
    },
    Note01: {
      type: DataTypes.CHAR(100),
      allowNull: true,
      defaultValue: "-",
    },
    LockBy: {
      type: DataTypes.CHAR(20),
      allowNull: false,
      defaultValue: "-",
    },
    StockReqInWO: {
      type: DataTypes.CHAR(1),
      allowNull: true,
      defaultValue: "Y",
    },
    AN: {
      type: DataTypes.STRING(12),
      allowNull: true,
    },
    FamilyMould: {
      type: DataTypes.STRING(1),
      allowNull: true,
      defaultValue: "-",
    },
    "MixMin%": {
      type: DataTypes.DOUBLE,
      allowNull: true,
      defaultValue: 0,
    },
    "MixMax%": {
      type: DataTypes.DOUBLE,
      allowNull: true,
      defaultValue: 0,
    },
    RecyclingYN: {
      type: DataTypes.STRING(1),
      allowNull: true,
      defaultValue: "Y",
    },
    TimeStamp: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.Sequelize.fn("current_timestamp"),
    },
    SvrDateTime: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: Sequelize.Sequelize.fn("current_timestamp"),
    },
    RecUser: {
      type: DataTypes.CHAR(10),
      allowNull: true,
      defaultValue: "-",
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
  },
  {
    freezeTableName: true,
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [{ name: "ItemID" }],
      },
      {
        name: "PartNo",
        using: "BTREE",
        fields: [{ name: "PartNo" }],
      },
      {
        name: "InternalPartNo",
        using: "BTREE",
        fields: [{ name: "InternalPartNo" }],
      },
    ],
  }
);

export default InventoryMaster;
