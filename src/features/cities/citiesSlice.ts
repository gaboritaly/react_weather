import { createSlice } from "@reduxjs/toolkit";
import { AvailableCities } from "../../types/AvailableCities";
import { RootState } from "../../store/store";

const initialState = new Array<AvailableCities>();

export const citiesSlice = createSlice({
  name: "cities",
  initialState,
  reducers: {
    cityAdded(state, action) {
      state.push(action.payload);
    },
  },
});

export const selectAllCities = (state: RootState) => state.cities;

export const { cityAdded } = citiesSlice.actions;

export default citiesSlice.reducer;
