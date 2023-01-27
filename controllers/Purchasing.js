import moment from "moment/moment.js";
import PrLin from "../models/PrLin.js";

export const getPurchaseRequest = async (req, res) => {
  try {
    const prlin = await PrLin.findAll();
    res.status(200).json(prlin);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
};

export const createPurchaseRequest = async (req, res) => {
  const {
    AppID, //PR
    PRNo, //1985
    DepID, //PPC
    SupID, //-
    PRDate, //2016-04-29
    ReqDate, //2016-04-29
    EstDateArrival, //null
    LinType, //N  / -
    OrigSysID, //null
    CustPONo, //-
    CustPOItemID, //-
    CustPOQty, //null / 0
    PRItemID, //PBHDPE4"X5"X0.02mm
    PRDesc1, //PE BAG
    PRDesc2, //5"X8"
    UOM, //PC
    OrdQty, //500
    AdjOrdQty, //0
    DelvQty, //0
    OrdQtyRem, //500
    CurID, //RP
    UnitPrice, //0
    TotPrice, //0
    Remarks, //WAITING APPROVE /proses approval /PROSES PO /RETURN 11-08-2017 /PROSES SIGN
    LotNo, //-
    SubmittedBy, //MELPA
    SubmittedDate, //2017-05-15
    ApprovedBy, //MEICIN
    DocNo, //-
    DocDate, //null
    SupDONo, //-
    InspectedBy, //-
    InspectedDate, //null
    CheckedBy, //-
    CheckedDate, //null
    ReceivedBy, //-
    ReceivedDate, //null
    LineSts, //P (posted)  /N (new)
    ProSelect, //P
    Status, //APPROVED  /RETURNED /PROCESS APPROVAL /PO INTERNAL  /CANCELLED
    PurchaseType, //PO  /CASH /FOC
    AssetX, //-
    AssetNo, //-
    MCNo, //-
    AccNo, //-
    LineType, //- <------- SUDAH TIDAK DIPAKE
    Spare1txt, //-
    Spare1qty, //0
    RecUser, //YOGITO
    RecDate,
    RecTime,
  } = req.body;

  const unique = new Date().getTime().toString();
  const sliced = unique.slice(+unique.length - 6, +unique.length);
  const year = moment(new Date()).format("YYYY");
  const prNo = `${sliced}-${year}`;

  const request = await PrLin.create({
    AppID: "PR", //PR
    PRNo: prNo, //1985
    DepID: DepID, //PPC
    PRDate: PRDate, //2016-04-29
    ReqDate: ReqDate, //2016-04-29
    LinType: LinType, //N  / -
    PRItemID: PRItemID, //PBHDPE4"X5"X0.02mm
    PRDesc1: PRDesc1, //PE BAG
    PRDesc2: PRDesc2, //5"X8"
    UOM: UOM, //PC
    OrdQty: OrdQty, //500
    CurID: CurID, //RP
    LineSts: LineSts, //P (posted)  /N (new)
    Status: "PENDING", //APPROVED  /RETURNED /PROCESS APPROVAL /PO INTERNAL  /CANCELLED
    RecUser: RecUser, //YOGITO
    RecDate: moment(new Date()).format("YYYY-MM-DD"),
    RecTime: moment(new Date()).format("hh-mm-ss"),
    TimeStamp: new Date(),
  });

  res.status(200).json(request);
  try {
  } catch (err) {
    res.status(500).json(err);
  }
};
