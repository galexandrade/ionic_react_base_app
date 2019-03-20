import React from  'react';
import { IonButton, IonHeader, IonToolbar, IonButtons, IonBackButton, IonMenuButton, IonIcon } from '@ionic/react';

const StudentList = (props: any) => {
    const goBack = () => {
        console.log(props);
        props.history.goBack();
    };

    console.log(props);
    return (
        <>
            <IonHeader>
                <IonToolbar color="primary">
                    <IonButtons slot="start">
                        <IonButton fill="clear" onClick={goBack}>
                            <IonIcon name="arrow-back" />
                        </IonButton>
                    </IonButtons>
                </IonToolbar>       
            </IonHeader>
        </>
    );
}

export default StudentList;