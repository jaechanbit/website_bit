import React, { useState, useEffect } from 'react';
import { Outlet, Link, useNavigate, useLocation } from 'react-router-dom';
import { BookOpen, MessageSquare, Bell, LogOut, Menu, X, LayoutDashboard } from 'lucide-react';
import { APP_NAME } from '../../constants';
import { PagePath } from '../../types';

const AdminLayout: React.FC = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const auth = sessionStorage.getItem('isAdminAuth');
    if (auth !== 'true') {
      navigate('/admin/login');
    } else {
      setIsAuthenticated(true);
    }
  }, [navigate]);

  const handleLogout = () => {
    sessionStorage.removeItem('isAdminAuth');
    navigate('/admin/login');
  };

  if (!isAuthenticated) return null;

  const menuItems = [
    { icon: <LayoutDashboard size={20} />, label: '대시보드', path: PagePath.ADMIN },
    { icon: <BookOpen size={20} />, label: '교육과정 관리', path: PagePath.ADMIN_COURSES },
    { icon: <MessageSquare size={20} />, label: '상담 신청 내역', path: PagePath.ADMIN_CONSULTATIONS },
    { icon: <Bell size={20} />, label: '공지사항 관리', path: PagePath.ADMIN_NOTICES },
  ];

  return (
    <div className="min-h-screen bg-gray-100 flex">
      {/* Sidebar */}
      <div className={`${isSidebarOpen ? 'w-64' : 'w-20'} bg-brand-navy text-white transition-all duration-300 flex flex-col fixed h-full z-20`}>
        <div className="h-20 flex items-center justify-center border-b border-blue-900">
          {isSidebarOpen ? (
            <span className="font-bold text-xl">관리자 페이지</span>
          ) : (
            <span className="font-bold text-xl">A</span>
          )}
        </div>
        
        <nav className="flex-1 py-6 space-y-2">
          {menuItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`flex items-center px-6 py-3 text-sm transition-colors ${
                location.pathname === item.path 
                  ? 'bg-blue-800 border-r-4 border-blue-400 font-bold' 
                  : 'text-blue-100 hover:bg-blue-900'
              }`}
            >
              <span className="mr-3">{item.icon}</span>
              {isSidebarOpen && <span>{item.label}</span>}
            </Link>
          ))}
        </nav>

        <div className="p-4 border-t border-blue-900">
          <button
            onClick={handleLogout}
            className="flex items-center w-full px-2 py-2 text-sm text-blue-200 hover:text-white transition-colors"
          >
            <LogOut size={20} className="mr-3" />
            {isSidebarOpen && <span>로그아웃</span>}
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className={`flex-1 flex flex-col transition-all duration-300 ${isSidebarOpen ? 'ml-64' : 'ml-20'}`}>
        <header className="bg-white shadow-sm h-16 flex items-center px-6 justify-between sticky top-0 z-10">
          <button 
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            className="text-gray-500 hover:text-gray-700"
          >
            {isSidebarOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
          <div className="text-sm text-gray-600">
            {APP_NAME} 관리자 모드
          </div>
        </header>
        
        <main className="p-8 overflow-y-auto">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default AdminLayout;