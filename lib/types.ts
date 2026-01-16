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