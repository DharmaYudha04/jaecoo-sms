import { Routes, Route, Navigate } from 'react-router-dom';
import LoginPage from './modules/auth/pages/login-page';
import AdminDashboardPage from './modules/dashboard/pages/admin-dashboard-page';
import LandingPage from './modules/landing/pages/landing-page';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/dashboard/admin" element={<AdminDashboardPage />} />
      <Route path="/dashboard/admin/:section" element={<AdminDashboardPage />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}
