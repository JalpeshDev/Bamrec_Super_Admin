import actions from './action';

const initState = {
    loading: false,
    message: null,
    errorData: {},
    action: null,
    durationList: [],
    organizationList: [],
    livingEnvironmentList: [],
    data: {},
};

export default (state = initState, action) => {
    switch (action.type) {
        case actions.GET_DURATION_REQUEST:
            return {
                ...state,
                errorData: {},
                loading: true,
                message: null,
                data: {},
                action: action.type
            };
        case actions.GET_DURATION_SUCCESS:
            return {
                ...state,
                loading: false,
                durationList: action.payload,
                action: action.type
            };
        case actions.GET_DURATION_ERROR:
            return {
                ...state,
                loading: false,
                message: action.payload,
                errorData: action.errors || {},
                action: action.type
            };
        case actions.GET_ORGANIZATION_REQUEST:
            return {
                ...state,
                errorData: {},
                loading: true,
                message: null,
                data: {},
                action: action.type
            };
        case actions.GET_ORGANIZATION_SUCCESS:
            return {
                ...state,
                loading: false,
                organizationList: action.payload,
                action: action.type
            };
        case actions.GET_ORGANIZATION_ERROR:
            return {
                ...state,
                loading: false,
                message: action.payload,
                errorData: action.errors || {},
                action: action.type
            };
        case actions.GET_LIVINGENVIRNOMENT_REQUEST:
            return {
                ...state,
                errorData: {},
                loading: true,
                message: null,
                data: {},
                action: action.type
            };
        case actions.GET_LIVINGENVIRNOMENT_SUCCESS:
            return {
                ...state,
                loading: false,
                livingEnvironmentList: action.payload,
                action: action.type
            };
        case actions.GET_LIVINGENVIRNOMENT_ERROR:
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

