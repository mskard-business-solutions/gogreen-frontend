import { NextResponse } from 'next/server';
import axios from 'axios';

const NEXT_PUBLIC_BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3001';

export async function POST(request: Request) {
  try {
    const cookieHeader = request.headers.get('cookie');

    await axios.post(`${NEXT_PUBLIC_BASE_URL}/api/auth/logout`, {}, {
      headers: {
        'Cookie': cookieHeader || '',
      },
    });

    const nextResponse = NextResponse.json({ message: 'Logout successful' });
    
    // Clear the cookie
    nextResponse.cookies.delete('admin_session');

    return nextResponse;
  } catch (error) {
    console.error('Logout error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
