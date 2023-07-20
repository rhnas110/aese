import "./assets/styles/global.css";
import { Routes, Route } from "react-router-dom";
import { useEffect, useContext } from "react";

import { AuthContext } from "./context/Auth";

import {
  Home,
  RegisterPage,
  LoginPage,
  ResetPasswordPage,
  NotFoundPage,
  AccountPage,
} from "./pages";
import { axiosPrivate } from "./config/axios";
import { ProtectedRoute, ProtectedUser } from "./components/ProtectedRoute";

function App() {
  const { handleAuth } = useContext(AuthContext);

  const keepLogin = async () => {
    try {
      const response = (await axiosPrivate.get("/auth/check_token")).data;
      handleAuth(response?.userInformation);
    } catch (error) {
      // (error?.response?.data?.message);
    }
  };

  useEffect(() => {
    keepLogin();
  }, []);

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route
        path="/register"
        element={
          <ProtectedRoute>
            <RegisterPage />
          </ProtectedRoute>
        }
      />
      <Route
        path="/login"
        element={
          <ProtectedRoute>
            <LoginPage />
          </ProtectedRoute>
        }
      />
      <Route
        path="/account"
        element={
          <ProtectedUser>
            <AccountPage />
          </ProtectedUser>
        }
      />
      <Route
        path="/password/reset"
        element={
          <ProtectedRoute>
            <ResetPasswordPage />
          </ProtectedRoute>
        }
      />

      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}

export default App;
