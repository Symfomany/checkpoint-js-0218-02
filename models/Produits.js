const Produits = (sequelize, DataTypes) => {
  var Produits = sequelize.define("Produits", {
    titre: { type: DataTypes.STRING, unique: "theTitle", notEmpty: true },
    photo: { type: DataTypes.STRING }
  });

  return Produits;
};

module.exports = Produits;
