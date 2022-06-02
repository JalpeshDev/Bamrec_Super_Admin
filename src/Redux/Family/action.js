const actions = {
  ADD_FAMILY_DATA: "ADD_FAMILY_DATA",
  FAMILY_MODAL_VISIBLE: "FAMILY_MODAL_VISIBLE",
  DELETE_FAMILY_DATA:"DELETE_FAMILY_DATA",
  CURRENT_FAMILY_DATA:"CURRENT_FAMILY_DATA",
  CURRENT_AVAILABLE_MENTORS:"CURRENT_AVAILABLE_MENTORS",

  modalVisible: (payload = false) => ({
    type: actions.FAMILY_MODAL_VISIBLE,
    payload,
  }),

  addFamily: (payload) => ({
    type: actions.ADD_FAMILY_DATA,
    payload,
  }),
};

export default actions;