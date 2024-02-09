import { FC, Fragment } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { routes } from "./appRoutes";

const AppRoutes: FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        {routes.map((route) => {
          const Currentlayout = route.layout || Fragment;
          return (
            <Route
              {...route.routeProps}
              key={route.routeProps.toString()}
              element={
                <Currentlayout>
                  <route.element />
                </Currentlayout>
              }
            />
          );
        })}
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
