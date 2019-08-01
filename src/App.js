import React from 'react';
import './App.css';
import SignUp from './components/signup';
import MailLogin from './components/mail-login';
import Homepage from './components/homepage';
import Search from './components/search';
import Bookmark from './components/bookmark';
import Profile from './components/profile';
import { Route, BrowserRouter as Router } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <Route exact path='/' component={SignUp} />
        <Route exact path='/signup' component={SignUp} />
        <Route exact path='/signup/mail-login' component={MailLogin} />
        <Route exact path='/homepage' component={Homepage} />
        <Route exact path='/search' component={Search} />
        <Route exact path='/bookmark' component={Bookmark} />
        <Route exact path='/profile' component={Profile} />
      </Router>
    </div>
  );
}

export default App;
