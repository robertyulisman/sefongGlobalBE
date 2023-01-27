import { config } from "dotenv";
config();

export default {
  db_absensi: {
    username: process.env.DB_ABSENSI_USER_NAME,
    password: process.env.DB_ABSENSI_PASSWORD,
    database: process.env.DB_ABSENSI_DATABASE,
    host: process.env.DB_ABSENSI_HOST,
  },
  db_dika: {
    username: process.env.HOSTING_USER_NAME,
    password: process.env.HOSTING_PASSWORD,
    database: process.env.HOSTING_DATABASE,
    host: process.env.HOSTING_HOST,
  },
  db_default: {
    username: process.env.USER_NAME,
    password: process.env.PASSWORD,
    database: process.env.DATABASE,
    host: process.env.HOST,
  },
};
