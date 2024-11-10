import { CustomRoute } from "@/types/index.type";
import Home from "@/Views/Dashboard/Home";

export const dashboardRoutes: CustomRoute[] = [
  {
    path: "home",
    exact: false,
    breadcrumb: "Home",
    Component: Home,
  },
];
