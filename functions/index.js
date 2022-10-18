import functions from 'firebase-functions'
import express from 'express'

const app = express();

app.get('/test', (req,res)=> res.send('Sa marche mon frere!'))

export const api = functions.https.onRequest(app)




