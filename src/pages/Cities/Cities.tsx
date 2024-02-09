import { FC, useCallback } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAppSelector } from "../../store/hooks";
import { selectAllCities } from "../../features/cities/citiesSlice";
import CityList from "../../common/CityList";
import { AvailableCities } from "../../types/AvailableCities";
import { paths, searchCities } from "../../router/appRoutes";

const Cities: FC = () => {
  const navigate = useNavigate();
  const cities = useAppSelector(selectAllCities);

  const onCitySelected = useCallback(
    (city: AvailableCities) => (event: React.MouseEvent<HTMLLIElement>) => {
      navigate(paths.weather.replace(":city", city.name));
    },
    [navigate]
  );
  const renderItem = useCallback((city: AvailableCities) => city.name, []);

  return (
    <>
      <Link
        to={searchCities.routeProps.path || ""}
        style={{ textDecoration: "none" }}
      >
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
