import express, { request, response } from "express";

const app = express()

app.get('/games', (request, response) => {
   return response.json([]);
});

app.post('/ads', (request, response) => {
   return response.status(201).json([]);
});


app.get('/ads', (request, response) => {
   return response.json([
    {id: 1, name: 'Anuncio 1'},
    {id: 2, name: 'Anuncio 2'},
    {id: 3, name: 'Anuncio 3'},
    {id: 4, name: 'Anuncio 4'},
   ])
})

app.listen(3333)