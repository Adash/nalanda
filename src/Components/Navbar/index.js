import React from 'react'
import { Link } from 'react-router-dom'
import SignOut from '../SignOut'
import * as ROUTES from '../../Constants/routes'
import { withAuthentication } from '../Session'
import './navbar.css'

const Navbar = ({ user }) => {
  return (
    <div className="q_navbar">
      <h2 id="q_navbar_title"> Navbar </h2>
      {user ? (
        <>
          <div className="nav_links">
            <Link to={ROUTES.LANDING}>Landing</Link>
            <Link to={ROUTES.HOME}>Home</Link>
            <Link to={ROUTES.POD}>Pod</Link>
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
