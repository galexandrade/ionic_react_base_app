import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { PrivateRoute, PublicRoute } from './utils/routing';
import Home from './pages/home/Home';
import Login from './pages/public/login/Login';
import AppStack from './pages/AppStack';
import Menu from './components/Menu';
import { IonApp, IonSplitPane, IonPage } from '@ionic/react';
import { Provider } from 'react-redux';
import '@ionic/core/css/core.css';
import '@ionic/core/css/ionic.bundle.css';
import './theme.css';

import store from './store';

const App = () => (
  <Provider store={store}>
    <Router>
      <div id="app">
        <IonApp>
          <IonSplitPane contentId="main">
            <Menu />
            <IonPage id="main">
              <Switch>
                <PublicRoute path="/login" component={Login} />
                <PrivateRoute path="/" component={AppStack} />
              </Switch>
            </IonPage>
          </IonSplitPane>
        </IonApp>
      </div>
    </Router>
  </Provider>
);

export default App;
