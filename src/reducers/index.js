import { combineReducers } from "redux";

import ChartData from "./chartDataReducer";

export default combineReducers({
  chartData: ChartData,
});
