import { X } from 'lucide-react';
import Link from 'next/link';

export function FormHeader({ title, href }: { title: string; href: string }) {
	return (
		<>
			<div className="flex items-center justify-between bg-white p-6 ">
				<h2 className="text-lg font-semibold">{title}</h2>
				<Link href={href}>
					<X />
				</Link>
			</div>
		</>
	);
}
