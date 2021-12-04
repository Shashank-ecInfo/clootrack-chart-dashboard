import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { VictoryBar, VictoryChart, VictoryTheme } from "victory";
import { getChartData } from "../actions/chartDataAction";
import "./Dashboard.css";

const BarChart = () => {
  const dispatch = useDispatch();

  const chartData = useSelector((state) => state.chartData.data);
  const isLoading = useSelector((state) => state.chartData.isLoading);

  useEffect(() => {
    dispatch(getChartData());
  }, []);

  const getRandomColor = () => {
    var letters = "0123456789ABCDEF";
    var color = "#";
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };

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
        <VictoryChart
          key={i}
          style={{ parent: { maxWidth: "70%" } }}
          theme={VictoryTheme.material}
          domainPadding={10}
          height={300}
        >
          <VictoryBar
            labels={({ datum }) => datum.y}
            style={{
              data: {
                fill: ({ datum }) => getRandomColor(),
              },
              labels: { fontSize: 9 },
            }}
            alignment="start"
            data={d}
          />
        </VictoryChart>
      ))}
    </div>
  );
};

export default BarChart;
