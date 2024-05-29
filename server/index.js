import express, { response } from 'express'

const PORT = process.env.PORT || 3001

const app = express()

const notes = [
  {
    'id': 1,
    'content': 'Esto es el contenido de la nota 1',
    'date': '2015',
    'important': true
  },
  {
    'id': 2,
    'content': 'Esto es el contenido de la nota 2',
    'date': '2016',
    'important': true
  },
  {
    'id': 3,
    'content': 'Esto es el contenido de la nota 3',
    'date': '2017',
    'important': false
  }
]

app.get('/', (_req, res) => {
  res.send('<h1>Hello world</h1>');
})

app.get('/api/notes', (_req, res) => {
  res.json(notes)
})

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`)
})
