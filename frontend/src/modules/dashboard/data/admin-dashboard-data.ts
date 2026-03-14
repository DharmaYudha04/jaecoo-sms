export type ServiceStatus =
  | 'ANTRIAN'
  | 'PROSES_SERVIS'
  | 'SIAP_TEST_DRIVE'
  | 'SELESAI'
  | 'DIAMBIL'
  | 'TERKENDALA';

export interface AdminSummaryItem {
  label: string;
  value: string;
  hint: string;
  trend: string;
}

export interface WorkOrderItem {
  id: string;
  customer: string;
  vehicle: string;
  advisor: string;
  status: ServiceStatus;
  eta: string;
}

export interface UserActivityItem {
  name: string;
  role: string;
  status: 'Aktif' | 'Pending' | 'Nonaktif';
  updatedAt: string;
}

export interface AttentionItem {
  title: string;
  description: string;
  tone: 'default' | 'warning' | 'danger';
}

export interface MasterServiceItem {
  name: string;
  category: string;
  duration: string;
}

export const adminSummary: AdminSummaryItem[] = [
  {
    label: 'Total User',
    value: '48',
    hint: 'Seluruh akun operasional',
    trend: '+4 bulan ini',
  },
  {
    label: 'User Aktif',
    value: '44',
    hint: 'Siap digunakan hari ini',
    trend: '91,6% aktif',
  },
  {
    label: 'Data Kendaraan',
    value: '1.284',
    hint: 'Terdaftar di sistem',
    trend: '+37 minggu ini',
  },
  {
    label: 'Work Order Aktif',
    value: '26',
    hint: 'Sedang berjalan di bengkel',
    trend: '3 prioritas tinggi',
  },
];

export const workOrders: WorkOrderItem[] = [
  {
    id: 'WO-260312-018',
    customer: 'Rangga Pradana',
    vehicle: 'JAECOO J7 • AB 1234 YK',
    advisor: 'Nadia Putri',
    status: 'PROSES_SERVIS',
    eta: '13:30',
  },
  {
    id: 'WO-260312-019',
    customer: 'Ayu Maharani',
    vehicle: 'JAECOO J8 • AB 8441 KT',
    advisor: 'Alya Safitri',
    status: 'SIAP_TEST_DRIVE',
    eta: '14:10',
  },
  {
    id: 'WO-260312-020',
    customer: 'Budi Santoso',
    vehicle: 'JAECOO J7 SHS • AB 9002 ZZ',
    advisor: 'Fikri Ramadhan',
    status: 'TERKENDALA',
    eta: 'Menunggu part',
  },
  {
    id: 'WO-260312-021',
    customer: 'Christina Dewi',
    vehicle: 'JAECOO J7 • AB 7711 CN',
    advisor: 'Nadia Putri',
    status: 'ANTRIAN',
    eta: '15:20',
  },
  {
    id: 'WO-260312-022',
    customer: 'Yoga Prasetyo',
    vehicle: 'JAECOO J8 • AB 2234 UV',
    advisor: 'Alya Safitri',
    status: 'SELESAI',
    eta: 'Siap invoice',
  },
];

export const recentUsers: UserActivityItem[] = [
  {
    name: 'Nadia Putri',
    role: 'Frontliner',
    status: 'Aktif',
    updatedAt: '26 Mar 2026 • 08:10',
  },
  {
    name: 'Bima Alfarizi',
    role: 'Mekanik',
    status: 'Aktif',
    updatedAt: '26 Mar 2026 • 07:58',
  },
  {
    name: 'Raka Saputra',
    role: 'Manager Service',
    status: 'Pending',
    updatedAt: '25 Mar 2026 • 17:40',
  },
  {
    name: 'Dewi Larasati',
    role: 'Admin',
    status: 'Nonaktif',
    updatedAt: '25 Mar 2026 • 13:15',
  },
];

export const masterServices: MasterServiceItem[] = [
  { name: 'Periodic Service 10.000 km', category: 'Periodic', duration: '1,5 jam' },
  { name: 'General Check Up', category: 'Inspection', duration: '45 menit' },
  { name: 'Brake Maintenance', category: 'Repair', duration: '2 jam' },
  { name: 'Software Update ECU', category: 'Software', duration: '30 menit' },
];

export const attentionItems: AttentionItem[] = [
  {
    title: '2 akun masih pending approval',
    description: 'Periksa role dan akses sebelum dipakai operasional hari ini.',
    tone: 'warning',
  },
  {
    title: '1 work order terkendala lebih dari 4 jam',
    description: 'WO-260312-020 menunggu sparepart brake pad depan.',
    tone: 'danger',
  },
  {
    title: '14 kendaraan baru belum memiliki data asuransi',
    description: 'Lengkapi metadata pelanggan untuk kebutuhan laporan dealer.',
    tone: 'default',
  },
];
