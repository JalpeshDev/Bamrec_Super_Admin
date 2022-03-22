const actions = {
    GET_DURATION_REQUEST: 'GET_DURATION_REQUEST',
    GET_DURATION_SUCCESS: 'GET_DURATION_SUCCESS',
    GET_DURATION_ERROR: 'GET_DURATION_ERROR',

    GET_ORGANIZATION_REQUEST: 'GET_ORGANIZATION_REQUEST',
    GET_ORGANIZATION_SUCCESS: 'GET_ORGANIZATION_SUCCESS',
    GET_ORGANIZATION_ERROR: 'GET_ORGANIZATION_ERROR',

    GET_LIVINGENVIRNOMENT_REQUEST: 'GET_LIVINGENVIRNOMENT_REQUEST',
    GET_LIVINGENVIRNOMENT_SUCCESS: 'GET_LIVINGENVIRNOMENT_SUCCESS',
    GET_LIVINGENVIRNOMENT_ERROR: 'GET_LIVINGENVIRNOMENT_ERROR',

    /**
   * request to get duration.
   */
    getDuration: () => ({
        type: actions.GET_DURATION_REQUEST,
    }),

    /**
     * when duration is successfull.
     */
    getDurationSuccess: (payload = {}) => ({
        type: actions.GET_DURATION_SUCCESS,
        payload
    }),

    /**
     * when something went wrong with duration.
     */
    getDurationFailure: (payload = '', errors = {}) => ({
        type: actions.GET_DURATION_ERROR,
        payload,
        errors
    }),

    /**
  * request to get organization.
  */
    getOrganization: () => ({
        type: actions.GET_ORGANIZATION_REQUEST,
    }),

    /**
     * when organization is successfull.
     */
    getOrganizationSuccess: (payload = {}) => ({
        type: actions.GET_ORGANIZATION_SUCCESS,
        payload
    }),

    /**
     * when something went wrong with organization.
     */
    getOrganizationFailure: (payload = '', errors = {}) => ({
        type: actions.GET_ORGANIZATION_ERROR,
        payload,
        errors
    }),

    /**
* request to get livingEnvironment.
*/
    getLivingEnvironment: () => ({
        type: actions.GET_LIVINGENVIRNOMENT_REQUEST,
    }),

    /**
     * when livingEnvironment is successfull.
     */
    getLivingEnvironmentSuccess: (payload = {}) => ({
        type: actions.GET_LIVINGENVIRNOMENT_SUCCESS,
        payload
    }),

    /**
     * when something went wrong with livingEnvironment.
     */
    getLivingEnvironmentFailure: (payload = '', errors = {}) => ({
        type: actions.GET_LIVINGENVIRNOMENT_ERROR,
        payload,
        errors
    }),
};

export default actions;