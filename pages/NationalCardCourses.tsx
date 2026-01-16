import React from 'react';
import Layout from '../components/Layout';
import CourseCard from '../components/CourseCard';
import { useData } from '../contexts/DataContext';
import { Info } from 'lucide-react';

const NationalCardCourses: React.FC = () => {
  const { nationalCourses } = useData();

  return (
    <Layout title="국민내일배움카드 과정" subtitle="국비지원을 통해 부담 없이 전문 기술을 습득하세요.">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        {/* Info Box */}
        <div className="bg-blue-50 border-l-4 border-brand-blue p-4 mb-10">
          <div className="flex items-start">
             <Info className="h-6 w-6 text-brand-blue mr-3 mt-1 flex-shrink-0" />
             <div>
               <h4 className="text-brand-navy font-bold text-lg mb-1">수강 안내</h4>
               <ul className="list-disc list-inside text-slate-700 space-y-1">
                 <li>직장인, 실업자 등 국민내일배움카드 소지자라면 누구나 수강 가능합니다.</li>
                 <li>오전 / 오후 / 저녁반으로 운영되어 일상 생활에 맞춰 수강할 수 있습니다.</li>
                 <li>실무 능력 향상과 자격증 취득을 동시에 목표로 합니다.</li>
               </ul>
             </div>
          </div>
        </div>

        {/* Course Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {nationalCourses.map(course => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default NationalCardCourses;