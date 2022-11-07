interface LoginProps {
  email: string
  password: string
}

export default class Login {
  email: string
  password: string

  constructor(props: LoginProps) {
    this.email = props.email
    this.password = props.password
  }
}
