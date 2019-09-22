import React from 'react';
import { Link  } from 'react-router-dom';

import { withFirebase } from '../Firebase';

const SignOutButton = ({firebase}) => {

  const signOut = () => {
    firebase.fbSignOut()
      .catch(error => console.log(error))
  }

  return (
      <button className="lnk">
        <Link to="#" onClick={ signOut }>
          Sign Out
        </Link>
      </button>
  )}

export default withFirebase(SignOutButton);