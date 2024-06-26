'use client';
import { FormHeader } from '@/components/form/FormHeader';
import { InputField } from '@/components/form/InputField';
import { SaveButton } from '@/components/form/SaveButton';
import { SelectInput, SelectOptions } from '@/components/form/SelectInput';
import { TextAreaInput } from '@/components/form/TextAreaInput';
import { createRequest } from '@/lib/requests';
import { branchTypeSelectOptionsData } from '@/utils/data';
import { useState } from 'react';
import { useForm } from 'react-hook-form';

export default function NewWarehousePage() {
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
			const response = await createRequest('POST', '/api/warehouse', data);
			if (response.ok) {
				console.log('res', response);
				reset();
				setLoading(false);
			} else {
				console.log('Error has come');
			}
		} catch (error) {
			console.log('error', error);
			setLoading(false);
		}
	};

	return (
		<>
			<FormHeader title="New Warehouse" href="/dashboard/inventory/warehouse" />

			<form
				onSubmit={handleSubmit(onSubmit)}
				className="w-full max-w-sm lg:max-w-lg xl:max-w-4xl p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700 mx-auto mt-2"
			>
				<div className=" grid gap-4 sm:grid-cols-2 sm:gap-6 ">
					<InputField
						label="Warehouse name"
						name="name"
						register={register}
						errors={errors}
						required
					/>
					<SelectInput
						label="Warehouse type"
						options={branchTypeSelectOptionsData}
						register={register}
						errors={errors}
						name="type"
					/>
					<InputField
						label="Warehouse location"
						name="location"
						register={register}
						errors={errors}
						required
						fullWidth
					/>

					<TextAreaInput
						label="Warehouse description"
						name="description"
						register={register}
						errors={errors}
						fullWidth
					/>
				</div>
				<div className="w-full mt-6">
					<SaveButton loading={loading} title="Warehouse" />
				</div>
			</form>
		</>
	);
}
