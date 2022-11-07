import Users from '../../database/typeorm/entities/Users'

export default interface UsersInterface {
  signin: (email: string) => Promise<Users>
  getById: (id: number) => Promise<Users>
  getAll: () => Promise<Users[]>
}
