
const actions = {
    ADD_JOB_REQUEST_DATA:"ADD_JOB_REQUEST_DATA",
    ADD_AVAILABLE_MENTORS: "ADD_AVAILABLE_MENTORS",
    FILTER_AVAILABLE_MENTORS: "FILTER_AVAILABLE_MENTORS",    
    DELETE_JOB_REQUEST_DATA: "DELETE_JOB_REQUEST_DATA",

    availableMentors: (payload) => ({
      type: actions.ADD_AVAILABLE_MENTORS,
      payload,
    }),
    filterAvilableMentors: (payload) => ({
        type: actions.ADD_AVAILABLE_MENTORS,
        payload,
      }),
  };
  
  export default actions;
  
  