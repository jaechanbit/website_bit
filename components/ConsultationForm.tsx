import React, { useState } from 'react';
import { useData } from '../contexts/DataContext';
import { ConsultationTarget } from '../types';

const ConsultationForm: React.FC = () => {
  const { addConsultation } = useData();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    course: '',
    target: ConsultationTarget.NATIONAL,
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
      addConsultation({
        name: formData.name,
        phone: formData.phone,
        course: formData.course,
        target: formData.target,
        message: formData.message
      });

      alert('상담 신청이 완료되었습니다. 담당자가 확인 후 연락드리겠습니다.');
      setIsSubmitting(false);
      setFormData({
        name: '',
        phone: '',
        course: '',
        target: ConsultationTarget.NATIONAL,
        message: ''
      });
    }, 800);
  };

  return (
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
            placeholder="홍길동"
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
            placeholder="010-0000-0000"
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
            <option value={ConsultationTarget.NATIONAL}>{ConsultationTarget.NATIONAL}</option>
            <option value={ConsultationTarget.STUDENT}>{ConsultationTarget.STUDENT}</option>
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
            placeholder="궁금하신 점을 자유롭게 남겨주세요."
            value={formData.message}
            onChange={handleChange}
          />
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-brand-navy hover:bg-blue-800 text-white font-bold py-3 px-4 rounded-md transition-all duration-200 transform hover:scale-[1.01] shadow-md disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isSubmitting ? '전송 중...' : '상담 신청하기'}
        </button>
        <p className="text-xs text-gray-500 text-center mt-2">
          신청해주시면 담당자가 확인 후 빠르게 연락드립니다.
        </p>
      </div>
    </form>
  );
};

export default ConsultationForm;