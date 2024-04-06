import { cn } from '@/lib/utils';
import { FieldErrors, FieldValues, UseFormRegister } from 'react-hook-form';
export type SelectOptions = {
	title: string;
	value: string;
	selected: boolean;
};
type Props = {
	register: UseFormRegister<FieldValues>;
	errors: FieldErrors<FieldValues>;
	label: string;
	name: string;
	options: SelectOptions[];
	fullWidth?: boolean;
	required?: boolean;
};

export function SelectInput({
	register,
	errors,
	label,
	options = [],
	name,
	fullWidth = false,
	required = false
}: Props) {
	const selectedValue = (data: SelectOptions[]) => {
		const option = data.find((x) => x.selected);
		if (option) {
			return option.value;
		} else {
			return undefined;
		}
	};
	return (
		<>
			<div
				className={cn(
					fullWidth ? 'sm:col-span-2' : 'sm:col-span-2 md:col-span-2 lg:col-span-1 w-full'
				)}
			>
				<label
					htmlFor={name}
					className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
				>
					{label}
				</label>
				<select
					id={name}
					className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
					// defaultValue={selectedValue(options)}
					{...register(name, { required: required })}
				>
					<option value={''}>Select an option</option>
					{options.map((item, i) => (
						<option key={i} value={item.value}>
							{item.title}
						</option>
					))}
				</select>
				{errors[name] && (
					<span className="text-rose-500 text-xs">{label} is required*</span>
				)}
			</div>
		</>
	);
}
