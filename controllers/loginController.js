const { request } = require("express");
const db = require("../models");
const Usuario = db.usuario;
const Op = db.Sequelize.Op;
const bcrypt = require("bcrypt");

