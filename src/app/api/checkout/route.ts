import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    return NextResponse.json({ url: '/betaling-gelukt' });
  } catch (err) {
    return NextResponse.json({ error: 'Stripe session creation failed' }, { status: 500 });
  }
}