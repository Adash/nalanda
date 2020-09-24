import React from 'react'
import { Link } from 'react-router-dom'
import SignOut from '../SignOut'
import * as ROUTES from '../../Constants/routes'
import { withAuthentication } from '../Session'
import './navbar.css'

const Navbar = ({ user }) => {
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
        <button className="lnk">
          <Link to={ROUTES.SIGNIN}>Sign In</Link>
        </button>
      )}
    </div>
  )
}

export default withAuthentication(Navbar)
