import app from "./app.js";
import { sequelize } from "./configs/database.js";



/* text de conexion a Railway*/
const main = async () => {
    try {
        await sequelize.sync({alter: true});
        app.listen(process.env.L_PORT)
        console.log("El servidor escucha en el puerto",process.env.L_PORT);    
    } catch (error) {
        console.error("no se puede conectar a la base de datos:", error);    
    }    
}

main()

