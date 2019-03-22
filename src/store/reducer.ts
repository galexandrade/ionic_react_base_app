import { Action, USER_LOG_IN, USER_LOG_OUT } from './actions';

export type State = {
    user: {
        isAuthenticated: boolean
    }
}

export const initialState: State = {
    user: {
        isAuthenticated: true
    }
};

export type Reducer = (state: State, action: Action) => State;
const reducer: Reducer = (state: State, action: Action) => {
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