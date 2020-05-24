import React, { useState, useEffect } from 'react';
import { Line, Bar } from "react-chartjs-2";
import { prop, isArray, isEmpty } from "lodash/fp";
import { fetchDailyData } from "src/api";
import styles from "src/components/chart/Chart.module.css";

const Chart = ({ data, country }) => {
  const [dailyData, setDailyData] = useState([]);

  useEffect(() => {
    const fetchAndSetDailyData = async () => {
      setDailyData(await fetchDailyData());
    };

    fetchAndSetDailyData();
  }, []);

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

  const barChart = (
    isEmpty(data)
      ? null
      : (
        <Bar 
          data={{
            labels: ["Infected", "Recovered", "Deaths"],
            datasets: [{
              label: "People",
              backgroundColor: [
                "rgba(0, 0, 255, 0.5)",
                "rgba(0, 255, 0, 0.5)",
                "rgba(255, 0, 0, 0.5)",
              ],
              data: [
                data.confirmed.value,
                data.recovered.value,
                data.deaths.value
              ]
            }]
          }}
          options={{
            legend: { display: false },
            title: { display: true, text: `Current state in ${country}` }
          }}
        />
      )
  );

  return (
    <div className={styles.container}>
      {country ? barChart : lineChart}
    </div>
  );
};

export default Chart;