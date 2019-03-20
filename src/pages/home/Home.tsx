import React, { Component } from  'react';
import { IonHeader, IonToolbar, IonButtons, IonMenuButton, IonContent, IonButton, IonRouterOutlet } from '@ionic/react';
import { RouteComponentProps, Route, Redirect } from 'react-router';
import { render } from 'react-dom';
import { RootState } from '../../store';
import { connect } from 'react-redux';
import { Props } from '../../utils/props';
import Menu from './menu/Menu';
import StudentList from '../students/list/StudentList';

class Home extends Component<Props> {
    navigate(route: string) {
        this.props.history.push(route);
    }

    render(){
        console.log('HOME PROPS', this.props);
        return (
            <React.Fragment>
                <IonRouterOutlet>
                    <Route path="/:tab(home)/students" component={StudentList}/>
                    <Route path="/:tab(home)" component={Menu} exact={true} />
                </IonRouterOutlet>
            </React.Fragment>
        );
    }
}

const mapStateToProps = (state: RootState) => ({
    user: state.user
});

export default connect(mapStateToProps)(Home);