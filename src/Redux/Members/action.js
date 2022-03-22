const actions = {
    GET_MEMBER_REQUEST: 'GET_MEMBER_REQUEST',
    GET_MEMBER_SUCCESS: 'GET_MEMBER_SUCCESS',
    GET_MEMBER_ERROR: 'GET_MEMBER_ERROR',

    getMember: (queryParams) => ({
        type: actions.GET_MEMBER_REQUEST,
        queryParams
    }),

    getMemberSuccess: (payload = {}) => ({
        type: actions.GET_MEMBER_SUCCESS,
        payload
    }),

    getMemberFailure: (payload = '', errors = {}) => ({
        type: actions.GET_MEMBER_ERROR,
        payload,
        errors
    })
};

export default actions;