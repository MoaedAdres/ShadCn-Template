import { RouteObject } from "@/types/index.type";
import Dashboard from "@/Views/Dashboard/Dashboard";

export const protectedRoutes: RouteObject[] = [
    {
        id: 1,
        name: "dashboard",
        path: "/dashboard",
        exact: false,
        Component: Dashboard
    },
]