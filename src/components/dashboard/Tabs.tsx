import { TabProperties } from '@/lib/types';
import { cn } from '@/lib/utils';

type Props = {
	active: number;
	setActive: (a: number) => void;
	tabData: TabProperties[];
};

export function Tabs({ active, tabData, setActive }: Props) {
	return (
		<>
			<div className="border-b border-gray-200 dark:border-gray-700  max-w-sm lg:max-w-lg xl:max-w-4xl mx-auto">
				<ul className="flex flex-wrap -mb-px text-sm font-medium text-center text-gray-500 dark:text-gray-400">
					{tabData.map((item, i) => {
						const Icon = item.icon;
						return (
							<li className="me-2" key={i}>
								<button
									className={cn(
										'inline-flex items-center justify-center p-4 border-b-2 border-transparent rounded-t-lg',
										active === i
											? 'text-blue-600 border-b-2 border-blue-600 font-semibold'
											: ''
									)}
									onClick={() => setActive(i)}
								>
									<Icon className="w-4 h-4 mr-2" />
									{item.label}
								</button>
							</li>
						);
					})}
				</ul>
			</div>
		</>
	);
}
