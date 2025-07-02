const Sequelize = require('sequelize')
const sequelize = new Sequelize('test', 'root', 'Hayashi11@4', {
    host: 'localhost',
    dialect: 'mysql'
})

sequelize.authenticate().then(function() {
    console.log('Conectado com sucesso')
}).catch(function(erro) {
    console.log(`Falha a conectar ${erro}`)
})
