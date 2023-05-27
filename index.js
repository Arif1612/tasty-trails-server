const express = require('express')
const app = express()
const port = 5005

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Tasty Trails API is running on ${port}`)
})