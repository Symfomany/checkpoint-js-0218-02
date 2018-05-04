const Produits = (sequelize, DataTypes) => {
  var Produits = sequelize.define(
    "Produits",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true
      },
      reference: {
        type: DataTypes.STRING
      },
      titre: {
        type: DataTypes.STRING
      },

      note: {
        type: DataTypes.INTEGER
      },

      quantite: {
        type: DataTypes.INTEGER
      },
      image: {
        type: DataTypes.STRING
      },
      tva: {
        type: DataTypes.INTEGER
      },
      enVente: {
        type: DataTypes.BOOLEAN
      },
      createdAT: {
        type: DataTypes.DATE
      },
      updatedAt: {
        type: DataTypes.DATE
      }
    },
    {
      tableName: "produit"
    }
  );

  return Produits;
};

module.exports = Produits;
