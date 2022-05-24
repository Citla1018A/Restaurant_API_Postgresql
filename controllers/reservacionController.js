const db = require("../models");
const Reservacion = db.reservacion;
const Op = db.Sequelize.Op;

// Crear y Guardar un nuevo Rol
exports.create = (req, res) => {
    // Validar request
    if (!req.body.nombre) {
        res.status(400).send({
            message: "El contenido no puede ser vacio, nombre=" + req.body.nombre
        });
        return;
    }

    // Crear un Rol
    const reservacion = {
        nombre: req.body.nombre,
        dia: req.body.dia
    };

    // Guardar Rol en la base de datos
    Reservacion.create(reservacion)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Ocurrio un error al crear Reservacion."
            });
        });
};

// Recuperar todos los Roles de la base de datos
exports.findAll = (req, res) => {
    const nombre = req.query.nombre;
    var condition = nombre ? { nombre: { [Op.iLike]: `%${nombre}%` } } : null;

    Reservacion.findAll({ where: condition })
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Ocurrio un error al recuperar todos los Reservacion."
            });
        });
};

// Encontrar Rol por id
exports.findOne = (req, res) => {
    const id = req.params.id;

    Reservacion.findByPk(id)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: "Error al recuperar Reservacion por id=" + id
            });
        });
};

// Actualizar Rol por id
exports.update = (req, res) => {
    const id = req.params.id;

    Reservacion.update(req.body, {
        where: { id: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Reservacion se actualizo con exito."
                });
            } else {
                res.send({
                    message: `Error al actualizar Reservacion con id=${id}!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error al actualizar Reservacion con id=" + id
            });
        });
};

// Eliminar un Rol por id
exports.delete = (req, res) => {
    const id = req.params.id;

    Reservacion.destroy({
        where: { id: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Reservacion eliminado con exito!"
                });
            } else {
                res.send({
                    message: `Error al eliminar Reservacion con id=${id}!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error al eliminar Reservacion con id=" + id
            });
        });
};

// Eliminar todos los Rol de la base de datos
exports.deleteAll = (req, res) => {
    Reservacion.destroy({
        where: {},
        truncate: false
    })
        .then(nums => {
            res.send({ message: `${nums} Reservacion fueron eliminados con exito!` });
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Error al eliminar Reservacion."
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
                    err.message || "Ocurrio un error al recuperar Reservacion por estatus activo."
            });
        });
};*/