'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';

import { FormHeader } from '@/components/form/FormHeader';
import { InputField } from '@/components/form/InputField';
import { SaveButton } from '@/components/form/SaveButton';
import { TextAreaInput } from '@/components/form/TextAreaInput';
import { createRequest } from '@/lib/requests';
import { styles } from '@/utils/styles';

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
			const response = await createRequest('POST', '/api/categories', data);
			if (response.ok) {
				reset();
				setLoading(false);
			}
		} catch (error) {
			setLoading(false);
		}
	};
	return (
		<>
			<FormHeader title="New Category" href="/dashboard/inventory/categories" />

			<form onSubmit={handleSubmit(onSubmit)} className={styles.formStyles}>
				<div className=" grid gap-4 sm:grid-cols-2 sm:gap-6 ">
					<InputField
						label="Category name"
						name="name"
						register={register}
						errors={errors}
						fullWidth
						required
					/>
					<TextAreaInput
						label="Category description"
						name="description"
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
