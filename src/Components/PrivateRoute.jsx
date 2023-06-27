import { Outlet, Navigate } from "react-router-dom";
import { useAuthStatus } from "../Hooks/useAuthStatus";
// import Spinner from "./Spinner";
export default function PrivateRoute() {
  const { loggedIn, checkingStatus } = useAuthStatus();
  if (checkingStatus) {
    return <p>Loading...</p>;
  }
  return loggedIn ? <Outlet /> : <Navigate to="/adminreg"/>;
}