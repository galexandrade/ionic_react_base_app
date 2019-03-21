import React from 'react';
import { IonIcon, IonMenu, IonHeader, IonToolbar, IonTitle, IonContent, IonList, IonListHeader, IonItem, IonLabel, IonMenuToggle } from '@ionic/react';
import { withRouter } from 'react-router';
import { Props } from '../utils/props';

const routes = {
  appPages: [
    { title: 'Home', path: '/', icon: 'home' },
    { title: 'Logout', path: '/login', icon: 'login' },
  ]
}

const Menu = (props: Props) => {
  console.log('Menu props', props);
  const renderlistItems = (list: any[]) => {
    return list
      .map((p) => (
        <IonMenuToggle key={p.title} auto-hide="false">
          <IonItem button onClick={() => props.history.push(p.path)}>
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

export default withRouter(Menu);
