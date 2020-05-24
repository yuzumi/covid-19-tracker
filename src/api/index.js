import httpClient from "src/services/http-client";
import pick from "lodash/fp/pick";

export const initFetch = async () => {
  try {
    const response = await httpClient.get();
    
    const data = pick(
      ["confirmed", "recovered", "deaths", "lastUpdate"], 
      response.data
    );

    return data;
  } catch (error) { }
};

export const fetchDailyData = async () => {
  try {
    const response = await httpClient.get("/daily");
    
    const data = response.data.map(dailyData => ({
      confirmed: dailyData.confirmed.total,
      deaths: dailyData.deaths.total,
      date: dailyData.reportDate
    }));

    return data;
  } catch (error) { }
};