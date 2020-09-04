import React from 'react';
import './App.css';
import Profile from './components/Profile';
import Jobs from './components/Jobs';
import { BrowserRouter } from 'react-router-dom';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';

function App() {
  return (
    <div className="App">
     <BrowserRouter>
        
          
          <Route path='/profile' component={Profile}/>
          <Route path='/jobs' component={Jobs}/>
          <Route exact path="/">
             <Redirect to="/profile" />
         </Route>

      </BrowserRouter>

    </div>
  );
}

export default App;
