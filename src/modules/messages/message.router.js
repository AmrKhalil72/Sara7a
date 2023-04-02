import express from 'express'
import { addMsg, deleteMsg, getMsg } from './message.controller.js'
import { auth } from '../../middleware/auth.js'

const messageRouter = express.Router()

messageRouter.post('/', addMsg)
messageRouter.get('/:id',auth, getMsg)
messageRouter.delete('/',auth, deleteMsg)

export default messageRouter