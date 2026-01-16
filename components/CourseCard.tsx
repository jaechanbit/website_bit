import React from 'react';
import Link from 'next/link';
import { Course } from '@/lib/types';

interface CourseCardProps {
  course: Course;
}

const CourseCard: React.FC<CourseCardProps> = ({ course }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow border border-slate-100 flex flex-col h-full">
      <div className="h-48 overflow-hidden relative bg-gray-200">
        <img 
          src={course.image} 
          alt={course.title} 
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
        />
      </div>
      <div className="p-6 flex-1 flex flex-col">
        <div className="flex flex-wrap gap-2 mb-3">
          {course.tags.map(tag => (
            <span key={tag} className="px-2 py-1 bg-slate-100 text-slate-600 text-xs font-medium rounded">
              #{tag}
            </span>
          ))}
        </div>
        <h3 className="text-xl font-bold text-slate-900 mb-2">{course.title}</h3>
        <p className="text-slate-600 text-sm mb-4 line-clamp-2">{course.description}</p>
        <div className="mt-auto pt-4 border-t border-slate-100">
          <Link 
            href="/consult" 
            className="block w-full text-center bg-brand-navy text-white py-2 rounded font-medium hover:bg-blue-800 transition-colors"
          >
            상담 신청하기
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;