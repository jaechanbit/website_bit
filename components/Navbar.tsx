import React, { useState } from 'react';
import { NavLink, Link, useNavigate } from 'react-router-dom';
import { Menu, X, ChevronDown, Phone } from 'lucide-react';
import { NAVIGATION, APP_NAME, CONTACT_PHONE } from '../constants';
import { PagePath } from '../types';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [openSubMenu, setOpenSubMenu] = useState<string | null>(null);
  const navigate = useNavigate();

  const toggleMenu = () => setIsOpen(!isOpen);
  const toggleSubMenu = (label: string) => {
    if (openSubMenu === label) {
      setOpenSubMenu(null);
    } else {
      setOpenSubMenu(label);
    }
  };

  const handleNavClick = (path?: string) => {
    if (path) {
      navigate(path);
      setIsOpen(false);
      setOpenSubMenu(null);
    }
  };

  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex-shrink-0 flex items-center cursor-pointer" onClick={() => navigate('/')}>
            <span className="text-2xl font-bold text-brand-navy">{APP_NAME}</span>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden lg:flex lg:items-center lg:space-x-8">
            {NAVIGATION.map((item) => (
              <div key={item.label} className="relative group">
                {item.children ? (
                  <button className="flex items-center text-gray-700 hover:text-brand-blue font-medium px-3 py-2 text-base transition-colors">
                    {item.label}
                    <ChevronDown className="ml-1 h-4 w-4" />
                  </button>
                ) : (
                  <NavLink 
                    to={item.path || '#'} 
                    className={({ isActive }) => 
                      `text-base font-medium px-3 py-2 transition-colors ${isActive ? 'text-brand-blue font-bold' : 'text-gray-700 hover:text-brand-blue'}`
                    }
                  >
                    {item.label}
                  </NavLink>
                )}

                {/* Dropdown for Desktop */}
                {item.children && (
                  <div className="absolute left-0 mt-0 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 ease-in-out transform origin-top-left">
                    <div className="py-1" role="menu">
                      {item.children.map((child) => (
                        <NavLink
                          key={child.label}
                          to={child.path || '#'}
                          className={({ isActive }) => 
                            `block px-4 py-3 text-sm hover:bg-slate-50 ${isActive ? 'text-brand-blue font-bold bg-slate-50' : 'text-gray-700'}`
                          }
                          role="menuitem"
                        >
                          {child.label}
                        </NavLink>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="hidden lg:flex items-center">
             <Link 
              to={PagePath.CONSULTATION}
              className="bg-brand-navy hover:bg-blue-800 text-white px-5 py-2.5 rounded-md text-sm font-bold transition-colors shadow-sm"
             >
               상담신청
             </Link>
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center lg:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-brand-blue hover:bg-gray-100 focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100 h-screen overflow-y-auto pb-20">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {NAVIGATION.map((item) => (
              <div key={item.label} className="border-b border-gray-50 last:border-0">
                {item.children ? (
                  <>
                    <button
                      onClick={() => toggleSubMenu(item.label)}
                      className="w-full flex justify-between items-center px-3 py-4 text-base font-medium text-gray-900 hover:bg-gray-50"
                    >
                      {item.label}
                      <ChevronDown className={`h-5 w-5 transform transition-transform ${openSubMenu === item.label ? 'rotate-180' : ''}`} />
                    </button>
                    {openSubMenu === item.label && (
                      <div className="bg-slate-50 py-2">
                        {item.children.map((child) => (
                          <button
                            key={child.label}
                            onClick={() => handleNavClick(child.path)}
                            className="block w-full text-left px-6 py-3 text-sm font-medium text-gray-600 hover:text-brand-blue"
                          >
                            - {child.label}
                          </button>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <button
                    onClick={() => handleNavClick(item.path)}
                    className="block w-full text-left px-3 py-4 text-base font-medium text-gray-900 hover:bg-gray-50"
                  >
                    {item.label}
                  </button>
                )}
              </div>
            ))}
             <div className="mt-6 px-3">
                <button 
                  onClick={() => handleNavClick(PagePath.CONSULTATION)}
                  className="w-full bg-brand-navy text-white py-3 rounded-md font-bold text-center"
                >
                  온라인 상담 신청하기
                </button>
                <div className="mt-4 flex items-center justify-center text-gray-600 font-medium">
                  <Phone className="h-4 w-4 mr-2" />
                  전화문의: {CONTACT_PHONE}
                </div>
             </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;