import React, { useState } from 'react';
import { Send, Phone, User as UserIcon, MessageSquare, Check } from 'lucide-react';

interface ContactProps {
  onInquirySubmit: (inquiry: { name: string; phone: string; content: string }) => void;
}

const Contact: React.FC<ContactProps> = ({ onInquirySubmit }) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    content: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate network request
    setTimeout(() => {
      onInquirySubmit(formData);
      setFormData({ name: '', phone: '', content: '' }); // Clear input fields
      setIsSubmitting(false);
      setIsSuccess(true);
      
      // Reset status after 3 seconds
      setTimeout(() => {
        setIsSuccess(false);
      }, 3000);
    }, 1000);
  };

  return (
    <section id="contact" className="py-24 relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white/5 border border-white/10 rounded-3xl overflow-hidden shadow-2xl backdrop-blur-md flex flex-col md:flex-row">
          
          {/* Left Side: Info */}
          <div className="bg-blue-600/90 p-10 md:p-12 text-white md:w-2/5 flex flex-col justify-between relative overflow-hidden">
             {/* Decorative circle */}
             <div className="absolute -top-10 -left-10 w-40 h-40 bg-white/10 rounded-full blur-2xl"></div>
             <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-blue-400/20 rounded-full blur-2xl"></div>

            <div className="relative z-10">
              <h3 className="text-3xl font-bold mb-4">교육상담 문의</h3>
              <p className="text-blue-100 mb-10 leading-relaxed">
                궁금하신 점을 남겨주시면<br/>친절하게 상담해 드립니다.
              </p>
              <div className="space-y-6">
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center mr-4">
                    <Phone className="w-5 h-5 text-white" />
                  </div>
                  <span className="font-medium text-lg">063-626-9060</span>
                </div>
                <div className="flex items-center">
                   <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center mr-4">
                    <MessageSquare className="w-5 h-5 text-white" />
                  </div>
                  <span className="font-medium text-lg">카카오톡: 비트컴퓨터학원</span>
                </div>
              </div>
            </div>
            <div className="mt-12 md:mt-0 relative z-10">
              <p className="text-sm text-blue-200">
                운영시간: 평일 09:00 - 21:00<br/>
                (주말/공휴일 휴무)
              </p>
            </div>
          </div>

          {/* Right Side: Form */}
          <div className="p-10 md:p-12 md:w-3/5 bg-transparent">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">이름</label>
                <div className="relative group">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <UserIcon className="h-5 w-5 text-gray-500 group-focus-within:text-blue-400 transition-colors" />
                  </div>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="block w-full pl-10 pr-3 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-transparent transition-all"
                    placeholder="홍길동"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-2">전화번호</label>
                <div className="relative group">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Phone className="h-5 w-5 text-gray-500 group-focus-within:text-blue-400 transition-colors" />
                  </div>
                  <input
                    type="tel"
                    name="phone"
                    id="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    className="block w-full pl-10 pr-3 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-transparent transition-all"
                    placeholder="010-1234-5678"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="content" className="block text-sm font-medium text-gray-300 mb-2">문의내용</label>
                <textarea
                  name="content"
                  id="content"
                  rows={4}
                  required
                  value={formData.content}
                  onChange={handleChange}
                  className="block w-full p-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-transparent transition-all resize-none"
                  placeholder="수강하고 싶은 과정이나 궁금한 점을 적어주세요."
                />
              </div>
              <button
                type="submit"
                disabled={isSubmitting || isSuccess}
                className={`w-full flex justify-center items-center py-3.5 px-4 border border-transparent rounded-xl shadow-lg shadow-blue-900/30 text-base font-bold text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-all disabled:opacity-50 disabled:cursor-not-allowed mt-2 ${
                  isSuccess 
                    ? 'bg-green-600 hover:bg-green-500' 
                    : 'bg-blue-600 hover:bg-blue-500'
                }`}
              >
                {isSubmitting ? '전송 중...' : isSuccess ? (
                  <>
                    전송완료 <Check className="ml-2 w-4 h-4" />
                  </>
                ) : (
                  <>
                    문의하기 <Send className="ml-2 w-4 h-4" />
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;