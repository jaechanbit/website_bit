import React, { useState } from 'react';
import { Notice } from '../types';
import { Bell, Award, Calendar, X } from 'lucide-react';
import ScrollAnimationWrapper from './ScrollAnimationWrapper';

interface CommunityProps {
  notices: Notice[];
}

const Community: React.FC<CommunityProps> = ({ notices }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section id="community" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollAnimationWrapper>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            
            {/* Notices */}
            <div>
              <div className="flex items-center justify-between mb-8">
                <h2 className="text-2xl font-bold text-white flex items-center">
                  <Bell className="w-6 h-6 mr-3 text-blue-400" />
                  공지사항
                </h2>
                <button 
                  onClick={() => setIsModalOpen(true)}
                  className="text-sm text-gray-400 hover:text-white transition-colors flex items-center"
                >
                  더보기 &rarr;
                </button>
              </div>
              <div className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden backdrop-blur-sm">
                <ul className="divide-y divide-white/5">
                  {notices.length > 0 ? (
                    notices.slice(0, 3).map((notice) => (
                      <li key={notice.id} className="p-6 hover:bg-white/5 transition-colors group cursor-pointer" onClick={() => setIsModalOpen(true)}>
                        <div className="flex justify-between items-start mb-2">
                          <span className="inline-block px-2.5 py-0.5 text-xs font-semibold bg-blue-500/20 text-blue-300 border border-blue-500/20 rounded-md">
                            공지
                          </span>
                          <span className="text-xs text-gray-500 group-hover:text-gray-400">{notice.date}</span>
                        </div>
                        <h3 className="text-base font-medium text-gray-200 group-hover:text-white mb-1 truncate transition-colors">
                          {notice.title}
                        </h3>
                        <p className="text-sm text-gray-500 group-hover:text-gray-400 line-clamp-2 transition-colors">
                          {notice.content}
                        </p>
                      </li>
                    ))
                  ) : (
                    <li className="p-8 text-center text-gray-500">등록된 공지사항이 없습니다.</li>
                  )}
                </ul>
              </div>
            </div>

            {/* Exam Center Info */}
            <div>
              <div className="flex items-center mb-8">
                <h2 className="text-2xl font-bold text-white flex items-center">
                  <Award className="w-6 h-6 mr-3 text-blue-400" />
                  공인 시험센터 운영
                </h2>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {/* ITQ Card */}
                <div className="bg-white/5 p-6 rounded-2xl border border-white/10 relative overflow-hidden group hover:bg-white/10 transition-colors backdrop-blur-sm">
                  <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                    <MonitorPlay className="w-24 h-24 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-blue-300 mb-3">ITQ 공인시험센터</h3>
                  <p className="text-sm text-gray-400 mb-5 leading-relaxed">
                    정보기술자격(ITQ) 시험을 본원에서 직접 응시하세요. 익숙한 환경에서 합격률을 높이세요!
                  </p>
                  <div className="flex items-center text-xs font-medium text-gray-500">
                    <Calendar className="w-4 h-4 mr-2" />
                    매월 둘째 주 토요일 시행
                  </div>
                </div>

                {/* DIAT Card */}
                <div className="bg-white/5 p-6 rounded-2xl border border-white/10 relative overflow-hidden group hover:bg-white/10 transition-colors backdrop-blur-sm">
                  <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                     <Award className="w-24 h-24 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-purple-300 mb-3">DIAT 공인시험센터</h3>
                  <p className="text-sm text-gray-400 mb-5 leading-relaxed">
                    디지털정보활용능력(DIAT) 상시 검정장 운영. 편리하게 접수하고 빠르게 자격증을 취득하세요.
                  </p>
                   <div className="flex items-center text-xs font-medium text-gray-500">
                    <Calendar className="w-4 h-4 mr-2" />
                    정기/상시 검정 접수 중
                  </div>
                </div>
              </div>
              
              <div className="mt-6 bg-gradient-to-r from-blue-900/40 to-blue-800/40 rounded-2xl p-6 border border-blue-500/20 flex items-center justify-between backdrop-blur-sm">
                 <div>
                   <h4 className="font-bold text-white text-lg mb-1">자격증 접수 대행</h4>
                   <p className="text-blue-200/70 text-sm">복잡한 원서 접수, 학원에서 도와드립니다.</p>
                 </div>
                 <button className="px-5 py-2.5 bg-blue-600 text-white text-sm font-medium rounded-lg hover:bg-blue-500 transition-colors shadow-lg shadow-blue-900/20">
                   접수문의
                 </button>
              </div>
            </div>
          </div>
        </ScrollAnimationWrapper>

        {/* Modal */}
        {isModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm" onClick={() => setIsModalOpen(false)}>
            <div 
              className="bg-[#0f172a] border border-white/10 rounded-2xl w-full max-w-2xl max-h-[80vh] overflow-hidden shadow-2xl relative" 
              onClick={e => e.stopPropagation()}
            >
              <div className="flex justify-between items-center p-6 border-b border-white/10 bg-[#0f172a] sticky top-0 z-10">
                <h3 className="text-xl font-bold text-white flex items-center">
                  <Bell className="w-5 h-5 mr-2 text-blue-400" /> 공지사항 전체보기
                </h3>
                <button 
                  onClick={() => setIsModalOpen(false)}
                  className="p-1 rounded-full hover:bg-white/10 text-gray-400 hover:text-white transition-colors"
                >
                  <X className="w-6 h-6"/>
                </button>
              </div>
              <div className="p-0 overflow-y-auto max-h-[calc(80vh-80px)]">
                {notices.length > 0 ? (
                  <ul className="divide-y divide-white/5">
                    {notices.map((notice) => (
                      <li key={notice.id} className="p-6 hover:bg-white/5 transition-colors">
                        <div className="flex justify-between items-start mb-2">
                          <span className="inline-block px-2.5 py-0.5 text-xs font-semibold bg-blue-500/20 text-blue-300 border border-blue-500/20 rounded-md">
                            공지
                          </span>
                          <span className="text-xs text-gray-500">{notice.date}</span>
                        </div>
                        <h4 className="text-lg font-bold text-white mb-2">{notice.title}</h4>
                        <p className="text-sm text-gray-400 leading-relaxed whitespace-pre-wrap">
                          {notice.content}
                        </p>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <div className="p-12 text-center text-gray-500">
                    등록된 공지사항이 없습니다.
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

// Helper component for icon
const MonitorPlay = ({className}: {className?: string}) => (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m5 11 4-7"/><path d="m19 11-4-7"/><path d="M2 11h20"/><path d="m3.5 11 1.6 7.4a2 2 0 0 0 2 1.6h9.8c.9 0 1.8-.7 2-1.6l1.7-7.4"/><path d="m9 11 1 9"/></svg>
)

export default Community;