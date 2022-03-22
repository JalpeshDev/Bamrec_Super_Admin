const actions = {
    CREATE_LIVINGENVIRONMENT_REPORT_REQUEST: 'CREATE_LIVINGENVIRONMENT_REPORT_REQUEST',
    CREATE_LIVINGENVIRONMENT_REPORT_SUCCESS: 'CREATE_LIVINGENVIRONMENT_REPORT_SUCCESS',
    CREATE_LIVINGENVIRONMENT_REPORT_ERROR: 'CREATE_LIVINGENVIRONMENT_REPORT_ERROR',

    GET_LIVINGENVIRONMENT_REPORT_REQUEST: 'GET_LIVINGENVIRONMENT_REPORT_REQUEST',
    GET_LIVINGENVIRONMENT_REPORT_SUCCESS: 'GET_LIVINGENVIRONMENT_REPORT_SUCCESS',
    GET_LIVINGENVIRONMENT_REPORT_ERROR: 'GET_LIVINGENVIRONMENT_REPORT_ERROR',

    LIVINGENVIRONMENT_DETAIL_REQUEST: 'LIVINGENVIRONMENT_DETAIL_REQUEST',
    LIVINGENVIRONMENT_DETAIL_SUCCESS: 'LIVINGENVIRONMENT_DETAIL_SUCCESS',
    LIVINGENVIRONMENT_DETAIL_ERROR: 'LIVINGENVIRONMENT_DETAIL_ERROR',


    /**
   * request to create report.
   */
    createLivingEnvironmentReport: (queryParams) => ({
        type: actions.CREATE_LIVINGENVIRONMENT_REPORT_REQUEST,
        queryParams
    }),

    /**
     * when create report is successfull.
     */
    createLivingEnvironmentReportSuccess: (payload = {}) => ({
        type: actions.CREATE_LIVINGENVIRONMENT_REPORT_SUCCESS,
        payload
    }),

    /**
     * when something went wrong with create report.
     */
    createLivingEnvironmentReportFailure: (payload = '', errors = {}) => ({
        type: actions.CREATE_LIVINGENVIRONMENT_REPORT_ERROR,
        payload,
        errors
    }),

    /**
   * request to get report.
   */
    getLivingEnvironmentReport: () => ({
        type: actions.GET_LIVINGENVIRONMENT_REPORT_REQUEST
    }),

    /**
     * when get report is successfull.
     */
    getLivingEnvironmentReportSuccess: (payload = {}) => ({
        type: actions.GET_LIVINGENVIRONMENT_REPORT_SUCCESS,
        payload
    }),

    /**
     * when something went wrong with get report.
     */
    getLivingEnvironmentReportFailure: (payload = '', errors = {}) => ({
        type: actions.GET_LIVINGENVIRONMENT_REPORT_ERROR,
        payload,
        errors
    }),

    /**
 * request to detail report.
 */
    LivingEnvironmentDetail: (id) => ({
        type: actions.LIVINGENVIRONMENT_DETAIL_REQUEST,
        id
    }),

    /**
     * when detail report is successfull.
     */
    LivingEnvironmentDetailSuccess: (payload = {}) => ({
        type: actions.LIVINGENVIRONMENT_DETAIL_SUCCESS,
        payload
    }),

    /**
     * when something went wrong with detail report.
     */
    LivingEnvironmentDetailFailure: (payload = '', errors = {}) => ({
        type: actions.LIVINGENVIRONMENT_DETAIL_ERROR,
        payload,
        errors
    }),
};

export default actions;