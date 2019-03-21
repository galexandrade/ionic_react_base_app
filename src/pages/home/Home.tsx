import React from  'react';
import { IonHeader, IonToolbar, IonButtons, IonMenuButton, IonContent, IonButton, IonRouterOutlet } from '@ionic/react';
import { RouteComponentProps, Route, Redirect } from 'react-router';
import { render } from 'react-dom';
import { Props } from '../../utils/props';
import Menu from './menu/Menu';
import StudentList from '../students/list/StudentList';
import { connect } from '../../store/store';

const Home = (props: RouteComponentProps<{}>) => {
    const navigate = (route: string) => {
        props.history.push(route);
    }

    return (
        <React.Fragment>
            <IonRouterOutlet>
                <Route path="/:tab(home)/students" component={StudentList}/>
                <Route path="/:tab(home)" component={Menu} exact={true} />
            </IonRouterOutlet>
        </React.Fragment>
    );
}

const mapStateToProps = (state: any, props: any) => ({
    ...props,
    user: state.user
});

export default connect(mapStateToProps)(Home);