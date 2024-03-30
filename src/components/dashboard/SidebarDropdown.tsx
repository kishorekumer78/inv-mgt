import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';
import { ChevronsUpDown, LucideIcon } from 'lucide-react';
import { SidebarSecondaryLink } from './SidebarSecondaryLink';
import Link from 'next/link';
type LinkType = {
	title: string;
	href: string;
	newLink?: boolean;
};
type Props = {
	title: string;
	icon: LucideIcon;
	links: LinkType[];
};

export function SidebarDropdown({ title, icon: Icon, links }: Props) {
	return (
		<>
			<Collapsible>
				<CollapsibleTrigger asChild>
					<div className="w-full flex justify-between items-center p-2 rounded-md cursor-pointer">
						<div className="flex gap-4  items-center">
							<Icon className="h-4 w-4" />
							<Link href={`/dashboard/${title.toLowerCase()}`}>{title}</Link>
						</div>

						<ChevronsUpDown className="h-4 w-4" />
					</div>
				</CollapsibleTrigger>

				<CollapsibleContent className="flex flex-col space-y-2">
					{links.map((item, i) => (
						<SidebarSecondaryLink
							key={i}
							title={item.title}
							href={item.href}
							newLink={item.newLink}
						/>
					))}
				</CollapsibleContent>
			</Collapsible>
		</>
	);
}
