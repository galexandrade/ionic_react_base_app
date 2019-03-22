import React from 'react';
import { RouteComponentProps } from 'react-router';
import { InitialState } from '../store/reducer';

export interface Props extends RouteComponentProps, React.Props<{}> {}

export const defaultMapStateToProps = (state: InitialState, props: Props) => ({
    ...props
});