import Link from 'next/link';

export function SubscriptionCard() {
	return (
		<>
			<div className="p-3">
				<div className="px-3 py-2 my-6 bg-slate-900 rounded-sm">
					<div className="border-b border-slate-600 pb-2">
						<p className="text-xs py-2 border-l-4 pl-2 border-orange-400">
							Your Premium plan&apos;s trial expires in
							<span className="text-orange-300"> 14 days</span>.
						</p>
					</div>
					<div className="flex">
						<button className="text-xs p-2 border-r border-slate-600">
							Change Plan
						</button>
						<Link href="#" className="text-xs p-2">
							Upgrade
						</Link>
					</div>
				</div>
			</div>
		</>
	);
}
