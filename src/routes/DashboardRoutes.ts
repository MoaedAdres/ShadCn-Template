import { CustomRoute } from "@/types/index.type";
import DriverDetails from "@/Views/Dashboard/Drivers/DriverProfile/DriverProfile";
import DriversLister from "@/Views/Dashboard/Drivers/DriversLister";
import JoinRequests from "@/Views/Dashboard/Drivers/JoinRequests/JoinRequests";

export const dashboardRoutes: CustomRoute[] = [
  {
    path: "drivers",
    breadcrumb: "Drivers",
    Component: DriversLister,
    // routes: [{ path: ":userId", Component: Test }],
  },
  {
    path: "drivers/:driver",
    breadcrumb: "Driver Details",
    Component: DriverDetails,
  },
  {
    path: "drivers/:driver",
    breadcrumb: "Driver Details",
    Component: DriverDetails,
  },
  {
    path: "drivers/join-requests",
    breadcrumb: "join-requests",
    Component: JoinRequests,
  },
];
