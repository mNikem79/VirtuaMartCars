const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

app.get('/form', (req, res) => {
  const result = req.query.fio + '   ///   '+req.query.phone
  res.send(result)
})