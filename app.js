import express from 'express'
import handlebars from 'express-handlebars'
import Sequelize from 'sequelize'
const sequelize = new Sequelize('sistemadecadastro', 'root', 'Hayashi11@4', {
    host: 'localhost',
    dialect: 'mysql'
})

sequelize.authenticate().then(function() {
    console.log('Conectado com sucesso')
}).catch(function(erro) {
    console.log(`Falha a conectar ${erro}`)
})

const app = express()
const port = 8081


app.engine('handlebars', handlebars({defaultLayout: 'main'}))
app.set('view engine', 'handlebars')

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`)
})
