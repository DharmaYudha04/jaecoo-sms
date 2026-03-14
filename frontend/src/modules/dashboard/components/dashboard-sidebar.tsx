import { NavLink } from 'react-router-dom';

const menus = [
  { label: 'Dashboard', to: '/dashboard/admin' },
  { label: 'Manajemen User', to: '/dashboard/admin/users' },
  { label: 'Master Jenis Servis', to: '/dashboard/admin/services' },
  { label: 'Data Pelanggan', to: '/dashboard/admin/customers' },
  { label: 'Data Kendaraan', to: '/dashboard/admin/vehicles' },
  { label: 'Work Order', to: '/dashboard/admin/work-orders' },
  { label: 'Laporan', to: '/dashboard/admin/reports' },
  { label: 'Pengaturan', to: '/dashboard/admin/settings' },
];

export default function DashboardSidebar() {
  return (
    <aside className="dashboard-sidebar">
      <div className="dashboard-sidebar__brand">
        <img src="/assets/logo-jaecoo-black.png" alt="JAECOO" className="dashboard-sidebar__logo" />
        <div>
          <p className="dashboard-sidebar__city">Yogyakarta</p>
          <span className="dashboard-sidebar__role">Admin Console</span>
        </div>
      </div>

      <nav className="dashboard-sidebar__nav">
        {menus.map((menu) => (
          <NavLink
            key={menu.to}
            to={menu.to}
            className={({ isActive }) =>
              `dashboard-sidebar__link${isActive ? ' dashboard-sidebar__link--active' : ''}`
            }
          >
            <span className="dashboard-sidebar__link-dot" />
            {menu.label}
          </NavLink>
        ))}
      </nav>

      <div className="dashboard-sidebar__footer">
        <p>Prototype internal JAECOO Service Management System.</p>
      </div>
    </aside>
  );
}
