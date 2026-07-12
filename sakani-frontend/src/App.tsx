import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import OwnerLayout from './layouts/OwnerLayout';
import OwnerDashboard from './pages/owner/Dashboard';
import MyApartments from './pages/owner/MyApartments';

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          {/* Owner Routes */}
          <Route path="/owner" element={<OwnerLayout />}>
            <Route index element={<Navigate to="dashboard" replace />} />
            <Route path="dashboard" element={<OwnerDashboard />} />
            <Route path="apartments" element={<MyApartments />} />
            {/* Phase 2+ pages will be added here */}
          </Route>

          {/* Default redirect */}
          <Route path="*" element={<Navigate to="/owner/dashboard" replace />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
