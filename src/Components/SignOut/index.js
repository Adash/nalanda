import React from 'react'
import { withFirebase } from '../Firebase'
import SignInOutButton from '../Buttons/SignInOutButton'

const SignOutButtonBase = ({ user, firebase }) => {
  const signOut = () => {
    firebase.fbSignOut().catch((error) => console.log(error))
  }

  return (
    // <button className="lnk">
    //   <Link to="#" onClick={signOut}>
    //     Sign Out
    //   </Link>
    // </button>
    <SignInOutButton onClick={signOut}>SignOut</SignInOutButton>
  )
}

const SignOutButton = withFirebase(SignOutButtonBase)

export default SignOutButton
