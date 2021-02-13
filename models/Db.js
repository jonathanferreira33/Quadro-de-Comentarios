const Sequelize = require('sequelize');

const sequelize = new Sequelize('db_av', 'root', 'root123', {
    host: 'localhost',
    dialect: 'mysql'
});

module.exports = {
    Sequelize: Sequelize,
    sequelize: sequelize
}