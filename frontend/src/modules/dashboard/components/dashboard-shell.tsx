import type { ReactNode } from 'react';
import DashboardSidebar from './dashboard-sidebar';
import DashboardTopbar from './dashboard-topbar';

interface DashboardShellProps {
  title: string;
  subtitle: string;
  children: ReactNode;
}

export default function DashboardShell({ title, subtitle, children }: DashboardShellProps) {
  return (
    <div className="dashboard-shell">
      <DashboardSidebar />
      <div className="dashboard-shell__main">
        <DashboardTopbar title={title} subtitle={subtitle} />
        <main className="dashboard-shell__content">{children}</main>
      </div>
    </div>
  );
}
