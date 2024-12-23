import { Navigate, Outlet } from 'react-router-dom';

function ProtectedRoute({ isAuthenticated }: { isAuthenticated: boolean }) {
    return isAuthenticated ? <Outlet /> : <Navigate to="login" replace />;
}

export default ProtectedRoute;
