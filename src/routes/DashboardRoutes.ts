import { RouteObject } from "@/types/index.type";
import Home from "@/Views/Dashboard/Home";

export const dashboardRoutes: RouteObject[] = [
    {
        id: 1,
        name: "home",
        path: "home",
        exact: true,
        Component: Home
    },
]