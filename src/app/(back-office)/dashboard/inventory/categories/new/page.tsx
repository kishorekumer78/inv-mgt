'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';

import { FormHeader } from '@/components/dashboard/FormHeader';
import { InputField } from '@/components/form/InputField';
import { SaveButton } from '@/components/form/SaveButton';
import { TextAreaInput } from '@/components/form/TextAreaInput';

type FormData = {
	title: string;
	description: string;
	price: number;
};
export default function NewCategoryPage() {
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
			const response = await fetch('/api/categories', {
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
			}
		} catch (error) {
			console.log('error', error);
			setLoading(false);
		}
	};
	return (
		<>
			<FormHeader title="New Category" href="/dashboard/inventory/categories" />

			<form
				onSubmit={handleSubmit(onSubmit)}
				className="w-full max-w-sm lg:max-w-lg xl:max-w-3xl p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700 mx-auto mt-5"
			>
				<div className=" grid gap-4 sm:grid-cols-2 sm:gap-6 ">
					<InputField
						label="Category name"
						name="catName"
						register={register}
						errors={errors}
						fullWidth
						required
					/>
					<TextAreaInput
						label="Category description"
						name="catDescription"
						register={register}
						errors={errors}
						required
						fullWidth
					/>
				</div>
				<div className="w-full mt-6">
					<SaveButton loading={loading} title="Category" />
				</div>
			</form>
		</>
	);
}
