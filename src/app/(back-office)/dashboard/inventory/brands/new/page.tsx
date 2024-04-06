'use client';
import { FormHeader } from '@/components/form/FormHeader';
import { InputField } from '@/components/form/InputField';
import { SaveButton } from '@/components/form/SaveButton';
import { styles } from '@/utils/styles';
import { useState } from 'react';
import { useForm } from 'react-hook-form';

export default function NewBrandPage() {
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
			const response = await fetch('/api/brands', {
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
			<FormHeader title="New Brand" href="/dashboard/inventory/brands" />
			<form onSubmit={handleSubmit(onSubmit)} className={styles.formStyles}>
				<div className=" grid gap-4 sm:grid-cols-2 sm:gap-6 ">
					<InputField
						label="Brand name"
						name="name"
						register={register}
						errors={errors}
						required
					/>
				</div>
				<div className="w-full mt-6">
					<SaveButton loading={loading} title="Brand" />
				</div>
			</form>
		</>
	);
}
