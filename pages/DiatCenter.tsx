import React from 'react';
import Layout from '../components/Layout';
import { CheckCircle, Award } from 'lucide-react';
import { Link } from 'react-router-dom';
import { PagePath } from '../types';

const DiatCenter: React.FC = () => {
  return (
    <Layout title="DIAT 시험센터" subtitle="디지털정보활용능력(DIAT) 공식 자격검정장입니다.">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden mb-12">
            <div className="bg-brand-navy p-6 text-white flex items-center">
                <Award className="h-8 w-8 mr-3" />
                <h2 className="text-xl font-bold">DIAT (Digital Information Ability Test)</h2>
            </div>
            <div className="p-8">
                <p className="text-slate-700 leading-relaxed text-lg mb-6">
                    방송통신발전기본법에 근거하여 정보통신관련 프로그램의 활용능력을 검정하는 자격제도입니다.<br/>
                    초·중·고 학생들이 정보 소양 능력을 기르기 위해 가장 많이 취득하는 자격증 중 하나입니다.
                </p>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <div className="bg-slate-50 p-4 rounded text-center border border-slate-100">
                        <span className="block font-bold text-brand-blue mb-1">프리젠테이션</span>
                        <span className="text-xs text-slate-500">PowerPoint</span>
                    </div>
                    <div className="bg-slate-50 p-4 rounded text-center border border-slate-100">
                        <span className="block font-bold text-brand-blue mb-1">스프레드시트</span>
                        <span className="text-xs text-slate-500">Excel</span>
                    </div>
                    <div className="bg-slate-50 p-4 rounded text-center border border-slate-100">
                        <span className="block font-bold text-brand-blue mb-1">워드프로세서</span>
                        <span className="text-xs text-slate-500">Hwp / Word</span>
                    </div>
                    <div className="bg-slate-50 p-4 rounded text-center border border-slate-100">
                        <span className="block font-bold text-brand-blue mb-1">정보통신상식</span>
                        <span className="text-xs text-slate-500">인터넷/정보윤리</span>
                    </div>
                </div>
            </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
             <div>
                 <h3 className="text-2xl font-bold text-slate-900 mb-6">왜 공식 시험센터에서 준비해야 할까요?</h3>
                 <ul className="space-y-4">
                     <li className="flex items-start">
                         <CheckCircle className="h-5 w-5 text-brand-blue mt-1 mr-3" />
                         <span className="text-slate-700">시험 당일 낯선 환경으로 인한 실수를 최소화할 수 있습니다.</span>
                     </li>
                     <li className="flex items-start">
                         <CheckCircle className="h-5 w-5 text-brand-blue mt-1 mr-3" />
                         <span className="text-slate-700">최신 버전의 S/W가 설치된 고사장에서 안정적으로 응시 가능합니다.</span>
                     </li>
                     <li className="flex items-start">
                         <CheckCircle className="h-5 w-5 text-brand-blue mt-1 mr-3" />
                         <span className="text-slate-700">감독관 경력이 있는 강사진이 시험 유의사항을 꼼꼼히 지도합니다.</span>
                     </li>
                 </ul>
                 <div className="mt-8">
                     <Link to={PagePath.COURSE_STUDENT} className="text-brand-navy font-bold hover:underline">
                         DIAT 대비 학생 과정 확인하기 &rarr;
                     </Link>
                 </div>
             </div>
             <div>
                 <img src="https://picsum.photos/800/600?random=21" alt="DIAT 수업" className="rounded-lg shadow-lg" />
             </div>
        </div>

      </div>
    </Layout>
  );
};

export default DiatCenter;