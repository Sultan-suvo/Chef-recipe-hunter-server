const express = require('express')
const app = express()
const port = 3000
const cors = require('cors')

const chef = require(`./chef.json`)

app.use(cors())

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/chef', (req, res) => {
  res.send(chef)
})

app.get('/chef/:id', (req, res) => {
  const id = parseInt(req.params.id);
  console.log(id);
  const selectedChef = chef.find(sigleChef => parseInt(sigleChef.id) === id)
  res.send(selectedChef)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
