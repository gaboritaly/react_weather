import { ChangeEvent, FC, useCallback, useMemo, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { cityAdded, selectAllCities } from "../../features/cities/citiesSlice";
import { AvailableCities } from "../../types/AvailableCities";
import { useNavigate } from "react-router-dom";
import HighlightedText from "./components/HighlightedText";
import cities from "../../assets/cities.json";
import Search from "./components/Search/Search";
import withoutSelectedItems from "./modifiers/withoutSelectedItems";
import searchItems from "./modifiers/searchItems";
import maxEightItems from "./modifiers/maxEightItems";
import { paths } from "../../router/appRoutes";
import List from "../../common/ui/List";

/**
 * SearchCities page content component
 * Search and how the cities that found in cities.json
 * Can add selected city of the cities store
 *
 * @component
 * @returns {JSX.Element} The rendered SearchCities page content component.
 *
 * @example
 * <SearchCities />;
 */
const SearchCities: FC = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const [input, setInput] = useState("");

  const [selectedCity, setSelectedCity] = useState<AvailableCities>();

  // Get the saved citis list from redux
  const savedCities = useAppSelector(selectAllCities);

  // Apply the modifiers to savedCities, and return a memoized value
  const availableCities = useMemo(() => {
    let currentCities = withoutSelectedItems(cities, savedCities);
    currentCities = searchItems(currentCities, input);
    return maxEightItems(currentCities);
  }, [input, savedCities]);

  // Callback function for Search, when the city selected,navigate to home page
  const addCity = useCallback(() => {
    dispatch(cityAdded(selectedCity));
    navigate(paths.home);
  }, [dispatch, navigate, selectedCity]);

  // Callback function for a List, when the city selected, apply current selected city, and input value
  const onCitySelected = useCallback(
    (city: AvailableCities) => (event: React.MouseEvent<HTMLDivElement>) => {
      setSelectedCity(city);
      setInput(city.name);
    },
    []
  );

  // Callback function for a List, get the rendered item
  const renderItem = useCallback(
    (city: AvailableCities) => (
      <h3 onClick={onCitySelected(city)}>
        <HighlightedText
          text={city.name}
          wordToHighlight={input}
          highlightClass="highlight"
        />
      </h3>
    ),
    [input, onCitySelected]
  );

  // Callback function for Search, when the search value changed
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
      <List
        items={availableCities}
        renderItem={renderItem}
        ulClass="width400"
        liClass="white"
      />
    </>
  );
};

export default SearchCities;
