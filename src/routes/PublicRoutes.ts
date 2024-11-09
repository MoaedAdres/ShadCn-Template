import { CustomRoute } from "@/types/index.type";
import Login from "@/Views/Authentication/Login";
import Register from "@/Views/Authentication/Register";

export const publicRoutes: CustomRoute[] = [
  {
    path: "/login",
    exact: true,
    Component: Login,
  },
  {
    path: "/register",
    exact: true,
    Component: Register,
  },
];
