const { request } = require("express");
const { usuario } = require("../models");
const db = require("../models");
const Usuario = db.usuario;
const Op = db.Sequelize.Op;


// Crear y Guardar un nuevo Usuario
exports.create = (req, res) => {
  // Validar request
  if (!req.body.nombre) {
    res.status(400).send({
      message: "El contenido no puede ser vacio, nombre=" + req.body.nombre
    });
    return;
  }

  // Crear un Usuario
  const usuario = {
    nombre: req.body.nombre,
    apePaterno: req.body.apePaterno,
    apeMaterno: req.body.apeMaterno,
    usuario: req.body.usuario,
    password: req.body.password,
    estatus: req.body.estatus ? req.body.estatus : false,
    rolId: req.body.rolId
  };

  // Guardar Usuario en la base de datos
  Usuario.create(usuario)
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

// Recuperar todos los Usuarios de la base de datos
exports.findAll = (req, res) => {
  const nombre = req.query.nombre;
  var condition = nombre ? { nombre: { [Op.iLike]: `%${nombre}%` } } : null;

  Usuario.findAll({ where: condition })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Ocurrio un error al recuperar todos los Usuario."
      });
    });
};

//nombre de usuario



//login


// Encontrar Rol por id
exports.findOne = (req, res) => {
  const id = req.params.id;

  Usuario.findByPk(id)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: "Error al recuperar Usuarios por id=" + id
      });
    });
};



// Actualizar Rol por id
exports.update = (req, res) => {
  const id = req.params.id;

  Usuario.update(req.body, {
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Usuarios se actualizo con exito."
        });
      } else {
        res.send({
          message: `Error al actualizar Usuarios con id=${id}!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error al actualizar Usuarios con id=" + id
      });
    });
};

// Eliminar un Rol por id
exports.delete = (req, res) => {
  const id = req.params.id;

  Usuario.destroy({
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: " Usuarios con exito!"
        });
      } else {
        res.send({
          message: `Error al eliminar Usuarios con id=${id}!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error al eliminar Usuarios con id=" + id
      });
    });
};

// Eliminar todos los Rol de la base de datos
exports.deleteAll = (req, res) => {
  Usuario.destroy({
    where: {},
    truncate: false
  })
    .then(nums => {
      res.send({ message: `${nums} Usuarios fueron eliminados con exito!` });
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Error al eliminar Usuarios."
      });
    });
};


// Encontrar todos los Roles con Estatus activos
exports.findAllEstatus = (req, res) => {
  Usuario.findAll({ where: { estatus: true } })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Ocurrio un error al recuperar Usuarios por estatus activo."
      });
    });
};
//Login
exports.login = (req, res) => {
  let usuario = req.body.usuario;
  let pas = req.body.password;
}

//Encontrar todos los usuarios 
exports.findUsers = (req, res) => {
  var condition = usuario ? { usuario: { [Op.iLike]: `%${usuario}%` } } : null;
  Usuario.findAll({ where: condition })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Ocurrio un error al recuperar Usuarios por usuario."
      });
    });
};

