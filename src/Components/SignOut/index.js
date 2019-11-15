import React from 'react'
import { Link } from 'react-router-dom'
import { withFirebase } from '../Firebase'

const SignOutButtonBase = ({ user, firebase }) => {
  const signOut = () => {
    firebase.fbSignOut().catch(error => console.log(error))
  }

  return (
    <button className="lnk">
      <Link to="#" onClick={signOut}>
        Sign Out
      </Link>
    </button>
  )
}

const SignOutButton = withFirebase(SignOutButtonBase)

export default SignOutButton
