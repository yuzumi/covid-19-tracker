import httpClient from "src/services/http-client";
import pick from "lodash/fp/pick";

export const fetchData = async (country) => {
  const resource = country 
    ? `/countries/${country}`
    : `/`;

  try {
    const response = await httpClient.get(resource);
    
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

export const fetchCountries = async () => {
  try {
    const response = await httpClient.get("/countries");
    return response.data.countries.map(pick(["name"]));
  } catch (error) {}
};