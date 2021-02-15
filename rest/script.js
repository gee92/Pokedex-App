const express = require('express')
const app = express()
const port = 3000

app.get('/', async (req, res) => {

  let pokeresponse = await fetch ("https://pokeapi.co/api/v2/pokemon/ditto")
  let pokeJson = await pokeresponse.json

  console.log(pokeJson)

  res.send('')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})


app.open('GET', 'https://pokeapi.co/api/v2/pokemon/ditto', true);
app.send();