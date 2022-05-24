module.exports = app => {
    const usuario = require("../controllers/usuarioController.js");
    var router = require("express").Router();
    //crear
    router.post("/", usuario.create);
    //recuperar - listar
    router.get("/", usuario.findAll);
    //delete
    router.delete("/:id", usuario.delete);
    //update
    router.put("/:id", usuario.update);
    //usuarios activos
    router.get("/estatus", usuario.findAllEstatus);
    //encontrar rol por id
    router.get(":id", usuario.findOne);
    //buscar nombre
    router.get(":/usuario", usuario.findUsers);
    //login
    router.post(":usuario", usuario.findUsers);

    app.use('/Proyecto_Restaurant/usuario', router);

}