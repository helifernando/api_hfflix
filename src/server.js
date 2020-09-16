require('dotenv/config');

const express = require("express");

const knex = require("knex");

const cors = require("cors");

const app = express();

app.use(cors())

app.use(express.json())

const configdb = {
    client: 'mysql',
    version: 5.7,
    connection: {
        host: process.env.DB_HOST || 'localhost',
        user: process.env.DB_USER || 'user',
        password: process.env.DB_PASS || 'senha',
        database: process.env.DB_DATABASE || 'database',
    },
}

const db = knex(configdb)

app.post('/categorias', async function (request, response) {

    const categoria = request.body
    const data = await db('categoria').insert(categoria)

    return response.status(200).json(data)
})

app.get('/categorias', async function (request, response) {

    try {
        const data = await db('categoria').select('*')

        return response.status(200).json(data)

    } catch (err) {
        return response.status(400).json({ message: 'Erro ao chamar servico', err })
    }
})

app.get('/categorias/:id', async function (request, response) {

    try {

        const id = request.params.id

        const data = await db('categoria').where({ id }).select('*')

        return response.status(200).json(data)

    } catch (err) {
        return response.status(400).json({ message: 'Erro ao chamar servico', err })
    }
})

app.put('/categorias/:id', async function (request, response) {

    try {

        const id = request.params.id
        const data = request.body

        const alterado = await db('categoria').where({ id }).update(data)

        return response.status(200).json(alterado)

    } catch (err) {
        return response.status(400).json({ message: 'Erro ao chamar servico', err })
    }
})

app.delete('/categorias/:id', async function (request, response) {

    try {

        const id = request.params.id

        const alterado = await db('categoria').where({ id }).delete()

        return response.status(200).json(alterado)

    } catch (err) {
        return response.status(400).json({ message: 'Erro ao chamar servico', err })
    }
})

app.listen(3333, console.log("Servidor rodando na port 3333"))

