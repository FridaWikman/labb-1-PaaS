const express = require('express'),
  path = require('path')

const dotenv = require('dotenv'),
  { Client } = require('pg')

dotenv.config()

const client = new Client({
  connectionString: process.env.PGURI,
})

client.connect()

const app = express()
app.use(express.json())

// app.get('/api', (_request, response) => {
//   response.send({ hello: 'World' })
// })

app.get('/api', async (_request, response) => {
  const { rows } = await client.query(
    'SELECT animals.name, animals.image, animals.weight, animal_types.name AS type_name FROM animals JOIN animal_types ON animal_types.id = animals.type'
  )

  response.send(rows)
})

app.get('/api/types', async (_request, response) => {
  const { rows } = await client.query('SELECT * FROM animal_types')

  response.send(rows)
})

app.post('/api/post', async (request, response) => {
  const { name, image, weight, type } = request.body
  try {
    const { rows } = await client.query(
      'INSERT INTO animals (name, image, weight, type) VALUES ($1,$2,$3,$4) RETURNING *',
      [name, image, weight, type]
    )
    response.status(201).json(rows[0])
  } catch (error) {
    console.error('Error inserting data:', error)
    response.status(500).send('Server error')
  }
})

app.use(express.static(path.join(path.resolve(), 'dist')))

app.listen(3000, () => {
  console.log('Redo på http://localhost:3000/')
})
