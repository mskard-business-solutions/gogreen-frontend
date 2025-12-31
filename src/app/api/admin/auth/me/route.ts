import { NextResponse } from 'next/server';
import axios from 'axios';

const BACKEND_URL = process.env.BACKEND_URL || 'http://localhost:3001';

export async function GET(request: Request) {
  try {
    const cookieHeader = request.headers.get('cookie');

    const response = await axios.get(`${BACKEND_URL}/api/auth/me`, {
      headers: {
        'Cookie': cookieHeader || '',
      },
      validateStatus: () => true, // Don't throw on any status
    });

    if (response.status !== 200) {
      return NextResponse.json(response.data, { status: response.status });
    }

    return NextResponse.json(response.data);
  } catch (error) {
    console.error('Get user error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
