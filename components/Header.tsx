'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, ChevronDown, Phone } from 'lucide-react';
import { NAVIGATION, APP_NAME, CONTACT_PHONE } from '@/lib/constants';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [openSubMenu, setOpenSubMenu] = useState<string | null>(null);
  const pathname = usePathname();

  const toggleMenu = () => setIsOpen(!isOpen);
  const toggleSubMenu = (label: string) => {
    setOpenSubMenu(openSubMenu === label ? null : label);
  };

  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="text-2xl font-bold text-brand-navy">
              {APP_NAME}
            </Link>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden lg:flex lg:items-center lg:space-x-8">
            {NAVIGATION.map((item) => (
              <div key={item.label} className="relative group h-full flex items-center">
                {item.children ? (
                  <button className="flex items-center text-gray-700 hover:text-brand-blue font-medium px-3 py-2 text-base transition-colors h-full">
                    {item.label}
                    <ChevronDown className="ml-1 h-4 w-4" />
                  </button>
                ) : (
                  <Link 
                    href={item.path || '#'} 
                    className={`text-base font-medium px-3 py-2 transition-colors ${pathname === item.path ? 'text-brand-blue font-bold' : 'text-gray-700 hover:text-brand-blue'}`}
                  >
                    {item.label}
                  </Link>
                )}

                {/* Dropdown for Desktop */}
                {item.children && (
                  <div className="absolute left-0 top-full mt-0 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 ease-in-out">
                    <div className="py-1" role="menu">
                      {item.children.map((child) => (
                        <Link
                          key={child.label}
                          href={child.path || '#'}
                          className={`block px-4 py-3 text-sm hover:bg-slate-50 ${pathname === child.path ? 'text-brand-blue font-bold bg-slate-50' : 'text-gray-700'}`}
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
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
                          <Link
                            key={child.label}
                            href={child.path || '#'}
                            onClick={() => setIsOpen(false)}
                            className="block w-full text-left px-6 py-3 text-sm font-medium text-gray-600 hover:text-brand-blue"
                          >
                            - {child.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <Link
                    href={item.path || '#'}
                    onClick={() => setIsOpen(false)}
                    className="block w-full text-left px-3 py-4 text-base font-medium text-gray-900 hover:bg-gray-50"
                  >
                    {item.label}
                  </Link>
                )}
              </div>
            ))}
             <div className="mt-6 px-3">
                <Link 
                  href="/consult"
                  onClick={() => setIsOpen(false)}
                  className="block w-full bg-brand-navy text-white py-3 rounded-md font-bold text-center"
                >
                  온라인 상담 신청하기
                </Link>
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

export default Header;