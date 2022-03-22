const actions = {
    CREATE_TEAMMEETING_REPORT_REQUEST: 'CREATE_TEAMMEETING_REPORT_REQUEST',
    CREATE_TEAMMEETING_REPORT_SUCCESS: 'CREATE_TEAMMEETING_REPORT_SUCCESS',
    CREATE_TEAMMEETING_REPORT_ERROR: 'CREATE_TEAMMEETING_REPORT_ERROR',

    GET_TEAMMEETING_REPORT_REQUEST: 'GET_TEAMMEETING_REPORT_REQUEST',
    GET_TEAMMEETING_REPORT_SUCCESS: 'GET_TEAMMEETING_REPORT_SUCCESS',
    GET_TEAMMEETING_REPORT_ERROR: 'GET_TEAMMEETING_REPORT_ERROR',

    TEAMMEETING_DETAIL_REQUEST: 'TEAMMEETING_DETAIL_REQUEST',
    TEAMMEETING_DETAIL_SUCCESS: 'TEAMMEETING_DETAIL_SUCCESS',
    TEAMMEETING_DETAIL_ERROR: 'TEAMMEETING_DETAIL_ERROR',


    /**
   * request to create report.
   */
    createTeemMeetingReport: (queryParams) => ({
        type: actions.CREATE_TEAMMEETING_REPORT_REQUEST,
        queryParams
    }),

    /**
     * when create report is successfull.
     */
    createTeemMeetingReportSuccess: (payload = {}) => ({
        type: actions.CREATE_TEAMMEETING_REPORT_SUCCESS,
        payload
    }),

    /**
     * when something went wrong with create report.
     */
    createTeemMeetingReportFailure: (payload = '', errors = {}) => ({
        type: actions.CREATE_TEAMMEETING_REPORT_ERROR,
        payload,
        errors
    }),

    /**
   * request to get report.
   */
    getTeemMeetingReport: () => ({
        type: actions.GET_TEAMMEETING_REPORT_REQUEST
    }),

    /**
     * when get report is successfull.
     */
    getTeemMeetingReportSuccess: (payload = {}) => ({
        type: actions.GET_TEAMMEETING_REPORT_SUCCESS,
        payload
    }),

    /**
     * when something went wrong with get report.
     */
    getTeemMeetingReportFailure: (payload = '', errors = {}) => ({
        type: actions.GET_TEAMMEETING_REPORT_ERROR,
        payload,
        errors
    }),

    /**
 * request to detail report.
 */
    teemMeetingDetail: (id) => ({
        type: actions.TEAMMEETING_DETAIL_REQUEST,
        id
    }),

    /**
     * when detail report is successfull.
     */
    teemMeetingDetailSuccess: (payload = {}) => ({
        type: actions.TEAMMEETING_DETAIL_SUCCESS,
        payload
    }),

    /**
     * when something went wrong with detail report.
     */
    teemMeetingDetailFailure: (payload = '', errors = {}) => ({
        type: actions.TEAMMEETING_DETAIL_ERROR,
        payload,
        errors
    }),
};

export default actions;