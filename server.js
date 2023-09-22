import fastify from "fastify";

const server = fastify()

server.post('/transactions', (request, reply) => {
  const {description, price, category, type, createdAt} = request.body

  // let banco = {}

  // const banco.create({
  //   description,
  //   price,
  //   category,
  //   type,
  //   createdAt,
  // })
  console.log('it works')

  return reply.status(201).send()
})

server.get('/transactions', (request, reply) => {
  // const search = request.query.search // Se existir

  // const transactions = banco.list() //se existir query, passar dentro de list

  return transactions
})

server.delete('/transactions/:id', (request, reply) => {
  const transactionId = request.params.id

  // banco.delete(transactionId)

  return reply.status(204).send()
})

server.listen({
  port: 3332
})
