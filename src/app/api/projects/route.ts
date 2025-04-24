import { NextResponse } from 'next/server';
import { projects } from '@/models/projects';

export async function GET() {
  return NextResponse.json(projects);
} 