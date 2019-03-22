
export const USER_LOG_IN = "user/LOG_IN";
export const logIn = (): LogIn => {
    return {
        type: USER_LOG_IN
    };
}

export const USER_LOG_OUT = "user/LOG_OUT";
export const logOut = ():LogOut => {
    return {
        type: USER_LOG_OUT
    };
}

// ACTION Types
export type LogIn = {
    type: "user/LOG_IN"
}

export type LogOut = {
    type: "user/LOG_OUT"
}

export type Action = 
    | LogIn
    | LogOut;