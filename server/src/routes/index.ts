import { Router } from 'express'
import { authRouter } from './auth'
import { usersRouter } from './users'

const routers = Router()

/**
 * Routes
 */
routers.use('/auth', authRouter)
routers.use('/user', usersRouter)
routers.use('/', (req, res) => res.send('Route not found /'))

export default routers
