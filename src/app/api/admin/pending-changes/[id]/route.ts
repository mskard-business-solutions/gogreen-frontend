import { NextRequest, NextResponse } from 'next/server';
import axios from 'axios';

const NEXT_PUBLIC_BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3001';

export async function POST(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const cookieHeader = request.headers.get('cookie');

    if (!cookieHeader) {
      return NextResponse.json({ error: 'Not authenticated' }, { status: 401 });
    }

    const { id } = await params;
    const body = await request.json();
    const { status } = body; // 'approved' or 'rejected'

    const endpoint = status === 'approved'
      ? `${NEXT_PUBLIC_BASE_URL}/api/pending-changes/${id}/approve`
      : `${NEXT_PUBLIC_BASE_URL}/api/pending-changes/${id}/reject`;

    const response = await axios.post(endpoint, body, {
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
    console.error('Error updating pending change:', error);
    return NextResponse.json({ error: 'Failed to update pending change' }, { status: 500 });
  }
}
