const Products = (sequelize, DataTypes) => {
  var Products = sequelize.define(
    "Products",
    {
      reference: {
        type: DataTypes.STRING(10),
        notEmpty: true,
        unique: true,
        validate: {
          is: /^AA-(?:[\d]{4})-BB$/i
        },
        set(val) {
          this.setDataValue("reference", val.toUpperCase());
        }
      },
      titre: {
        type: DataTypes.STRING(150),
        notEmpty: true
      },
      note: {
        type: DataTypes.INTEGER(1),
        allowNull: true,
        validate: {
          isInt: true
        }
      },
      quantite: {
        type: DataTypes.INTEGER,
        defaultValue: 0,
        validate: {
          isInt: true
        }
      },
      image: {
        type: DataTypes.STRING,
        allowNull: true,
        validate: {
          isUrl: true
        }
      },
      descriptif: {
        type: DataTypes.TEXT,
        allowNull: true
      },
      prix: {
        type: DataTypes.FLOAT,
        defaultValue: 0,
        validate: {
          isFloat: true
        }
      },
      tva: {
        type: DataTypes.FLOAT,
        allowNull: false,
        defaultValue: 0.1,
        validate: {
          isFloat: true
        },
        set(val) {
          this.setDataValue("tva", val / 100);
        }
      },
      enVente: {
        type: DataTypes.BOOLEAN,
        defaultValue: 1
      }
    },
    {
      tableName: "produit",
      timestamps: false,
      getterMethods: {
        noteStars() {
          let result = "";
          for (let i = 0; i < this.note; i++) {
            result += '<i class="fas fa-star"></i>';
          }
          return result;
        },
        priceEuros() {
          return `${(this.prix * (1 + this.tva)).toFixed(2)} €`;
        }
      }
    }
  );

  return Products;
};

module.exports = Products;
