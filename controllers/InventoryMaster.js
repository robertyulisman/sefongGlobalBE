import InventoryMaster from "../models/InventoryMaster.js";

export const getInventory = async (req, res) => {
  try {
    const inv = await InventoryMaster.findAll();
    res.status(200).json(inv);
  } catch (err) {
    console.log(err);
  }
};
