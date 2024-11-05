import { Navigate } from 'react-router-dom';

const RedirectRoute = ({ isAuthenticated }: { isAuthenticated: boolean }) => {
    console.log("redirect   ")
    return (
        <Navigate to={`${isAuthenticated ? "dashboard" : "login"}`} replace />
    )
}

export default RedirectRoute