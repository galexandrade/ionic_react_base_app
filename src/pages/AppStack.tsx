import React, { FunctionComponent } from 'react';
import { IonTabs, IonTabButton, IonIcon, IonLabel, IonRouterOutlet, IonTabBar, IonPage } from '@ionic/react';
import { Route, Redirect } from 'react-router';
import Home from './home/Home';
import { Props } from '../utils/props';
import StudentList from './students/list/StudentList';
import { connect } from '../store/store';

const AppStack: FunctionComponent<Props> = props => {
  console.log('Rendering AppStack');
  return (
    <IonPage>
      <Route exact path="/" render={() => <Redirect to="/home"/>}/>
  
      <IonRouterOutlet>
        <Route path="/:tab(home)" component={Home} />
      </IonRouterOutlet>
    </IonPage>
  );
}

export default AppStack;
