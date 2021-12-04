import {
  GET_CHART_DATA_REQUEST,
  GET_CHART_DATA_SUCCESS,
  GET_CHART_DATA_FAILED,
} from "../actions/types";

const initState = {
  data: [],
  pieData: [],
  isLoading: false,
  error: null,
};

const ChartData = (state = initState, action) => {
  switch (action.type) {
    case GET_CHART_DATA_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case GET_CHART_DATA_SUCCESS:
      return {
        ...state,
        data: action.payload.data,
        pieData: action.payload.pieData,
        isLoading: false,
      };
    case GET_CHART_DATA_FAILED:
      return {
        ...state,
        isLoading: false,
      };
    default:
      return state;
  }
};

export default ChartData;
