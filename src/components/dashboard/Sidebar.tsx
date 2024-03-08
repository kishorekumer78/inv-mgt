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
import SubscriptionCard from './SubscriptionCard';

export default function Sidebar() {
	return (
		<>
			<div className="w-56 min-h-screen bg-slate-800 text-white">
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
							href=""
							className="flex gap-4 items-center bg-blue-600 p-2 rounded-md"
						>
							<Home className="h-4 w-4" />
							<span>Home</span>
						</Link>
						{/* buttons expandable */}
						<button className="flex gap-4 items-center p-2 rounded-md">
							<BaggageClaim className="h-4 w-4" />
							<span>Inventory</span>
						</button>
						<button className="flex gap-4 items-center p-2 rounded-md">
							<ShoppingBasket className="h-4 w-4" />
							<span>Sales</span>
						</button>
						<button className="flex gap-4 items-center p-2 rounded-md">
							<ShoppingBag className="h-4 w-4" />
							<span>Purchases</span>
						</button>
						<Link href="" className="flex gap-4 items-center p-2 rounded-md">
							<Cable className="h-4 w-4" />
							<span>Integrations</span>
						</Link>
						<Link href="" className="flex gap-4 items-center p-2 rounded-md">
							<BarChartBig className="h-4 w-4" />
							<span>Reports</span>
						</Link>
						<Link href="" className="flex gap-4 items-center p-2 rounded-md">
							<Files className="h-4 w-4" />
							<span>Documents</span>
						</Link>
					</nav>
					<SubscriptionCard />
				</div>

				{/* Bottom part */}
				{/* Bottom part Subscription card */}
				<div className="flex flex-col justify-end items-center bg-slate-900">
					<div className="flex space-x-2 items-center py-3 px-2">
						<ChevronLeft />
					</div>
				</div>
				{/* Bottom part Footer Icon */}
			</div>
		</>
	);
}
