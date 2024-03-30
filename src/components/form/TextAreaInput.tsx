import { FieldErrors, FieldValues, UseFormRegister } from 'react-hook-form';

type Props = {
	register: UseFormRegister<FieldValues>;
	errors: FieldErrors<FieldValues>;
	label: string;
	name: string;
	fullWidth?: boolean;
	required?: boolean;
	type?: 'text';
	rows?: number;
};

export function TextAreaInput({
	register,
	errors,
	name,
	fullWidth = false,
	label,
	required = false,
	rows = 3
}: Props) {
	return (
		<>
			<div className={fullWidth ? 'sm:col-span-2' : 'w-full'}>
				<label
					htmlFor={name}
					className="block text-sm font-medium leading-6 text-gray-900 mb-2 "
				>
					{label}
				</label>
				{/* <div className=""> */}
				<textarea
					id={name}
					{...register(name, { required: required })}
					rows={rows}
					className=" mt-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
					defaultValue={''}
				/>
				{errors[name] && (
					<span className="text-rose-500 text-xs">{label} is required*</span>
				)}
				{/* </div> */}
			</div>
		</>
	);
}
