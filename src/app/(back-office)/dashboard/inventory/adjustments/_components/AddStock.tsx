'use client';
import { FormHeader } from '@/components/form/FormHeader';
import { InputField } from '@/components/form/InputField';
import { SaveButton } from '@/components/form/SaveButton';
import { SelectInput } from '@/components/form/SelectInput';
import { TextAreaInput } from '@/components/form/TextAreaInput';
import { createRequest } from '@/lib/requests';
import { itemSelectOptions, warehouseData } from '@/utils/data';
import { useState } from 'react';
import { useForm } from 'react-hook-form';

type Props = {};

export function AddStock({}: Props) {
	const [loading, setLoading] = useState(false);
	const {
		register,
		handleSubmit,
		formState: { errors },
		reset
	} = useForm();
	const onSubmit = async (data: any) => {
		try {
			setLoading(true);
			const response = await createRequest('POST', '', data);
			if (response.ok) {
				console.log('res', response);
				reset();
				setLoading(false);
			} else {
				console.log('Error has come');
				setLoading(false);
			}
		} catch (error) {
			console.log('error', error);
			setLoading(false);
		}
	};
	return (
		<>
			<FormHeader title="Add stock for any item" href="/dashboard/inventory" />
			<form
				onSubmit={handleSubmit(onSubmit)}
				className="w-full max-w-sm lg:max-w-lg xl:max-w-4xl p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700 mx-auto mt-1"
			>
				<div className=" grid gap-4 sm:grid-cols-2 sm:gap-6 ">
					<SelectInput
						label="Select Item"
						name="itemId"
						register={register}
						errors={errors}
						options={itemSelectOptions}
						fullWidth
					/>

					<SelectInput
						label="Warehouse"
						name="warehouseId"
						register={register}
						errors={errors}
						options={warehouseData}
					/>

					<InputField
						label="Quantity"
						name="qty"
						type="number"
						register={register}
						errors={errors}
						required
					/>
					<TextAreaInput
						label="Notes"
						register={register}
						errors={errors}
						name="note"
						fullWidth
					/>
				</div>
				<div className="w-full mt-6">
					<SaveButton loading={loading} />
				</div>
			</form>
		</>
	);
}
