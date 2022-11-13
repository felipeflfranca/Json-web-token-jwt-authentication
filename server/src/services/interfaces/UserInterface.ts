import User from '../../database/typeorm/entities/User'

export default interface UsersInterface {
  signin: (email: string) => Promise<User>
  getById: (id: number) => Promise<User>
  getAll: () => Promise<User[]>
}
