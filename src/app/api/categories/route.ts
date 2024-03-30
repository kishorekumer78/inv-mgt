import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
	try {
		const data = await request.json();
		console.log('data', data);
		return NextResponse.json({ success: true, data: data }, { status: 201 });
	} catch (error) {
		console.log('error', error);
		return NextResponse.json(
			{ error, message: 'Failed to create new category' },
			{ status: 500 }
		);
	}
}
