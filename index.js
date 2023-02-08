const express = require("express");

const app = express()

require("dotenv").config();

//Rota com o Banco de dados
const connectDatabase = require("./src/database/db");
//Conexão com o Banco de dados
connectDatabase()

const port =process.env.PORT || 3052;

const imgRouter = require("./src/routes/img.route");

app.use("/imagens",imgRouter);

app.listen(port,() =>{
    console.log('Servidor de upload de imagens está rodando na porta '+port+'');
})