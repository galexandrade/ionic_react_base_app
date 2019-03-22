import React from 'react';
import { RouteComponentProps } from 'react-router';
import { State } from '../store/reducer';

export interface Props extends RouteComponentProps, React.Props<{}> {}

export const defaultMapStateToProps = (state: State, props: Props) => ({
    ...props
});