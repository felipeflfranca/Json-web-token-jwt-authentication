import { Request, Response } from 'express'
import UsersRepository from '../services/repositories/UsersRepository'

export default class UsersController {
  private repository: UsersRepository

  constructor() {
    this.repository = new UsersRepository()
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
