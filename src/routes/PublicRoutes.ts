import { RouteObject } from "@/types/index.type";
import Login from "@/Views/Authentication/Login";
import Register from "@/Views/Authentication/Register";

export const publicRoutes: RouteObject[] = [
    {
        id: 1,
        name: "login",
        path: "/login",
        exact: true,
        Component: Login
    },
    {
        id: 2,
        name: "register",
        path: "/register",
        exact: true,
        Component: Register
    },
]