import React from 'react';

export enum Stage {
  Maslow = 'MASLOW',
  Bloom = 'BLOOM',
  GenAI = 'GENAI'
}

export interface HierarchyStep {
  id: string;
  title: string;
  description: string;
  icon: React.ElementType;
  color: string;
}

export interface TeacherPrompt {
  topic: string;
  studentMood: 'anxious' | 'neutral' | 'ready';
  bloomLevel: 'remember' | 'analyze' | 'create';
}