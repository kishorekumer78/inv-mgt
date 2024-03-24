import { cn } from '@/lib/utils';
type CardType = {
	text: string;
	amount: number;
};
type Props = {
	item: CardType;
};

export function InventoryOverviewCard({ item }: Props) {
	return (
		<>
			<div className="bg-white py-2 px-8 rounded-lg border-2 border-slate-200 hover:border-blue-400 cursor-pointer transition-all duration-300 shadow flex justify-between items-center">
				<h4 className="uppercase text-xs font-semibold text-slate-500">{item.text}</h4>
				<p className={cn('text-2xl font-semibold py-3 text-center text-slate-500')}>
					{item.amount}
				</p>
			</div>
		</>
	);
}
