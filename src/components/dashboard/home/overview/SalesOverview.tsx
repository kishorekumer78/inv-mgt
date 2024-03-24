import { SalesActivityCard } from './SalesActivityCard';
import { InventoryOverviewCard } from './InventoryOverviewCard';

export function SalesOverview() {
	const salesActivityData = [
		{ amount: 7, unit: 'Qty', text: 'To be packed', href: '#', color: 'text-red-500' },
		{ amount: 23, unit: 'Pkgs', text: 'To be shipped', href: '#', color: 'text-blue-500' },
		{ amount: 151, unit: 'Pkgs', text: 'To be delivered', href: '#', color: 'text-green-500' },
		{ amount: 49, unit: 'Qty', text: 'To be invoiced', href: '#', color: 'text-orange-500' }
	];
	const inventorySummary = [
		{ text: 'Quantity in Hand', amount: 13 },
		{ text: 'Quantity to be received', amount: 7 }
	];
	return (
		<>
			<div className="bg-blue-50 shadow px-16 py-4">
				<div className="grid grid-cols-12 gap-4">
					{/* Sales Activity */}
					<div className="col-span-8 border-r border-slate-200 pr-8">
						<h2 className="font-semibold text-center">Sales Activity</h2>
						<div className="grid grid-cols-4 py-3 space-x-4">
							{/* Cards */}
							{salesActivityData.map((item, i) => (
								<SalesActivityCard key={i} item={item} />
							))}
						</div>
					</div>
					{/* Inventory Summery */}
					<div className="col-span-4 space-y-3 pl-4">
						<h2 className="font-semibold text-center">Inventory Summary</h2>
						<div className="space-y-2">
							{inventorySummary.map((item, i) => (
								<InventoryOverviewCard key={i} item={item} />
							))}
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
