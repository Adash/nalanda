import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { compose } from 'recompose'
import { withFirebase } from '../Firebase'

import * as ROUTES from '../../Constants/routes'
import './signin.css'

const INITIAL_STATE = {
  email: '',
  password: '',
  error: null,
}

class SignInFormBase extends Component {
  constructor(props) {
    super(props)

    this.state = { ...INITIAL_STATE }
  }

  onChange = (event) => {
    this.setState({ [event.target.name]: event.target.value, })
  }

  onSubmit = (event) => {
    const { email, password } = this.state

    event.preventDefault()
    console.log(this.state)

    this.props.firebase.fbSignIn(email, password)
      .then(() => {
        this.setState({ ...INITIAL_STATE })
        this.props.history.push(ROUTES.HOME)
      })
      .catch(error => {
        this.setState({ error })
      })

  }

  render () {
    const { email, password, error } = this.state
    const isInvalid = password === '' || email === ''

    return (
      <form onSubmit={ this.onSubmit } >
        <input 
          name="email"
          value={ email }
          onChange={ this.onChange }
          type="email"
          placeholder="email"
          className="q_input"
        />
        <input 
          name="password"
          value={ password }
          onChange={ this.onChange }
          type="password"
          placeholder="password"
          className="q_input"
        />
        <button 
          disabled={ isInvalid }
          type="submit"
          className="btn btn-primary"
          id="main_button"
        >
          Log In
        </button>
        <br/>
        {/* <Link 
          to={ROUTES.PASSWORD_FORGET}
          id="reset_link"
        >Reset Password</Link>
        <Link 
          to={ROUTES.SIGN_UP}
          id="signup_link"
        >Sign Up</Link> */}
        { error && <p>{error.message}</p> }
      </form>
    )
  }
}

const SignInForm = compose(
  withRouter,
  withFirebase,
)(SignInFormBase)

export default SignInForm