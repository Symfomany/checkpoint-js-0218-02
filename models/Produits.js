const Produits = (sequelize, DataTypes) => {
  var Produits = sequelize.define("Produits", {
    //id: { type: DataTypes.INT },
    titre: { type: DataTypes.STRING }
    //image: { type: DataTypes.STING },
    //note: { type: DataTypes.INT }
    //reference: { type: DataTypes.STRING, is: ["[A-Z-]"] }
  });

  return Produits;
};

module.exports = Produits;
