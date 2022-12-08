# RAPIBOOK Online API

>  Interfaz de aplicación (API RESTful ) diseñada con la tecnologia de Node JS, con respuesta en JavaScript Object Notation (JSON). Provee diferentes servicios como autorizaciones, usa algoritmos hash para garantizar la seguridad de contraseñas y HTTPS para asegurar una transmisión de datos segura. controla la base de datos (PostgreSQL) y el almacenamiento de archivos.

## Requisitos

### Base de datos

- [PostgreSQL] (https://www.postgresql.org/)

> **Note**
Sequelize es un ORM para Oracle, Postgres, MySQL, MariaDB, SQLite y SQL Server, y más.

### Dependencias

- [express] (https://expressjs.com/)
- [sequelize] (https://sequelize.org/)
- [bcrypt] (https://www.npmjs.com/package/bcrypt)
- [jwt] (https://www.npmjs.com/package/jsonwebtoken)
- [multer] (https://www.npmjs.com/package/multer)
- [cors] (https://www.npmjs.com/package/cors)
- [pg-hstore] (https://www.npmjs.com/package/pg-hstore)
- [dotenv] (https://www.npmjs.com/package/dotenv)

## Estructura de carpetas

    .
    ├── ...
    ├── public                   
    │   ├── uploads             # Archivos estáticos
    ├── src             
    │   ├── configs             # Configuración
    │   ├── controllers         # Controladores
    │   ├── middlewares         # Middlewares
    │   ├── models              # Modelos
    │   ├── routes              # Rutas
    │   └── ...                 # Etc...
    └── ...

## Configuración de desarrollo

### Clonar el proyecto

```shell
git clone https://github.com/celluloiddream/pasteleria-api.git
```
### Instalar dependencias

Primero, llamamos a instalar las dependencias:

```shell
npm i
```
Segundo, instalamos nodemon en modo desarrollo:

```shell
npm i nodemon -D
```
> **Note**
Al ejecutar el llamado de instalación se incluye nodemon, se recomienda añadir un script `"dev": "node src/Index.js"` al package.json y luego desde la terminal ejecutar `npm run dev` para evitar reiniciar el servidor manualmente. 

## API endpoints

| ENDPOINT                     | URL                                        | 
| ---------------------------- | ------------------------------------------ |
| Registro                     | /register                                  |
| Iniciar sesión               | /login                                     |
| Listar/crear/ empleado       | /employees                                 |
| Editar/borrar empleado       | /employees/:id                             |
| Listar/crear/ cliente        | /customers                                 |
| Editar/borrar cliente        | /customers/:id                             |
| Listar/crear/ productos      | /products                                  |
| Editar/borrar cliente        | /products/:id                              |
| Listar/crear/ categorias     | /categories                                |
| Editar/borrar categorias     | /categories/:id                            |
| Listar/crear/ pedidos        | /orders                                    |
| Editar pedido                | /orders/:id                                |
| Listar/crear/ diseños        | /designs                                   |
| Editar diseño                | /designs/:id                               |
| Listar/crear/ sede           | /outlets                                   |
| Editar/borrar   sede         | /outlets/:id                               |
| Listar/crear/ metodo de pago | /payment-methods                           |
| Editar/borrar metodo de pago | /payment-methods/:id                       |

## Pruebas

Antes de iniciar cada prueba, se borrará la base de datos y se realizarán las migraciones. Eso significa que es ideal tener una base de datos separada tanto para el desarrollo como para las pruebas.

### Prerrequisitos

>  El tester debe tener experiencia previa con Node, Postgres, Sequelize y Jest.

### Depedencias de pruebas

- [jest] (https://jestjs.io/)

> **Note**
Eliminar la ejecución de pruebas al pasar a producción.

### Configuración de Sequelize

```javascript
import { config } from "dotenv"
config({ path: "./../.env" })

module.exports = {
  development: {
    database: process.env.DB_NAME,
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    host: process.env.DB_HOST,
    dialect: "postgres",
    logging: false,
  },
  test: {
    database: process.env.DB_NAME,
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    host: process.env.DB_TEST_HOST,
    dialect: "postgres",
    logging: false,
  },
  production: {},
}
```

### Configuración de Jest

```javascript
import express from 'express';
import db from './db/models';

...

// Route handlers
const authApi = require('./v1/auth');

// Create server
const app: express.Application = express();

// API routes
app.use('/v1/auth', authApi);

export { app };
```

### Ejecutando pruebas

```javascript
  "scripts": {
    ...
    "test": "NODE_ENV=test jest --runInBand",
  }
```

## Producción

Se debe añadir un script de inicio para producción en el archivo `package.json` y revisar que la configuración de la base de datos este debidamente configurada.

```javascript
  "scripts": {
    ...
    "start": "node src/Index.js",
  }
```

## Versionado

>  Para el control de versiones semántico en REST se adapta este proyecto al estandar admitido para versiones principales, menores y de parche.x.y.z

### Dependencia de versionado

- [semver] (https://www.npmjs.com/package/semver)

> **Warning**
La configuración tiende a fallar al reinstalarse la dependencia.

### Configuración de versionado

Se debe instalar la dependencia:

```shell
npm i semver
```

## Licencia

 GNU GENERAL PUBLIC LICENSE Version 3, 29 June 2007