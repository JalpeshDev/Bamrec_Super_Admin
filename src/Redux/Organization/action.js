const actions = {
  ADD_ORGANIZATION_DATA: "ADD_ORGANIZATION_DATA",
  DELETE_ORGANIZATION_DATA: "DELETE_ORGANIZATION_DATA",
  CURRENT_ORGANIZATION_DATA:"CURRENT_ORGANIZATION_DATA",
  CURRENT_MENU:"CURRENT_MENU",
  MODAL_VISIBLE:"MODAL_VISIBLE",
  
  modalVisible:(payload=false)=>({
    type:actions.MODAL_VISIBLE,
    payload
  }),

  addOrganization: (payload) => ({
    type: actions.ADD_ORGANIZATION_DATA,
    payload
  }),
  addOrganization: (payload) => ({
    type: actions.ADD_ORGANIZATION_DATA,
    payload
  }),

};

export default actions;