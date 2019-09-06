import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { withFirebase } from '../Firebase'
import './App.css'

import Navbar from '../Navbar'
import Footer from '../Footer'
import LandingPage from '../Landing'
import HomePage from '../Home'
import Pod from '../Pod'
import SignIn from '../SignIn'

import * as ROUTES from '../../Constants/routes'

function AppBase(props) {

  const [ elements, setElements ] = useState([])
  const [ loading, setLoading ] = useState(false)

  useEffect(() => {
      setLoading(true)
      const unsubscribe = props.firebase.elements().on('value', snapshot => {
      // convert messages list from snapshot
        const elementObject = snapshot.val()
        if (elementObject) {
          const elementsList = Object.keys(elementObject).map(key => ({
              ...elementObject[key],
              uid: key,
            }
          ))
          setElements(elementsList)
          setLoading(false)
        }
        return () => unsubscribe()
      })
  },[props.firebase])

  const saveNote = (note) => {
   console.log("ej "+ note) 
   const newNote = {
     author: 'iots',
     text: note,
     auid: 'iots108-temporary-auid',
   }
   props.firebase.elements().push(newNote);
  }

  const removeNote = (uid) => {
    props.firebase.element(uid).remove()
  }

  return (
    <div className="App">
      <Router>
        <div className="page">
          <Navbar />
          <div className="main_container">
            <Route exact path={ROUTES.LANDING} component={LandingPage} />
            <Route path={ROUTES.POD} component={Pod} />
            <Route 
              path={ROUTES.HOME} 
              render={(routeProps)=> 
              <HomePage 
                {...routeProps} 
                elements={elements} 
                loading={loading} 
                saveNote={saveNote}
                removeNote={removeNote}
                />} />
              <Route path={ROUTES.SIGNIN} component={SignIn}/>
          </div>
          <Footer />
        </div>
      </Router>
      
    </div>
  );
}

const App = withFirebase(AppBase)

export default App
