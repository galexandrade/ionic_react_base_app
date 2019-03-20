import React, { Component } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { RouteComponentProps } from 'react-router';
import { connect } from 'react-redux';
import { RootState } from '../store';

type Props = ReturnType<typeof mapStateToProps> & {
  component: React.ComponentType<RouteComponentProps<any>> | React.ComponentType<any>;
  path?: string | string[];
}

class PrivRoute extends Component<Props> {
  render() {
    const Component = this.props.component;
    const routeRender = (props: any) => {
      if (this.props.user.isAuthenticated) {
        return React.createElement(Component, props);
      }
      return (
        <Redirect to={{
          pathname: '/login',
          state: { from: props.location }
        }}/>
      );
    }
    return <Route render={routeRender.bind(this)} />;
  }
}

class PubRoute extends Component<Props> {
  render() {
    return (
      <Route {...this.props}/>
    );
  }
}

const mapStateToProps = (state: RootState) => ({
  user: state.user
});

export const PrivateRoute = connect(mapStateToProps)(PrivRoute);
export const PublicRoute = connect(mapStateToProps)(PubRoute);
