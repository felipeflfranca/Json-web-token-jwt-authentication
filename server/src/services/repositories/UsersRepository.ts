import { getRepository } from 'typeorm'
import TypeormUsers from '../../database/typeorm/entities/Users'
import TypeormLogin from '../../database/typeorm/entities/Login'
import UsersInterface from '../interfaces/UsersInterface'

export default class UsersRepository implements UsersInterface {
  signin = async (email: string) =>
    await getRepository(TypeormLogin).findOne({ email })

  getById = async (id: number) =>
    await getRepository(TypeormUsers).findOne({ id })

  getAll = async () => await getRepository(TypeormUsers).find()
}
