import { Request, Response } from 'express'
import UserRepository from '../services/repositories/UserRepository'

export default class UserController {
  private repository: UserRepository

  constructor() {
    this.repository = new UserRepository()
  }

  getById = async (req: Request, res: Response) => {
    const { sub } = req.body.user

    const user = await this.repository.getById(sub)
    res.json(user)
    res.end()
  }

  getAll = async (req: Request, res: Response) => {
    const all = await this.repository.getAll()
    res.json(all)
    res.end()
  }
}
