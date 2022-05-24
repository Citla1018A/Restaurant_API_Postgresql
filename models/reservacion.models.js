module.exports = (sequelize, Sequelize) => {
    const Reservacion = sequelize.define("reservacion", {
        nombre: {
            type: Sequelize.STRING
        },
        dia: {
            type: Sequelize.DATE
        }
    });
    return Reservacion;

};