import './App.css';
import React, { Fragment, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import { loadUser } from './actions/auth';
import setAuthToken from './utils/setAuthToken';

// Redux
import { Provider } from 'react-redux';
import store from './store';

// Components
import Landing from './components/layouts/Landing';
import Navbar from './components/layouts/Navbar';
import Login from './components/auth/Login';
import Politicos from './components/politicos/Politicos';
import Projetos from './components/projetos/Projetos';
import Projeto from './components/projetos/Projeto';
import Processos from './components/processos/Processos';
import Alert from './components/layouts/Alert';
import Dashboard from './components/dashboard/Dashboard';
import PrivateRoute from './components/routing/PrivateRoute';
import PoliticoProfile from './components/politicos/PoliticoProfile';


const App = () => {

  useEffect(() => {
    store.dispatch(loadUser());
  });

  return (
    <Provider store={store}>
      <Router>
          <Fragment>
            <Navbar/>
            <Route exact path="/" component={Landing}/>
            <section className="container">
              <Alert />
              <Switch>
                  <Route exact path="/login" component={Login}/>
                  <Route exact path="/politicos" component={Politicos}/>
                  <Route exact path="/politico/:id" component={PoliticoProfile}/>
                  <Route exact path="/projetos" component={Projetos}/>
                  <Route exact path="/projeto/:id" component={Projeto}/>
                  <Route exact path="/processos" component={Processos}/>
                  <PrivateRoute exact path="/dashboard" component={Dashboard}/>
              </Switch>
            </section>
        </Fragment>
      </Router>
    </Provider>
  );
}

export default App;
