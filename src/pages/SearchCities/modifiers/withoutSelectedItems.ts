import { AvailableCities } from "../../../types/AvailableCities";

const withoutSelectedItems = (
  cities: AvailableCities[],
  savedCities: AvailableCities[]
) =>
  cities.filter(
    (city) => !savedCities.some((savedCities) => savedCities.name === city.name)
  );

export default withoutSelectedItems;
