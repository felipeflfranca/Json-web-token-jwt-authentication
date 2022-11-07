interface BlackListProps {
  token: string
  expires: Date
}

export default class BlackList {
  token: string
  expires: Date

  constructor(props: BlackListProps) {
    this.token = props.token
    this.expires = props.expires
  }
}
