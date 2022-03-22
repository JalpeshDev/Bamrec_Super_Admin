import actions from './action';

const initState = {
    livingEnvironment: {},
    loading: false,
    message: null,
    errorData: {},
    action: null,
    livingEnvironmentList: [],
    data: {},
    livingEnvironmentDetail: {}
};

export default (state = initState, action) => {
    switch (action.type) {
        case actions.CREATE_LIVINGENVIRONMENT_REPORT_REQUEST:
            return {
                ...state,
                errorData: {},
                loading: true,
                message: null,
                loading: true,
                action: action.type
            };
        case actions.CREATE_LIVINGENVIRONMENT_REPORT_SUCCESS:
            return {

                ...state,
                loading: false,
                livingEnvironment: action.payload,
                loading: false,
                action: action.type
            };
        case actions.CREATE_LIVINGENVIRONMENT_REPORT_ERROR:
            return {
                ...state,
                loading: false,
                message: action.payload,
                loading: false,
                errorData: action.errors || {},
                action: action.type
            };
        case actions.GET_LIVINGENVIRONMENT_REPORT_REQUEST:
            return {
                ...state,
                errorData: {},
                loading: true,
                message: null,
                data: {},
                action: action.type
            };
        case actions.GET_LIVINGENVIRONMENT_REPORT_SUCCESS:
            return {
                ...state,
                loading: false,
                livingEnvironmentList: action.payload.livingEnvironment,
                action: action.type
            };
        case actions.GET_LIVINGENVIRONMENT_REPORT_ERROR:
            return {
                ...state,
                loading: false,
                message: action.payload,
                errorData: action.errors || {},
                action: action.type
            };
        case actions.LIVINGENVIRONMENT_DETAIL_REQUEST:
            return {
                ...state,
                errorData: {},
                loading: true,
                message: null,
                id: '',
                action: action.type
            };
        case actions.LIVINGENVIRONMENT_DETAIL_SUCCESS:
            return {

                ...state,
                loading: false,
                livingEnvironmentDetail: action.payload.data,
                action: action.type
            };
        case actions.LIVINGENVIRONMENT_DETAIL_ERROR:
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

