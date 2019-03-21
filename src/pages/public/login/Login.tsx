import React from  'react';
import { IonButton } from '@ionic/react';
import { Store, connect } from '../../../store/store';
import { defaultMapStateToProps } from '../../../utils/props';

const login = (props: any) => {
    console.log('AKI', props);
    const logIn = () => {
        console.log('Login');
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
    login: () => dispatch({ type: "user/LOG_IN" })
});

export default connect(defaultMapStateToProps, mapDispatchToProps)(login);