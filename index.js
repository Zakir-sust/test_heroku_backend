const express = require('express')
const cors = require('cors')
const app = express()
const PORT = process.env.PORT || 5000
const router = require('./routes')

app.use(express.json())

app.use('/',router)

app.listen(PORT,()=>{
    console.log(`listening on port ${PORT}`)
})
