import {fastify} from 'fastify'
import {DatabasePostgres} from "./database-postgres.js";
import fastifyCors from '@fastify/cors';

const server = fastify()

const database = new DatabasePostgres()

server.register(fastifyCors, {
  origin: ['http://localhost:5173', 'https://dt-money-dashboard.vercel.app/', 'https://dt-money-api-kn4h.onrender.com'], // Replace '*' with the allowed origins as needed
  methods: 'GET,PUT,POST,DELETE',
  allowedHeaders: 'Content-Type,Authorization',
});

server.post('/transactions', async(request, reply) => {
  const {description, price, category, type, createdAt} = request.body

  await database.create({
    description,
    price,
    category,
    type,
    createdAt
  })

  return reply.status(201).send()
})

server.get('/transactions', (request, reply) => {
  // const search = request.query.search // Se existir

  const transactions = database.list() //se existir query, passar dentro de list

  return transactions
})

server.delete('/transactions/:id', (request, reply) => {
  const transactionId = request.params.id

  database.delete(transactionId)

  return reply.status(204).send()
})

server.listen({
  host: '0.0.0.0',
  port: process.env.PORT ?? 3333
})
