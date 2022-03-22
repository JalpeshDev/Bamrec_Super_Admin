import actions from './action';

const initState = {
    teemMeeting: {},
    loading: false,
    message: null,
    errorData: {},
    action: null,
    teemMeetingList: [],
    data: {},
    teamMeetingDetail: {}
};

export default (state = initState, action) => {
    switch (action.type) {
        case actions.CREATE_TEAMMEETING_REPORT_REQUEST:
            return {
                ...state,
                errorData: {},
                loading: true,
                message: null,
                action: action.type
            };
        case actions.CREATE_TEAMMEETING_REPORT_SUCCESS:
            return {

                ...state,
                loading: false,
                teemMeeting: action.payload,
                action: action.type
            };
        case actions.CREATE_TEAMMEETING_REPORT_ERROR:
            return {
                ...state,
                loading: false,
                message: action.payload,
                errorData: action.errors || {},
                action: action.type
            };
        case actions.GET_TEAMMEETING_REPORT_REQUEST:
            return {
                ...state,
                errorData: {},
                loading: true,
                message: null,
                data: {},
                action: action.type
            };
        case actions.GET_TEAMMEETING_REPORT_SUCCESS:
            return {
                ...state,
                loading: false,
                teemMeetingList: action.payload.teamMeeting,
                action: action.type
            };
        case actions.GET_TEAMMEETING_REPORT_ERROR:
            return {
                ...state,
                loading: false,
                message: action.payload,
                errorData: action.errors || {},
                action: action.type
            };
        case actions.TEAMMEETING_DETAIL_REQUEST:
            return {
                ...state,
                errorData: {},
                loading: true,
                message: null,
                id: '',
                action: action.type
            };
        case actions.TEAMMEETING_DETAIL_SUCCESS:
            return {

                ...state,
                loading: false,
                teamMeetingDetail: action.payload.data,
                action: action.type
            };
        case actions.TEAMMEETING_DETAIL_ERROR:
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

