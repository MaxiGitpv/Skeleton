const {Sequelize} = require('sequelize')

const db = new Sequelize({
    dialect: 'postgres',
    host: 'localhost',
    username: 'postgres',
    password: 'root2022',
    database: 'skeleton',
    port: 5432
})

module.exports ={
    db
}


