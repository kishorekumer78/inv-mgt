import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
	try {
		const { name, location, description, type } = await request.json();
		const warehouseData = { name, location, description, type };
		//TODO: create new warehouse
		return NextResponse.json({ success: true, data: warehouseData }, { status: 201 });
	} catch (error) {
		console.log('error', error);
		return NextResponse.json(
			{ error, message: 'Failed to create new warehouse' },
			{ status: 500 }
		);
	}
}
