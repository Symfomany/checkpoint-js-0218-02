const Produits = (sequelize, DataTypes) => {
  var Produits = sequelize.define(
    "Produits",
    {
      reference: { type: DataTypes.STRING },
      titre: { type: DataTypes.STRING },
      note: { type: DataTypes.INTEGER },
      quantite: { type: DataTypes.INTEGER },
      image: { type: DataTypes.STRING },
      descriptif: { type: DataTypes.TEXT },
      prix: { type: DataTypes.FLOAT },
      tva: { type: DataTypes.FLOAT },
      enVente: { type: DataTypes.BOOLEAN },
      createdAt: { type: DataTypes.DATE },
      updatedAt: { type: DataTypes.DATE }
    },
    {
      tableName: "produits"
    }
  );

  return Produits;
};

module.exports = Produits;
