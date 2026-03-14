import DashboardShell from '../components/dashboard-shell';
import DataTable, { type TableColumn } from '../components/data-table';
import SectionCard from '../components/section-card';
import StatCard from '../components/stat-card';
import StatusBadge from '../components/status-badge';
import {
  adminSummary,
  attentionItems,
  masterServices,
  recentUsers,
  workOrders,
  type MasterServiceItem,
  type UserActivityItem,
  type WorkOrderItem,
} from '../data/admin-dashboard-data';

const workOrderColumns: TableColumn<WorkOrderItem>[] = [
  {
    key: 'id',
    header: 'Work Order',
    render: (row) => (
      <div>
        <strong>{row.id}</strong>
        <p className="dashboard-table__meta">{row.customer}</p>
      </div>
    ),
  },
  {
    key: 'vehicle',
    header: 'Kendaraan',
    render: (row) => row.vehicle,
  },
  {
    key: 'advisor',
    header: 'Frontliner',
    render: (row) => row.advisor,
  },
  {
    key: 'status',
    header: 'Status',
    render: (row) => <StatusBadge status={row.status} />,
  },
  {
    key: 'eta',
    header: 'Keterangan',
    render: (row) => row.eta,
  },
];

const userColumns: TableColumn<UserActivityItem>[] = [
  {
    key: 'name',
    header: 'Nama',
    render: (row) => (
      <div>
        <strong>{row.name}</strong>
        <p className="dashboard-table__meta">{row.updatedAt}</p>
      </div>
    ),
  },
  {
    key: 'role',
    header: 'Role',
    render: (row) => row.role,
  },
  {
    key: 'status',
    header: 'Status',
    render: (row) => <StatusBadge status={row.status} />,
  },
];

const masterServiceColumns: TableColumn<MasterServiceItem>[] = [
  {
    key: 'name',
    header: 'Jenis Servis',
    render: (row) => row.name,
  },
  {
    key: 'category',
    header: 'Kategori',
    render: (row) => row.category,
  },
  {
    key: 'duration',
    header: 'Durasi Standar',
    render: (row) => row.duration,
  },
];

export default function AdminDashboardPage() {
  return (
    <DashboardShell
      title="Admin Dashboard"
      subtitle="Ringkasan sistem, master data, dan operasional utama untuk JAECOO Yogyakarta."
    >
      <section className="dashboard-grid dashboard-grid--stats">
        {adminSummary.map((item) => (
          <StatCard key={item.label} {...item} />
        ))}
      </section>

      <section className="dashboard-grid dashboard-grid--two-column">
        <SectionCard
          title="Work Order Aktif"
          subtitle="Pantau status operasional terkini tanpa keluar dari dashboard admin."
          action={<button className="dashboard-inline-button">Lihat semua</button>}
        >
          <DataTable columns={workOrderColumns} rows={workOrders} />
        </SectionCard>

        <SectionCard
          title="Perlu Perhatian"
          subtitle="Anomali dan data yang sebaiknya diperiksa hari ini."
        >
          <div className="dashboard-attention-list">
            {attentionItems.map((item) => (
              <article
                key={item.title}
                className={`dashboard-attention dashboard-attention--${item.tone}`}
              >
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </article>
            ))}
          </div>
        </SectionCard>
      </section>

      <section className="dashboard-grid dashboard-grid--two-column">
        <SectionCard
          title="User Terbaru"
          subtitle="Validasi akun operasional dan distribusi role dari satu tempat."
          action={<button className="dashboard-inline-button">Kelola user</button>}
        >
          <DataTable columns={userColumns} rows={recentUsers} />
        </SectionCard>

        <SectionCard
          title="Master Jenis Servis"
          subtitle="Contoh daftar master data servis yang paling sering digunakan."
          action={<button className="dashboard-inline-button">Tambah jenis servis</button>}
        >
          <DataTable columns={masterServiceColumns} rows={masterServices} />
        </SectionCard>
      </section>
    </DashboardShell>
  );
}
