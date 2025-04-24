import { NextResponse } from 'next/server';
import { skills } from '@/models/skills';
import { projects } from '@/models/projects';
import { experiences } from '@/models/experiences';
import { about } from '@/models/about';

export async function GET() {
  return NextResponse.json({
    skills,
    projects,
    experiences,
    about,
  });
} 