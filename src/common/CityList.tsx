import { FC, ReactNode, MouseEvent } from "react";
import { AvailableCities } from "../types/AvailableCities";

type CityListProps = {
  cities: AvailableCities[];
  onCitySelected: (
    city: AvailableCities
  ) => (event: MouseEvent<HTMLLIElement>) => void;
  renderItem: (city: AvailableCities) => ReactNode;
  className?: string;
};

/**
 * CityList component create a list based on passed city items
 *
 * @component
 * @param {string} className - Can you add an extra class, default value is ""
 * @param { AvailableCities[]} cities - Array tah contain AvailableCities items
 * @param {(city: AvailableCities) => (event: MouseEvent<HTMLLIElement>) => void} onCitySelected - Call this callback when city was clicked, passed AvailableCities as argument
 * @param {(city: AvailableCities) => ReactNode} renderItem - Item that need be rendered in list item, passed AvailableCities as argument
 * @returns {JSX.Element} The rendered CityList component.
 *
 * @example
 * <CityList
    cities={[item1,item2]}
    onCitySelected={(city: AvailableCities) =>
      (event: React.MouseEvent<HTMLLIElement>) => {
        // do something;
      }}
    renderItem={(city: AvailableCities) => city.name}
  />;
 */
const CityList: FC<CityListProps> = ({
  cities,
  onCitySelected,
  renderItem,
  className = "",
}) => {
  return (
    <div className={className}>
      <ul>
        {cities.map((city) => (
          <li key={city.lat + city.lon} onClick={onCitySelected(city)}>
            <p>{renderItem(city)}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CityList;
