import fs from "fs";
import util from "util";

const exists = util.promisify(fs.access);

const fileExist = (path) => {
  return new Promise((resolve, reject) => {
    exists(path, fs.F_OK)
      .then((ok) => {
        resolve(true);
      })
      .catch((err) => {
        resolve(false);
      });
  });
};

export default fileExist;
