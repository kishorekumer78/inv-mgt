import { Bell, ChevronDown, Grid, History, Plus, Settings, Users } from 'lucide-react';
import SearchBox from './SearchBox';
import Image from 'next/image';

export default function DashboardHeader() {
	return (
		<>
			<div className="bg-gray-100 flex items-center justify-between h-12 px-5 border-b border-slate-200">
				{/* left */}
				<div className="flex gap-3">
					{/* Recent Activities */}
					<button>
						<History className="w-6 h-6" />
					</button>

					{/* Search */}
					<SearchBox />
				</div>

				{/* right  */}
				<div className="flex gap-3 items-center">
					{/* plus icon */}
					<div className="pr-3 border-r border-gray-300">
						<button className="p-1 bg-blue-600 rounded-lg">
							<Plus className="w-4 h-4 text-white" />
						</button>
					</div>
					{/* users, notification and settings icon */}
					<div className="pr-3 border-r border-gray-300 flex gap-3 items-center">
						<button className="p-2 hover:bg-slate-300 rounded-md">
							<Users className="w-4 h-4" />
						</button>
						<button className="p-2 hover:bg-slate-300 rounded-md">
							<Bell className="w-4 h-4" />
						</button>
						<button className="p-2 hover:bg-slate-300 rounded-md">
							<Settings className="w-4 h-4" />
						</button>
					</div>
					{/* profile sec */}
					<div className="flex  gap-5 items-center">
						<button className="flex items-center gap-1">
							<span>Company</span>
							<ChevronDown className="h-4 w-4" />
						</button>
						<button>
							<Image
								src="/user.jpg"
								alt="user"
								height={40}
								width={40}
								className="rounded-full w-8 h-8 ring-2 ring-slate-600"
							/>
						</button>
						<button className="flex items-center gap-1">
							<Grid className="h-6 w-6" />
						</button>
					</div>
				</div>
			</div>
		</>
	);
}
