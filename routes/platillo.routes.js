module.exports = app => {
    const platillo = require("../controllers/platilloController.js");
    var router = require("express").Router();
    //crear
    router.post("/", platillo.create);
    //recuperar - listar
    router.get("/", platillo.findAll);
    //delete
    router.delete("/:id", platillo.delete);
    //update
    router.put("/:id", platillo.update);
    //usuarios activos
    // router.get("/estatus", usuario.findAllEstatus);
    //encontrar rol por id
    router.get(":id", platillo.findOne);

    app.use('/Proyecto_Restaurant/platillo', router);

}