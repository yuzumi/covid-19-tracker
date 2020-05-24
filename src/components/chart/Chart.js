import React, { useState, useEffect } from 'react';
import { Line, Bar } from "react-chartjs-2";
import { prop, isArray } from "lodash/fp";
import { fetchDailyData } from "src/api";
import styles from "src/components/chart/Chart.module.css";

const Chart = () => {
  const [dailyData, setDailyData] = useState([]);

  useEffect(() => {
    const fetchAndSetDailyData = async () => {
      setDailyData(await fetchDailyData());
    };

    fetchAndSetDailyData();
  });

  const lineChart = (
    isArray(dailyData) ? (
      <Line
        data={{
          labels: dailyData.map(prop("date")),
          datasets: [{
            label: "Infected",
            data: dailyData.map(prop("confirmed")),
            borderColor: "#3333ff",
            fill: true
          }, {
            label: "Deaths",
            data: dailyData.map(prop("deaths")),
            borderColor: "red",
            backgroundColor: "rgba(255, 0, 0, 0.5)",
            fill: true
          }]
        }}
      />
    ) : null
  );

  return (
    <div className={styles.container}>
      {lineChart}
    </div>
  );
};

export default Chart;