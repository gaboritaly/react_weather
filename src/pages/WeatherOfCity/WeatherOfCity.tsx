import { FC, useCallback, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { OpenWeather } from "../../types/OpenWeather";
import Weather from "./components/Weather";
import Clock from "./components/Clock";
import weatherApi from "../../api/weatherApi";
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
    if (city) {
      const data = await weatherApi.getWeather(city);
      if (data instanceof Error) {
        setError(data.message);
      } else {
        setData(data);
      }
    }
  }, [city]);

  useEffect(() => {
    city && loadCityByName();
  }, [city, loadCityByName]);

  return (
    <>
      {error && <p className="orange">Error: {error}</p>}
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
