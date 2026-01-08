import React from 'react';
import { ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative bg-brand-900 pt-24 pb-16 md:pt-36 md:pb-28 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <svg className="h-full w-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <path d="M0 100 C 20 0 50 0 100 100 Z" fill="white" />
        </svg>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <div className="flex flex-col items-center">
          <div className="max-w-6xl space-y-8">
            
            <h1 className="flex flex-col items-center font-black text-white drop-shadow-2xl break-keep tracking-tight">
              <span className="block text-lg sm:text-xl md:text-2xl lg:text-3xl leading-relaxed mb-4 text-brand-100 font-bold opacity-90">
                AI 기반 교육 철학으로 미래를 설계하는
              </span>
              <span className="block text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-tight">
                비트컴퓨터학원
              </span>
            </h1>

            <p className="text-lg md:text-xl text-brand-100 max-w-3xl mx-auto font-light leading-relaxed">
              실무 중심의 체계적인 커리큘럼과 업계 최고 수준의 강사진이 여러분의 IT 역량을 실력으로 완성하고, 꿈을 현실로 이끌어 드립니다
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
              <a 
                href="#contact" 
                onClick={(e) => handleScroll(e, 'contact')}
                className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-bold rounded-full text-brand-900 bg-white hover:bg-brand-50 md:py-4 md:text-lg transition-all shadow-lg hover:shadow-xl hover:-translate-y-1 cursor-pointer"
              >
                수강 문의하기
                <ArrowRight className="ml-2 w-5 h-5" />
              </a>
              <a 
                href="#courses" 
                onClick={(e) => handleScroll(e, 'courses')}
                className="inline-flex items-center justify-center px-8 py-3 border border-white/30 text-base font-bold rounded-full text-white bg-white/10 hover:bg-white/20 backdrop-blur-sm md:py-4 md:text-lg transition-all hover:-translate-y-1 cursor-pointer"
              >
                교육과정 보기
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;