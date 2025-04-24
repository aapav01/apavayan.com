import { NextResponse } from 'next/server';
import { experiences } from '@/models/experiences';

export async function GET() {
  return NextResponse.json(experiences);
} 