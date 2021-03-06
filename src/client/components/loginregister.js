import React, { Component } from 'react'
import Error from './error'
import LoginMutation from './mutations/login'

export class LoginForm extends Component {
  state = {
    email: '',
    password: ''
  }

  login = event => {
    event.preventDefault()
    this.props.login({
      variables: {
        email: this.state.email, password: this.state.password
      }
    })
  }

  render () {
    const { error } = this.props
    return (
      <div className="login">
        <form onSubmit={this.login}>
          <label htmlFor="">Email</label>
          <input
            type="text"
            required
            onChange={event => this.setState({ email: event.target.value })}/>
          <label htmlFor="">Password</label>
          <input type="text" onChange={event => this.setState({ password: event.target.value })}/>
          <input type="submit" value="Login"/>
        </form>
        {error && (
          <Error><p>There was an error logging in !</p></Error>
        )}
      </div>
    )
  }
}

export default class LoginRegisterForm extends Component {
  render () {
    const { changeLoginState } = this.props
    return (
      <div className="authModal">
        <LoginMutation changeLoginState={changeLoginState}>
          <LoginForm></LoginForm>
        </LoginMutation>
      </div>
    )
  }
}
