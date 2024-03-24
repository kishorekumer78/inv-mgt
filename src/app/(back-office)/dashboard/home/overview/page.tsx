import { DashboardBanner } from '@/components/dashboard/home/overview/DashboardBanner';
import { SalesOverview } from '@/components/dashboard/home/overview/SalesOverview';

export default function OverviewPage() {
	return (
		<>
			<div>
				<DashboardBanner />
				<SalesOverview />
			</div>
		</>
	);
}
