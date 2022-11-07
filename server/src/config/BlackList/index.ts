import * as cron from 'node-cron'
import BlackListRepository from '../../services/repositories/BlackListRepository'

export const clearBlackList = () => {
  console.log('Chamou a função clear black list')
  const blackListRepository = new BlackListRepository()

  cron.schedule(process.env.CLEAR_BLACK_LIST, () => {
    console.log('executou a cron: ', process.env.CLEAR_BLACK_LIST)
    blackListRepository.eraseOldToken()
  })
}
