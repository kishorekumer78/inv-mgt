'use client';

import { UploadDropzone } from '@/utils/uploadthing';
import { Pencil } from 'lucide-react';
import Image from 'next/image';

type Props = {
	imageUrl: string;
	setImageUrl: (a: string) => void;
	fullWidth?: boolean;
	label: string;
	endpoint?: any;
};
export function ImageUpload({
	imageUrl = '',
	setImageUrl,
	label,
	fullWidth = false,
	endpoint = 'imageUploader'
}: Props) {
	const deleteImage = async (imageUrls: string) => {
		// call api to delete image
	};
	return (
		<>
			<div className={fullWidth ? 'col-span-2' : 'w-full'}>
				<div className="flex justify-between items-center mb-4">
					<p className="block text-sm font-medium leading-6 text-gray-900">{label}</p>
					{imageUrl && (
						<button
							onClick={() => deleteImage(imageUrl)}
							type="button"
							className="flex space-x-2  bg-slate-900 rounded-md shadow text-slate-50  py-2 px-4"
						>
							<Pencil className="w-5 h-5" />
							<span>Change Image</span>
						</button>
					)}
				</div>
				{imageUrl ? (
					<Image
						src={imageUrl}
						alt="Item image"
						width={600}
						height={600}
						className="w-[200px] h-[200px]"
					/>
				) : (
					<UploadDropzone
						endpoint={endpoint}
						onClientUploadComplete={(res) => {
							// Do something with the response
							setImageUrl(res[0].url);
						}}
						onUploadError={(error: Error) => {
							alert(`ERROR! ${error.message}`);
						}}
						onUploadBegin={(name) => {
							// Do something once upload begins
							console.log('Uploading: ', name);
						}}
					/>
				)}
			</div>
		</>
	);
}
