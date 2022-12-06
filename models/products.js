import {DataTypes} from "sequelize";
import {sequelize} from "../configs/database.js"

export const product = sequelize.define("product", {
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
    }
    prince: {
        type: DataTypes.DECIMAL,
        allowNull: false
    },
    stock:{
        type: DataTypes.INTEGER,
        allowNull: false
        defaultValue: 0
    }

},{
    /* Opciones del modelo */
    freezeTableName: true,
    timestamps: false

});

