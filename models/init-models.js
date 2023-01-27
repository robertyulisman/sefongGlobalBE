var DataTypes = require("sequelize").DataTypes;
var _inmst = require("./inmst");

function initModels(sequelize) {
  var inmst = _inmst(sequelize, DataTypes);


  return {
    inmst,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
