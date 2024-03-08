import DashboardHeader from '@/components/dashboard/DashboardHeader';
import Sidebar from '@/components/dashboard/Sidebar';

export default function layout({ children }: { children: React.ReactNode }) {
	return (
		<>
			<div className="flex">
				<Sidebar />

				<main className="w-full min-h-screen bg-slate-100">
					<DashboardHeader />
					{children}
				</main>
			</div>
		</>
	);
}
