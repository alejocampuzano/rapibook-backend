import {DataTypes} from "sequelize";
import {sequelize} from "../configs/database.js"

export const category = sequelize.define("category", {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primarykey: true
    },
    name:{
        type: DataTypes.STRING,
        allowNull: true
    },
    description: {
        type: DataTypes.STRING,
        allowNull: false
    },

},{
    /* Opciones del modelo */
    freezeTableName: true,
    timestamps: false
});

/*Relacion de la categoria al producto */

category.hasMany(product, {
    foreignkey: {
        name: "category_id",
        allowNull: false
    },
    sourcekey: "id"
});

product.belongsTo(category, {
    foreignkey: {
        name: "category_id"
    },
    targetId: "id"
});