import React, { FunctionComponent } from  'react';
import { IonHeader, IonToolbar, IonButtons, IonMenuButton, IonContent, IonButton } from '@ionic/react';
import { RouteComponentProps } from 'react-router';
import { render } from 'react-dom';
import { Props } from '../../../utils/props';
import { connect } from '../../../store/store';

const Menu: FunctionComponent<Props> = props => {
    const navigate = (route: string) => {
        props.history.push(route);
    }

    return (
        <React.Fragment>
            <IonHeader>
                <IonToolbar color="primary">
                    <IonButtons slot="start">
                        <IonMenuButton></IonMenuButton>
                    </IonButtons>
                </IonToolbar>       
            </IonHeader>
            <IonContent>
                <h1>Home</h1>
                <IonButton color="primary" onClick={navigate.bind(null, '/home/students')}>Students</IonButton>
            </IonContent>
        </React.Fragment>
    );
}

const mapStateToProps = (state: any, props: any) => ({
    ...props,
    user: state.user
});

export default connect(mapStateToProps)(Menu);