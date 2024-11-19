import { CustomRoute } from "@/types/index.type";
import CustomerProfile from "@/Views/Dashboard/Customers/CustomerProfile/CustomerProfile";
import CustomersLister from "@/Views/Dashboard/Customers/CustomersLister";
import DriverProfile from "@/Views/Dashboard/Drivers/DriverProfile/DriverProfile";
import DriversLister from "@/Views/Dashboard/Drivers/DriversLister";
import JoinRequests from "@/Views/Dashboard/Drivers/JoinRequests/JoinRequests";

export const dashboardRoutes: CustomRoute[] = [
  {
    path: "drivers",
    Component: DriversLister,
    // routes: [{ path: ":userId", Component: Test }],
  },
  {
    path: "drivers/:driver",
    Component: DriverProfile,
  },
  {
    path: "drivers/join-requests",
    Component: JoinRequests,
  },
  {
    path: "join-requests",
    Component: JoinRequests,
  },
  {
    path: "customers",
    Component: CustomersLister,
  },
  {
    path: "customers/:customer",
    Component: CustomerProfile,
  },
];
