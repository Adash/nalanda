import React from 'react'
import { Link, useHistory } from 'react-router-dom'
import SignOut from '../SignOut'
import * as ROUTES from '../../Constants/routes'
import { withAuthentication } from '../Session'
import './navbar.css'
import SignInButton from '../Buttons/SignInOutButton'

const Navbar = ({ user }) => {
  const history = useHistory()

  const signIn = () => {
    history.push(ROUTES.SIGNIN)
  }

  return (
    <div className="q_navbar">
      <p className="logo"> Nalanda </p>
      {user ? (
        <>
          <div className="nav_links">
            <Link to={ROUTES.LANDING}>Home</Link>
            <Link to={ROUTES.HOME}>Add</Link>
            <Link to={ROUTES.MAINHALL}>Read</Link>
          </div>
          <SignOut />
        </>
      ) : (
        <SignInButton onClick={signIn}>Sign In</SignInButton>
      )}
    </div>
  )
}

export default withAuthentication(Navbar)
