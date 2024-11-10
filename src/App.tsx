import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProtectedRoute from "@/utils/ProtectedRoutes";
import { publicRoutes } from "@/routes/PublicRoutes";
import { protectedRoutes } from "@/routes/ProtectedRoutes";
import RedirectRoute from "@/utils/RedirectRoute";
import Dashboard from "@/Views/Dashboard/Dashboard";
import { dashboardRoutes } from "@/routes/DashboardRoutes";
const App = () => {
  return (
    <Router>
      <Routes>
        {publicRoutes.map((route) => (
          <Route
            key={route.path}
            path={`${route.path}${route.exact ? "" : "/*"}`}
            Component={route.Component}
          />
        ))}
        <Route element={<ProtectedRoute isAuthenticated={true} />}>
          <>
            {protectedRoutes?.map((route) => (
              <Route
                key={route.path}
                path={`${route.path}${route.exact ? "" : "/*"}`}
                Component={route.Component}
              />
            ))}
            <Route key={"Dashboard"} path="/dashboard" element={<Dashboard />}>
              {dashboardRoutes?.map((route) => (
                <Route
                  key={route.path}
                  path={`${route.path}${route.exact ? "" : "/*"}`}
                  Component={route.Component}
                />
              ))}
            </Route>
          </>
        </Route>
        <Route path="*" element={<RedirectRoute isAuthenticated={true} />} />
      </Routes>
    </Router>
  );
};

export default App;
