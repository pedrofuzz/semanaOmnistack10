const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const routes = require('./routes')

//cria conexão do servidor
const app = express()

mongoose.connect('mongodb+srv://omnistack:1234@cluster0-bu5ak.mongodb.net/week10?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

app.use(cors())

// Configura o express para "entender" requisições no formato JSON
app.use(express.json())

app.use(routes)

// Variável ambiente que armazena a porta
var porta = process.env.PORT || 8080

// Define a porta do servidor
app.listen(porta)