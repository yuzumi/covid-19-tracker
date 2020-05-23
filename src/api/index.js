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