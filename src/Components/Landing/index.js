import React from 'react'
import { AuthUserContext } from '../Session'

const LandingPage = () => {
  return (
    <AuthUserContext.Consumer>
      {user => (
        <div>
          <h4>Landing Page</h4>
          <div>
            {user ? <p>User ID : {user.uid}</p> : <p>You are not logged in</p>}
          </div>
        </div>
      )}
    </AuthUserContext.Consumer>
  )
}

export default LandingPage
