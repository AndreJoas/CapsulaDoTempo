import fastify from 'fastify'
import { PrismaClient } from '@prisma/client'

const app = fastify()

const prisma = new PrismaClient()
//HTTP METHODOS: GET , POST, PUT, DELETE,PATCH

app.get('/usuarios', async () => {
    const usuarios = await prisma.user.findMany()

    return usuarios
})

// API RESTful

app.listen({
    port: 3333,
}).then(()=>{console.log('😁 o servidor esta rodando em http://localhost:3333')})

