import React from  'react';
import { IonButton } from '@ionic/react';
import { Store, connect } from '../../../store/store';
import { defaultMapStateToProps } from '../../../utils/props';
import { logIn } from '../../../store/actions';

const login = (props: any) => {
    const logIn = () => {
        props.login();
        props.history.push('/home')
    }

    return (
        <>
            <h1>Login</h1>
            <IonButton color="primary" onClick={logIn}>Primary</IonButton>
        </>
    );
}

const mapDispatchToProps = (dispatch: any) => ({
    login: () => dispatch(logIn())
});

export default connect(defaultMapStateToProps, mapDispatchToProps)(login);