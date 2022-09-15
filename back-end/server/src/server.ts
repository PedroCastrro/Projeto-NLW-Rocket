import express from "express";
import { PrismaClient } from '@prisma/client'

const app = express()
const prisma = new PrismaClient({
   log: ['query']
})

app.get('/games', async (request, response) => {

   const games =  await prisma.game.findMany({
      include: {
         _count: {
            select: {
               ads: true,
            }
         }
      }
   })

   return response.json(games);
});

app.post('/ads', (request, response) => {
   return response.status(201).json([]);
});


app.get('/games/:id/ads', async (request, response) => {
   const gameId = request.params.id;

   const ads = await prisma.ad.findMany({
      select:{
         id: true,
         name: true,
         weekDays: true,
         useVoiceChannel: true,
         yearsPlaying: true,
         hourStart: true,
         hourEnd: true,
      },
      where: {
         gameId,
      },
      orderBy: {
         createdAt: 'desc',
      }
   })

   return response.json(ad=> {
      return {
         ...ad,
         weekDays: ad.weekDays.split(',')

      }
   })
})

   app.get('/ads/:id/discord', (request, response) => {

      return response.json([
         {id: 1, name: 'Anuncio 1'},
         {id: 2, name: 'Anuncio 2'},
         {id: 3, name: 'Anuncio 3'},
         {id: 4, name: 'Anuncio 4'},
      ])
   })

app.listen(3333)