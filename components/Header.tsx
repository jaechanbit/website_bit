import React, { useState } from 'react';
import { Menu, X, Lock } from 'lucide-react';

interface HeaderProps {
  onAdminClick: () => void;
  isAdminMode: boolean;
}

const Header: React.FC<HeaderProps> = ({ onAdminClick, isAdminMode }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { label: '학원소개', id: 'about' },
    { label: '교육과정', id: 'courses' },
    { label: '국비지원', id: 'funding' },
    { label: '커뮤니티', id: 'community' },
    { label: '수강문의', id: 'contact' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <a 
            href="#" 
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="flex items-center"
          >
            <img 
              src="/logo.png" 
              alt="비트컴퓨터학원" 
              className="h-10 w-auto mr-2 object-contain"
            />
            <span className="font-bold text-xl text-gray-900 tracking-tight">비트컴퓨터학원</span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex space-x-8 items-center">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={(e) => handleNavClick(e, item.id)}
                className="text-sm font-medium text-gray-600 hover:text-brand-600 transition-colors"
              >
                {item.label}
              </a>
            ))}
            <button
              onClick={onAdminClick}
              className={`flex items-center px-3 py-1 rounded-full text-sm font-medium transition-colors ${
                isAdminMode 
                  ? 'bg-red-100 text-red-600 hover:bg-red-200' 
                  : 'bg-gray-100 text-gray-500 hover:bg-gray-200'
              }`}
            >
              <Lock className="w-3 h-3 mr-1" />
              {isAdminMode ? '관리자 종료' : '관리자'}
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-600 hover:text-gray-900 focus:outline-none"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={(e) => handleNavClick(e, item.id)}
                className="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-brand-600 hover:bg-gray-50"
              >
                {item.label}
              </a>
            ))}
            <button
              onClick={() => {
                setIsMenuOpen(false);
                onAdminClick();
              }}
              className="w-full text-left px-3 py-2 text-base font-medium text-gray-500 hover:text-gray-900"
            >
              {isAdminMode ? '관리자 모드 종료' : '관리자 로그인'}
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;