interface DashboardTopbarProps {
  title: string;
  subtitle: string;
}

export default function DashboardTopbar({ title, subtitle }: DashboardTopbarProps) {
  return (
    <header className="dashboard-topbar">
      <div>
        <p className="dashboard-topbar__breadcrumb">Dashboard / Admin</p>
        <h1 className="dashboard-topbar__title">{title}</h1>
        <p className="dashboard-topbar__subtitle">{subtitle}</p>
      </div>

      <div className="dashboard-topbar__actions">
        <label className="dashboard-search">
          <input type="search" placeholder="Cari user, kendaraan, work order..." />
        </label>
        <button type="button" className="dashboard-topbar__button dashboard-topbar__button--ghost">
          Ekspor
        </button>
        <button type="button" className="dashboard-topbar__button">
          Tambah User
        </button>
      </div>
    </header>
  );
}
