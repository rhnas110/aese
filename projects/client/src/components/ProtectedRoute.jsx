import { Navigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/Auth";

export const ProtectedRoute = ({ children }) => {
  const { auth } = useContext(AuthContext);

  if (auth?.id) {
    return <Navigate to="/" />;
  } else {
    return children;
  }
};
