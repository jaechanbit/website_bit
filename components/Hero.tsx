import React from 'react';
import { ArrowRight, Megaphone } from 'lucide-react';

interface HeroProps {
  bannerContent: string;
}

const Hero: React.FC<HeroProps> = ({ bannerContent }) => {
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative bg-brand-900 pt-24 pb-20 md:pt-40 md:pb-32 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <svg className="h-full w-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <path d="M0 100 C 20 0 50 0 100 100 Z" fill="white" />
        </svg>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <div className="flex flex-col items-center">
          <div className="max-w-6xl space-y-10">
            
            <h1 className="flex flex-col items-center font-black text-white drop-shadow-2xl break-keep tracking-tight">
              <span className="block text-lg sm:text-2xl md:text-3xl lg:text-4xl leading-relaxed mb-2 text-brand-100 font-bold opacity-90 tracking-wide">
                AI 기반 교육 철학으로 미래를 설계하는
              </span>
              <span className="block text-5xl sm:text-6xl md:text-7xl lg:text-8xl leading-none mt-2">
                비트컴퓨터학원
              </span>
            </h1>

            <p className="text-lg md:text-xl text-brand-100 max-w-3xl mx-auto font-light leading-relaxed opacity-90">
              실무 중심의 체계적인 커리큘럼과 업계 최고 수준의 강사진이<br className="hidden md:block" /> 
              여러분의 IT 역량을 실력으로 완성하고, 꿈을 현실로 이끌어 드립니다
            </p>
            
            <div className="flex flex-col sm:flex-row gap-5 justify-center pt-8">
              <a 
                href="#contact" 
                onClick={(e) => handleScroll(e, 'contact')}
                className="inline-flex items-center justify-center px-8 py-4 border border-transparent text-lg font-bold rounded-full text-brand-900 bg-white hover:bg-brand-50 transition-all shadow-xl hover:shadow-2xl hover:-translate-y-1 cursor-pointer min-w-[200px]"
              >
                수강 문의하기
                <ArrowRight className="ml-2 w-5 h-5" />
              </a>
              <a 
                href="#courses" 
                onClick={(e) => handleScroll(e, 'courses')}
                className="inline-flex items-center justify-center px-8 py-4 border border-white/30 text-lg font-bold rounded-full text-white bg-white/10 hover:bg-white/20 backdrop-blur-sm transition-all hover:-translate-y-1 cursor-pointer min-w-[200px]"
              >
                교육과정 보기
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Sliding Banner */}
      <div className="absolute bottom-0 left-0 w-full h-14 bg-black/30 backdrop-blur-md border-t border-white/10 flex items-center z-20 overflow-hidden group">
        <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-brand-900 to-transparent z-10 pointer-events-none md:block hidden"></div>
        <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-brand-900 to-transparent z-10 pointer-events-none md:block hidden"></div>
        <div className="flex items-center px-4 z-20 shrink-0">
          <Megaphone className="w-5 h-5 text-yellow-400 mr-2 animate-pulse" />
        </div>
        <div className="animate-marquee whitespace-nowrap text-white text-lg font-medium tracking-wide">
          {bannerContent}
        </div>
      </div>
    </section>
  );
};

export default Hero;