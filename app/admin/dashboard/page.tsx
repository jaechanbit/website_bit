'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight, MessageSquare, BookOpen, Bell } from 'lucide-react';

export default function AdminDashboardPage() {
  // Simple static dashboard for now to prevent hydration errors from Context usage in Admin
  // (Since we haven't fully migrated all Admin pages to App Router yet)
  
  return (
    <div>
      <h2 className="text-2xl font-bold text-slate-800 mb-8">대시보드</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
            <div className="flex items-center justify-between mb-4">
                <div className="bg-blue-100 p-3 rounded-full text-brand-blue">
                    <MessageSquare size={24} />
                </div>
                <span className="text-2xl font-bold text-slate-900">0</span>
            </div>
            <h3 className="text-gray-600 font-medium">대기 중인 상담</h3>
            <Link href="#" className="text-sm text-brand-blue font-bold mt-4 inline-block hover:underline">
                내역 확인하기 &rarr;
            </Link>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
            <div className="flex items-center justify-between mb-4">
                <div className="bg-indigo-100 p-3 rounded-full text-indigo-600">
                    <BookOpen size={24} />
                </div>
                <span className="text-2xl font-bold text-slate-900">7</span>
            </div>
            <h3 className="text-gray-600 font-medium">운영 중인 교육과정</h3>
            <Link href="#" className="text-sm text-indigo-600 font-bold mt-4 inline-block hover:underline">
                과정 관리하기 &rarr;
            </Link>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
            <div className="flex items-center justify-between mb-4">
                <div className="bg-orange-100 p-3 rounded-full text-orange-600">
                    <Bell size={24} />
                </div>
                <span className="text-2xl font-bold text-slate-900">4</span>
            </div>
            <h3 className="text-gray-600 font-medium">등록된 공지사항</h3>
            <Link href="#" className="text-sm text-orange-600 font-bold mt-4 inline-block hover:underline">
                공지 관리하기 &rarr;
            </Link>
        </div>
      </div>
      
      <div className="p-4 bg-yellow-50 border border-yellow-200 rounded-md text-yellow-800 text-sm">
        현재 관리자 페이지는 Next.js 마이그레이션 진행 중입니다. 전체 기능을 사용하시려면 추후 업데이트를 기다려주세요.
      </div>
    </div>
  );
}