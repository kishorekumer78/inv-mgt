import { LucideIcon } from 'lucide-react';
import Link from 'next/link';

export type OptionData = {
	title: string;
	description: string;
	icon: LucideIcon;
	linkTitle: string;
	link: string;
	enabled: boolean;
};
type Props = {
	data: OptionData;
};

export function OptionsCard({ data }: Props) {
	const { title, description, linkTitle, link, enabled, icon: Icon } = data;
	return (
		<>
			<div className="shadow-md bg-white flex flex-col items-center gap-2 px-6 py-4 rounded text-center">
				<h2 className="font-semibold uppercase">{title}</h2>

				<Icon className="w-12 h-12" strokeWidth={'.5px'} />

				<p className="text-slate-500 line-clamp-1 text-sm">{description}</p>
				{enabled ? (
					<Link
						href={link}
						className="py-2 px-4 bg-blue-600 rounded text-white inline-flex"
					>
						{linkTitle}
					</Link>
				) : (
					<button className="py-2 px-4 bg-blue-600 rounded text-white inline-flex">
						Enable
					</button>
				)}

				{/*  */}
			</div>
		</>
	);
}
