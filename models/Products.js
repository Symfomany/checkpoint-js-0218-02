const Produits = (sequelize, DataTypes) => {
  let Produits = sequelize.define(
    "produits",
    {
      Id: {
        type: DataTypes.INTEGER,
        notEmpty: true
      },
      Reference: {
        type: DataTypes.STRING,
        unique: true
      },
      Titre: {
        type: DataTypes.STRING,
        allowNull: false
      },

      Image: {
        type: DataTypes.STRING
      },

      En_vente: {
        type: DataTypes.INTEGER,
        defaultValue: 1
      }
    },
    {
      tableName: "produits"
    }
  );

  return Produits;
};

module.exports = Produits;
