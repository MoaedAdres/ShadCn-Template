import { useEffect } from "react";
import { useLocation, matchRoutes } from "react-router-dom";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/store/store";
import { setBreadcrumbs } from "@/store/slices/breadcrumbSlice";
import { dashboardRoutes } from "@/routes/DashboardRoutes";
import { CustomRoute } from "@/types/index.type";

const BreadcrumbTracker: React.FC = () => {
  const location = useLocation();
  const dispatch: AppDispatch = useDispatch();

  useEffect(() => {
    const matchedRoutes = matchRoutes(dashboardRoutes, location.pathname);
    const breadcrumbTrail =
      matchedRoutes?.map((route) => ({
        path: route.pathname || "",
        breadcrumb: (route.route as CustomRoute).breadcrumb ?? "no bread_crumb",
      })) || [];
    dispatch(setBreadcrumbs(breadcrumbTrail));
  }, [location, dispatch]);

  return null;
};

export default BreadcrumbTracker;
