const express = require('express')
const crudRouter = require('./router/crudRouter')
const { connectDb } = require('./utilis/db')
require('dotenv').config()

const app = express()

app.use(express.json())

//Router
app.use('/api', crudRouter)

const PORT = process.env.PORT || 3003

connectDb().then(() => {
    app.listen(PORT, () => {
        console.log(`Server listen on Port: ${PORT}`);
    })
})
