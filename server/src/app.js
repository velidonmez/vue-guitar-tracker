const express = require('express')
const bodyParser = require('body-parser')
const morgan = require('morgan')
const cors = require('cors')

const app = express()

app.use(morgan('combine'))
app.use(bodyParser.json())
app.use(cors())

const port = 3000

app.post('/register', (req, res) => {
  res.send({
    message: `hello ${req.body.email}!`
  })
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
