export interface Notice {
  id: number;
  title: string;
  date: string;
  content: string;
}

export interface Inquiry {
  id: number;
  name: string;
  phone: string;
  content: string;
  date: string;
}

export interface CourseItem {
  title: string;
  description?: string;
  tags: string[];
}

export interface CourseCategory {
  id: string;
  title: string;
  items: CourseItem[];
}