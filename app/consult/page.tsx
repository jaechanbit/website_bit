'use client';

import React, { useState } from 'react';
import { Phone, MapPin, Clock } from 'lucide-react';
import { ADDRESS, CONTACT_PHONE } from '@/lib/constants';

export default function ConsultPage() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    course: '',
    target: '국비지원(국민내일배움카드)',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API delay
    setTimeout(() => {
      alert('상담 신청이 완료되었습니다. 담당자가 확인 후 연락드리겠습니다.');
      setIsSubmitting(false);
      setFormData({
        name: '',
        phone: '',
        course: '',
        target: '국비지원(국민내일배움카드)',
        message: ''
      });
    }, 800);
  };

  return (
    <div className="flex flex-col">
      <div className="bg-brand-navy text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">상담신청</h1>
          <p className="text-blue-100 text-lg max-w-2xl mx-auto">궁금하신 점을 남겨주시면 친절하게 상담해 드립니다.</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            
            {/* Contact Info Side */}
            <div className="lg:col-span-2 space-y-8">
                <div>
                    <h3 className="text-xl font-bold text-slate-900 mb-4">방문 상담 안내</h3>
                    <p className="text-slate-600 mb-6">
                        학원에 직접 방문하시면 강의실 시설을 둘러보시고 더 자세한 상담을 받으실 수 있습니다.
                    </p>
                    <div className="space-y-4">
                        <div className="flex items-start">
                            <MapPin className="h-6 w-6 text-brand-navy mt-1 mr-3 flex-shrink-0" />
                            <div>
                                <h4 className="font-bold text-slate-900">주소</h4>
                                <p className="text-slate-600">{ADDRESS}</p>
                            </div>
                        </div>
                        <div className="flex items-start">
                            <Phone className="h-6 w-6 text-brand-navy mt-1 mr-3 flex-shrink-0" />
                            <div>
                                <h4 className="font-bold text-slate-900">전화번호</h4>
                                <p className="text-slate-600">{CONTACT_PHONE}</p>
                            </div>
                        </div>
                        <div className="flex items-start">
                            <Clock className="h-6 w-6 text-brand-navy mt-1 mr-3 flex-shrink-0" />
                            <div>
                                <h4 className="font-bold text-slate-900">상담 가능 시간</h4>
                                <p className="text-slate-600 text-sm">
                                    평일: 09:00 ~ 21:00<br/>
                                    토요일: 09:00 ~ 17:00<br/>
                                    (일요일, 공휴일 휴무)
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="h-64 bg-slate-200 rounded-lg overflow-hidden relative">
                    <div className="absolute inset-0 flex items-center justify-center text-slate-500">
                        <span className="font-medium">지도 영역 (API 연동 필요)</span>
                    </div>
                </div>
            </div>

            {/* Form Side */}
            <div className="lg:col-span-3">
               <form onSubmit={handleSubmit} className="bg-white p-6 md:p-8 rounded-lg shadow-sm border border-gray-200">
                  <h3 className="text-xl font-bold text-brand-navy mb-6">간편 상담 신청</h3>
                  
                  <div className="space-y-5">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">이름 <span className="text-red-500">*</span></label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-brand-blue focus:border-brand-blue outline-none transition-colors"
                        value={formData.name}
                        onChange={handleChange}
                      />
                    </div>

                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">연락처 <span className="text-red-500">*</span></label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-brand-blue focus:border-brand-blue outline-none transition-colors"
                        value={formData.phone}
                        onChange={handleChange}
                      />
                    </div>

                    <div>
                      <label htmlFor="target" className="block text-sm font-medium text-gray-700 mb-1">수강 대상 <span className="text-red-500">*</span></label>
                      <select
                        id="target"
                        name="target"
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-brand-blue focus:border-brand-blue outline-none transition-colors"
                        value={formData.target}
                        onChange={handleChange}
                      >
                        <option value="국비지원(국민내일배움카드)">국비지원(국민내일배움카드)</option>
                        <option value="초·중·고 학생">초·중·고 학생</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="course" className="block text-sm font-medium text-gray-700 mb-1">희망 과정 <span className="text-red-500">*</span></label>
                      <input
                        type="text"
                        id="course"
                        name="course"
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-brand-blue focus:border-brand-blue outline-none transition-colors"
                        placeholder="예: 컴퓨터활용능력 1급, 파이썬 등"
                        value={formData.course}
                        onChange={handleChange}
                      />
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">문의 내용 (선택)</label>
                      <textarea
                        id="message"
                        name="message"
                        rows={4}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-brand-blue focus:border-brand-blue outline-none transition-colors resize-none"
                        value={formData.message}
                        onChange={handleChange}
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-brand-navy hover:bg-blue-800 text-white font-bold py-3 px-4 rounded-md transition-all duration-200 transform hover:scale-[1.01] shadow-md disabled:opacity-50"
                    >
                      {isSubmitting ? '전송 중...' : '상담 신청하기'}
                    </button>
                  </div>
                </form>
            </div>
        </div>
      </div>
    </div>
  );
}