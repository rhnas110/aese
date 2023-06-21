import "./assets/styles/global.css";
import { Routes, Route } from "react-router-dom";
import { Home, RegisterPage, LoginPage, NotFoundPage } from "./pages";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/login" element={<LoginPage />} />

      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}

export default App;
