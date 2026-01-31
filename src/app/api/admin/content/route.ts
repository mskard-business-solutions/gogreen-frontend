import { NextResponse } from 'next/server';
import axios from 'axios';

const NEXT_PUBLIC_BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3001';

export async function GET(request: Request) {
  try {
    const cookieHeader = request.headers.get('cookie');

    const response = await axios.get(`${NEXT_PUBLIC_BASE_URL}/api/posts`, {
      headers: {
        'Cookie': cookieHeader || '',
      },
      validateStatus: () => true,
    });

    if (response.status !== 200) {
      return NextResponse.json(response.data, { status: response.status });
    }

    return NextResponse.json(response.data);
  } catch (error) {
    console.error('Error fetching content:', error);
    return NextResponse.json({ error: 'Failed to fetch content' }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const cookieHeader = request.headers.get('cookie');

    if (!cookieHeader) {
      return NextResponse.json({ error: 'Not authenticated' }, { status: 401 });
    }

    const body = await request.json();
    
    const response = await axios.post(`${NEXT_PUBLIC_BASE_URL}/api/posts`, body, {
      headers: {
        'Cookie': cookieHeader,
      },
      validateStatus: () => true,
    });

    if (response.status !== 200 && response.status !== 201) {
      return NextResponse.json(response.data, { status: response.status });
    }

    return NextResponse.json(response.data);
  } catch (error) {
    console.error('Error creating content:', error);
    return NextResponse.json({ error: 'Failed to save content' }, { status: 500 });
  }
}
