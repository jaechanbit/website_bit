import React, { useState } from 'react';
import { Notice, Inquiry } from '../types';
import { Trash2, Plus, MessageSquare, Bell, ArrowLeft, Settings, CheckCircle, Save } from 'lucide-react';

interface AdminDashboardProps {
  notices: Notice[];
  inquiries: Inquiry[];
  onAddNotice: (notice: Omit<Notice, 'id'>) => void;
  onDeleteNotice: (id: number) => void;
  onExit: () => void;
  bannerContent: string;
  onUpdateBanner: (content: string) => void;
}

const AdminDashboard: React.FC<AdminDashboardProps> = ({ 
  notices, 
  inquiries, 
  onAddNotice, 
  onDeleteNotice,
  onExit,
  bannerContent,
  onUpdateBanner
}) => {
  const [activeTab, setActiveTab] = useState<'inquiries' | 'notices' | 'settings'>('inquiries');
  const [newNotice, setNewNotice] = useState({ title: '', content: '' });
  const [tempBannerContent, setTempBannerContent] = useState(bannerContent);

  const handleAddNotice = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newNotice.title || !newNotice.content) return;
    
    onAddNotice({
      title: newNotice.title,
      content: newNotice.content,
      date: new Date().toISOString().split('T')[0]
    });
    setNewNotice({ title: '', content: '' });
  };

  const handleSaveBanner = () => {
    onUpdateBanner(tempBannerContent);
    alert('배너 내용이 업데이트되었습니다.');
  };

  const TabButton = ({ id, label, icon: Icon }: { id: typeof activeTab, label: string, icon: any }) => (
    <button
      onClick={() => setActiveTab(id)}
      className={`
        flex-1 md:flex-none px-6 py-3 rounded-xl text-sm font-bold transition-all duration-300 flex items-center justify-center gap-2.5
        ${activeTab === id 
          ? 'bg-blue-600 text-white shadow-lg shadow-blue-900/50 scale-[1.02] ring-1 ring-blue-400/50' 
          : 'text-gray-400 hover:text-gray-100 hover:bg-gray-800'
        }
      `}
    >
      <Icon className={`w-4 h-4 ${activeTab === id ? 'animate-pulse' : ''}`} />
      {label}
    </button>
  );

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100 pt-12 pb-20 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-10 gap-6">
          <div className="text-center md:text-left">
            <h1 className="text-3xl md:text-4xl font-black text-white tracking-tight mb-2">
              Admin Dashboard
            </h1>
            <p className="text-gray-400 font-medium">학원 운영 관리를 위한 관리자 페이지입니다.</p>
          </div>
          
          <button 
            onClick={onExit}
            className="group flex items-center px-5 py-2.5 bg-gray-800 text-gray-300 rounded-full hover:bg-gray-700 hover:text-white border border-gray-700 transition-all duration-300 shadow-lg hover:shadow-gray-900/50"
          >
            <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
            메인으로 돌아가기
          </button>
        </div>

        {/* Navigation Tabs */}
        <div className="bg-gray-800/60 backdrop-blur-md p-1.5 rounded-2xl mb-8 flex flex-col md:flex-row gap-1 md:inline-flex border border-gray-700/50 shadow-inner w-full md:w-auto">
          <TabButton id="inquiries" label="수강 문의 내역" icon={MessageSquare} />
          <TabButton id="notices" label="공지사항 관리" icon={Bell} />
          <TabButton id="settings" label="사이트 설정" icon={Settings} />
        </div>

        {/* Content Container */}
        <div className="bg-gray-800/40 border border-gray-700/50 rounded-3xl shadow-2xl backdrop-blur-sm overflow-hidden min-h-[600px] relative">
          
          {/* Decorative Elements */}
          <div className="absolute top-0 right-0 -mt-20 -mr-20 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none"></div>
          <div className="absolute bottom-0 left-0 -mb-20 -ml-20 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl pointer-events-none"></div>

          <div className="relative z-10 p-6 md:p-8">
            
            {/* Inquiries Tab */}
            {activeTab === 'inquiries' && (
              <div className="animate-in fade-in slide-in-from-bottom-2 duration-300">
                <div className="flex justify-between items-end mb-6">
                  <div>
                    <h2 className="text-2xl font-bold text-white mb-1">수강 문의 내역</h2>
                    <p className="text-sm text-gray-400">웹사이트를 통해 접수된 상담 문의 목록입니다.</p>
                  </div>
                  <div className="text-sm font-bold px-4 py-1.5 bg-blue-500/10 text-blue-400 rounded-full border border-blue-500/20 shadow-sm">
                    총 {inquiries.length}건
                  </div>
                </div>

                <div className="overflow-hidden rounded-xl border border-gray-700 bg-gray-900/50 shadow-inner">
                  <table className="min-w-full divide-y divide-gray-800">
                    <thead className="bg-gray-800/80">
                      <tr>
                        {['접수일', '이름', '연락처', '문의내용'].map((header) => (
                          <th key={header} className="px-6 py-4 text-left text-xs font-bold text-gray-400 uppercase tracking-wider">
                            {header}
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-800 bg-transparent">
                      {inquiries.length > 0 ? (
                        inquiries.slice().reverse().map((inquiry) => (
                          <tr key={inquiry.id} className="hover:bg-blue-600/5 transition-colors duration-150 group">
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-400 font-mono">{inquiry.date}</td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-bold text-white group-hover:text-blue-300 transition-colors">
                              {inquiry.name}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">{inquiry.phone}</td>
                            <td className="px-6 py-4 text-sm text-gray-400 max-w-md truncate group-hover:text-gray-300">
                              {inquiry.content}
                            </td>
                          </tr>
                        ))
                      ) : (
                        <tr>
                          <td colSpan={4} className="px-6 py-24 text-center">
                            <div className="flex flex-col items-center justify-center text-gray-500">
                              <div className="bg-gray-800/50 p-4 rounded-full mb-4">
                                <MessageSquare className="w-8 h-8 opacity-40" />
                              </div>
                              <p className="font-medium">접수된 문의가 없습니다.</p>
                            </div>
                          </td>
                        </tr>
                      )}
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {/* Notices Tab */}
            {activeTab === 'notices' && (
              <div className="animate-in fade-in slide-in-from-bottom-2 duration-300 grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* List */}
                <div className="lg:col-span-2 space-y-5">
                  <div className="flex justify-between items-center mb-2">
                    <h2 className="text-2xl font-bold text-white">공지사항 관리</h2>
                  </div>
                  
                  <div className="space-y-3">
                    {notices.map((notice) => (
                      <div key={notice.id} className="group flex flex-col sm:flex-row justify-between items-start sm:items-center p-5 bg-gray-800/40 border border-gray-700/50 hover:border-blue-500/30 rounded-2xl hover:bg-gray-800/80 transition-all duration-300 shadow-sm hover:shadow-lg">
                        <div className="flex-1 min-w-0 pr-4">
                          <div className="flex items-center gap-3 mb-2">
                            <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-blue-500/20 text-blue-300 border border-blue-500/20 uppercase tracking-wide">
                              NOTICE
                            </span>
                            <span className="text-xs text-gray-500 font-mono">{notice.date}</span>
                          </div>
                          <h3 className="text-lg font-bold text-gray-200 group-hover:text-white transition-colors truncate">
                            {notice.title}
                          </h3>
                          <p className="text-sm text-gray-500 mt-1 line-clamp-1 group-hover:text-gray-400">
                            {notice.content}
                          </p>
                        </div>
                        <button 
                          onClick={() => onDeleteNotice(notice.id)}
                          className="mt-4 sm:mt-0 p-2.5 text-gray-500 hover:text-red-400 hover:bg-red-400/10 rounded-xl transition-all sm:opacity-0 group-hover:opacity-100 focus:opacity-100"
                          title="삭제"
                        >
                          <Trash2 className="w-5 h-5" />
                        </button>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Add Form */}
                <div className="bg-gray-900/50 border border-gray-700 rounded-2xl p-6 h-fit sticky top-6 shadow-xl backdrop-blur-md">
                  <h3 className="text-lg font-bold text-white mb-6 flex items-center">
                    <span className="bg-green-500/20 text-green-400 p-2 rounded-lg mr-3 border border-green-500/20">
                      <Plus className="w-5 h-5" />
                    </span>
                    새 공지 등록
                  </h3>
                  <form onSubmit={handleAddNotice} className="space-y-5">
                    <div className="space-y-2">
                      <label className="text-xs font-bold text-gray-400 uppercase tracking-wider ml-1">제목</label>
                      <input
                        type="text"
                        value={newNotice.title}
                        onChange={(e) => setNewNotice({ ...newNotice, title: e.target.value })}
                        className="w-full bg-gray-800 border border-gray-700 rounded-xl px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                        placeholder="공지사항 제목을 입력하세요"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-bold text-gray-400 uppercase tracking-wider ml-1">내용</label>
                      <textarea
                        value={newNotice.content}
                        onChange={(e) => setNewNotice({ ...newNotice, content: e.target.value })}
                        className="w-full bg-gray-800 border border-gray-700 rounded-xl px-4 py-3 h-40 text-white placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none"
                        placeholder="상세 내용을 입력하세요"
                        required
                      />
                    </div>
                    <button
                      type="submit"
                      className="w-full bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-400 text-white font-bold py-3.5 rounded-xl shadow-lg shadow-blue-900/30 transform transition-all active:scale-[0.98] flex items-center justify-center gap-2"
                    >
                      <Save className="w-4 h-4" />
                      공지사항 등록하기
                    </button>
                  </form>
                </div>
              </div>
            )}

            {/* Settings Tab */}
            {activeTab === 'settings' && (
              <div className="animate-in fade-in slide-in-from-bottom-2 duration-300 max-w-2xl mx-auto py-4">
                <div className="text-center mb-10">
                  <h2 className="text-2xl font-bold text-white mb-2">사이트 설정</h2>
                  <p className="text-gray-400">웹사이트의 주요 콘텐츠를 실시간으로 수정할 수 있습니다.</p>
                </div>

                <div className="bg-gray-800/40 border border-gray-700 rounded-3xl p-8 shadow-xl">
                  <div className="mb-8">
                    <div className="flex items-center gap-3 mb-5">
                      <div className="p-2.5 bg-yellow-500/20 text-yellow-400 rounded-xl border border-yellow-500/10">
                        <Bell className="w-5 h-5" />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-white">메인 배너 설정</h3>
                        <p className="text-sm text-gray-400">홈 화면 하단에 흐르는 광고 문구입니다.</p>
                      </div>
                    </div>
                    
                    <div className="relative group">
                      <textarea
                        value={tempBannerContent}
                        onChange={(e) => setTempBannerContent(e.target.value)}
                        className="w-full bg-gray-900 border border-gray-700 rounded-xl p-5 text-lg text-white placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all min-h-[140px] leading-relaxed group-hover:border-gray-600"
                        placeholder="배너 내용을 입력하세요..."
                      />
                      <div className="absolute bottom-4 right-4 text-xs font-mono text-gray-500 bg-gray-800/80 px-2 py-1 rounded backdrop-blur-sm border border-gray-700">
                        {tempBannerContent.length}자
                      </div>
                    </div>
                  </div>

                  <div className="flex justify-end pt-6 border-t border-gray-700/50">
                    <button
                      onClick={handleSaveBanner}
                      className="flex items-center px-8 py-3.5 bg-blue-600 text-white rounded-xl hover:bg-blue-500 font-bold transition-all shadow-lg shadow-blue-900/30 hover:-translate-y-0.5 active:translate-y-0"
                    >
                      <CheckCircle className="w-5 h-5 mr-2" />
                      변경사항 저장
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;