import { FC, useCallback } from "react";
import Card from "../../../common/ui/Card";
import { OpenWeather } from "../../../types/OpenWeather";
import * as dayjs from "dayjs";
import utc from "dayjs/plugin/utc";

import sunriseIcon from "../../../assets/waether-icons/sunrise.svg";
import sunsetIcon from "../../../assets/waether-icons/sunset.svg";
import temperatureIcon from "../../../assets/waether-icons/temperature.svg";
import LabelWithIcon from "./LabelWithIcon/LabelWithIcon";

dayjs.extend(utc);

type WeatherProps = {
  data: OpenWeather;
};
/**
 * Weather component
 * Show the name of the OpenWeather data,
 * Show temperature , sunrise, sunset based on timezone
 * Show the weather Icon
 *
 * @component
 * @param {OpenWeather} data - OpenWeather data
 * @returns {JSX.Element} The rendered Weather component.
 *
 * @example
 * const data = { name:"Budapest" , etc...} as OpenWeather;
 * <Weather data={data} />
 */
const Weather: FC<WeatherProps> = ({ data }) => {
  // calculate the time based on timezone
  const getUtcTime = useCallback((time: number, timeZone: number) => {
    return dayjs
      .utc(time * 1000)
      .add(timeZone, "second")
      .format("HH:mm");
  }, []);

  const temperature = data.main.temp.toFixed();
  const sunrise = getUtcTime(data.sys.sunrise, data.timezone);
  const sunset = getUtcTime(data.sys.sunset, data.timezone);
  const weatherIcon = require(`../../../assets/waether-icons/${data.weather[0].icon}.png`);

  return (
    <Card className="box-shadow">
      <h1 className="orange">{data.name}</h1>
      <LabelWithIcon label={temperature} icon={temperatureIcon} />
      <LabelWithIcon label={sunrise} icon={sunriseIcon} />
      <LabelWithIcon label={sunset} icon={sunsetIcon} />
      <img src={weatherIcon} alt="Icon"></img>
    </Card>
  );
};

export default Weather;
