import actions from "./action";

const initState = {
  isModalVisible: false,
  familyData: JSON.parse(localStorage.getItem("family")) || [],
  currentFamilyData: [],
  availableMentors:JSON.parse(localStorage.getItem("mentors")) || [],
};

export default (state = initState, action) => {
  switch (action.type) {
    case actions.FAMILY_MODAL_VISIBLE:
      return {
        ...state,
        isModalVisible: action.payload,
      };
    case actions.ADD_FAMILY_DATA: {
      localStorage.setItem("family", JSON.stringify(action.payload));
      return {
        ...state,
        familyData: action.payload,
      };
    }

    case actions.CURRENT_FAMILY_DATA: {
      return {
        ...state,
        currentFamilyData: action.payload,
      };
    }

    case actions.DELETE_FAMILY_DATA: {
      let filteredData = state.familyData.filter((item) => {
        return item.id !== action.payload.id;
      });
      localStorage.setItem("family", JSON.stringify(filteredData));
      return {
        ...state,
        familyData:filteredData,
      };
    }
    case actions.CURRENT_AVAILABLE_MENTORS:{

      return{
        ...state,
        availableMentors:action.payload
      }
    }

    default:
      return state;
  }
};
