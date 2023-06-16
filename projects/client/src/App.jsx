import "./assets/styles/global.css";
import { Routes, Route } from "react-router-dom";
import { Home, Register, Login, NotFound } from "./pages";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
