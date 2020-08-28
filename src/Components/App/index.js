import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { withFirebase } from '../Firebase'
import { withAuthentication } from '../Session'

import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'

import Navbar from '../Navbar'
import Footer from '../Footer'
import LandingPage from '../Landing'
import HomePage from '../Home'
import Pod from '../Pod'
import MainHall from '../MainHall/MainHall'
import SignIn from '../SignIn'
import { ProtectedRoute } from '../Session'

import * as ROUTES from '../../Constants/routes'

function AppBase(props) {
  const [elements, setElements] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    const unsubscribe = props.firebase.elements().on('value', (snapshot) => {
      // convert messages list from snapshot
      const elementObject = snapshot.val()
      if (elementObject) {
        const elementsList = Object.keys(elementObject).map((key) => ({
          ...elementObject[key],
          uid: key,
        }))
        setElements(elementsList)
        setLoading(false)
      }
      return () => unsubscribe()
    })
  }, [props.firebase])

  const saveNote = (entry, entryTitle) => {
    console.log('ej ' + entry)
    const newNote = {
      author: entryTitle ? entryTitle : 'iots',
      text: entry,
      auid: 'iots108-temporary-auid',
    }
    props.firebase.elements().push(newNote)
  }

  const remover = (uid) => {
    props.firebase.element(uid).remove()
  }

  return (
    <div className="App app-container">
      <Router>
        <div className="page">
          <Navbar />
          <div className="main_container">
            {/* <button onClick={ () => console.log(props.user) }>test</button> */}
            <Route exact path={ROUTES.LANDING} component={LandingPage} />
            <ProtectedRoute
              path={ROUTES.POD}
              component={Pod}
              user={props.user}
            />
            <ProtectedRoute
              path={ROUTES.HOME}
              user={props.user}
              component={(routeProps) => (
                <HomePage
                  {...routeProps}
                  elements={elements}
                  loading={loading}
                  saveNote={saveNote}
                  remover={remover}
                />
              )}
            />
            <ProtectedRoute
              path={ROUTES.MAINHALL}
              user={props.user}
              component={(routeProps) => (
                <MainHall
                  {...routeProps}
                  elements={elements}
                  loading={loading}
                />
              )}
            />
            <Route path={ROUTES.SIGNIN} component={SignIn} />
          </div>
          <Footer />
        </div>
      </Router>
    </div>
  )
}

const App = withFirebase(AppBase)

export default withAuthentication(App)
