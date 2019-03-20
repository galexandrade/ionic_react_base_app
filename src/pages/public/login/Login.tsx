import React from  'react';
import { IonButton } from '@ionic/react';

const login = (props: any) => {
    const logIn = () => {
        console.log('Login');
        props.history.push('/home')
    }

    console.log(props);
    return (
        <>
            <h1>Login</h1>
            <IonButton color="primary" onClick={logIn}>Primary</IonButton>
        </>
    );
}

export default login;