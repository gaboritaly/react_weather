import { FC } from "react";
import { Navigate, RouteProps } from "react-router-dom";
import AddCities from "../pages/Cities/Cities";
import SearchCities from "../pages/SearchCities/SarchCities";
import WeatherOfCity from "../pages/WeatherOfCity/WeatherOfCity";
import LayoutWithoutBackButton from "../layout/LayoutWithoutBackButton";
import LayoutWithBackButton from "../layout/LayoutWithBackButton";
import { ChildrenProps } from "../types/ChildrenProps";

type RouteWithLayout = {
  routeProps: RouteProps;
  element: FC;
  layout?: FC<ChildrenProps>;
};
const paths = {
  home: "/",
  weather: "/weather/:city",
  search: "/search",
};

const addCities: RouteWithLayout = {
  routeProps: { path: paths.home },
  element: AddCities,
  layout: LayoutWithoutBackButton,
};
const searchCities: RouteWithLayout = {
  routeProps: { path: paths.search },
  element: SearchCities,
  layout: LayoutWithBackButton,
};
const weatherOfCity: RouteWithLayout = {
  routeProps: { path: paths.weather },
  element: WeatherOfCity,
  layout: LayoutWithBackButton,
};
const notFound: RouteWithLayout = {
  routeProps: { path: "*" },
  element: () => <Navigate replace to={paths.home} />,
};
const routes: RouteWithLayout[] = [
  addCities,
  searchCities,
  weatherOfCity,
  notFound,
];
export { addCities, searchCities, weatherOfCity, routes, paths };
