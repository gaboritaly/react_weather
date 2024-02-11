import { FC } from "react";
import { Navigate, RouteProps } from "react-router-dom";
import AddCities from "../pages/Cities/Cities";
import SearchCities from "../pages/SearchCities/SarchCities";
import WeatherOfCity from "../pages/WeatherOfCity/WeatherOfCity";
import SimpleLayout from "../layout/SimpleLayout";
import LayoutWithBackButton from "../layout/LayoutWithBackButton";
import { ChildrenProps } from "../types/ChildrenProps";

/**
 * Define the type , it will be rendered inside the routes
 * @typdef RouteWithLayout
 */
type RouteWithLayout = {
  routeProps: RouteProps;
  element: FC;
  layout?: FC<ChildrenProps>;
};
/**
 * Define all the paths used in this application
 *
 * @example
 * const paths = {
    home: "/",
    login: "/login",
  }
 */
const paths = {
  home: "/",
  weather: "/weather/:city",
  search: "/search",
};

// all the page component with their layout
const addCities: RouteWithLayout = {
  routeProps: { path: paths.home },
  element: AddCities,
  layout: SimpleLayout,
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
// export all created routes with layout for render them, and path for navigation
export { routes, paths };
