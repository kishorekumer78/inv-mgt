import { cn } from '@/lib/utils';
import { FieldErrors, FieldValues, UseFormRegister } from 'react-hook-form';

type Props = {
	register: UseFormRegister<FieldValues>;
	errors: FieldErrors<FieldValues>;
	label: string;
	name: string;
	fullWidth?: boolean;
	required?: boolean;
	type?: 'text' | 'number';
};

export function InputField({
	register,
	errors,
	name,
	fullWidth = false,
	label,
	required = false,
	type = 'text'
}: Props) {
	const labelClasses = 'block mb-2 text-sm capitalize font-medium text-gray-900 dark:text-white';
	const inputClasses =
		'bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500';

	// UseFormRegister
	// FieldValues
	return (
		<>
			<div
				className={cn(
					fullWidth ? 'sm:col-span-2' : 'sm:col-span-2 md:col-span-2 lg:col-span-1 w-full'
				)}
			>
				<label className={labelClasses} htmlFor={name}>
					{label}
				</label>
				<input
					id={name}
					type={type}
					placeholder={`Type the ${label.toLowerCase()} here...`}
					className={inputClasses}
					{...register(name, { required: required })}
				/>
				{errors[name] && (
					<span className="text-rose-500 text-xs">{label} is required*</span>
				)}
			</div>
		</>
	);
}
