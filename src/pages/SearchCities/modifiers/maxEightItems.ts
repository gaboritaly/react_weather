import { AvailableCities } from "../../../types/AvailableCities";

const maxEightItems = (cities: AvailableCities[]) => cities.slice(0, 8);

export default maxEightItems;
