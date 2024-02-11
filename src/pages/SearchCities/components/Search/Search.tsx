import { FC, ChangeEvent, useEffect, useRef } from "react";
import Button from "../../../../common/ui/Button";
import InputRef from "../../../../common/ui/InputRef";
import { AvailableCities } from "../../../../types/AvailableCities";
import classes from "./Search.module.css";

type SearchProps = {
  city?: AvailableCities;
  onSearcChange: (event: ChangeEvent<HTMLInputElement>) => void;
  addCity: () => void;
};

/**
 * Search component
 * Contain an input, that emmit the current written value, and if recive the city the add button will be visible
 *
 * @component
 * @param {AvailableCities} [city] - Selecetd city 
 * @param {(event: ChangeEvent<HTMLInputElement>) => void} onSearcChange - Emmit the input value
 * @param {() => void} addCity -Callaback for adding the city
 * @returns {JSX.Element} The rendered Search component.
 *
 * @example
 * const selectedCity = ...;
 * <Search
      city={selectedCity}
      onSearcChange={(event: ChangeEvent<HTMLInputElement>) => {
        // do something
      }}
      addCity={() => {
        // do something
      }}
    />;
 */
const Search: FC<SearchProps> = ({ city, onSearcChange, addCity }) => {
  const inputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    // Focus the input when the component mounts
    inputRef.current?.focus();
  }, []);

  useEffect(() => {
    if (city && inputRef.current) {
      inputRef.current.value = city.name;
    }
  }, [city]);

  return (
    <form className={`${classes.form} width400`} onSubmit={addCity}>
      <InputRef
        onChange={onSearcChange}
        placeholder="Plaese write the city name"
        type="text"
        ref={inputRef}
        className={`${classes.input}`}
        disabled={city !== undefined}
      />

      {city && (
        <Button type="submit" className={`button ${classes.button}`}>
          Add city
        </Button>
      )}
    </form>
  );
};

export default Search;
