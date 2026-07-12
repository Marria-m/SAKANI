import { Outlet, NavLink, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

export default function OwnerLayout() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  const navItems = [
    { to: '/owner/dashboard', label: '📊 Dashboard' },
    { to: '/owner/apartments', label: '🏠 My Apartments' },
    { to: '/owner/bookings', label: '📋 Bookings' },
    { to: '/owner/appointments', label: '📅 Appointments' },
    { to: '/owner/issues', label: '⚠️ Issues' },
    { to: '/owner/chat', label: '💬 Chat' },
    { to: '/owner/profile', label: '👤 Profile' },
  ];

  return (
    <div style={{ display: 'flex', minHeight: '100vh' }}>
      {/* Sidebar */}
      <aside
        style={{
          width: '260px',
          backgroundColor: '#1a1a2e',
          color: '#fff',
          padding: '24px 16px',
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <h2 style={{ margin: '0 0 32px 0', fontSize: '24px', fontWeight: 700 }}>
          🏘️ SAKANI
        </h2>
        <p style={{ fontSize: '14px', color: '#8888aa', marginBottom: '24px' }}>
          Owner Panel
        </p>

        <nav style={{ flex: 1 }}>
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              style={({ isActive }) => ({
                display: 'block',
                padding: '12px 16px',
                marginBottom: '4px',
                borderRadius: '8px',
                textDecoration: 'none',
                color: isActive ? '#fff' : '#aaa',
                backgroundColor: isActive ? '#16213e' : 'transparent',
                fontWeight: isActive ? 600 : 400,
                transition: 'all 0.2s',
              })}
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div style={{ borderTop: '1px solid #333', paddingTop: '16px' }}>
          <p style={{ fontSize: '13px', color: '#8888aa', margin: '0 0 8px 0' }}>
            {user?.fullName || 'Owner'}
          </p>
          <button
            onClick={handleLogout}
            style={{
              width: '100%',
              padding: '10px',
              border: 'none',
              borderRadius: '8px',
              backgroundColor: '#e94560',
              color: '#fff',
              cursor: 'pointer',
              fontWeight: 600,
            }}
          >
            Logout
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main style={{ flex: 1, padding: '32px', backgroundColor: '#f5f5f5' }}>
        <Outlet />
      </main>
    </div>
  );
}
