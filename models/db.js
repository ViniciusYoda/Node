import Sequelize from 'sequelize'

const sequelize = new Sequelize('postapp', 'root', 'Hayashi11@4', {
    host: 'localhost',
    dialect: 'mysql'
})

sequelize.authenticate().then(function() {
    console.log('Conectado com sucesso')
}).catch(function(erro) {
    console.log(`Falha a conectar ${erro}`)
})

export { Sequelize, sequelize }