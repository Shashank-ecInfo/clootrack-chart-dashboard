import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { VictoryPie, VictoryTheme } from "victory";
import { getChartData } from "../actions/chartDataAction";
import "./Dashboard.css";

const PieChart = () => {
  const dispatch = useDispatch();

  const chartData = useSelector((state) => state.chartData.pieData);
  const isLoading = useSelector((state) => state.chartData.isLoading);

  useEffect(() => {
    dispatch(getChartData());
  }, []);

  if (isLoading) {
    return (
      <div className="graph-wrapper">
        <span>Loading...</span>
      </div>
    );
  }

  return (
    <div className="graph-wrapper">
      {chartData.map((d, i) => (
        <VictoryPie
          key={i}
          theme={VictoryTheme.material}
          colorScale={["#ffcd32", "#47acb1", "#f26522"]}
          style={{ parent: { maxWidth: "70%" } }}
          data={d}
        />
      ))}
    </div>
  );
};

export default PieChart;
