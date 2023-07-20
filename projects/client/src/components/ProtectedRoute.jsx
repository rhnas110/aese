import { Navigate } from "react-router-dom";

export const ProtectedRoute = ({ children }) => {
  const auth = localStorage.getItem("auth_token");

  if (auth) {
    return <Navigate to="/" />;
  } else {
    return children;
  }
};

export const ProtectedUser = ({ children }) => {
  const auth = localStorage.getItem("auth_token");

  if (!auth) {
    return <Navigate to="/" />;
  } else {
    return children;
  }
};
