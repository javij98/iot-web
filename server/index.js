import express, { response } from 'express'

const PORT = process.env.PORT || 3001

const app = express()

app.use(express.json())

// JSON of notes
let notes = [
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

// Imprimir en pantalla Hello World en /
app.get('/', (_req, res) => {
  res.send('<h1>Hello world</h1>');
})

// Obtenemos las notas en JSON
app.get('/api/notes', (_req, res) => {
  res.json(notes)
})

// Obtenemos la nota con id concreto, si no existe devolvemos pagina de "Not found"
app.get('/api/notes/:id', (req, res) => {
  const id = Number(req.params.id)
  const note = notes.find(note => note.id === id)
  if (note) {
    res.json(note)
  } else {
    res.status(404).end()
  }
})

// Eliminar una nota
app.delete('/api/notes/:id', (req, res) => {
  const id = Number(req.params.id)
  notes = notes.filter(note => note.id !== id)
  res.json(notes)
  res.status(204).end()
})

// Crear una nota
app.post('/api/notes', (req, res) => {
  const body = req.body
  if (!body.content) {
    return res.status(400).json({
      error: 'content missing'
    })
  }

  const ids = notes.map(note => note.id)
  const maxId = Math.max(...ids)

  const newNote = {
    id: Number(maxId + 1),
    content: body.content,
    date: new Date(),
    important: body.important || false,
  }

  notes = [...notes, newNote]

  res.status(201).json(newNote) // Es buena práctica poner antes el status
})

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`)
})
