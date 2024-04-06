import { X } from 'lucide-react';
import Link from 'next/link';

export function FormHeader({ title, href }: { title: string; href: string }) {
	return (
		<>
			<div className="flex items-center justify-between bg-white py-2 px-6 max-w-sm lg:max-w-lg xl:max-w-4xl mx-auto">
				<h2 className="text-lg font-semibold">{title}</h2>
				<Link href={href}>
					<X />
				</Link>
			</div>
		</>
	);
}
