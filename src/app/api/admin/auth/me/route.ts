import { NextResponse } from 'next/server';
import axios from 'axios';

const NEXT_PUBLIC_BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3001';

export async function GET(request: Request) {
  try {
    // Validate NEXT_PUBLIC_BASE_URL is configured
    if (!process.env.NEXT_PUBLIC_BASE_URL) {
      console.error('NEXT_PUBLIC_BASE_URL environment variable is not configured');
      return NextResponse.json(
        { error: 'Backend configuration error. Please contact support.' },
        { status: 500 }
      );
    }

    const cookieHeader = request.headers.get('cookie');
    console.log(`Fetching user info from backend: ${NEXT_PUBLIC_BASE_URL}/api/auth/me`);

    const response = await axios.get(`${NEXT_PUBLIC_BASE_URL}/api/auth/me`, {
      headers: {
        'Cookie': cookieHeader || '',
      },
      validateStatus: () => true, // Don't throw on any status
      timeout: 10000, // 10 second timeout
    });

    console.log(`Backend response status: ${response.status}`);

    if (response.status !== 200) {
      return NextResponse.json(response.data, { status: response.status });
    }

    return NextResponse.json(response.data);
  } catch (error) {
    console.error('Get user error:', error);
    if (axios.isAxiosError(error)) {
      console.error('Axios error details:', {
        message: error.message,
        code: error.code,
        response: error.response?.data,
        config: { url: error.config?.url, method: error.config?.method }
      });
    }
    return NextResponse.json(
      { error: 'Failed to communicate with authentication service' },
      { status: 500 }
    );
  }
}
