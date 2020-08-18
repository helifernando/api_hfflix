const express = require("express");

const knex = require("knex")

const cors = require("cors");

const app = express();

app.use(cors())

app.use(express.json())


const configdb = {
      client: 'mysql',
      version: 5.7,
      connection: {
      host: 'br1034.hostgator.com.br',
      user: 'hfsolu99_app',
      password: 'Hfbsn@16@pp',
      database: 'hfsolu99_app',
    },
}


app.get('/categorias', function(request, response){
    response.status(200).json({nome:"Sucesso"})
})

app.listen(3333,console.log("Servidor rodando na port 3333"))

