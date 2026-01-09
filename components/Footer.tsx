import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-gray-400 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-white text-lg font-bold mb-4">비트컴퓨터학원</h3>
            <p className="text-sm">
              미래를 선도하는 IT 인재 양성의 요람.<br/>
              최고의 강사진과 시설로 여러분을 기다립니다.
            </p>
          </div>
          <div>
            <h3 className="text-white text-lg font-bold mb-4">연락처</h3>
            <p className="text-sm space-y-2">
              <span className="block">전화: 063-626-9060</span>
              <span className="block">이메일: anvicnw@gmail.com</span>
              <span className="block">주소: 전북 남원시 의총로 81-10</span>
            </p>
          </div>
          <div>
            <h3 className="text-white text-lg font-bold mb-4">운영시간</h3>
            <p className="text-sm space-y-2">
              <span className="block">평일: 09:30 ~ 20:30</span>
              
              <span className="block">토요일/일요일/공휴일 휴무</span>
            </p>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} Bit Computer Academy. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;