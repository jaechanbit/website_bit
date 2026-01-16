import Link from 'next/link';
import { Award, BookOpen, Monitor, CheckCircle } from 'lucide-react';
import CTAButton from '@/components/CTAButton';

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative bg-brand-navy text-white pt-24 pb-32 overflow-hidden">
        <div className="absolute inset-0 bg-slate-900 opacity-50 z-0">
          <img 
            src="https://picsum.photos/1920/1080?grayscale&blur=2" 
            alt="Background" 
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center lg:text-left">
          <div className="lg:w-2/3">
            <h1 className="text-4xl lg:text-5xl font-bold leading-tight mb-6">
              자격증부터 실무까지,<br />
              <span className="text-blue-300">결과로 증명하는</span> 컴퓨터교육
            </h1>
            <p className="text-lg lg:text-xl text-blue-100 mb-8 max-w-2xl mx-auto lg:mx-0">
              국민내일배움카드 국비과정과 초·중·고 맞춤 교육을 운영합니다.<br className="hidden sm:block"/>
              ITQ · DIAT 공식 시험센터에서 배우고 시험까지 한번에 준비하세요.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <CTAButton href="/course/national" variant="primary">국민내일배움카드 상담신청</CTAButton>
              <CTAButton href="/course/student" variant="secondary">초·중·고 과정 상담신청</CTAButton>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Info Cards */}
      <section className="py-16 bg-white relative -mt-20 z-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-slate-50 p-8 rounded-lg shadow-md border-t-4 border-brand-blue">
              <div className="text-brand-navy mb-4"><Award className="h-10 w-10" /></div>
              <h3 className="text-xl font-bold mb-3 text-slate-900">공식 시험센터 운영</h3>
              <p className="text-slate-600 mb-4">
                익숙한 강의실에서 편안하게 시험 응시.<br/>
                ITQ / DIAT 공식 고사장 운영 중입니다.
              </p>
              <Link href="/exam/itq" className="text-brand-blue font-bold text-sm hover:underline">자세히 보기 &rarr;</Link>
            </div>
            <div className="bg-slate-50 p-8 rounded-lg shadow-md border-t-4 border-brand-navy">
              <div className="text-brand-navy mb-4"><BookOpen className="h-10 w-10" /></div>
              <h3 className="text-xl font-bold mb-3 text-slate-900">체계적인 커리큘럼</h3>
              <p className="text-slate-600 mb-4">
                기초부터 실무 활용까지.<br/>
                국비지원 및 학생 맞춤형 과정을 제공합니다.
              </p>
              <Link href="/course/national" className="text-brand-blue font-bold text-sm hover:underline">과정 보기 &rarr;</Link>
            </div>
            <div className="bg-slate-50 p-8 rounded-lg shadow-md border-t-4 border-brand-blue">
              <div className="text-brand-navy mb-4"><Monitor className="h-10 w-10" /></div>
              <h3 className="text-xl font-bold mb-3 text-slate-900">최신 실습 환경</h3>
              <p className="text-slate-600 mb-4">
                고성능 PC와 듀얼 모니터 환경.<br/>
                쾌적한 교육 환경에서 학습 효율을 높이세요.
              </p>
              <Link href="/intro" className="text-brand-blue font-bold text-sm hover:underline">학원 소개 &rarr;</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-6">
                왜 <span className="text-brand-blue">바른컴퓨터학원</span>을 선택해야 할까요?
              </h2>
              <div className="space-y-6">
                {[
                  { title: "검증된 강사진과 합격 노하우", desc: "다년간의 강의 경력을 보유한 전문 강사진이 자격증 취득의 지름길을 안내합니다." },
                  { title: "철저한 학생 관리", desc: "출결부터 성취도 평가까지, 1:1 밀착 케어로 낙오자 없이 목표를 달성하도록 돕습니다." },
                  { title: "편리한 교통과 주차", desc: "주요 대중교통 거점에 위치하며, 건물 내 주차 공간을 확보하고 있습니다." }
                ].map((item, idx) => (
                  <div key={idx} className="flex">
                    <div className="flex-shrink-0">
                      <CheckCircle className="h-6 w-6 text-brand-blue" />
                    </div>
                    <div className="ml-4">
                      <h4 className="text-lg font-bold text-slate-900">{item.title}</h4>
                      <p className="mt-1 text-slate-600">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="relative bg-white p-8 rounded-lg shadow-sm border border-gray-200 text-center">
               <h3 className="text-2xl font-bold text-brand-navy mb-4">지금 바로 상담하세요</h3>
               <p className="text-slate-600 mb-8">
                 망설이지 마세요. 여러분의 시작을 응원합니다.<br/>
                 친절하고 자세한 상담을 약속드립니다.
               </p>
               <CTAButton href="/consult" fullWidth>온라인 상담 신청하기</CTAButton>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}