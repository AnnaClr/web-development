const express = require('express')
const app = express()
const port = 3000

app.listen(port, console.log(`Server is running on port ${port}`))

app.use(express.json())

const routes = require('./routes')
app.use(routes)