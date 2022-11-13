import { getRepository } from 'typeorm'
import TypeormUser from '../../database/typeorm/entities/User'
import TypeormLogin from '../../database/typeorm/entities/Login'
import UserInterface from '../interfaces/UserInterface'

export default class UserRepository implements UserInterface {
  signin = async (email: string) =>
    await getRepository(TypeormLogin).findOne({ email })

  getById = async (id: number) =>
    await getRepository(TypeormUser).findOne({ id })

  getAll = async () => await getRepository(TypeormUser).find()
}
