import Sequelize from "sequelize";
import "dotenv/config.js"

export const sequelize = new Sequelize(
    process.env.DATABASE, 
    process.env.USER,
    process.env.PASSWORD,
     {
        host: process.env.HOST,
        port: process.env.PORT,
        dialect:"postgres",
        dialectOtions: {
           pool: {
              max: 5,
              min: 0,
              idle: 10000
        }
    }
});
