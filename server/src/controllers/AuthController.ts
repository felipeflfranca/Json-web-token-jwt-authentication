import { Request, Response } from 'express'
import * as jwt from 'jsonwebtoken'
import UsersRepository from '../services/repositories/UsersRepository'
import BlackListRepository from '../services/repositories/BlackListRepository'
import BlackList from '../database/typeorm/entities/BlackList'

export default class AuthController {
  private usersRepository: UsersRepository
  private blackListRepository: BlackListRepository

  constructor() {
    this.usersRepository = new UsersRepository()
    this.blackListRepository = new BlackListRepository()
  }

  login = async (req: Request, res: Response) => {
    const { email, password } = req.body

    if (!(email && password)) {
      return res.status(400).send({ error: 'Data not formatted properly' })
    }

    const user = await this.usersRepository.signin(email)

    if (user) {
      const bcrypt = require('bcrypt')
      const validPassword = await bcrypt.compare(password, user.password)

      if (validPassword) {
        const userData = {
          sub: user.id,
          iss: process.env.JWT_ISS,
          name: user.name,
          email: user.email
        }

        jwt.sign(
          userData,
          process.env.JWT_PRIVATE_KEY,
          { expiresIn: process.env.JWT_EXPIRE },
          (err: any, token: string | string[]) => {
            if (err) {
              res
                .status(500)
                .json({ mensagem: 'Não foi possível gerar o token' })
              return
            }

            res.set('x-access-token', token)
            res.end()
          }
        )
      } else {
        res.status(404).json({ message: 'Usuário e/ou senha invalida' })
        res.end()
      }
    } else {
      res.status(404).json({ message: 'Não foi possível realizar o login' })
      res.end()
    }
  }

  getExpiresToken = async (token: any) => {
    return token.exp
  }

  logout = async (req: Request, res: Response) => {
    const oldToken = req.headers.authorization

    const decoded = jwt.verify(oldToken, process.env.JWT_PRIVATE_KEY)

    const blackList = new BlackList()
    blackList.token = oldToken
    blackList.expires = new Date((await this.getExpiresToken(decoded)) * 1000)

    this.blackListRepository.addToBlackList(blackList)

    res.set('x-access-token', null)
    res.end()
  }
}
