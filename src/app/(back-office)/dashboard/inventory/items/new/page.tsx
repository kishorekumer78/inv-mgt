'use client';
import { FormHeader } from '@/components/form/FormHeader';
import { InputField } from '@/components/form/InputField';
import { SaveButton } from '@/components/form/SaveButton';
import { SelectInput } from '@/components/form/SelectInput';
import { TextAreaInput } from '@/components/form/TextAreaInput';
import { ImageUpload } from '@/components/form/imageUpload';
import { createRequest } from '@/lib/requests';
import { brandData, categoryData, supplierData, unitData, warehouseData } from '@/utils/data';

import { useState } from 'react';
import { useForm } from 'react-hook-form';

export default function NewItemPage() {
	const [loading, setLoading] = useState(false);
	const [imageUrl, setImageUrl] = useState<string>('');

	const {
		register,
		handleSubmit,
		formState: { errors },
		reset
	} = useForm();
	const onSubmit = async (data: any) => {
		try {
			setLoading(true);
			data.imageUrl = imageUrl;
			console.log(data);
			const response = await createRequest('POST', '/api/items', data);
			if (response.ok) {
				console.log('res', response);
				reset();
				setImageUrl('');
				setLoading(false);
			}
		} catch (error) {
			console.log('error', error);
			setLoading(false);
		}
	};
	return (
		<>
			<FormHeader title="New Item" href="/dashboard/inventory/items" />

			<form
				onSubmit={handleSubmit(onSubmit)}
				className="w-full max-w-sm lg:max-w-lg xl:max-w-4xl p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700 mx-auto mt-2"
			>
				<div className=" grid gap-4 sm:grid-cols-2 sm:gap-6 ">
					<InputField
						label="Item name"
						name="name"
						register={register}
						errors={errors}
						fullWidth
						required
					/>
					<SelectInput
						name="catId"
						label="Category"
						options={categoryData}
						register={register}
						errors={errors}
						required
					/>
					<SelectInput
						name="brandId"
						label="Brand"
						options={brandData}
						register={register}
						errors={errors}
					/>
					<InputField
						label="SKU"
						name="sku"
						register={register}
						errors={errors}
						required
					/>
					<InputField
						type="number"
						label="Buying Price"
						name="buyingPrice"
						register={register}
						errors={errors}
						required
					/>
					<SelectInput
						name="supplierId"
						label="Select Supplier"
						options={supplierData}
						register={register}
						errors={errors}
					/>
					<InputField
						type="number"
						label="Quantity"
						name="qty"
						register={register}
						errors={errors}
						required
					/>
					<InputField
						type="number"
						label="Selling Price"
						name="sellingPrice"
						register={register}
						errors={errors}
					/>
					<InputField
						type="number"
						label="Reorder Point"
						name="reorderPoint"
						register={register}
						errors={errors}
					/>
					<SelectInput
						label="Select Warehouse"
						name="warehouseId"
						options={warehouseData}
						register={register}
						errors={errors}
					/>
					<SelectInput
						label="Select Unit"
						name="unitId"
						options={unitData}
						register={register}
						errors={errors}
						required
					/>

					<InputField
						label="Weight in Kg"
						name="weight"
						register={register}
						errors={errors}
						type="number"
					/>
					<InputField
						label="Dimension in cm ( 20x30x20 )"
						name="dimension"
						register={register}
						errors={errors}
						placeholder="length x breadth x height"
					/>
					<InputField
						label="Barcode"
						name="barcode"
						register={register}
						errors={errors}
					/>
					<InputField
						label="Tax rate in %"
						name="taxRate"
						register={register}
						errors={errors}
						type="number"
					/>

					<TextAreaInput
						label="Item Description"
						name="description"
						register={register}
						errors={errors}
						fullWidth
					/>
					<TextAreaInput
						label="Notes"
						name="notes"
						register={register}
						errors={errors}
						fullWidth
					/>

					<ImageUpload
						label="Upload Image"
						setImageUrl={setImageUrl}
						imageUrl={imageUrl}
						fullWidth
					/>
				</div>

				<div className="w-full mt-6">
					<SaveButton loading={loading} title="Item" />
				</div>
			</form>
		</>
	);
}
