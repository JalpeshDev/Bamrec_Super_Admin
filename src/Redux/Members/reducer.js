import actions from './action';

const initState = {
    memberList: [],
    errorData: {},
    action: null
};

export default (state = initState, action) => {
    switch (action.type) {
        case actions.GET_MEMBER_REQUEST:
            return {
                ...state,
                errorData: {},
                action: action.type
            };
        case actions.GET_MEMBER_SUCCESS:
            return {
                ...state,
                memberList: action.payload,
                action: action.type
            };
        case actions.GET_MEMBER_ERROR:
            return {
                ...state,
                errorData: action.errors || {},
                action: action.type
            };
        default:
            return state;
    }
};