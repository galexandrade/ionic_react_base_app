import React from 'react';
import { connect } from 'react-redux';
import { RootState } from '../store';
import { IonIcon, IonMenu, IonHeader, IonToolbar, IonTitle, IonContent, IonList, IonListHeader, IonItem, IonLabel, IonMenuToggle } from '@ionic/react';
import { RouteComponentProps, withRouter } from 'react-router';

const routes = {
  appPages: [
    { title: 'Home', path: '/', icon: 'home' },
    { title: 'Login', path: '/login', icon: 'login' },
  ]
}

type Props = RouteComponentProps<{}> & ReturnType<typeof mapStateToProps>;

const Menu: React.SFC<Props> = ({ isAuthenticated, history }) => {

  function renderlistItems(list: any[]) {
    return list
      .filter(route => !!route.path)
      .map((p) => (
        <IonMenuToggle key={p.title} auto-hide="false">
          <IonItem button onClick={() => history.push(p.path)}>
            <IonIcon slot="start" name={p.icon}></IonIcon>
            <IonLabel>
              {p.title}
            </IonLabel>
          </IonItem>
        </IonMenuToggle>
      ));
  }

  return (
    <IonMenu contentId="main">
      <IonHeader>
        <IonToolbar>
          <IonTitle>Menu</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent class="outer-content">
        <IonList>
          <IonListHeader>
            Navigate
          </IonListHeader>
          { renderlistItems(routes.appPages) }
        </IonList>
      </IonContent>
    </IonMenu>
  );
}

const mapStateToProps = (state: RootState) => ({
  isAuthenticated: state.user.isAuthenticated
});

export default withRouter(connect(
  mapStateToProps
)(Menu));
