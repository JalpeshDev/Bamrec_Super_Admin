import { stat } from "fs";
import actions from "./action";

const initState = {
  isModalVisible: false,
  mentorsData: JSON.parse(localStorage.getItem("mentors")) || [],
  currentMentorData: [],
};

export default (state = initState, action) => {
  switch (action.type) {
    case actions.MENTORS_MODAL_VISIBLE:
      return {
        ...state,
        isModalVisible: action.payload,
      };
    case actions.ADD_MENTORS_DATA: {
      console.log("in reducer", action.payload);
      localStorage.setItem("mentors", JSON.stringify(action.payload));
      return {
        ...state,
        mentorsData: action.payload,
      };
    }

    case actions.CURRENT_MENTOR_DATA: {
      return {
        ...state,
        currentMentorData: action.payload,
      };
    }

    case actions.DELTE_MENTOR_DATA: {
      let filteredData = state.mentorsData.filter((item) => {
        return item.id !== action.payload.id;
      });
      localStorage.setItem("mentors", JSON.stringify(filteredData));
      return {
        ...state,
        mentorsData: filteredData,
      };
    }

    default:
      return state;
  }
};
