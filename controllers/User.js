// Import model Product
import Karyawan from "../models/Karyawan.js";

// Get semua product
export const getUsers = async (req, res) => {
  try {
    const users = await Karyawan.findAll();
    res.status(200).json(users);
  } catch (err) {
    console.log(err);
  }

  // res.status(200).json({ message: "oke" });
};
