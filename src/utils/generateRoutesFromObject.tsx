import { CustomRoute } from "@/types/index.type";
import { Route } from "react-router-dom";

export const generateRoutesFromObject = (routes: CustomRoute[]) => {
  return routes.map((route) => (
    <Route
      key={route.path}
      path={`${route.path}${route.exact ? "" : "/*"}`}
      Component={route.Component}
    >
      {route.routes && generateRoutesFromObject(route.routes)}
    </Route>
  ));
};
