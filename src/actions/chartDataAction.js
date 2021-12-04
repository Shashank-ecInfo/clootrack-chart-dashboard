import {
  GET_CHART_DATA_REQUEST,
  GET_CHART_DATA_SUCCESS,
  GET_CHART_DATA_FAILED,
} from "./types";
import { BASE_URL } from "../utils/http";
import axios from "axios";

export const getChartData = () => async (dispatch) => {
  dispatch({ type: GET_CHART_DATA_REQUEST });
  try {
    const res = await axios({
      method: "GET",
      url: BASE_URL,
    });
    let data = [];
    let pieData = [];
    data = res.data.filter((d) => d.type === "Bar");
    for (let i = 0; i < data.length; i++) {
      data[i] = data[i].elements.map((dataElement, index) => ({
        x: index + 1,
        y: dataElement,
      }));
    }
    pieData = res.data.filter((d) => d.type === "Pie");
    for (let i = 0; i < pieData.length; i++) {
      pieData[i] = pieData[i].elements.map((dataElement, index) => ({
        x: dataElement + "%",
        y: dataElement,
      }));
    }
    dispatch({
      type: GET_CHART_DATA_SUCCESS,
      payload: { data: data, pieData: pieData },
    });
  } catch (error) {
    dispatch({
      type: GET_CHART_DATA_FAILED,
      payload: error,
    });
  }
};
