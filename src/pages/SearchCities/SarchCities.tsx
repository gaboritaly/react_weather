import { ChangeEvent, FC, useCallback, useMemo, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { cityAdded, selectAllCities } from "../../features/cities/citiesSlice";
import { AvailableCities } from "../../types/AvailableCities";
import { useNavigate } from "react-router-dom";
import CityList from "../../common/CityList";
import HighlightedText from "./components/HighlightedText";
import cities from "../../assets/cities.json";
import Search from "./components/Search";
import withoutSelectedItems from "./modifiers/withoutSelectedItems";
import searchItems from "./modifiers/searchItems";
import maxEightItems from "./modifiers/maxEightItems";
import { paths } from "../../router/appRoutes";

const SearchCities: FC = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const [input, setInput] = useState("");

  const [selectedCity, setSelectedCity] = useState<AvailableCities>();

  const savedCities = useAppSelector(selectAllCities);

  const availableCities = useMemo(() => {
    let currentCities = withoutSelectedItems(cities, savedCities);
    currentCities = searchItems(currentCities, input);
    return maxEightItems(currentCities);
  }, [input, savedCities]);

  const addCity = useCallback(() => {
    dispatch(cityAdded(selectedCity));
    navigate(paths.home);
  }, [dispatch, navigate, selectedCity]);

  const onCitySelected = useCallback(
    (city: AvailableCities) => (_: React.MouseEvent<HTMLLIElement>) => {
      setSelectedCity(city);
      setInput(city.name);
    },
    []
  );

  const renderItem = useCallback(
    (city: AvailableCities) => (
      <HighlightedText
        text={city.name}
        wordToHighlight={input}
        highlightClass="highlight"
      />
    ),
    [input]
  );

  const onSearcChange = useCallback((event: ChangeEvent<HTMLInputElement>) => {
    setInput(event.target.value);
  }, []);

  return (
    <>
      <Search
        city={selectedCity}
        onSearcChange={onSearcChange}
        addCity={addCity}
      />

      <CityList
        cities={availableCities}
        onCitySelected={onCitySelected}
        renderItem={renderItem}
        className="width400"
      />
    </>
  );
};

export default SearchCities;
