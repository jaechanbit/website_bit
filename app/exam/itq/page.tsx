import Link from 'next/link';
import { CheckCircle } from 'lucide-react';

export default function ItqExamPage() {
  return (
    <div className="flex flex-col">
      <div className="bg-brand-navy text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">ITQ 시험센터</h1>
          <p className="text-blue-100 text-lg max-w-2xl mx-auto">국가공인 ITQ(정보기술자격) 공식 고사장입니다.</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
           <div>
              <img src="https://picsum.photos/800/600?random=20" alt="ITQ 시험장" className="rounded-lg shadow-md w-full mb-6" />
              <div className="bg-white p-6 rounded-lg border border-slate-200 shadow-sm">
                  <h3 className="font-bold text-lg text-brand-navy mb-3">ITQ 자격증이란?</h3>
                  <p className="text-slate-600 text-sm leading-6">
                      Information Technology Qualification의 약자로, 정보기술 활용 능력을 객관적으로 평가하는 국가공인 자격증입니다.<br/>
                      실무 중심의 작업형 시험으로 초등학생부터 직장인, 노년층까지 폭넓게 응시하고 있습니다.
                  </p>
              </div>
           </div>
           
           <div>
              <h3 className="text-2xl font-bold text-slate-900 mb-6">본원 수강생 혜택</h3>
              <div className="space-y-6 mb-8">
                {[
                  { t: '익숙한 환경에서 시험 응시', d: '수업을 듣던 강의실, 매일 쓰던 PC로 시험을 치러 긴장감을 덜고 실력을 100% 발휘할 수 있습니다.' },
                  { t: '원스톱 접수 대행', d: '복잡한 원서 접수 절차를 학원에서 단체로 대행하여 편의를 제공합니다.' },
                  { t: '모의고사 및 특강', d: '시험 직전 실제 기출문제를 기반으로 한 모의고사와 족집게 특강을 진행합니다.' }
                ].map((item, idx) => (
                  <div key={idx} className="flex">
                    <div className="flex-shrink-0 mt-1">
                        <CheckCircle className="h-6 w-6 text-brand-blue" />
                    </div>
                    <div className="ml-4">
                        <h4 className="text-lg font-bold text-slate-900">{item.t}</h4>
                        <p className="text-slate-600 mt-1">{item.d}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="bg-slate-50 p-6 rounded-lg text-center">
                  <p className="text-slate-900 font-bold mb-4">"수강부터 자격증 취득까지 한 번에 끝내세요!"</p>
                  <Link 
                    href="/consult"
                    className="inline-block bg-brand-navy text-white px-6 py-3 rounded-md font-bold hover:bg-blue-800 transition-colors"
                  >
                    시험 대비반 상담신청
                  </Link>
              </div>
           </div>
        </div>
      </div>
    </div>
  );
}