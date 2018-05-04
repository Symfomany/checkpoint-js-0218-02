const Products = (sequelize, DataTypes) => {
  var Products = sequelize.define(
    "Products",
    {
      id: {
        type: DataTypes.INTEGER,
        notEmpty: true,
        primaryKey: true
      },
      reference: {
        type: DataTypes.STRING,
        unique: true,
        validate: {
          len: {
            args: [10],
            msg: "Reference must be 10 characters in length"
          }
        }
      },
      title: {
        type: DataTypes.STRING,
        allowNull: false
      },
      score: {
        type: DataTypes.INTEGER
      },
      quantity: {
        type: DataTypes.INTEGER
      },
      image: {
        type: DataTypes.STRING,
        allowNull: false
      },
      description: {
        type: DataTypes.STRING,
        allowNull: false
      },
      price: {
        type: DataTypes.DECIMAL
      },
      vat: {
        type: DataTypes.DECIMAL,
        defaultValue: 20.0
      },
      onSale: {
        type: DataTypes.INTEGER,
        defaultValue: 1
      },
      createdAt: {
        type: DataTypes.DATE
      },
      updatedAt: {
        type: DataTypes.DATE
      }
    },
    {
      tableName: "products"
    }
  );

  return Products;
};

module.exports = Products;
