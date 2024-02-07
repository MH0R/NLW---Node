import { FastifyInstance } from 'fastify'
import { z } from "zod"
import { prisma } from "../../lib/prisma"


export async function getPolls(app: FastifyInstance) {
  app.get('/polls/', async (request, reply) => {

    const poll = await prisma.poll.findMany()
    
    return reply.send({poll})
    }
  )
}