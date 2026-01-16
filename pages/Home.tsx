import React from 'react';
import { Link } from 'react-router-dom';
import { PagePath } from '../types';
import { ArrowRight, CheckCircle, Award, BookOpen, Monitor } from 'lucide-react';
import ConsultationForm from '../components/ConsultationForm';

const Home: React.FC = () => {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative bg-brand-navy text-white pt-24 pb-32 overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://picsum.photos/1920/1080?grayscale&blur=2')] bg-cover bg-center opacity-10"></div>
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
              <Link 
                to={PagePath.COURSE_NATIONAL}
                className="inline-flex items-center justify-center bg-brand-blue hover:bg-blue-600 text-white font-bold py-4 px-8 rounded-md transition-colors shadow-lg"
              >
                국민내일배움카드 상담신청 <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link 
                to={PagePath.COURSE_STUDENT}
                className="inline-flex items-center justify-center bg-white text-brand-navy hover:bg-gray-100 font-bold py-4 px-8 rounded-md transition-colors shadow-lg"
              >
                초·중·고 과정 상담신청 <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
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
              <Link to={PagePath.CENTER_ITQ} className="text-brand-blue font-bold text-sm hover:underline">자세히 보기 &rarr;</Link>
            </div>
            <div className="bg-slate-50 p-8 rounded-lg shadow-md border-t-4 border-brand-navy">
              <div className="text-brand-navy mb-4"><BookOpen className="h-10 w-10" /></div>
              <h3 className="text-xl font-bold mb-3 text-slate-900">체계적인 커리큘럼</h3>
              <p className="text-slate-600 mb-4">
                기초부터 실무 활용까지.<br/>
                국비지원 및 학생 맞춤형 과정을 제공합니다.
              </p>
              <Link to={PagePath.COURSE_NATIONAL} className="text-brand-blue font-bold text-sm hover:underline">과정 보기 &rarr;</Link>
            </div>
            <div className="bg-slate-50 p-8 rounded-lg shadow-md border-t-4 border-brand-blue">
              <div className="text-brand-navy mb-4"><Monitor className="h-10 w-10" /></div>
              <h3 className="text-xl font-bold mb-3 text-slate-900">최신 실습 환경</h3>
              <p className="text-slate-600 mb-4">
                고성능 PC와 듀얼 모니터 환경.<br/>
                쾌적한 교육 환경에서 학습 효율을 높이세요.
              </p>
              <Link to={PagePath.ABOUT} className="text-brand-blue font-bold text-sm hover:underline">학원 소개 &rarr;</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content & Quick Consultation */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-6">
                왜 <span className="text-brand-blue">바른컴퓨터학원</span>을 선택해야 할까요?
              </h2>
              <div className="space-y-6">
                <div className="flex">
                  <div className="flex-shrink-0">
                    <CheckCircle className="h-6 w-6 text-brand-blue" />
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-bold text-slate-900">검증된 강사진과 합격 노하우</h4>
                    <p className="mt-1 text-slate-600">다년간의 강의 경력을 보유한 전문 강사진이 자격증 취득의 지름길을 안내합니다.</p>
                  </div>
                </div>
                <div className="flex">
                  <div className="flex-shrink-0">
                    <CheckCircle className="h-6 w-6 text-brand-blue" />
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-bold text-slate-900">철저한 학생 관리</h4>
                    <p className="mt-1 text-slate-600">출결부터 성취도 평가까지, 1:1 밀착 케어로 낙오자 없이 목표를 달성하도록 돕습니다.</p>
                  </div>
                </div>
                <div className="flex">
                  <div className="flex-shrink-0">
                    <CheckCircle className="h-6 w-6 text-brand-blue" />
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-bold text-slate-900">편리한 교통과 주차</h4>
                    <p className="mt-1 text-slate-600">주요 대중교통 거점에 위치하며, 건물 내 주차 공간을 확보하고 있습니다.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative">
               {/* Embed Consultation Form on Main Page */}
               <ConsultationForm />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;