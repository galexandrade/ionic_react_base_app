import React from  'react';
import { IonButton, IonHeader, IonToolbar, IonButtons, IonBackButton, IonMenuButton, IonIcon } from '@ionic/react';
import { RouteComponentProps } from 'react-router';

type ComponentParams = {
    id: string
}

interface Props extends RouteComponentProps, React.Props<{}> {
    id: string
}

const StudentList: React.FunctionComponent<Props> = props => {
    const goBack = () => {
        console.log(props);
        props.history.goBack();
        props.id;
    };

    console.log('Histudent List', props);
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