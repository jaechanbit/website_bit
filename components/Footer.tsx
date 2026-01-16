import React from 'react';
import Link from 'next/link';
import { APP_NAME, ADDRESS, CONTACT_PHONE } from '@/lib/constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-slate-300 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-white text-lg font-bold mb-4">{APP_NAME}</h3>
            <p className="text-sm leading-relaxed mb-4">
              국민내일배움카드 국비지원 교육기관이자<br />
              ITQ·DIAT 공인 시험센터입니다.<br />
              실무 중심 교육으로 여러분의 꿈을 응원합니다.
            </p>
          </div>
          <div>
            <h3 className="text-white text-base font-bold mb-4">학원 정보</h3>
            <ul className="space-y-2 text-sm">
              <li>주소: {ADDRESS}</li>
              <li>전화: {CONTACT_PHONE}</li>
              <li>운영시간: 평일 09:00 - 22:00 / 토요일 09:00 - 18:00</li>
            </ul>
          </div>
          <div>
            <h3 className="text-white text-base font-bold mb-4">바로가기</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/course/national" className="hover:text-white transition-colors">국민내일배움카드 과정</Link></li>
              <li><Link href="/course/student" className="hover:text-white transition-colors">초·중·고 교육과정</Link></li>
              <li><Link href="/consult" className="hover:text-white transition-colors font-bold text-brand-blue">상담신청</Link></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-slate-800 mt-10 pt-6 text-xs text-slate-500 flex flex-col md:flex-row justify-between items-center">
          <p className="text-center md:text-left mb-2 md:mb-0">
            &copy; {new Date().getFullYear()} {APP_NAME}. All rights reserved.
          </p>
          <Link href="/admin" className="text-slate-700 hover:text-slate-500 transition-colors">관리자</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;