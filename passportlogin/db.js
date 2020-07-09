const Sequelize = require('sequelize');

const db = new Sequelize(
    'userdb',
    'userdb',
    '',
    {
        dialect: 'mysql',
        host: 'localhost'
    }
)

const Users = db.define('users', {
    username: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
    },
    password: {
        type: Sequelize.STRING,
        allowNull: true
    },
    firstname: Sequelize.STRING,
    lastname: Sequelize.STRING 
})

db.sync().then(() => console.log("Database is ready"))

exports = module.exports = {
    db,
    Users
}