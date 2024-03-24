'use client';
import { cn } from '@/lib/utils';
import { Building2 } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export function HomeNavbar() {
	const pathname = usePathname();

	const navLinks = [
		{ title: 'Dashboard', href: '/dashboard/home/overview' },
		{ title: 'Getting Started', href: '/dashboard/home/getting-started' },
		{ title: 'Recent Updates', href: '/dashboard/home/updates' },
		{ title: 'Announcements', href: '/dashboard/home/announcements' }
	];
	return (
		<>
			<div className="h-32 px-3 pt-3 pb-0 shadow-sm mb-0">
				<div className="flex items-center gap-4">
					<div className="flex bg-white p-2 rounded-lg border border-gray-300">
						<Building2 className="w-6 h-6" />
					</div>
					<div className="flex flex-col">
						<h2 className="font-semibold text-slate-700">Hello Person Name</h2>
						<h3 className="text-xs">E-INV</h3>
					</div>
				</div>
				<nav className="sticky mt-10 pb-0 flex gap-2">
					{navLinks.map((item, i) => (
						<Link
							key={i}
							href={item.href}
							// className=" active:border-b-4 active:  "
							className={cn(
								'py-[5px] px-4 rounded hover:bg-slate-200 text-sm font-semibold uppercase',
								pathname === item.href ? 'border-b-4 border-blue-600' : ''
							)}
						>
							{item.title}
						</Link>
					))}
				</nav>
			</div>
		</>
	);
}
