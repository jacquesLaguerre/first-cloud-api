import functions from 'firebase-functions'
import express from 'express'
import {createUser, getAllUsers} from './src/users.js'

const app = express();
app.use(express.json())
app.get('/users', getAllUsers)
app.post('/users', createUser)



export const api = functions.https.onRequest(app)




