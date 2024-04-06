import { FixedHeader } from '@/components/dashboard/FixedHeader';
import { OptionsCard } from '@/components/dashboard/OptionsCard';
import { itemCardOptions } from '@/utils/data';

export default function InventoryPage() {
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
