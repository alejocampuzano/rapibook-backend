import app from "./app.js";
import { sequelize } from "./configs/database.js";
/* text de conexion a Railway*/
const main = async () => {
    try {
        await sequelize.authenticate();
        app.listen(5000)
        console.log("El servidor escucha en el puerto",5000);    
    } catch (error) {
        console.error("no se puede conectar a la base de datos:", error);    
    }    
}

main()

