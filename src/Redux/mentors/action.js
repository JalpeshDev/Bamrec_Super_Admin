
const actions = {
  ADD_MENTORS_DATA: "ADD_MENTORS_DATA",
  MENTORS_MODAL_VISIBLE: "MENTORS_MODAL_VISIBLE",
  CURRENT_MENTOR_DATA:"CURRENT_MENTOR_DATA",
  DELTE_MENTOR_DATA:"DELETE_MENTOR_DATA",

  modalVisible: (payload = false) => ({
    type: actions.MENTORS_MODAL_VISIBLE,
    payload,
  }),

  addMentor: (payload) => ({
    type: actions.ADD_MENTORS_DATA,
    payload,
  }),
};

export default actions;

