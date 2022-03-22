import actions from './action';

const initState = {
    user: {},
    errorData: {},
    action: null,
    token: null,
    message: null,
    loading: false,
};

export default (state = initState, action) => {
    switch (action.type) {
        case actions.LOGIN_REQUEST:
            return {
                ...state,
                errorData: {},
                action: action.type,
                token: null,
                loading: true,
                message: null
            };
        case actions.LOGIN_SUCCESS:
            return {
                ...state,
                user: action.payload,
                action: action.type,
                loading: false,
                token: action.payload.token
            };
        case actions.LOGIN_ERROR:
            return {
                ...state,
                errorData: action.errors || {},
                action: action.type,
                token: null,
                loading: false,
                message: action.payload
            };
        case actions.LOGOUT_REQUEST:
            return {
                ...initState,
                action: action.type
            };
        case actions.LOGOUT_SUCCESS:
            return {
                ...initState,
                user: {},
                token: null,
                action: action.type
            };
        case actions.LOGOUT_ERROR:
            return {
                ...state,
                action: action.type
            };
        default:
            return state;
    }
};