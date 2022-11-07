import BlackList from '../../entities/BlackList'

export default interface BlackListInterface {
  addToBlackList: (blackList: BlackList) => Promise<BlackList>
  validate: (token: string) => Promise<BlackList>
  eraseOldToken: () => void
}
