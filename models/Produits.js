const Produits = (sequelize, DataTypes) => {
  var Produits = sequelize.define(
    "Produits",
    {
      id: { type: DataTypes.INTEGER, primaryKey: true },
      reference: { type: DataTypes.STRING },
      titre: { type: DataTypes.STRING },
      note: { type: DataTypes.INTEGER, isInt: true, min: 1, max: 5 },
      quantité: { type: DataTypes.INTEGER },
      image: { type: DataTypes.STRING },
      descriptif: { type: DataTypes.TEXT, is: ["^.{10,}$"] },
      prix: { type: DataTypes.FLOAT },
      tva: { type: DataTypes.FLOAT },
      enVente: { type: DataTypes.BOOLEAN },
      createdAt: { type: DataTypes.DATE, isDate: true },
      updatedAt: { type: DataTypes.DATE, isDate: true }
    },
    {
      tableName: "produits",
      timestamps: false,
      getterMethods: {
        notation() {
          return `${this.note}/5`;
        },
        prixTTC() {
          return `${this.prix}€`;
        }
        // check() {
        //   if (this.enVente === true) {
        //     return `i.fa.fa-check(aria-hidden='true')`;
        //   } else {
        //     return `i.fas.fa-times`;
        //   }
        // }
      }
    }
  );

  return Produits;
};

module.exports = Produits;
