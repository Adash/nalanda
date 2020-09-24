import React from 'react'
import { AuthUserContext } from '../Session'
import styled from 'styled-components'

const LandingWrapper = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #faf3dd;
`

const LandingPage = () => {
  return (
    <LandingWrapper>
      <AuthUserContext.Consumer>
        {(user) => (
          <div>
            <h4>Landing Page</h4>
            <div>
              {user ? (
                <p>User ID : {user.uid}</p>
              ) : (
                <p>You are not logged in</p>
              )}
            </div>
          </div>
        )}
      </AuthUserContext.Consumer>
    </LandingWrapper>
  )
}

export default LandingPage
