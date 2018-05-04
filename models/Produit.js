/**
 *  Model Produit
 * @param {*} sequelize
 * @param {*} DataTypes
 */
const Produit = (sequelize, DataTypes) => {
    const Produit = sequelize.define(
        "Produit", // name of Model 
        {
            // fields
            reference: { type: DataTypes.STRING},
            titre: { type: DataTypes.STRING},
            note: { type: DataTypes.INTEGER },
            quantite: { type: DataTypes.INTEGER },
            image: { type: DataTypes.STRING },
            descriptif: { type: DataTypes.TEXT },
            prix: { type: DataTypes.FLOAT },
            tva: { type: DataTypes.FLOAT },
            enVente: { type: DataTypes.INTEGER },
            createdAt: { type: DataTypes.DATE },
            updatedAt: { type: DataTypes.DATE },

        },
        {
            timestamps: false,
            // I don't want createdAt
            createdAt: false, 
            tableName: 'produit'
        }
    );
    return Produit;
};

module.exports = Produit;