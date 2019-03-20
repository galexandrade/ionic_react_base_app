import { StateType } from 'typesafe-actions';

import rootReducer from './root-reducer';

import * as userActions from './user/actions';

export { default } from './store';
export { default as rootReducer } from './root-reducer';

export const actions = {
  user: userActions
}

export type RootState = StateType<typeof rootReducer>;
