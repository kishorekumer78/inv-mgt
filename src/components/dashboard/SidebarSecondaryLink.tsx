import { PlusCircle } from 'lucide-react';
import Link from 'next/link';

type Props = {
	title: string;
	href: string;
	newLink?: boolean;
};

export function SidebarSecondaryLink({ title, href, newLink }: Props) {
	return (
		<>
			<div className="flex justify-between items-center gap-3 rounded-md pl-8 pr-4 py-2 text-sm hover:bg-slate-900">
				<Link href={href}>{title}</Link>

				<Link href={newLink ? href + '/new' : href + '#'}>
					<PlusCircle className="w-4 h-4" />
				</Link>
			</div>
		</>
	);
}
