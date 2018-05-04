/**
 *  Model Articles
 * @param {*} sequelize
 * @param {*} DataTypes
 */
const Articles = (sequelize, DataTypes) => {
  const Articles = sequelize.define(
    "Articles", // name of Model
    {
      // fields
      titre: { type: DataTypes.STRING, unique: "theTitle", notEmpty: true },
      reference: { type: DataTypes.STRING },
      note: { type: DataTypes.INTEGER, isInt: true, min: 1, max: 5 },
      quantite: { type: DataTypes.INTEGER, isInt: true, min: 1 },
      photo: { type: DataTypes.STRING },
      description: { type: DataTypes.TEXT, is: ["^[a-z]{10,}$", "i"] },
      prix: { type: DataTypes.INTEGER },
      tva: { type: DataTypes.INTEGER },
      enVente: { type: DataTypes.BOOLEAN }
    },
    {
      timestamps: false,
      getterMethods: {
        dateFr() {
          function pad(s) {
            return s < 10 ? "0" + s : s;
          }
          var d = new Date(this.datePublication);
          return [
            pad(d.getDate()),
            pad(d.getMonth() + 1),
            d.getFullYear()
          ].join("/");
        }
      }
    }
  );

  return Articles;
};

module.exports = Articles;
