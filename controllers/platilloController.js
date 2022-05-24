const db = require("../models");
const Platillo = db.platillos;
const Op = db.Sequelize.Op;

//Crear Guardar platillo
exports.create = (req, res) => {
    //validar request
    if (!req.body.nombre) {
        res.status(400).send({
            message: "El contenido no puede ser vacio, nombre=" + req.body.nombre
        });
        return;
    }

    //crear 
    const platillos = {
        nombre: req.body.nombre,
        descripcion: req.body.descripcion,
        costo: req.body.costo
    };
    // Guardar Rol en la base de datos
    Platillo.create(platillos)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Ocurrio un error al crear Rol."
            });
        });
};

//Guardar en la bd
exports.findAll = (req, res) => {
    const nombre = req.query.nombre;
    var condition = nombre ? { nombre: { [Op.iLike]: `%${nombre}%` } } : null;

    Platillo.findAll({ where: condition })
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Ocurrio un error al recuperar todos los platillos."
            });
        });
};

// Encontrar Rol por id
exports.findOne = (req, res) => {
    const id = req.params.id;

    Platillo.findByPk(id)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: "Error al recuperar platillo por id=" + id
            });
        });
};

// Actualizar Rol por id
exports.update = (req, res) => {
    const id = req.params.id;

    Platillo.update(req.body, {
        where: { id: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Platillo se actualizo con exito."
                });
            } else {
                res.send({
                    message: `Error al actualizar Platillo con id=${id}!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error al actualizar platillo con id=" + id
            });
        });
};

// Eliminar un Rol por id
exports.delete = (req, res) => {
    const id = req.params.id;

    Platillo.destroy({
        where: { id: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Platillo eliminado con exito!"
                });
            } else {
                res.send({
                    message: `Error al eliminar Platillo con id=${id}!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error al eliminar Platillo con id=" + id
            });
        });
};

// Eliminar todos los Rol de la base de datos
exports.deleteAll = (req, res) => {
    Platillo.destroy({
        where: {},
        truncate: false
    })
        .then(nums => {
            res.send({ message: `${nums} Platillos fueron eliminados con exito!` });
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Error al eliminar Platillos."
            });
        });
};

// Encontrar todos los Roles con Estatus activos
/*exports.findAllEstatus = (req, res) => {
    Rol.findAll({ where: { estatus: true } })
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Ocurrio un error al recuperar Platillos por estatus activo."
            });
        });
};*/
