import { FC, ChangeEvent, useEffect, useRef } from "react";
import Button from "../../../common/ui/Button";
import Input from "../../../common/ui/Input";
import { AvailableCities } from "../../../types/AvailableCities";

type SearchProps = {
  city?: AvailableCities;
  onSearcChange: (event: ChangeEvent<HTMLInputElement>) => void;
  addCity: () => void;
};

/**
 *
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
    <>
      <Input
        onChange={onSearcChange}
        placeholder="Plaese write the city name"
        type="text"
        ref={inputRef}
        className="search-input width400"
      />

      {city && <Button onClick={addCity}>Add city</Button>}
    </>
  );
};

export default Search;
