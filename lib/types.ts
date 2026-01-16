export interface NavItem {
  label: string;
  path?: string;
  children?: NavItem[];
}

export interface Course {
  id: string;
  title: string;
  description: string;
  target: 'NATIONAL' | 'STUDENT';
  tags: string[];
  image: string;
}

export interface Notice {
  id: number;
  title: string;
  date: string;
  category: string;
}

export interface Review {
  id: number;
  name: string;
  course: string;
  content: string;
  rating: number;
  date: string;
}

export enum ConsultationTarget {
  NATIONAL = '국비지원(국민내일배움카드)',
  STUDENT = '초·중·고 학생',
}

export interface Consultation {
  id: string;
  name: string;
  phone: string;
  course: string;
  target: ConsultationTarget | string;
  message: string;
  date: string;
  status: 'PENDING' | 'COMPLETED';
}