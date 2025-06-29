import express from 'express'
import { fileURLToPath } from 'url'
import path from 'path'

const app = express()
const port = 8081

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'html', 'index.html'))
})

app.get('/sobre', (req, res) => {
  res.sendFile(path.join(__dirname, 'html', 'sobre.html'))
})

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`)
})
