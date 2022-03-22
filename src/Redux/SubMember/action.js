const actions = {
    CREATE_SUBMEMBER_REQUEST: 'CREATE_SUBMEMBER_REQUEST',
    CREATE_SUBMEMBER_SUCCESS: 'CREATE_SUBMEMBER_SUCCESS',
    CREATE_SUBMEMBER_ERROR: 'CREATE_SUBMEMBER_ERROR',


    /**
   * request to get create SubMember.
   */
    createSubMember: (queryParams) => ({
        type: actions.CREATE_SUBMEMBER_REQUEST,
        queryParams
    }),

    /**
     * when SubMember is successfull.
     */
    createSubMemberSuccess: (payload = {}) => ({
        type: actions.CREATE_SUBMEMBER_SUCCESS,
        payload
    }),

    /**
     * when something went wrong with SubMember.
     */
    createSubMemberFailure: (payload = '', errors = {}) => ({
        type: actions.CREATE_SUBMEMBER_ERROR,
        payload,
        errors
    }),


};

export default actions;