// import sequelize
import { Sequelize } from "sequelize";

// localhost
// create connection
const dbAbsensi = new Sequelize(
  // "sequelize_db", "root", "", {
  // host: "localhost",
  // dialect: "mysql",
  "u654248235_absensi",
  "u654248235_absensi",
  "*5zV2ZZoGH",
  {
    host: "109.106.254.51",
    dialect: "mysql",
  }
);

// hosting
const dbDika = new Sequelize(
  "u654248235_data",
  "u654248235_data",
  ">/<Asdcexwzq123",
  {
    host: "109.106.254.51",
    dialect: "mysql",
  }
);

// hosting absensi
const dbHosting = new Sequelize(
  "u654248235_absensi",
  "u654248235_absensi",
  "*5zV2ZZoGH",
  {
    host: "109.106.254.51",
    dialect: "mysql",
  }
);
// export connection
export { dbAbsensi, dbDika, dbHosting };

// auto generate sequelize model
// sequelize-auto -h <host> -d <database> -u <user> -x [password] -p [port]  --dialect [dialect] -c [/path/to/config] -o [/path/to/models]

// sequelize-auto -o "./models" -d u654248235_absensi -h 109.106.254.51 -u u654248235_absensi -p 3306 -x *5zV2ZZoGH -e mysql
