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
    shippingAddress: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    billingAddress: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    total: {
      type: DataTypes.DECIMAL,
      allowNull: true,
    },
  });
};
