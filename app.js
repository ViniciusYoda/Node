import express from 'express'
import { engine } from 'express-handlebars'
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


app.engine('handlebars', engine({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')

app.get('/cad', function(_req, res) {
    res.render('formulario')
})

app.post('/add', (req, res) => {
    res.send('Formulario recebido')
})

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`)
})
