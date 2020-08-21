var Sequelize = require("sequelize");
const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define("order", {
    orderStatus: {
      type: DataTypes.STRING,
      validate: {
        isIn: [["carrito", "creada", "procesando", "cancelada", "completa"]],
      },
    },
    total: {
      type: DataTypes.DECIMAL,
      allowNull: true,
    },
  });
};
