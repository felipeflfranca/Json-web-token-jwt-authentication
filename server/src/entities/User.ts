interface UserProps {
  id?: number
  name: string
  email: string
  phone: string
}

export default class User {
  id?: number
  name: string
  email: string
  phone: string

  constructor(props: UserProps) {
    this.id = props.id
    this.name = props.name
    this.email = props.email
    this.phone = props.phone
  }
}
