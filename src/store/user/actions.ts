import { createAction } from 'typesafe-actions';

export const logIn = createAction('user/LOG_IN', resolve =>
  () => resolve(true)
);

export const logOut = createAction('user/LOG_OUT', resolve =>
  () => resolve(false)
);

export const updateUserPicture = createAction('user/UPDATE_PICTURE', resolve =>
  (picture: string) => resolve(picture)
);

export const setUsername = createAction('user/SET_USERNAME', resolve =>
  (username: string) => resolve(username)
)
