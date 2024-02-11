import { FC, useCallback } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAppSelector } from "../../store/hooks";
import { selectAllCities } from "../../features/cities/citiesSlice";
import CityList from "../../common/CityList";
import { AvailableCities } from "../../types/AvailableCities";
import { paths } from "../../router/appRoutes";

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

  // callback for list, when the city is clicked
  const onCitySelected = useCallback(
    (city: AvailableCities) => (event: React.MouseEvent<HTMLLIElement>) => {
      navigate(paths.weather.replace(":city", city.name));
    },
    [navigate]
  );

  // callback for list, rendering a simple text
  const renderItem = useCallback((city: AvailableCities) => city.name, []);

  return (
    <>
      <Link to={paths.search} style={{ textDecoration: "none" }}>
        <p className="add-city">+</p>
      </Link>
      <CityList
        cities={cities}
        onCitySelected={onCitySelected}
        renderItem={renderItem}
      />
    </>
  );
};

export default Cities;
