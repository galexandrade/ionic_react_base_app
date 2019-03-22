import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { PrivateRoute, PublicRoute } from './utils/routing';
import Login from './pages/public/login/Login';
import AppStack from './pages/AppStack';
import SideMenu from './components/SideMenu';
import { IonApp, IonSplitPane, IonPage } from '@ionic/react';
import '@ionic/core/css/core.css';
import '@ionic/core/css/ionic.bundle.css';
import './theme.css';

import { Provider, connect } from './store/store';

const App = () => {
  return (
    <Provider>
      <Router>
        <div id="app">
          <IonApp>
            <IonSplitPane contentId="main">
              <SideMenu />
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
}

export default App;
