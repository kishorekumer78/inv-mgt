import { HomeNavbar } from '@/components/dashboard/home/HomeNavbar';

export default function layout({ children }: { children: React.ReactNode }) {
	return (
		<>
			<div>
				<HomeNavbar />
				{children}
			</div>
		</>
	);
}
