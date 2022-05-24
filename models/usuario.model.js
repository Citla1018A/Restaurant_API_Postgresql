module.exports = (sequelize, Sequelize) => {
    const Usuario = sequelize.define("usuario", {
        nombre: {
            type: Sequelize.STRING
        },
        apePaterno: {
            type: Sequelize.STRING
        },
        apeMaterno: {
            type: Sequelize.STRING
        },
        usuario: {
            type: Sequelize.STRING
        },
        password: {
            type: Sequelize.STRING
        },
        estatus: {
            type: Sequelize.BOOLEAN
        }
    });

    /*
    Usuario.associate = function(models) {
      //Definir en este espacio las asociaciones con otro objetos
      Usuario.belongsTo(models.rol, 
        {
          as: 'rol',
          foreignKey: 'id',
        }
      );
    }
    */

    return Usuario;
};