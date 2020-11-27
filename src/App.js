import './App.css';
import React, { Fragment, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';

// Components
import Landing from './components/layouts/Landing';
import Navbar from './components/layouts/Navbar';

function App() {
  return (
    <Router>
          <Fragment>
            <Navbar/>
            <Route exact path="/" component={Landing}/>
        </Fragment>
      </Router>
  );
}

export default App;
