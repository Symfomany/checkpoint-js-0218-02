const Produits = (sequelize, DataTypes) => {
    const Produits = sequelize.define(
        "produits",
        {
            id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
            },
            reference: {
                type: DataTypes.STRING,
                allowNull: false,
                notEmpty: true,
                validate: {
                    len: {
                        args: [2,100],
                        msg: "Reference must be betwenn 2 and 100 characters in length"
                    },
                }
            },
            titre: {
                type: DataTypes.STRING(100),
                notEmpty: true,
                allowNull: false,
                validate: {
                    len: {
                        args: [6,100],
                        msg: "Tilte must between 6 and 100 characters in length"
                    }
                }
            },
            note: {
                type: DataTypes.INTEGER(1),
                allowNull: false,
                max:5,
                isInt: {
                    msg: "It's not a number"
                }
            },
            descriptif: {
                type: DataTypes.TEXT,
                notEmpty:true,
                allowNull: false,
                validate: {
                    len: {
                        args: 10,
                        msg: "descriptif must at least 10 characters in length"
                    }
                }

            },
            quantite: {
                type: DataTypes.INTEGER(1),
                allowNull: false,
                isInt: {
                    msg: "It's not a number"
                }
            },
            prix: {
                type: DataTypes.FLOAT,
                allowNull: false
            },
            tva: {
                type: DataTypes.FLOAT,
                allowNull: false
            },
            image: {
                type: DataTypes.STRING(255),
                allowNull:false,
                isUrl: true
            },

            enVente: {
                type: DataTypes.BOOLEAN,
                allowNull:false,
                defaultValue:true,
                isBoolean:{
                    msg: "expect only true or false"
                }
            }
        },
        {
            tableName: "produits",
            timestamps:false
        }
    );

    return Produits;
};

module.exports = Produits;