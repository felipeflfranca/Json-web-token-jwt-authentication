import * as cron from 'node-cron'
import BlackListRepository from '../../services/repositories/BlackListRepository'

export const clearBlackList = () => {
  const blackListRepository = new BlackListRepository()

  cron.schedule(process.env.CLEAR_BLACK_LIST, () => {
    blackListRepository.eraseOldToken()
  })
}
