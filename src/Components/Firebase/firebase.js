import app from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
import config from './config';

class Firebase {
  constructor() {
    app.initializeApp(config);
    console.log('initialising Firebase instance');
    
    this.db = app.database();
  }


  elements = () => this.db.ref('elements');
  element = (uid) => this.db.ref(`elements/${uid}`);

}

export default Firebase;