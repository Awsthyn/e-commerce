var Sequelize = require("sequelize");
const { DataTypes } = require("sequelize");
const ORDER_STATUS = require("./constOrderStatus").ORDER_STATUS;
const _ = require("lodash");

module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define("order", {
    orderStatus: {
      type: DataTypes.INTEGER,
      field: "order_status",
      values: [
        ORDER_STATUS.cart.ordinal,
        ORDER_STATUS.created.ordinal,
        ORDER_STATUS.processed.ordinal,
        ORDER_STATUS.cancelled.ordinal,
        ORDER_STATUS.completed.ordinal,
      ],
    },

    orderStatusStr: {
      type: DataTypes.VIRTUAL,
      get: function () {
        let result = undefined;
        _.forOwn(ORDER_STATUS, (value, key) => {
          if (value.ordinal === this.get("orderStatus")) {
            return (result = key);
          }
        });
        return result;
      },
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
      allowNull: false,
    },
  });
};
console.log(orderStatusStr);
