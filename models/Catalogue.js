/**
 *  Model Articles
 * @param {*} sequelize
 * @param {*} DataTypes
 */
const Produits = (sequelize, DataTypes) => {
  const Produits = sequelize.define(
    "Produits",
    {
      id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
      reference: { type: DataTypes.INTEGER }, //(String AA-XXXX-BB)
      titre: { type: DataTypes.STRING, unique: "titre", notEmpty: true },
      note: { type: DataTypes.INTEGER, isInt: true, min: 1, max: 5 },
      quantite: { type: DataTypes.STRING },
      image: { type: DataTypes.STRING },
      descriptif: {
        type: DataTypes.TEXT,
        is: ["^[a-z]{10,}$", "i"],
        notEmpty: true
      },
      prix: { type: DataTypes.DECIMAL },
      tva: { type: DataTypes.DECIMAL },
      enVente: { type: DataTypes.STRING },
      active: { type: DataTypes.BOOLEAN, defaultValue: true },
      createdAt: {
        type: DataTypes.DATE
      },

      updatedAt: {
        type: DataTypes.DATE
      }
    },
    {
      timestamps: false
    }
  );

  return Produits;
};

module.exports = Produits;
