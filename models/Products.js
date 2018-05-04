const Products = (sequelize, DataTypes) => {
    var Products = sequelize.define("Products", {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true
        },
        reference: {
            type: DataTypes.STRING
        },
        title: {
            type: DataTypes.STRING
        },
        description: {
            type: DataTypes.TEXT
        },
        note: {
            type: DataTypes.INTEGER
        },
        quantity: {
            type: DataTypes.INTEGER
        },
        picture: {
            type: DataTypes.STRING
        },
        price: {
            type: DataTypes.INTEGER
        },
        TVA: {
            type: DataTypes.INTEGER
        },
        enVente: {
            type: DataTypes.BOOLEAN
        },
        createdAt: {
            type: DataTypes.DATE
        },
        updateAt: {
            type: DataTypes.DATE
        }
    }, {
        timestamps: false,
        getterMethods: {
            dateFr() {
                function
                pad(s) {
                    return
                    s < 10
                        ? "0" + s
                        : s;
                }
                var d = new Date(this.datePublication);
                return [
                    pad(d.getDate()),
                    pad(d.getMonth() + 1),
                    d.getFullYear()
                ].join("/");
            }
        }
    }, {tableName: "products"});

    return Products;
};

module.exports = Products;