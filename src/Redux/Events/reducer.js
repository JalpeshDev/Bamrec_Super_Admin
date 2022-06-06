import { stat } from "fs";
import actions from "./action";

const initState = {
  ismodelVisible : false,
  eventsData: JSON.parse(localStorage.getItem("events")) || [],
  currentEventsData: [],
};

export default (state = initState, action) => {
  switch (action.type) {
    case actions.ADD_EVENTS_DATA: {
      console.log("in reducer", action.payload);
      localStorage.setItem("events", JSON.stringify(action.payload));
      return {
        ...state,
        eventsData: action.payload,
      };
    }
    case actions.EVENTS_MODAL_VISIBLE: {
      return {
        ...state,
        ismodelVisible: action.payload,
      };
    }

    // case actions.CURRENT_Event_DATA: {
    //   return {
    //     ...state,
    //     currentEventData: action.payload,
    //   };
    // }

    // case actions.DELTE_Event_DATA: {
    //   let filteredData = state.EventsData.filter((item) => {
    //     return item.id !== action.payload.id;
    //   });
    //   localStorage.setItem("Events", JSON.stringify(filteredData));
    //   return {
    //     ...state,
    //     EventsData: filteredData,
    //   };
    // }

    default:
      return state;
  }
};
