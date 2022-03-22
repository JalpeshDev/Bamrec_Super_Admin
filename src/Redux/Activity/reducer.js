import actions from './action';

const initState = {
    activity: {},
    activityList: [],
    activityDetail: {},
    loading: false,
    message: null,
    errorData: {},
    action: null,
    data: {},
};

export default (state = initState, action) => {
    switch (action.type) {
        case actions.CREATE_ACTIVITY_REPORT_REQUEST:
            return {
                ...state,
                errorData: {},
                loading: true,
                message: null,
                loading: true,
                action: action.type
            };
        case actions.CREATE_ACTIVITY_REPORT_SUCCESS:
            return {

                ...state,
                loading: false,
                activity: action.payload,
                loading: false,
                action: action.type
            };
        case actions.CREATE_ACTIVITY_REPORT_ERROR:
            return {
                ...state,
                loading: false,
                message: action.payload,
                loading: false,
                errorData: action.errors || {},
                action: action.type
            };
        case actions.GET_ACTIVITY_REPORT_REQUEST:
            return {
                ...state,
                errorData: {},
                loading: true,
                message: null,
                data: {},
                action: action.type
            };
        case actions.GET_ACTIVITY_REPORT_SUCCESS:
            return {
                ...state,
                loading: false,
                activityList: action.payload.activity,
                action: action.type
            };
        case actions.GET_ACTIVITY_REPORT_ERROR:
            return {
                ...state,
                loading: false,
                message: action.payload,
                errorData: action.errors || {},
                action: action.type
            };
        case actions.ACTIVITY_DETAIL_REQUEST:
            return {
                ...state,
                errorData: {},
                loading: true,
                message: null,
                id: '',
                action: action.type
            };
        case actions.ACTIVITY_DETAIL_SUCCESS:
            return {

                ...state,
                loading: false,
                activityDetail: action.payload.data,
                action: action.type
            };
        case actions.ACTIVITY_DETAIL_ERROR:
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

