import { cn } from '@/lib/utils';
import { CheckCircle2 } from 'lucide-react';
import Link from 'next/link';

type SalesActivityCard = {
	amount: number;
	unit: string;
	text: string;
	href: string;
	color: string;
};
type Props = {
	item: SalesActivityCard;
};

export function SalesActivityCard({ item }: Props) {
	return (
		<>
			<Link
				href={item.href}
				className="bg-white py-4  rounded-lg border-2 border-slate-200 hover:border-blue-400 cursor-pointer transition-all duration-300 shadow"
			>
				<h4 className={cn('text-3xl py-2 font-semibold text-center', item.color)}>
					{item.amount}
				</h4>
				<p className="text-center text-slate-600 text-sm">{item.unit}</p>
				<div className="flex items-center justify-center gap-4 mt-3 text-slate-500">
					<CheckCircle2 className="" />
					<p className="uppercase text-[12px] font-semibold">{item.text}</p>
				</div>
			</Link>
		</>
	);
}
