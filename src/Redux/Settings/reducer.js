import actions from "./action";

const initState = {
  isModalVisible: false,
  rewardsData: JSON.parse(localStorage.getItem("Rewards")) || [],
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
    case actions.ADD_REWARDSDATA_DATA: {
      localStorage.setItem("rewardsData", JSON.stringify(action.payload));
      return {
        ...state,
        rewardsData: action.payload,
      };
    }

    case actions.DELETE_REWARDSDATA_DATA: {
      let filteredData = state.rewardsData.filter((item) => {
        return item.id !== action.payload;
      });
      localStorage.setItem("rewardsData", JSON.stringify(filteredData));
      return {
        ...state,
        rewardsData: filteredData,
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
