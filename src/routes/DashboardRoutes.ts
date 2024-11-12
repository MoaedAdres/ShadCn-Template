import { CustomRoute } from "@/types/index.type";
import Home from "@/Views/Dashboard/Home";
import Test from "@/Views/Dashboard/test";

export const dashboardRoutes: CustomRoute[] = [
  {
    path: "users",
    exact: false,
    breadcrumb: "Users",
    Component: Home,
    routes: [{ path: ":userId", Component: Test }],
  },
];
