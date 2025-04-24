import { NextResponse } from 'next/server';
import { about } from '@/models/about';

export async function GET() {
  return NextResponse.json(about);
} 