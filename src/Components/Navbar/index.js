import React from 'react';
import { Link } from 'react-router-dom';
import * as ROUTES from '../../Constants/routes';

import './navbar.css';

const Navbar = () => {

  return (
    <div className="q_navbar">
      <h2 id="q_navbar_title"> Navbar </h2>
      <div className="nav_links">
        <Link to={ROUTES.LANDING} >Landing</Link>
        <Link to={ROUTES.HOME} >Home</Link>
        <Link to={ROUTES.POD} >Pod</Link>
      </div>
      <button className="lnk">
        <Link  to={ROUTES.SIGNIN}>Sign In</Link>
      </button>
    </div>
  )
}

export default Navbar;