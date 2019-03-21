export const initialState = {
    user: {
        isAuthenticated: true
    }
};

const reducer = (state: any, action: any) => {
    const reduced = { ...state };
    switch (action.type) {
        case "user/LOG_IN":
            return {
                ...state,
                isAuthenticated: true
            };
        case "user/LOG_OUT":
            return {
                ...state,
                isAuthenticated: false
            };
        default:
            return state;
    }
};

export default reducer;