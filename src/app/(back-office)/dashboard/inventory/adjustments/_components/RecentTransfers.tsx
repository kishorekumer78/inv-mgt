import { FormHeader } from '@/components/form/FormHeader';

type Props = {};

export function RecentTransfers({}: Props) {
	return (
		<>
			<FormHeader title="View Recent transfers" href="/dashboard/inventory" />
			<div className="w-full max-w-sm lg:max-w-lg xl:max-w-4xl p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700 mx-auto mt-1">
				Table for recent transfers.....
			</div>
		</>
	);
}
