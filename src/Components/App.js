import React, { Component } from 'react';
// import logo from './logo.svg';
import '../Styles/App.css';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import Home from './Home';
import Details from './Details';
import MainLogo from './_MainLogo';

let logoUrl ='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRj4xG0xzHVKjQdvDjhExHyEM8wa9oF3RBhAoKK5qcWTFrD5B0H'
 
class App extends Component {
  render() {
    return (
      <Router >
        <div className="container">
          <MainLogo  logoUrl={logoUrl}/>
        <Switch className="container">
       
          <Route exact path="/" component={Home}/>
          <Route path="/details/:id" component={Details}/>
          <Route component={Home} /> 
          {/* Future not found page */}
        </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
