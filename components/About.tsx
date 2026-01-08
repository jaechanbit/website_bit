import React from 'react';
import { User, MapPin, Award } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            ABOUT <span className="text-brand-600">BIT</span>
          </h2>
          <p className="mt-4 text-xl text-gray-500">
            비트컴퓨터학원은 단순한 기술 교육을 넘어 미래를 설계합니다.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Director Card */}
          <div className="bg-gray-50 rounded-xl p-8 text-center hover:shadow-lg transition-shadow">
            <div className="mx-auto w-20 h-20 bg-brand-100 rounded-full flex items-center justify-center mb-6">
              <User className="w-10 h-10 text-brand-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">원장 '비트쌤'</h3>
            <p className="text-gray-600 leading-relaxed">
              20년 경력의 노하우로 학생 한 명 한 명의 눈높이에 맞춘 맞춤형 교육을 지향합니다. 여러분의 성장이 곧 비트의 기쁨입니다.
            </p>
          </div>

          {/* Philosophy Card */}
          <div className="bg-gray-50 rounded-xl p-8 text-center hover:shadow-lg transition-shadow">
            <div className="mx-auto w-20 h-20 bg-brand-100 rounded-full flex items-center justify-center mb-6">
              <Award className="w-10 h-10 text-brand-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">AI 기반 교육 철학</h3>
            <p className="text-gray-600 leading-relaxed">
              변화하는 시대에 발맞춰 AI 도구를 활용한 효율적인 학습법과 문제 해결 능력을 키우는 창의 융합 교육을 실천합니다.
            </p>
          </div>

          {/* Location Card */}
          <div className="bg-gray-50 rounded-xl p-8 text-center hover:shadow-lg transition-shadow">
            <div className="mx-auto w-20 h-20 bg-brand-100 rounded-full flex items-center justify-center mb-6">
              <MapPin className="w-10 h-10 text-brand-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">오시는 길</h3>
            <p className="text-gray-600 mb-4">
              전북 남원시 의총로 81-10<br/>
              
            </p>
            <div className="w-full h-32 bg-gray-200 rounded-lg flex items-center justify-center text-gray-400 text-sm">
              [지도 API 영역]
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;