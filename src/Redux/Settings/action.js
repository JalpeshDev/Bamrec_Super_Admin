const actions = {
  ADD_REWARDSDATA_DATA: "ADD_REWARDSDATA_DATA",
  DELETE_REWARDSDATA_DATA: "DELETE_REWARDSDATA_DATA",
  // CURRENT_ORGANIZATION_DATA:"CURRENT_ORGANIZATION_DATA",
  CURRENT_MENU:"CURRENT_MENU",
  MODAL_VISIBLE:"MODAL_VISIBLE",
  
  modalVisible:(payload=false)=>({
    type:actions.MODAL_VISIBLE,
    payload
  }),

  addOrganization: (payload) => ({
    type: actions.ADD_REWARDSDATA_DATA,
    payload
  }),
  addOrganization: (payload) => ({
    type: actions.ADD_REWARDSDATA_DATA,
    payload
  }),

};

export default actions;