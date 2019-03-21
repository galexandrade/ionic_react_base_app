import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { RouteComponentProps } from 'react-router';
import { connect } from '../store/store';

type Props = ReturnType<typeof mapStateToProps> & {
  component: React.ComponentType<RouteComponentProps<any>> | React.ComponentType<any>;
  path?: string | string[];
}

const PrivRoute = (props: Props) => {
  const Component = props.component;

  const routeRender = () => {
    if (props.user.isAuthenticated) {
      return React.createElement(Component, props);
    }
    return (
      <Redirect to={{
        pathname: '/login',
        state: { from: props.location }
      }}/>
    );
  }

  return <Route render={routeRender} />;
}

const PubRoute = (props: Props) => {
  console.log('Public', props);
  return (
    <Route {...props}/>
  );
}

const mapStateToProps = (state: any, props: any) => ({
  ...props,
  user: state.user
});

export const PrivateRoute = connect(mapStateToProps)(PrivRoute);
export const PublicRoute = connect(mapStateToProps)(PubRoute);
