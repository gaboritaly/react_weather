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
