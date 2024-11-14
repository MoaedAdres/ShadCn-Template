import { CustomRoute } from "@/types/index.type";
import DriversLister from "@/Views/Dashboard/Drivers/DriversLister";
import Home from "@/Views/Dashboard/Home";
import Test from "@/Views/Dashboard/test";

export const dashboardRoutes: CustomRoute[] = [
  {
    path: "drivers",
    exact: false,
    breadcrumb: "Drivers",
    Component: DriversLister,
    // routes: [{ path: ":userId", Component: Test }],
  },
];
