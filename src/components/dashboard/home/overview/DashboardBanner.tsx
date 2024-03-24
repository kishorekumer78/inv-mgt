'use client';
import { CreditCard, X } from 'lucide-react';
import { useState } from 'react';

export function DashboardBanner() {
	const [hidden, setHidden] = useState(false);
	return (
		<>
			{hidden ? null : (
				<div className="grid grid-cols-12 items-center py-5 px-20 shadow-sm bg-white relative">
					{/* Icon */}
					<div className="col-span-2">
						<CreditCard className="h-16 w-16 text-slate-500" />
					</div>
					{/* text */}
					<div className="space-y-4 col-span-6">
						<h2 className="text-lg font-bold capitalize">
							Start Accepting online payments
						</h2>
						<p className="text-slate-500">
							Businesses are moving towards online payments are they are easy, secure
							and fast. Try them for your business today.
						</p>
					</div>

					{/* button */}
					<div className="col-span-3">
						<button className="py-2 px-8 text-sm uppercase bg-blue-500 rounded-lg text-slate-100">
							Enable
						</button>
					</div>

					{/* close button */}
					<button
						className="absolute top-4 right-16 text-slate-600"
						onClick={() => setHidden(true)}
					>
						<X />
					</button>
				</div>
			)}
		</>
	);
}
