import express from 'express'
import bodyParser from 'body-parser'
import { users } from '../model/index.js'

const userRouter = express.Router()
userRouter.use(bodyParser.json())

userRouter.get('/', (req, res) => { 
    users.fetchUsers(req, res)
})

userRouter.get('/users', (req, res) => { 
    users.fetchUser(req, res)
})

userRouter.post('/signup', (req, res) => { 
    users.signupUser(req, res)
})

userRouter.patch('/:id', (req, res) => { 
    users.updateUser(req, res)
})

userRouter.delete('/:id', (req, res) => { 
    users.deleteUser(req, res)
})

userRouter.post('/login', (req, res) => { 
    users.login(req, res)
})

export { express, userRouter }