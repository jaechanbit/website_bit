import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

interface LayoutProps {
  children: React.ReactNode;
  title?: string;
  subtitle?: string;
}

const Layout: React.FC<LayoutProps> = ({ children, title, subtitle }) => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col">
      {title && (
        <div className="bg-brand-navy text-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">{title}</h1>
            {subtitle && <p className="text-blue-100 text-lg max-w-2xl mx-auto">{subtitle}</p>}
          </div>
        </div>
      )}
      <main className="flex-grow">
        {children}
      </main>
    </div>
  );
};

export default Layout;