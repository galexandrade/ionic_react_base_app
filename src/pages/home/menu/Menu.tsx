import React, { Component } from  'react';
import { IonHeader, IonToolbar, IonButtons, IonMenuButton, IonContent, IonButton } from '@ionic/react';
import { RouteComponentProps } from 'react-router';
import { render } from 'react-dom';
import { RootState } from '../../../store';
import { connect } from 'react-redux';
import { Props } from '../../../utils/props';

class Menu extends Component<Props> {
    navigate(route: string) {
        this.props.history.push(route);
    }

    render(){
        console.log('HOME PROPS', this.props);
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
                    <IonButton color="primary" onClick={this.navigate.bind(this, '/home/students')}>Students</IonButton>
                </IonContent>
            </React.Fragment>
        );
    }
}

const mapStateToProps = (state: RootState) => ({
    user: state.user
});

export default connect(mapStateToProps)(Menu);