module.exports = app => {
    const reservacion = require("../controllers/reservacionController");
    var router = require("express").Router();
    //crear
    router.post("/", reservacion.create);
    //recuperar - listar
    router.get("/", reservacion.findAll);
    //delete
    router.delete("/:id", reservacion.delete);
    //update
    router.put("/:id", reservacion.update);
    //usuarios activos
    //router.get("/estatus", reservacion.findAllEstatus);
    //encontrar rol por id
    router.get(":id", reservacion.findOne);

    app.use('/Proyecto_Restaurant/reservacion', router);

}