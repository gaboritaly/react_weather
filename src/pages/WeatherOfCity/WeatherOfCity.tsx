import axios, { AxiosError } from "axios";
import { FC, useCallback, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { OpenWeather } from "../../types/OpenWeather";
import Weather from "./components/Weather";
import Clock from "./components/Clock";

/**
 * WeatherOfCity page content component
 * Show a current time based on timezone
 * show the current weather datas, derived from openwetahermap
 *
 * @component
 * @returns {JSX.Element} The rendered WeatherOfCity page content component.
 *
 * @example
 * <WeatherOfCity />;
 */
const WeatherOfCity: FC = () => {
  const { city } = useParams<{ city: string }>();

  const [data, setData] = useState<OpenWeather>();

  const [error, setError] = useState<string | null>(null);

  const loadCityByName = useCallback(async () => {
    try {
      const url = `${process.env.REACT_APP_API_URL}/data/2.5/weather?q=${city}&units=metric&appid=${process.env.REACT_APP_API_KEY}`;
      const { data } = await axios.get<OpenWeather>(url);
      setData(data);
    } catch (error) {
      let message = "Something went wrong! Please try again later";
      if (error instanceof AxiosError) {
        message = error?.response?.data?.message || "An error occurred";
      }
      setError(message);
    }
  }, [city]);

  useEffect(() => {
    city && loadCityByName();
  }, [city, loadCityByName]);

  return (
    <>
      {error && <p>Error: {error}</p>}
      {!error && !data && <p className="orange">Loading data</p>}
      {!error && data && (
        <>
          <Clock timeZone={data.timezone} />
          <Weather data={data} />
        </>
      )}
    </>
  );
};

export default WeatherOfCity;
