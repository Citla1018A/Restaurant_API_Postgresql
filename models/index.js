const dbConfig = require("../config/db.config.js");

const Sequelize = require("sequelize");
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
    host: dbConfig.HOST,
    dialect: dbConfig.dialect,
    operatorsAliases: false,

    pool: {
        max: dbConfig.pool.max,
        min: dbConfig.pool.min,
        acquire: dbConfig.pool.acquire,
        idle: dbConfig.pool.idle
    }
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.rol = require("./rol.models.js")(sequelize, Sequelize);
db.platillos = require("./platillo.models.js")(sequelize, Sequelize);
db.usuario = require("./usuario.model.js")(sequelize, Sequelize);
db.reservacion = require("./reservacion.models.js")(sequelize, Sequelize);

//establecer las relaciones
db.rol.hasMany(db.usuario, { as: 'usuarios' });
db.usuario.hasMany(db.platillos, { as: 'platillos' });
db.usuario.hasMany(db.reservacion, { as: 'reservacion' });


module.exports = db;