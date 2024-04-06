'use client';

import { useState } from 'react';
import { Forklift, ListChecks, PlusCircle } from 'lucide-react';

import { AddStock } from './AddStock';
import { TransferStock } from './TransferStock';
import { RecentTransfers } from './RecentTransfers';
import { Tabs } from '@/components/dashboard/Tabs';
import { TabProperties } from '@/lib/types';

export function AdjustmentTabs() {
	const tabData: TabProperties[] = [
		{ tabName: 'new', label: 'New Stock', icon: PlusCircle },
		{ tabName: 'transfer', label: 'Transfer Stock', icon: Forklift },
		{ tabName: 'recentTransfers', label: 'Recent transfers', icon: ListChecks }
	];

	const [active, setActive] = useState(0);
	return (
		<>
			<Tabs active={active} tabData={tabData} setActive={setActive} />
			{active === 0 ? <AddStock /> : null}
			{active === 1 ? <TransferStock /> : null}
			{active === 2 ? <RecentTransfers /> : null}
		</>
	);
}
