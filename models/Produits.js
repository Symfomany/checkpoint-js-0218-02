const Produits = (sequelize, DataTypes) => {
  const Produits = sequelize.define("Produits", {
    titre: { type: DataTypes.STRING },
    reference: { type: DataTypes.STRING },
    note: { type: DataTypes.INTEGER, isInt: true, min: 1, max: 5 },
    quantite: { type: DataTypes.INTEGER },
    image: { type: DataTypes.TEXT },
    descriptif: { type: DataTypes.TEXT },
    prix: { type: DataTypes.DECIMAL },
    tva: { type: DataTypes.DECIMAL },
    enVente: { type: DataTypes.BOOLEAN }
  });
  return Produits;
};

module.exports = Produits;
