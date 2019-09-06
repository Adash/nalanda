import app from 'firebase/app'
import 'firebase/auth'
import 'firebase/database'
import config from './config'

class Firebase {
  constructor() {
    app.initializeApp(config)
    console.log('initialising Firebase instance')
    
    this.db = app.database()
    this.auth = app.auth()
  }

  // *** Auth API ***

  fbSignIn = (email, password) => (
    this.auth.signInWithEmailAndPassword(email, password)
  )

  fbSignOut = () => {
    console.log("Signed out...")
    return this.auth.signOut()
  }

  // user = uid => this.db.ref(`users/${uid}`)
  // users = () => this.db.ref('users')

  elements = () => this.db.ref('elements')
  element = (uid) => this.db.ref(`elements/${uid}`)

}

export default Firebase