import { CustomRoute } from "@/types/index.type";
import DriverDetails from "@/Views/Dashboard/Drivers/DriverDetails";
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
  {
    path: "drivers/:driver",
    exact: false,
    breadcrumb: "Driver Details",
    Component: DriverDetails,
    // routes: [{ path: ":userId", Component: Test }],
  },
];
