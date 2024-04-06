'use client';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { FormHeader } from '@/components/form/FormHeader';
import { InputField } from '@/components/form/InputField';
import { SaveButton } from '@/components/form/SaveButton';

export default function NewUnitPage() {
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
			const response = await fetch('/api/units', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify(data)
			});
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
			<FormHeader title="New Unit" href="/dashboard/inventory/units" />
			<form
				onSubmit={handleSubmit(onSubmit)}
				className="w-full max-w-sm lg:max-w-lg xl:max-w-4xl p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700 mx-auto mt-5"
			>
				<div className=" grid gap-4 sm:grid-cols-2 sm:gap-6 ">
					<InputField
						label="Unit name"
						name="name"
						register={register}
						errors={errors}
						required
					/>
					<InputField
						label="Unit Abbreviation"
						name="abbreviation"
						register={register}
						errors={errors}
						required
					/>
				</div>
				<div className="w-full mt-6">
					<SaveButton loading={loading} title="Unit" />
				</div>
			</form>
		</>
	);
}
