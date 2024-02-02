import type { ReactNode } from 'react';

export interface LayoutProps {
  children: ReactNode;
  title: string;
  subTitle: string;
}

export interface Data12QuizProps {
  id: string;
  quiz1: number;
  quiz2: number;
}

export interface Data42QuizProps {
  id: string;
  quiz1: number;
  quiz2: number;
  quiz3: string;
  quiz4: string;
  quiz5: string;
}

export interface Data53QuizProps {
  id: string;
  quiz1: string;
  typing?: string;
}

export interface AnswersType {
  [key: string]: string[];
}
