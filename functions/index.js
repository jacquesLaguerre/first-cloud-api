import functions from 'firebase-functions'//1 from terminal firebase init hosting
//firebase init functions 
import express from 'express'//2
import {createUser, getAllUsers, updateUser} from './src/users.js'

const app = express();//3
app.use(express.json())//4
app.get('/users', getAllUsers)
app.post('/users', createUser)
app.patch('/users/:uid', updateUser)



export const api = functions.https.onRequest(app)

//???


