import { JsxEmit } from "typescript";
import actions from "./action";

const initState = {
  jobRequestData:
    JSON.parse(localStorage.getItem("jobRequestData") || "[]") || [],
  filteredAvailableMentors: [],
};

export default (state = initState, action) => {
  switch (action.type) {
    case actions.FILTER_AVAILABLE_MENTORS: {
      return {
        ...state,
        filteredAvailableMentors: action.payload,
      };
    }

    case actions.ADD_JOB_REQUEST_DATA: {
      return {
        ...state,
        jobRequestData: action.payload,
      };
    }
    case actions.DELETE_JOB_REQUEST_DATA: {
      localStorage.setItem("jobRequestData", JSON.stringify(action.payload));
      return {
        ...state,
        jobRequestData: action.payload,
      };
    }

    default:
      return state;
  }
};
