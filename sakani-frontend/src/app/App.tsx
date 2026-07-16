import { BrowserRouter, Routes, Route, Navigate } from "react-router";

import AccountChoice from "./pages/AccountChoice";
import SignUp from "./pages/SignUp";
import Success from "./pages/Success";
import OwnerDashboard from "./pages/OwnerDashboard";
import OwnerProperties from "./pages/OwnerProperties";
import PropertyDetail from "./pages/PropertyDetail";
import UserRequest from "./pages/UserRequest";
import Reviews from "./pages/Reviews";
import Profile from "./pages/Profile";
import Chat from "./pages/Chat";
import WaitingRequests from "./pages/WaitingRequests";
import AddProperty from "./pages/AddProperty";

export default function App() {
  return (
    <BrowserRouter>
      <div dir="rtl">
        <Routes>
          {/* Public */}
          <Route path="/" element={<AccountChoice />} />
          <Route path="/register" element={<SignUp />} />
          <Route path="/success" element={<Success />} />

          {/* Owner dashboard */}
          <Route path="/dashboard" element={<OwnerDashboard />} />
          <Route path="/properties" element={<OwnerProperties />} />
          <Route path="/property/:id?" element={<PropertyDetail />} />
          <Route path="/user/:id?" element={<UserRequest />} />
          <Route path="/reviews" element={<Reviews />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/chats" element={<Chat />} />
          <Route path="/waiting" element={<WaitingRequests />} />
          <Route path="/add-property" element={<AddProperty />} />

          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
