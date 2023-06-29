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
} from "./pages";
import { axiosPrivate } from "./config/axios";
import { ProtectedRoute } from "./components/ProtectedRoute";

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
      <Route path="/password/reset" element={<ResetPasswordPage />} />

      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}

export default App;
