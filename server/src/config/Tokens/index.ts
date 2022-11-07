import { Request, Response } from 'express'
import * as jwtService from 'jsonwebtoken'
import BlackListRepository from '../../services/repositories/BlackListRepository'

export const validateToken = async (req: Request, res: Response, next: any) => {
  const jwt = req.headers.authorization

  const blackListRepository = new BlackListRepository()
  const blackToken = await blackListRepository.validate(jwt)
  if (blackToken) {
    res.status(403).end()
    return
  }

  jwtService.verify(
    jwt,
    process.env.JWT_PRIVATE_KEY,
    (err: any, userInfo: any) => {
      if (err) {
        res.status(403).end()
        return
      }

      req.body.user = userInfo
      next()
    }
  )
}
