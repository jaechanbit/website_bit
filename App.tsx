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

// Background component to mimic the "Clear Technology" image
const BackgroundShapes = () => (
  <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none bg-[#020617]">
    {/* Deep blue gradient base */}
    <div className="absolute inset-0 bg-gradient-to-br from-[#020024] via-[#050A30] to-[#001233]"></div>
    
    {/* Abstract Geometric Shapes (Diagonal Pills) */}
    {/* Large faint glow top right */}
    <div className="absolute -top-[20%] -right-[10%] w-[800px] h-[1200px] bg-blue-900/20 rounded-full transform rotate-[35deg] blur-3xl"></div>
    
    {/* Solid-ish pill shape */}
    <div className="absolute top-[10%] right-[5%] w-[180px] h-[600px] bg-gradient-to-b from-blue-600/10 to-blue-900/5 rounded-full transform rotate-[35deg] border border-blue-500/10 backdrop-blur-sm"></div>
    
    {/* Stroked pill shape */}
    <div className="absolute top-[25%] right-[15%] w-[140px] h-[500px] border border-blue-400/20 rounded-full transform rotate-[35deg]"></div>
    
    {/* Bottom left glow */}
    <div className="absolute -bottom-[20%] -left-[10%] w-[600px] h-[800px] bg-indigo-900/20 rounded-full transform rotate-[35deg] blur-3xl"></div>
    
    {/* Decorative line */}
    <div className="absolute top-0 right-[30%] w-[1px] h-[100vh] bg-gradient-to-b from-transparent via-blue-500/20 to-transparent transform rotate-[35deg]"></div>
  </div>
);

function App() {
  // Application State
  const [isAdminMode, setIsAdminMode] = useState(false);
  const [notices, setNotices] = useState<Notice[]>(INITIAL_NOTICES);
  const [inquiries, setInquiries] = useState<Inquiry[]>([]);

  // Function to toggle admin mode - Password removed for immediate activation
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
    <div className="font-sans text-gray-100 min-h-screen relative selection:bg-blue-500 selection:text-white">
      <BackgroundShapes />
      
      {isAdminMode ? (
        <div className="relative z-10">
          <AdminDashboard 
            notices={notices}
            inquiries={inquiries}
            onAddNotice={handleAddNotice}
            onDeleteNotice={handleDeleteNotice}
            onExit={() => setIsAdminMode(false)}
          />
        </div>
      ) : (
        <div className="relative z-10">
          <Header onAdminClick={handleAdminToggle} isAdminMode={isAdminMode} />
          <main className="space-y-0">
            <Hero />
            <About />
            <Curriculum />
            <FundingGuide />
            <Community notices={notices} />
            <Contact onInquirySubmit={handleInquirySubmit} />
          </main>
          <Footer />
        </div>
      )}
    </div>
  );
}

export default App;