import { FC, useCallback } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAppSelector } from "../../store/hooks";
import { selectAllCities } from "../../features/cities/citiesSlice";
import { AvailableCities } from "../../types/AvailableCities";
import { paths } from "../../router/appRoutes";
import List from "../../common/ui/List";

/**
 * Cities page content component
 * Routing a page on serach page, and show eventually selected list of cities
 *
 * @component
 * @returns {JSX.Element} The rendered Cities page content component.
 *
 * @example
 * <Cities />;
 */
const Cities: FC = () => {
  const navigate = useNavigate();

  // Get the saved citis list from redux
  const cities = useAppSelector(selectAllCities);

  // callback for list, when the city is clicked, navigate to the weather page
  const onCitySelected = useCallback(
    (city: AvailableCities) => (event: React.MouseEvent<HTMLDivElement>) => {
      navigate(paths.weather.replace(":city", city.name));
    },
    [navigate]
  );

  // callback for list, rendering a simple text
  const renderItem = useCallback(
    (city: AvailableCities) => (
      <h3 onClick={onCitySelected(city)} className="white">
        {city.name}
      </h3>
    ),
    [onCitySelected]
  );

  return (
    <>
      <Link to={paths.search} style={{ textDecoration: "none" }}>
        <p className="add-city">+</p>
      </Link>
      <List items={cities} renderItem={renderItem} />
    </>
  );
};

export default Cities;
