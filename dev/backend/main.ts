const express = require('express')
const app = express()

const db = require('./db.ts')


var testingdb = null

app.get('/', async (req, res) => {
    const customers = await db.get_customers(testingdb)
    res.send(customers)
})

app.listen(3000, async () => {
    testingdb = await db.init_db()
    console.log('Server is running on port 3000')
})