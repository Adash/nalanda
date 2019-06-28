import app from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
import config from './config';

class Firebase {
  constructor() {
    app.initializeApp(config);
    console.log('initialising Firebase instance');
    
    this.db = app.database();
    console.log(this.db);
  }


  elements = () => this.db.ref('elements');

}

export default Firebase;