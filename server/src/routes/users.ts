import { Router } from 'express'
import UsersController from '../controllers/UsersController'
import { validateToken } from '../config/Tokens'

export const usersRouter = Router()

const usersController = new UsersController()

usersRouter.get('/', validateToken, usersController.getById)
usersRouter.get('/all', validateToken, usersController.getAll)
