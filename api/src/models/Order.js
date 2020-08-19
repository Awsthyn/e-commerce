var Sequelize = require("sequelize");
const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define("order", {
    orderStatus: {
      type: DataTypes.STRING,

      validate : {
        isIn: [['carrito', 'creada', 'procesando', 'cancelada', 'completa']],
      }

    },
    shippingAdress: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    billingAdress: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    total: {
      type: DataTypes.DECIMAL,
    },
  });
};

