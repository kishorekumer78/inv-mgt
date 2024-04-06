import { NextRequest, NextResponse } from 'next/server';
import prisma from '@/lib/db';

export async function POST(request: NextRequest) {
	try {
		const data = await request.json();

		const newCategory = await prisma.category.create({ data: data });
		return NextResponse.json({ success: true, data: newCategory }, { status: 201 });
	} catch (error) {
		return NextResponse.json(
			{ error, message: 'Failed to create new category' },
			{ status: 500 }
		);
	}
}
