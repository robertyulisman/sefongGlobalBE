import Jabatan from "../models/Jabatan.js";
import Departement from "../models/Departement.js";
import Uom from "../models/Uom.js";
import UtCur from "../models/Utcur.js";

// Get semua jabatan
export const getCurrency = async (req, res) => {
  try {
    const currency = await UtCur.findAll();
    res.status(200).json(currency);
  } catch (err) {
    console.log(err);
  }
};
// Get semua jabatan
export const getJabatan = async (req, res) => {
  try {
    const jabatans = await Jabatan.findAll();
    res.status(200).json(jabatans);
  } catch (err) {
    console.log(err);
  }
};
// get semua Uom
export const getUom = async (req, res) => {
  try {
    const uoms = await Uom.findAll();
    res.status(200).json(uoms);
  } catch (err) {
    console.log(err);
  }
};

// get semua departement
export const getDepartement = async (req, res) => {
  try {
    const departements = await Departement.findAll();
    res.status(200).json(departements);
  } catch (err) {
    console.log(err);
  }
};
