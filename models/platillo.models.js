module.exports = (sequelize, Sequelize) => {
    const Platillo = sequelize.define("platillo", {
        nombre: {
            type: Sequelize.STRING
        },
        descripcion: {
            type: Sequelize.TEXT
        },
        costo: {
            type: Sequelize.DOUBLE
        }
    });
    return Platillo;

};