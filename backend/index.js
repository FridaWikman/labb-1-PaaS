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

// app.get('/api', (_request, response) => {
//   response.send({ hello: 'World' })
// })

app.get('/api', async (_request, response) => {
  const { rows } = await client.query('SELECT * FROM animals')

  response.send(rows)
})

app.use(express.static(path.join(path.resolve(), 'dist')))

app.listen(3000, () => {
  console.log('Redo på http://localhost:3000/')
})
