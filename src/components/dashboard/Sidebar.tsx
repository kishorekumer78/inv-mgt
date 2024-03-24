import {
	BaggageClaim,
	BarChartBig,
	Cable,
	ChevronLeft,
	Files,
	Home,
	ShoppingBag,
	ShoppingBasket,
	ShoppingCart
} from 'lucide-react';

import Link from 'next/link';
import { SubscriptionCard } from '@/components/dashboard/SubscriptionCard';
import { SidebarDropdown } from './SidebarDropdown';

export default function Sidebar() {
	const inventoryLinks = [
		{ title: 'Items', href: '/dashboard/inventory' },
		{ title: 'Item Groups', href: '#' },
		{ title: 'Inventory Adjustments', href: '#' }
	];
	const salesLinks = [
		{ title: 'Customers', href: '#' },
		{ title: 'Sales Orders', href: '#' },
		{ title: 'Packages', href: '#' },
		{ title: 'Shipments', href: '#' },
		{ title: 'Invoices', href: '#' },
		{ title: 'Sales Receipts', href: '#' },
		{ title: 'Payments Received', href: '#' },
		{ title: 'Sales Returns', href: '#' },
		{ title: 'Credit Notes', href: '#' }
	];
	const purchaseLinks = [
		{ title: 'Items', href: '#' },
		{ title: 'Item Groups', href: '#' },
		{ title: 'Inventory Adjustments', href: '#' }
	];

	return (
		<div className="fixed">
			<div className="w-60 min-h-screen bg-slate-800 text-white flex flex-col justify-between">
				{/* Top part */}
				<div className="flex flex-col">
					{/* Top part logo */}
					<Link href="#" className="flex space-x-3 items-center bg-slate-900 py-3 px-2">
						<ShoppingCart />
						<span className="text-xl font-semibold">E-Inv</span>
					</Link>
					{/* Top part links */}
					<nav className="flex flex-col p-3 gap-3">
						<Link
							href="/dashboard/home/overview"
							className="flex gap-4 items-center bg-blue-600 p-2 rounded-md"
						>
							<Home className="h-4 w-4" />
							<span>Home</span>
						</Link>
						{/* Expandable dropdowns */}
						<SidebarDropdown
							icon={BaggageClaim}
							title="Inventory"
							links={inventoryLinks}
						/>
						<SidebarDropdown icon={ShoppingBasket} title="Sales" links={salesLinks} />
						<SidebarDropdown
							icon={ShoppingBag}
							title="Purchases"
							links={purchaseLinks}
						/>

						<Link
							href="/dashboard/integrations"
							className="flex gap-4 items-center p-2 rounded-md"
						>
							<Cable className="h-4 w-4" />
							<span>Integrations</span>
						</Link>
						<Link
							href="/dashboard/reports"
							className="flex gap-4 items-center p-2 rounded-md"
						>
							<BarChartBig className="h-4 w-4" />
							<span>Reports</span>
						</Link>
						<Link
							href="/dashboard/documents"
							className="flex gap-4 items-center p-2 rounded-md"
						>
							<Files className="h-4 w-4" />
							<span>Documents</span>
						</Link>
					</nav>
					{/* Subscription Card */}
					<SubscriptionCard />
				</div>

				{/* Bottom part */}

				<div className="flex flex-col  items-center bg-slate-900">
					<div className="flex space-x-2 items-center py-3 px-2">
						<ChevronLeft />
					</div>
				</div>
			</div>
		</div>
	);
}
