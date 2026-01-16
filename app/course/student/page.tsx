import CourseCard from '@/components/CourseCard';
import { STUDENT_COURSES } from '@/lib/constants';

export default function StudentCoursePage() {
  return (
    <div className="flex flex-col">
      <div className="bg-brand-navy text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">초·중·고 교육과정</h1>
          <p className="text-blue-100 text-lg max-w-2xl mx-auto">미래를 준비하는 우리 아이를 위한 맞춤형 컴퓨터 교육</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
            <h3 className="text-2xl font-bold text-slate-900 mb-4">분야별 커리큘럼</h3>
            <p className="text-slate-600">
                기초 OA부터 전문 프로그래밍까지, 단계별 학습 로드맵을 제공합니다.
            </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {STUDENT_COURSES.map(course => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>

        <div className="mt-16 bg-slate-100 p-8 rounded-lg">
             <h4 className="text-xl font-bold text-brand-navy mb-4">수업 운영 방식</h4>
             <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                 <div>
                    <h5 className="font-bold text-slate-900 mb-2">1:1 개별 진도</h5>
                    <p className="text-slate-600 text-sm">학생마다 이해도가 다르기 때문에, 획일적인 강의식이 아닌 개별 진도 맞춤형 수업을 진행합니다.</p>
                 </div>
                 <div>
                    <h5 className="font-bold text-slate-900 mb-2">결과물 중심 학습</h5>
                    <p className="text-slate-600 text-sm">단순 이론 암기가 아닌, 매 수업마다 예제를 완성하며 성취감을 느낄 수 있도록 지도합니다.</p>
                 </div>
             </div>
        </div>
      </div>
    </div>
  );
}