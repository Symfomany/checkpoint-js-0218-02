const Catalogues = (sequelize, DataTypes) => {
  var Catalogues = sequelize.define(
    "Catalogues",
    {
      // fields // name of Model
      id: { type: DataTypes.INTEGER, primaryKey: true },
      reference: { type: DataTypes.STRING, is: ["^[A]{2}-w{4}-[B]{2}$"] },
      titre: { type: DataTypes.STRING },
      note: { type: DataTypes.INTEGER },
      quantite: { type: DataTypes.INTEGER },
      image: { type: DataTypes.STRING },
      descriptif: { type: DataTypes.TEXT },
      prix: { type: DataTypes.INTEGER },
      tva: { type: DataTypes.INTEGER },
      enVente: { type: DataTypes.BOOLEAN },
      createdAt: { type: DataTypes.DATE, isDate: true },
      updatedAt: { type: DataTypes.DATE, isDate: true }
    },
    { tableName: "catalogue" }
  );

  return Catalogues;
};

module.exports = Catalogues;
