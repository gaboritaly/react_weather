import { createSlice } from "@reduxjs/toolkit";
import { AvailableCities } from "../../types/AvailableCities";
import { RootState } from "../../store/store";

// Initalaizing
const initialState = new Array<AvailableCities>();

// Create a slice for cities add reducer cityAdded to add new cities to the list
export const citiesSlice = createSlice({
  name: "cities",
  initialState,
  reducers: {
    cityAdded(state, action) {
      state.push(action.payload);
    },
  },
});
// export all cities, to mantain the logic here in this slice
export const selectAllCities = (state: RootState) => state.cities;
// export all cities action
export const { cityAdded } = citiesSlice.actions;
// export the cities reducer
export default citiesSlice.reducer;
