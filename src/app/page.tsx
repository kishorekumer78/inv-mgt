import Link from 'next/link';

export default function Home() {
	return (
		<div className="flex flex-col items-center justify-center min-h-screen">
			<h2 className="text-3xl mb-4">Inv Mgt Application</h2>
			<Link href="/dashboard/home/overview">View Dashboard</Link>
		</div>
	);
}
