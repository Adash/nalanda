import React from 'react'
import { Link } from 'react-router-dom'
import { withFirebase } from '../Firebase'
import { withAuthentication } from '../Session'

const SignOutButtonBase = ({ user, firebase }) => {
  const signOut = () => {
    firebase.fbSignOut().catch(error => console.log(error))
  }

  return (
    <>
      {!user ? null : (
        <button className="lnk">
          <Link to="#" onClick={signOut}>
            Sign Out
          </Link>
        </button>
      )}
    </>
  )
}

const SignOutButton = withFirebase(SignOutButtonBase)

export default withAuthentication(SignOutButton)
