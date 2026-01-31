import { NextResponse } from 'next/server';
import axios from 'axios';

const NEXT_PUBLIC_BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3001';

export async function GET(request: Request) {
  try {
    const cookieHeader = request.headers.get('cookie');
    const { searchParams } = new URL(request.url);
    const categoryId = searchParams.get('categoryId');
    
    const params: any = { includeInactive: 'true' };
    if (categoryId) {
      params.categoryId = categoryId;
    }
    
    const response = await axios.get(`${NEXT_PUBLIC_BASE_URL}/api/subcategories`, {
      params,
      headers: {
        'Cookie': cookieHeader || '',
      },
      validateStatus: () => true,
    });

    if (response.status !== 200) {
      return NextResponse.json(response.data, { status: response.status });
    }

    return NextResponse.json(response.data.data || []);
  } catch (error) {
    console.error('Get subcategories error:', error);
    return NextResponse.json({ error: 'Failed to fetch subcategories' }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const cookieHeader = request.headers.get('cookie');

    if (!cookieHeader) {
      return NextResponse.json({ error: 'Not authenticated' }, { status: 401 });
    }

    const body = await request.json();
    
    const response = await axios.post(`${NEXT_PUBLIC_BASE_URL}/api/subcategories`, body, {
      headers: {
        'Content-Type': 'application/json',
        'Cookie': cookieHeader,
      },
      validateStatus: () => true,
    });

    if (response.status !== 200) {
      return NextResponse.json(response.data, { status: response.status });
    }

    return NextResponse.json(response.data.data, { status: 201 });
  } catch (error) {
    console.error('Create subcategory error:', error);
    return NextResponse.json({ error: 'Failed to create subcategory' }, { status: 500 });
  }
}
