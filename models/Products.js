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
      Descriptif: {
        type: DataTypes.TEXT,
        allowNull: false
      },
      Note: {
        type: DataTypes.INTEGER
      },

      Image: {
        type: DataTypes.STRING
      },

      En_vente: {
        type: DataTypes.INTEGER,
        defaultValue: 1
      },
      Quantite: {
        type: DataTypes.INTEGER
      },

      Prix: {
        type: DataTypes.INTEGER
      },
      TVA: {
        type: DataTypes.INTEGER
      }
    },
    {
      tableName: "produits"
    }
  );

  return Produits;
};

module.exports = Produits;
