import React from 'react'
import { Route, Redirect } from 'react-router-dom'

import * as ROUTES from '../../Constants/routes'

const PrivateRoute = ({component: Component, ...rest}) => {
  const user = rest.user;

  return (
    <Route
      {...rest}
      render={(props) =>
        user ? (
          <Component {...props} />
        ) : (
          <Redirect to={ROUTES.LANDING} />
        )
      }
      >

    </Route>
  )}


export default PrivateRoute