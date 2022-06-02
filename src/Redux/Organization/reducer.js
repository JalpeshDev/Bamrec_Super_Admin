import actions from "./action";

const initState = {
  isModalVisible: false,
  organizationData: JSON.parse(localStorage.getItem("organization")) || [],
  organizationPendingData:
    JSON.parse(localStorage.getItem("organizationPendingData")) || [],
  currentOrganizationData: [],
  currentMenu: "",
};

export default (state = initState, action) => {
  switch (action.type) {
    case actions.MODAL_VISIBLE:
      return {
        ...state,
        isModalVisible: action.payload,
      };
    case actions.ADD_ORGANIZATION_DATA: {
      localStorage.setItem("organization", JSON.stringify(action.payload));
      return {
        ...state,
        organizationData: action.payload,
      };
    }

    case actions.DELETE_ORGANIZATION_DATA: {
      let filteredData = state.organizationData.filter((item) => {
        return item.id !== action.payload;
      });
      localStorage.setItem("organization", JSON.stringify(filteredData));
      return {
        ...state,
        organizationData: filteredData,
      };
    }

    case actions.CURRENT_MENU: {
      return {
        ...state,
        currentMenu: action.payload,
      };
    }

    case actions.CURRENT_ORGANIZATION_DATA: {
      return {
        ...state,
        currentOrganizationData: action.payload,
      };
    }
    default:
      return state;
  }
};
