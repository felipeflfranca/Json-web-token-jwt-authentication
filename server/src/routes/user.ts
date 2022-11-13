import { Router } from 'express'
import UserController from '../controllers/UserController'
import { validateToken } from '../config/Tokens'

export const usersRouter = Router()

const userController = new UserController()

usersRouter.get('/', validateToken, userController.getById)
usersRouter.get('/all', validateToken, userController.getAll)
