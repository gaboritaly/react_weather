import { AvailableCities } from "../../../types/AvailableCities";

const searchItems = (cities: AvailableCities[], input: string) =>
  cities.filter((city) => {
    if (input === "") {
      return false;
    }

    return city.name.toLowerCase().includes(input);
  });

export default searchItems;
