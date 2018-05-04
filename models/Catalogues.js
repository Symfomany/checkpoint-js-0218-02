const Catalogues = (sequelize, DataTypes) => {
  var Catalogues = sequelize.define(
    "Catalogues",
    {
      // fields // name of Model
      id: { type: DataTypes.INTEGER, primaryKey: true },
      reference: { type: DataTypes.STRING, notEmpty: true },
      titre: { type: DataTypes.STRING },
      note: { type: DataTypes.INTEGER },
      quantité: { type: DataTypes.INTEGER },
      image: { type: DataTypes.STRING },
      descriptif: { type: DataTypes.TEXT, is: ["^[a-z]{10,}$", "i"] },
      prix: { type: DataTypes.INTEGER },
      tva: { type: DataTypes.INTEGER },
      enVente: { type: DataTypes.BOOLEAN },
      createAt: { type: DataTypes.DATE, isDate: true },
      updateAt: { type: DataTypes.DATE, isDate: true }
    },
    { timestamps: false, tableName: "catalogue" }
  );

  return Catalogues;
};

module.exports = Catalogues;
