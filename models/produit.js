const produit = (sequelize, DataTypes) => {
  const produit = sequelize.define(
    "produit",
    {
      id: { type: DataTypes.INTEGER, primaryKey: true },
      reference: { type: DataTypes.STRING },
      titre: { type: DataTypes.STRING },
      note: { type: DataTypes.INTEGER, isInt: true, min: 1, max: 5 },
      quantite: { type: DataTypes.INTEGER },
      image: {
        type: DataTypes.STRING,
      },
      descriptif: { type: DataTypes.TEXT, is: ["^[a-z]{10,}$", "i"] },
      prix: { type: DataTypes.DECIMAL },
      tva: { type: DataTypes.DECIMAL },
      enVente: { type: DataTypes.BOOLEAN },

    },
    {

      tableName: "produit"
    }
  );

  return produit;
};

module.exports = produit;