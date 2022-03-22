import actions from './action';

const initState = {
    loading: false,
    message: null,
    errorData: {},
    action: null,
    subMemberList: [],
    data: {},
    livingEnvironmentDetail: {}
};

export default (state = initState, action) => {
    switch (action.type) {
        case actions.CREATE_SUBMEMBER_REQUEST:
            return {
                ...state,
                errorData: {},
                // loading: true,
                message: null,
                action: action.type
            };
        case actions.CREATE_LIVINGENVIRONMENT_REPORT_SUCCESS:
            return {

                ...state,
                loading: false,
                subMemberList: action.payload,
                action: action.type
            };
        case actions.CREATE_SUBMEMBER_ERROR:
            return {
                ...state,
                loading: false,
                message: action.payload,
                errorData: action.errors || {},
                action: action.type
            };
        default:
            return state;
    }
};

