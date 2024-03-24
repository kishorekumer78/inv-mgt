import { FixedHeader } from '@/components/dashboard/FixedHeader';
import { OptionData, OptionsCard } from '@/components/dashboard/OptionsCard';
import { Combine, Layers3, ScrollText, Shirt } from 'lucide-react';

export default function InventoryPage() {
	const itemCardOptions: OptionData[] = [
		{
			title: 'Item Groups',
			description: 'Create multiple variants of the same item using Item Groups',
			icon: Layers3,
			linkTitle: 'New Item Groups',
			link: '#',
			enabled: true
		},
		{
			title: 'Items',
			description: 'Create standalone items and services that you buy and sell',
			icon: Shirt,
			linkTitle: 'New Item',
			link: '#',
			enabled: true
		},
		{
			title: 'Composite Items',
			description: 'Bundle different items together and sell them as kits',
			icon: Combine,
			linkTitle: 'New Composite Item',
			link: '#',
			enabled: true
		},
		{
			title: 'Price List',
			description: 'Tweak your prices for specific contacts or transactions',
			icon: ScrollText,
			linkTitle: 'Set Price',
			link: '#',
			enabled: true
		}
	];
	return (
		<>
			<FixedHeader newLink="/dashboard/inventory/items/new" />
			{/* cards */}
			<div className="grid grid-cols-1 lg:grid-cols-2 gap-6 p-12">
				{/* Single card */}
				{itemCardOptions.map((item, i) => (
					<OptionsCard key={i} data={item} />
				))}
			</div>
		</>
	);
}
