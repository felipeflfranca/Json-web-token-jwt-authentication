import { getRepository, LessThan } from 'typeorm'
import BlackListInterface from '../interfaces/BlackListInterface'
import TypeormBlackList from '../../database/typeorm/entities/BlackList'
import BlackList from '../../entities/BlackList'
import { format } from 'date-fns'

export const lessThanDate = (date: Date) =>
  LessThan(format(date, 'YYYY-MM-DD HH:MM:SS'))

export default class BlackListRepository implements BlackListInterface {
  addToBlackList = async (blackList: BlackList) =>
    await getRepository(TypeormBlackList).save(blackList)

  validate = async (token: string) =>
    await getRepository(TypeormBlackList).findOne({ token })

  eraseOldToken = async () =>
    await getRepository(TypeormBlackList)
      .createQueryBuilder('black_list')
      .delete()
      .where('expires < :expires', { expires: new Date() })
      .execute()
}
