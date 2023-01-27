import { Sequelize } from "sequelize";
import Config from "./index.js";
const { db_absensi, db_dika, db_default } = Config;

// /**
//  *
//   sampel connection
//   new Sequelize(
//   "database", "username", "password", {
//   host: "host",
//   dialect: "mysql",
//  * fajri_database
//  */

// database local komputer fajri
const db = new Sequelize("purchasing", "fajri_database", "Hzs&C,nNqv2c!,v", {
  host: "192.168.100.72",
  dialect: "mysql",
});

// database local laptop robert
// const db = new Sequelize("purchasing", "robertyulisman", "12341jdb21i437t6", {
//   host: "192.168.100.51",
//   dialect: "mysql",
// });

// database ptsib from server sefong
const dbPTSIB = new Sequelize(
  db_default.database,
  db_default.username,
  db_default.password,
  {
    host: db_default.host,
    port: 3307,
    dialect: "mysql",
  }
);

// database absensi from hosting
const dbAbsensi = new Sequelize(
  db_absensi.database,
  db_absensi.username,
  db_absensi.password,
  {
    host: db_absensi.host,
    dialect: "mysql",
  }
);

// database dika from hosting
const dbDika = new Sequelize(
  db_dika.database,
  db_dika.username,
  db_dika.password,
  {
    host: db_dika.host,
    dialect: "mysql",
  }
);

export { dbAbsensi, dbDika, dbPTSIB, db };
