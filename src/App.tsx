import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ProtectedRoute from '@/utils/ProtectedRoutes';
import { publicRoutes } from '@/routes/PublicRoutes';
import { protectedRoutes } from '@/routes/ProtectedRoutes';
import RedirectRoute from '@/utils/RedirectRoute';
const App = () => {

  return (
    <Router>
      <Routes>
        {publicRoutes.map((route) => (
          <Route path={`${route.path}${route.exact ? "" : "/*"}`} Component={route.Component} />
        ))}
        <Route element={<ProtectedRoute isAuthenticated={true} />}>
          {protectedRoutes.map((route) => (
            <Route path={`${route.path}${route.exact ? "" : "/*"}`} Component={route.Component} />
          ))}
        </Route>
        <Route path='*' element={<RedirectRoute isAuthenticated={true} />} />
      </Routes>
    </Router>
  )
}

export default App
