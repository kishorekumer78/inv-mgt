import { PlusCircle } from 'lucide-react';
import Link from 'next/link';

type Props = {
	title: string;
	href: string;
};

export function SidebarSecondaryLink({ title, href }: Props) {
	return (
		<>
			<Link
				href={href}
				className="flex justify-between items-center gap-3 rounded-md pl-8 pr-4 py-2 text-sm hover:bg-slate-900"
			>
				<span>{title}</span>
				<PlusCircle className="w-4 h-4" />
			</Link>
		</>
	);
}
