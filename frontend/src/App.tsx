import { Routes, Route } from "react-router-dom";
import LandingPage from "./modules/landing/pages/landing-page";
import LoginPage from "./modules/auth/pages/login-page";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/login" element={<LoginPage />} />
    </Routes>
  );
}