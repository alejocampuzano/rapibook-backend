import {DataTypes} from "sequelize";
import {sequelize} from "../configs/database.js"

export const product = sequelize.define("product", {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    name:{
        type: DataTypes.STRING,
        allowNull: false
    },
    description: {
        type: DataTypes.STRING,
        allowNull: false
    },
    price: {
        type: DataTypes.DECIMAL,
        allowNull: false
    },
    stock:{
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0
    }

},{
    /* Opciones del modelo */
    freezeTableName: true,
    timestamps: false

});

