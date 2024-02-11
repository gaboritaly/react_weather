import axios, { AxiosError } from "axios";
import { OpenWeather } from "../types/OpenWeather";
// get the current weather of the selected city
const getWeather = async (
  city: string | undefined
): Promise<OpenWeather | Error> => {
  try {
    const url = `${process.env.REACT_APP_API_URL}/data/2.5/weather?q=${city}&units=metric&appid=${process.env.REACT_APP_API_KEY}`;
    const { data } = await axios.get<OpenWeather>(url);
    return data;
  } catch (error) {
    let message = "Something went wrong! Please try again later";
    if (error instanceof AxiosError) {
      message = error?.response?.data?.message || "An error occurred";
    }
    return new Error(message);
  }
};
/**
 * All api call releated to wetaher must be here.
 */
const weatherApi = {
  getWeather,
};

export default weatherApi;
