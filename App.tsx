import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Curriculum from './components/Curriculum';
import FundingGuide from './components/FundingGuide';
import Community from './components/Community';
import Contact from './components/Contact';
import Footer from './components/Footer';
import AdminDashboard from './components/AdminDashboard';
import { INITIAL_NOTICES } from './constants';
import { Notice, Inquiry } from './types';

function App() {
  // Application State
  const [isAdminMode, setIsAdminMode] = useState(false);
  const [notices, setNotices] = useState<Notice[]>(INITIAL_NOTICES);
  const [inquiries, setInquiries] = useState<Inquiry[]>([]);
  const [bannerContent, setBannerContent] = useState('📢 2024년 국비지원 과정 수강생 모집 중! 100% 전액 무료 교육 + 매월 훈련수당 지급 🎁 자격증 취득부터 취업까지 원스톱 지원!');

  // Function to toggle admin mode
  const handleAdminToggle = () => {
    setIsAdminMode(prev => !prev);
  };

  // Add a new notice
  const handleAddNotice = (notice: Omit<Notice, 'id'>) => {
    const newId = notices.length > 0 ? Math.max(...notices.map(n => n.id)) + 1 : 1;
    setNotices(prev => [{ id: newId, ...notice }, ...prev]);
  };

  // Delete a notice
  const handleDeleteNotice = (id: number) => {
    setNotices(prev => prev.filter(n => n.id !== id));
  };

  // Handle new inquiry from Contact form
  const handleInquirySubmit = (data: { name: string; phone: string; content: string }) => {
    const newInquiry: Inquiry = {
      id: Date.now(),
      ...data,
      date: new Date().toLocaleDateString('ko-KR')
    };
    setInquiries(prev => [...prev, newInquiry]);
  };

  return (
    <div className="font-sans text-gray-900 min-h-screen relative selection:bg-brand-200 selection:text-brand-900">
      
      {isAdminMode ? (
        <div className="relative z-10 bg-gray-900">
          <AdminDashboard 
            notices={notices}
            inquiries={inquiries}
            onAddNotice={handleAddNotice}
            onDeleteNotice={handleDeleteNotice}
            onExit={() => setIsAdminMode(false)}
            bannerContent={bannerContent}
            onUpdateBanner={setBannerContent}
          />
        </div>
      ) : (
        <div className="relative z-10 flex flex-col min-h-screen">
          <Header 
            onAdminClick={handleAdminToggle} 
            isAdminMode={isAdminMode} 
          />
          <main className="flex-grow">
            <Hero bannerContent={bannerContent} />
            <About />
            <Curriculum />
            <FundingGuide />
            <div className="bg-slate-900">
                <Community notices={notices} />
            </div>
            <div className="bg-slate-900">
                <Contact onInquirySubmit={handleInquirySubmit} />
            </div>
          </main>
          <Footer />
        </div>
      )}
    </div>
  );
}

export default App;