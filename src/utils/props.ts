import React from 'react';
import { RouteComponentProps } from 'react-router';

export type Props = ReturnType<any> & {
    component: React.ComponentType<RouteComponentProps<any>> | React.ComponentType<any>;
    path?: string | string[];
}

export const defaultMapStateToProps = (state: any, props: any) => ({
    ...props
});