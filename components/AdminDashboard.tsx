import React, { useState } from 'react';
import { Notice, Inquiry } from '../types';
import { Trash2, Plus, MessageSquare, Bell, ArrowLeft, Settings, Save } from 'lucide-react';

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

  return (
    <div className="min-h-screen pt-12 pb-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-black text-white tracking-tight">관리자 대시보드</h1>
          <button 
            onClick={onExit}
            className="flex items-center px-4 py-2 bg-white/10 text-white rounded-lg hover:bg-white/20 border border-white/10 transition-colors backdrop-blur-sm text-sm font-medium"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            메인으로 돌아가기
          </button>
        </div>

        {/* Dashboard Tabs */}
        <div className="bg-white/5 border border-white/10 rounded-xl p-1 mb-8 flex backdrop-blur-md">
          <button
            onClick={() => setActiveTab('inquiries')}
            className={`flex-1 py-3 text-center text-sm font-bold rounded-lg transition-all flex items-center justify-center ${
              activeTab === 'inquiries' 
                ? 'bg-blue-600 text-white shadow-lg shadow-blue-900/50' 
                : 'text-gray-400 hover:text-white hover:bg-white/5'
            }`}
          >
            <MessageSquare className="w-4 h-4 mr-2" />
            수강 문의 내역 ({inquiries.length})
          </button>
          <button
            onClick={() => setActiveTab('notices')}
            className={`flex-1 py-3 text-center text-sm font-bold rounded-lg transition-all flex items-center justify-center ${
              activeTab === 'notices' 
                 ? 'bg-blue-600 text-white shadow-lg shadow-blue-900/50' 
                : 'text-gray-400 hover:text-white hover:bg-white/5'
            }`}
          >
            <Bell className="w-4 h-4 mr-2" />
            공지사항 관리 ({notices.length})
          </button>
          <button
            onClick={() => setActiveTab('settings')}
            className={`flex-1 py-3 text-center text-sm font-bold rounded-lg transition-all flex items-center justify-center ${
              activeTab === 'settings' 
                 ? 'bg-blue-600 text-white shadow-lg shadow-blue-900/50' 
                : 'text-gray-400 hover:text-white hover:bg-white/5'
            }`}
          >
            <Settings className="w-4 h-4 mr-2" />
            사이트 설정
          </button>
        </div>

        {/* Content Area */}
        <div className="bg-white/5 border border-white/10 rounded-2xl shadow-xl backdrop-blur-md p-6 min-h-[500px]">
          {activeTab === 'inquiries' && (
            <div>
              <h2 className="text-xl font-bold mb-6 text-white flex items-center">
                <MessageSquare className="w-5 h-5 mr-2 text-blue-400" />
                접수된 문의 목록
              </h2>
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-white/10">
                  <thead className="bg-white/5">
                    <tr>
                      <th className="px-6 py-4 text-left text-xs font-semibold text-gray-300 uppercase tracking-wider">날짜</th>
                      <th className="px-6 py-4 text-left text-xs font-semibold text-gray-300 uppercase tracking-wider">이름</th>
                      <th className="px-6 py-4 text-left text-xs font-semibold text-gray-300 uppercase tracking-wider">연락처</th>
                      <th className="px-6 py-4 text-left text-xs font-semibold text-gray-300 uppercase tracking-wider">내용</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/5">
                    {inquiries.length > 0 ? (
                      inquiries.slice().reverse().map((inquiry) => (
                        <tr key={inquiry.id} className="hover:bg-white/5 transition-colors">
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-400">{inquiry.date}</td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-white">{inquiry.name}</td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-400">{inquiry.phone}</td>
                          <td className="px-6 py-4 text-sm text-gray-400 max-w-xs truncate">{inquiry.content}</td>
                        </tr>
                      ))
                    ) : (
                      <tr>
                        <td colSpan={4} className="px-6 py-12 text-center text-gray-500">
                          접수된 문의가 없습니다.
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {activeTab === 'notices' && (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* List */}
              <div className="lg:col-span-2">
                <h2 className="text-xl font-bold mb-6 text-white flex items-center">
                  <Bell className="w-5 h-5 mr-2 text-blue-400" />
                  공지사항 목록
                </h2>
                <ul className="space-y-4">
                  {notices.map((notice) => (
                    <li key={notice.id} className="flex justify-between items-start p-5 border border-white/10 rounded-xl bg-white/5 hover:bg-white/10 transition-colors">
                      <div>
                        <div className="font-bold text-white text-lg mb-1">{notice.title}</div>
                        <div className="text-sm text-gray-400 mb-2">{notice.date}</div>
                        <p className="text-sm text-gray-500 line-clamp-2">{notice.content}</p>
                      </div>
                      <button 
                        onClick={() => onDeleteNotice(notice.id)}
                        className="text-red-400 hover:text-red-300 p-2 hover:bg-red-400/10 rounded-lg transition-colors ml-4"
                        title="삭제"
                      >
                        <Trash2 className="w-5 h-5" />
                      </button>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Add Form */}
              <div className="bg-white/5 border border-white/10 p-6 rounded-xl h-fit">
                <h2 className="text-lg font-bold mb-6 text-white flex items-center">
                  <Plus className="w-5 h-5 mr-2 text-green-400" /> 새 공지 작성
                </h2>
                <form onSubmit={handleAddNotice} className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">제목</label>
                    <input
                      type="text"
                      value={newNotice.title}
                      onChange={(e) => setNewNotice({ ...newNotice, title: e.target.value })}
                      className="w-full bg-black/20 border border-white/10 rounded-lg p-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500/50"
                      placeholder="공지 제목 입력"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">내용</label>
                    <textarea
                      value={newNotice.content}
                      onChange={(e) => setNewNotice({ ...newNotice, content: e.target.value })}
                      className="w-full bg-black/20 border border-white/10 rounded-lg p-3 h-32 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500/50 resize-none"
                      placeholder="공지 내용 입력"
                      required
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-500 font-bold transition-all shadow-lg shadow-blue-900/20"
                  >
                    등록하기
                  </button>
                </form>
              </div>
            </div>
          )}

          {activeTab === 'settings' && (
            <div className="max-w-3xl mx-auto">
              <h2 className="text-xl font-bold mb-6 text-white flex items-center">
                <Settings className="w-5 h-5 mr-2 text-blue-400" />
                사이트 설정
              </h2>
              
              <div className="bg-white/5 border border-white/10 rounded-xl p-8">
                <div className="mb-6">
                  <label className="block text-lg font-bold text-white mb-2">
                    메인 배너 문구 (광고)
                  </label>
                  <p className="text-sm text-gray-400 mb-4">
                    홈 화면 하단에 슬라이딩되는 광고 문구를 설정합니다.
                  </p>
                  <input
                    type="text"
                    value={tempBannerContent}
                    onChange={(e) => setTempBannerContent(e.target.value)}
                    className="w-full bg-black/20 border border-white/10 rounded-lg p-4 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500/50 text-lg"
                    placeholder="배너 내용을 입력하세요..."
                  />
                </div>
                <div className="flex justify-end">
                  <button
                    onClick={handleSaveBanner}
                    className="flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-500 font-bold transition-all shadow-lg shadow-blue-900/20"
                  >
                    <Save className="w-5 h-5 mr-2" />
                    저장하기
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;