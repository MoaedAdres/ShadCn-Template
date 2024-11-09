import { CustomRoute } from "@/types/index.type";
import { Route, Routes } from "react-router-dom";

const RRoutes = ({ routes }: { routes: CustomRoute[] }) => {
  return (
    <Routes>
      {routes.map((route) => (
        <Route
          key={route.path}
          path={`${route.path}${route.exact ? "" : "/*"}`}
          Component={route.Component}
        />
      ))}
    </Routes>
  );
};

export default RRoutes;
