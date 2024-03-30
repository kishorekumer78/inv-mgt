import { FixedHeader } from '@/components/dashboard/FixedHeader';
import { OptionData, OptionsCard } from '@/components/dashboard/OptionsCard';
import { FilePenLine, Layers3, PencilRuler, Shirt, Target, Warehouse } from 'lucide-react';

export default function InventoryPage() {
	const itemCardOptions: OptionData[] = [
		{
			title: 'Items',
			description: 'Create and view items',
			icon: Layers3,
			linkTitle: 'View All Items',
			link: '/dashboard/inventory/items',
			enabled: true
		},
		{
			title: 'Categories',
			description: 'Create and view all categories',
			icon: Shirt,
			linkTitle: 'View All Categories',
			link: '/dashboard/inventory/categories',
			enabled: true
		},
		{
			title: 'Brands',
			description: 'Organize items as per brands',
			icon: Target,
			linkTitle: 'View Brands',
			link: '/dashboard/inventory/brands',
			enabled: true
		},
		{
			title: 'Warehouse',
			description: 'Manage storage',
			icon: Warehouse,
			linkTitle: 'View Warehouse',
			link: '/dashboard/inventory/warehouse',
			enabled: true
		},
		{
			title: 'Units',
			description: 'Manage units for products',
			icon: PencilRuler,
			linkTitle: 'View Units',
			link: '/dashboard/inventory/units',
			enabled: true
		},
		{
			title: 'Adjustments',
			description: 'Adjust inventory',
			icon: FilePenLine,
			linkTitle: 'Adjust',
			link: '/dashboard/inventory/adjustments',
			enabled: true
		}
	];
	return (
		<>
			<FixedHeader newLink="/dashboard/inventory/items/new" />
			{/* cards */}
			<div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 p-12">
				{/* Single card */}
				{itemCardOptions.map((item, i) => (
					<OptionsCard key={i} data={item} />
				))}
			</div>
		</>
	);
}
