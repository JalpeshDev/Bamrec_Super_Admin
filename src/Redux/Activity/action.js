const actions = {
    CREATE_ACTIVITY_REPORT_REQUEST: 'CREATE_ACTIVITY_REPORT_REQUEST',
    CREATE_ACTIVITY_REPORT_SUCCESS: 'CREATE_ACTIVITY_REPORT_SUCCESS',
    CREATE_ACTIVITY_REPORT_ERROR: 'CREATE_ACTIVITY_REPORT_ERROR',


    GET_ACTIVITY_REPORT_REQUEST: 'GET_ACTIVITY_REPORT_REQUEST',
    GET_ACTIVITY_REPORT_SUCCESS: 'GET_ACTIVITY_REPORT_SUCCESS',
    GET_ACTIVITY_REPORT_ERROR: 'GET_ACTIVITY_REPORT_ERROR',

    ACTIVITY_DETAIL_REQUEST: 'ACTIVITY_DETAIL_REQUEST',
    ACTIVITY_DETAIL_SUCCESS: 'ACTIVITY_DETAIL_SUCCESS',
    ACTIVITY_DETAIL_ERROR: 'ACTIVITY_DETAIL_ERROR',
    /**
   * request to create activity report.
   */
    createActivityReport: (queryParams) => ({
        type: actions.CREATE_ACTIVITY_REPORT_REQUEST,
        queryParams
    }),

    /**
     * when create activity report is successfull.
     */
    createActivityReportSuccess: (payload = {}) => ({
        type: actions.CREATE_ACTIVITY_REPORT_SUCCESS,
        payload
    }),

    /**
     * when something went wrong with create activity report.
     */
    createActivityReportFailure: (payload = '', errors = {}) => ({
        type: actions.CREATE_ACTIVITY_REPORT_ERROR,
        payload,
        errors
    }),

    /**
  * request to get activity report.
  */
    getActivityReport: () => ({
        type: actions.GET_ACTIVITY_REPORT_REQUEST
    }),

    /**
     * when get activity report is successfull.
     */
    getActivityReportSuccess: (payload = {}) => ({
        type: actions.GET_ACTIVITY_REPORT_SUCCESS,
        payload
    }),

    /**
     * when something went wrong with get activity report.
     */
    getActivityReportFailure: (payload = '', errors = {}) => ({
        type: actions.GET_ACTIVITY_REPORT_ERROR,
        payload,
        errors
    }),

    /**
* request to detail activity report.
*/
    activityDetail: (id) => ({
        type: actions.ACTIVITY_DETAIL_REQUEST,
        id
    }),

    /**
     * when detail report is successfull.
     */
    activityDetailSuccess: (payload = {}) => ({
        type: actions.ACTIVITY_DETAIL_SUCCESS,
        payload
    }),

    /**
     * when something went wrong with detail report.
     */
    activityDetailFailure: (payload = '', errors = {}) => ({
        type: actions.ACTIVITY_DETAIL_ERROR,
        payload,
        errors
    }),

};
export default actions;