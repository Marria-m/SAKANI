import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import ProtectedRoute from './components/ProtectedRoute';

import AccountChoice from './app/pages/AccountChoice';
import SignUp from './app/pages/SignUp';
import Success from './app/pages/Success';
import OwnerDashboard from './app/pages/OwnerDashboard';
import OwnerProperties from './app/pages/OwnerProperties';
import PropertyDetail from './app/pages/PropertyDetail';
import UserRequest from './app/pages/UserRequest';
import Reviews from './app/pages/Reviews';
import Profile from './app/pages/Profile';
import ChatPage from './app/pages/Chat';
import WaitingRequests from './app/pages/WaitingRequests';
import AddProperty from './app/pages/AddProperty';
import EditProperty from './app/pages/EditProperty';
import ExploreProperties from './app/pages/ExploreProperties';
import TenantHome from './app/pages/TenantHome';
import MyBookings from './app/pages/MyBookings';
import WishList from './app/pages/WishList';
import HowItWorks from './app/pages/HowItWorks';
import ContactUs from './app/pages/ContactUs';
import Help from './app/pages/Help';

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<AccountChoice />} />
          <Route path="/register" element={<SignUp />} />
          <Route path="/success" element={<Success />} />
          <Route path="/explore" element={<ExploreProperties />} />
          <Route path="/how-it-works" element={<HowItWorks />} />
          <Route path="/contact" element={<ContactUs />} />

          {/* Protected Owner Routes */}
          <Route element={<ProtectedRoute />}>
            <Route path="/dashboard" element={<OwnerDashboard />} />
            <Route path="/properties" element={<OwnerProperties />} />
            <Route path="/property/:id?" element={<PropertyDetail />} />
            <Route path="/user/:id?" element={<UserRequest />} />
            <Route path="/reviews" element={<Reviews />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/chats" element={<ChatPage />} />
            <Route path="/waiting" element={<WaitingRequests />} />
            <Route path="/my-bookings" element={<MyBookings />} />
            <Route path="/tenant-home" element={<TenantHome />} />
            <Route path="/wishlist" element={<WishList />} />
            <Route path="/add-property" element={<AddProperty />} />
            <Route path="/edit-property/:id" element={<EditProperty />} />
            <Route path="/help" element={<Help />} />
          </Route>

          {/* Default redirect */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
