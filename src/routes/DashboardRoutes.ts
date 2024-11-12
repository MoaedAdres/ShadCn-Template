import { CustomRoute } from "@/types/index.type";
import Home from "@/Views/Dashboard/Home";
import Test from "@/Views/Dashboard/test";

export const dashboardRoutes: CustomRoute[] = [
  {
    path: "users",
    exact: false,
    breadcrumb: "Users",
    Component: Home,
    // routes: [{ path: ":userId", Component: Test }],
  },
  {
    path: "roles",
    exact: false,
    breadcrumb: "Rloles",
    Component: Home,
    // routes: [{ path: ":userId", Component: Test }],
  },
  {
    path: "roles/create",
    exact: false,
    breadcrumb: "Create",
    Component: Home,
    // routes: [{ path: ":userId", Component: Test }],
  },
  {
    path: "user-types",
    exact: false,
    breadcrumb: "User-Types",
    Component: Home,
    // routes: [{ path: ":userId", Component: Test }],
  },
];
