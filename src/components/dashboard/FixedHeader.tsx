import { HelpCircle, LayoutGrid, List, MoreHorizontal, Plus } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export function FixedHeader({ newLink }: { newLink: string }) {
	return (
		<>
			<div className="flex justify-between items-center p-4 bg-white shadow">
				<Button size="lg" variant="destructive">
					All Items
				</Button>
				<div className="flex gap-4 items-center">
					{/* New */}
					<Link
						href={newLink}
						className="py-2 px-4 bg-blue-600 rounded flex text-white gap-2 items-center shadow"
					>
						<Plus className="w-4 h-4" />
						<span>New</span>
					</Link>
					{/* Layout */}
					<div className="flex">
						<button className="bg-gray-300 rounded-l-lg p-2 shadow border-gray-300">
							<List className="w-4 h-4" />
						</button>
						<button className="bg-white rounded-r-lg p-2 shadow border border-gray-300">
							<LayoutGrid className="w-4 h-4" />
						</button>
					</div>
					{/* More */}
					<button className="">
						<MoreHorizontal />
					</button>
					{/* Help Button */}
					<button className="">
						<HelpCircle className="text-orange-500" />
					</button>
				</div>
			</div>
		</>
	);
}
