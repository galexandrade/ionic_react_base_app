import { Action, USER_LOG_IN, USER_LOG_OUT } from './actions';

export type InitialState = {
    user: {
        isAuthenticated: boolean
    }
}

export const initialState: InitialState = {
    user: {
        isAuthenticated: true
    }
};

export type Reducer = (state: InitialState, action: Action) => InitialState;
const reducer: Reducer = (state: InitialState, action: Action) => {
    switch (action.type) {
        case USER_LOG_IN:
            return {
                ...state,
                isAuthenticated: true
            };
        case USER_LOG_OUT:
            return {
                ...state,
                isAuthenticated: false
            };
        default:
            return state;
    }
};

export default reducer;