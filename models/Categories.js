const Categories = (sequelize, DataTypes) => {
  var Categories = sequelize.define("Categories", {
    titre: { type: DataTypes.STRING, unique: "theTitle", notEmpty: true },
    photo: { type: DataTypes.STRING }
  });

  return Categories;
};

module.exports = Categories;
