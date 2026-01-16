import React from 'react';
import { useData } from '../../contexts/DataContext';
import { Link } from 'react-router-dom';
import { PagePath } from '../../types';
import { ArrowRight, MessageSquare, BookOpen, Bell } from 'lucide-react';

const AdminDashboard: React.FC = () => {
  const { consultations, nationalCourses, studentCourses, notices } = useData();
  
  const pendingConsultations = consultations.filter(c => c.status === 'PENDING').length;

  return (
    <div>
      <h2 className="text-2xl font-bold text-slate-800 mb-8">대시보드</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
            <div className="flex items-center justify-between mb-4">
                <div className="bg-blue-100 p-3 rounded-full text-brand-blue">
                    <MessageSquare size={24} />
                </div>
                <span className="text-2xl font-bold text-slate-900">{pendingConsultations}</span>
            </div>
            <h3 className="text-gray-600 font-medium">대기 중인 상담</h3>
            <Link to={PagePath.ADMIN_CONSULTATIONS} className="text-sm text-brand-blue font-bold mt-4 inline-block hover:underline">
                내역 확인하기 &rarr;
            </Link>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
            <div className="flex items-center justify-between mb-4">
                <div className="bg-indigo-100 p-3 rounded-full text-indigo-600">
                    <BookOpen size={24} />
                </div>
                <span className="text-2xl font-bold text-slate-900">{nationalCourses.length + studentCourses.length}</span>
            </div>
            <h3 className="text-gray-600 font-medium">운영 중인 교육과정</h3>
            <Link to={PagePath.ADMIN_COURSES} className="text-sm text-indigo-600 font-bold mt-4 inline-block hover:underline">
                과정 관리하기 &rarr;
            </Link>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
            <div className="flex items-center justify-between mb-4">
                <div className="bg-orange-100 p-3 rounded-full text-orange-600">
                    <Bell size={24} />
                </div>
                <span className="text-2xl font-bold text-slate-900">{notices.length}</span>
            </div>
            <h3 className="text-gray-600 font-medium">등록된 공지사항</h3>
            <Link to={PagePath.ADMIN_NOTICES} className="text-sm text-orange-600 font-bold mt-4 inline-block hover:underline">
                공지 관리하기 &rarr;
            </Link>
        </div>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
        <h3 className="font-bold text-lg mb-4 text-slate-800">최근 상담 신청</h3>
        {consultations.length > 0 ? (
            <div className="space-y-4">
                {consultations.slice(0, 3).map(c => (
                    <div key={c.id} className="flex items-center justify-between p-3 bg-gray-50 rounded border border-gray-100">
                        <div>
                            <div className="font-bold text-gray-900">{c.name} <span className="text-xs font-normal text-gray-500">({c.target})</span></div>
                            <div className="text-xs text-gray-500">{c.course}</div>
                        </div>
                        <span className={`text-xs font-bold px-2 py-1 rounded ${c.status === 'PENDING' ? 'bg-yellow-100 text-yellow-800' : 'bg-green-100 text-green-800'}`}>
                            {c.status === 'PENDING' ? '대기' : '완료'}
                        </span>
                    </div>
                ))}
            </div>
        ) : (
            <p className="text-gray-500 text-sm">최근 상담 신청 내역이 없습니다.</p>
        )}
         <div className="mt-4 text-right">
             <Link to={PagePath.ADMIN_CONSULTATIONS} className="text-sm font-bold text-brand-navy flex items-center justify-end hover:underline">
                 전체 보기 <ArrowRight size={14} className="ml-1" />
             </Link>
         </div>
      </div>
    </div>
  );
};

export default AdminDashboard;