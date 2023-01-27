import passport from "passport";
import jwt from "jsonwebtoken";
import User from "../models/User.js";
import Karyawan from "../models/Karyawan.js";
import Jabatan from "../models/Jabatan.js";
import Departement from "../models/Departement.js";

export const getUsers = async (req, res) => {
  try {
    const users = await User.findAll();
    res.status(200).json(users);
  } catch (err) {
    console.log(err);
  }
};

export const getUsersByIdEmp = async (req, res) => {
  const { _id } = req.params;
  try {
    const user = await Karyawan.findOne({
      where: {
        id_karyawan: _id,
      },
    });
    const jabatan = await Jabatan.findOne({
      where: {
        id_jabatan: user.jabatan,
      },
    });
    const departement = await Departement.findOne({
      where: {
        dep_id: user.dep_id,
      },
    });

    res.status(200).json({ user, jabatan, departement });
  } catch (err) {
    console.log("err", err);
    res.status(500).json(err);
  }
};

export const loginUser = async (req, res) => {
  console.log("req.body", req.body);
  const { username, password } = req.body;

  const user = await User.findOne({ where: { username: username } });

  if (!user) {
    return res.status(404).json({ message: "user not found" });
  }

  const validUser = user.authenticate(password);
  if (!validUser) {
    return res.status(404).json({ message: "Wrong Password" });
  }
  if (user.is_active === 0) {
    return res.status(404).json({ message: "User is Not Active" });
  }

  const payload = {
    id_user: user.id_user,
    username: user.username,
    user: user,
  };

  jwt.sign(
    payload,
    process.env.SECRET_OR_KEY,
    { expiresIn: "30d" },
    (err, token) => {
      return res.status(200).json({
        success: true,
        token: "Bearer " + token,
      });
    }
  );
};
