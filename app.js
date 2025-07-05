import express from 'express'
import { engine } from 'express-handlebars'
import bodyParser from 'body-parser'
import Post from './models/Posts.js'

const app = express()
const port = 8081

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.engine('handlebars', engine({
    defaultLayout: 'main',
    runtimeOptions: {
        allowProtoPropertiesByDefault: true,
        allowProtoMethodsByDefault: true,
    }
}))
app.set('view engine', 'handlebars')

app.get('/', (req, res) => {
    Post.findAll({ order: [['id', 'DESC']] }).then((posts) => {
        res.render('home', { posts: posts })
    })
})

app.get('/cad', function (req, res) {
    res.render('formulario')
})

app.post('/add', (req, res) => {
    Post.create({
        titulo: req.body.titulo,
        conteudo: req.body.conteudo
    }).then(() => {
        res.redirect('/')
    }).catch((erro) => {
        res.send('Houve um erro: ' + erro)
    })
})

app.get('/deletar/:id', (req, res) => {
    Post.destroy({
        where: {'id': req.params.id}
    }).then(() => {
        res.send('Post deletado com sucesso')
    }).catch((erro) => {
        res.send(`Falha a deletar ${erro}`)
    })
})

app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`)
})
