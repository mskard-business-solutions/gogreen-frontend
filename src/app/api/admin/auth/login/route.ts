import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';
import axios from 'axios';

const BACKEND_URL = process.env.BACKEND_URL || 'http://localhost:3001';

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const response = await axios.post(`${BACKEND_URL}/api/auth/login`, body, {
      headers: {
        'Content-Type': 'application/json',
      },
      validateStatus: () => true, // Don't throw on any status
    });

    if (response.status !== 200) {
      return NextResponse.json(response.data, { status: response.status });
    }

    // Forward the cookie from backend to frontend
    const setCookieHeader = response.headers['set-cookie'];
    const nextResponse = NextResponse.json(response.data);
    
    if (setCookieHeader) {
      const cookieValue = Array.isArray(setCookieHeader) ? setCookieHeader[0] : setCookieHeader;
      if (cookieValue) {
        nextResponse.headers.set('Set-Cookie', cookieValue);
      }
    }

    return nextResponse;
  } catch (error) {
    console.error('Login error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
