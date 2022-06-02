
const actions = {
  ADD_EVENTS_DATA: "ADD_EVENTS_DATA",
  EVENTS_MODAL_VISIBLE: "EVENTS_MODAL_VISIBLE",
  CURRENT_MENTOR_DATA:"CURRENT_MENTOR_DATA",
  DELTE_MENTOR_DATA:"DELETE_MENTOR_DATA",

  
  modalVisible: (payload = false) => ({
    type: actions.EVENTS_MODAL_VISIBLE,
    payload,
  }),

  // addMentor: (payload) => ({
  //   type: actions.ADD_MENTORS_DATA,
  //   payload,
  // }),
};

export default actions;

