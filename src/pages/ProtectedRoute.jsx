import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoute = () => {
  const auth = useSelector((state) => state.auth);

  return auth.isAuthenticated ? <Outlet /> : <Navigate to="/login" />;
};

export default ProtectedRoute;
