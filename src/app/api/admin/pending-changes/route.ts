import { NextRequest, NextResponse } from 'next/server';
import axios from 'axios';

const NEXT_PUBLIC_BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3001';

export async function GET(request: Request) {
  try {
    const cookieHeader = request.headers.get('cookie');

    if (!cookieHeader) {
      return NextResponse.json({ error: 'Not authenticated' }, { status: 401 });
    }

    // Default to getting user's own changes
    const response = await axios.get(`${NEXT_PUBLIC_BASE_URL}/api/pending-changes/my-changes`, {
      headers: {
        'Cookie': cookieHeader,
      },
      validateStatus: () => true,
    });

    if (response.status !== 200) {
      return NextResponse.json(response.data, { status: response.status });
    }

    return NextResponse.json(response.data);
  } catch (error) {
    console.error('Error fetching pending changes:', error);
    return NextResponse.json({ error: 'Failed to fetch pending changes' }, { status: 500 });
  }
}

export async function POST(request: NextRequest) {
  try {
    const cookieHeader = request.headers.get('cookie');

    if (!cookieHeader) {
      return NextResponse.json({ error: 'Not authenticated' }, { status: 401 });
    }

    const body = await request.json();

    const response = await axios.post(`${NEXT_PUBLIC_BASE_URL}/api/pending-changes`, body, {
      headers: {
        'Cookie': cookieHeader,
      },
      validateStatus: () => true,
    });

    if (response.status !== 200) {
      return NextResponse.json(response.data, { status: response.status });
    }

    return NextResponse.json(response.data);
  } catch (error) {
    console.error('Error creating pending change:', error);
    return NextResponse.json({ error: 'Failed to create pending change' }, { status: 500 });
  }
}
