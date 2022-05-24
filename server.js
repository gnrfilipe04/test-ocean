const cors = require('cors')
const express = require('express')

const PORT = process.env.PORT || 4242
const app = express()

app.use(cors())
app.use(express.json())

app.get('/hello', (req, res) => {
    res.json({message: 'Hello!'})
})

app.listen(PORT, () => {
    console.log(`Rodando na porta ${PORT}`)
})
