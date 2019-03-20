import React, { Component } from 'react';
import { IonTabs, IonTabButton, IonIcon, IonLabel, IonRouterOutlet, IonTabBar, IonPage } from '@ionic/react';
import { Route, Redirect } from 'react-router';
import Home from './home/Home';
import { Props } from '../utils/props';
import { connect } from 'react-redux';
import { RootState } from '../store';
import StudentList from './students/list/StudentList';

class AppStack  extends Component<Props> {
  render() {
    console.log('AppStack', this.props);

    return (
      <IonPage>
        <Route exact path="/" render={() => <Redirect to="/home"/>}/>
    
        <IonRouterOutlet>
          <Route path="/:tab(home)" component={Home} />
        </IonRouterOutlet>
      </IonPage>
    );
  }
} 

const mapStateToProps = (state: RootState) => ({
  user: state.user
});

export default connect(mapStateToProps)(AppStack);
