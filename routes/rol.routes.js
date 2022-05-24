module.exports = app => {
    const rols = require("../controllers/rolController.js");

    var router = require("express").Router();

    // Crear un nuevo Rol
    router.post("/", rols.create); //http://localhost:9595/sinda/roles/

    // Recuperar todos los Rols
    router.get("/", rols.findAll); //http://localhost:9595/sinda/roles/

    // Encontrar todos los Roles con Estatus activos
    router.get("/estatus", rols.findAllEstatus); //http://localhost:9595/sinda/roles/estatus

    // Encontrar Rol por id
    router.get("/:id", rols.findOne); //http://localhost:9595/sinda/roles/10

    // Actualizar Rol por id
    router.put("/:id", rols.update); //http://localhost:9595/sinda/roles/10

    // Eliminar un Rol por id
    router.delete("/:id", rols.delete); //http://localhost:9595/sinda/roles/10

    // Eliminar todos los Rol de la base de datos
    router.delete("/", rols.deleteAll); //http://localhost:9595/sinda/roles/

    app.use('/Proyecto_Restaurant/rol', router);
};