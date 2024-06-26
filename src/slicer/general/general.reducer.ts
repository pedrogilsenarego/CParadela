import generalTypes from "./general.types";
import { handleBuildHistory, handleRemoveLastEndpoint } from "./general.utils";

const INITIAL_STATE = {
  loading: false,
  notificationMessage: "",
  notificationType: null,
  apiRequestMessage: "",
  apiRequestType: null,
  history: ["/"],
  lang: "EN",
  projectFiltering: false,
  hover: false,
  firstSlide: false,
};

interface Action {
  type: string;
  payload: string;
}

const generalReducer = (state = INITIAL_STATE, action: Action) => {
  switch (action.type) {
    case generalTypes.ENABLE_LOADING:
      return {
        ...state,
        loading: true,
      };
    case generalTypes.DISABLE_LOADING:
      return {
        ...state,
        loading: false,
      };
    case generalTypes.UPDATE_SUCCESS_NOTIFICATION:
      return {
        ...state,
        notificationMessage: action.payload,
        notificationType: "success",
      };
    case generalTypes.UPDATE_FAIL_NOTIFICATION:
      return {
        ...state,
        notificationMessage: action.payload,
        notificationType: "fail",
      };
    case generalTypes.UPDATE_INFORMATION_NOTIFICATION:
      return {
        ...state,
        notificationMessage: action.payload,
        notificationType: "information",
      };
    case generalTypes.CLEAR_NOTIFICATION:
      return {
        ...state,
        notificationMessage: "",
        notificationType: null,
      };
    case generalTypes.UPDATE_SUCCESS_API_REQUEST:
      return {
        ...state,
        apiRequestMessage: action.payload,
        apiRequestType: "success",
      };
    case generalTypes.UPDATE_FAIL_API_REQUEST:
      return {
        ...state,
        apiRequestMessage: action.payload,
        apiRequestType: "fail",
      };
    case generalTypes.CLEAR_API_REQUEST:
      return {
        ...state,
        apiRequestMessage: "",
        apiRequestType: null,
      };
    case generalTypes.SAVE_LAST_ENDPOINT:
      return {
        ...state,
        history: handleBuildHistory(state.history, action.payload),
      };
    case generalTypes.REMOVE_LAST_ENDPOINT:
      return {
        ...state,
        history: handleRemoveLastEndpoint(state.history),
      };
    case generalTypes.UPDATE_LANG:
      return {
        ...state,
        lang: action.payload,
      };
    case generalTypes.PROJECT_FILTER:
      return {
        ...state,
        projectFiltering: action.payload,
      };
    case generalTypes.HOVER:
      return {
        ...state,
        hover: action.payload,
      };
    case generalTypes.FIRST_SLIDE:
      return {
        ...state,
        firstSlide: action.payload,
      };

    default:
      return state;
  }
};

export default generalReducer;
