import { NextResponse } from 'next/server';
import { skills } from '@/models/skills';

export async function GET() {
  return NextResponse.json(skills);
} 