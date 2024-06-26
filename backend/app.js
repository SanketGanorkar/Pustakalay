const express = require('express')
const app = express();
const cors = require('cors')
const bookRoute = require('./routes/bookRoutes.js')
require("./connection/conn.js")

app.use(cors())
app.use(express.json())

const port = process.env.PORT || 1000
app.use('/api/v1',bookRoute)

app.listen(port,()=>{
    console.log('server started')
})