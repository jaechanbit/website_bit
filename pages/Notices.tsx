import React from 'react';
import Layout from '../components/Layout';
import { useData } from '../contexts/DataContext';
import { ChevronRight } from 'lucide-react';

const Notices: React.FC = () => {
  const { notices } = useData();

  return (
    <Layout title="공지사항" subtitle="학원의 새로운 소식과 일정 안내를 확인하세요.">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        <div className="bg-white shadow-sm rounded-lg border border-slate-200 overflow-hidden">
            <ul className="divide-y divide-slate-100">
                {notices.map((notice) => (
                    <li key={notice.id} className="hover:bg-slate-50 transition-colors">
                        <a href="#" onClick={(e) => e.preventDefault()} className="block p-6">
                            <div className="flex items-center justify-between">
                                <div className="flex flex-col md:flex-row md:items-center">
                                    <span className="inline-block px-3 py-1 text-xs font-bold text-brand-blue bg-blue-50 rounded-full mb-2 md:mb-0 md:mr-4 w-fit">
                                        {notice.category}
                                    </span>
                                    <span className="text-slate-900 font-medium hover:text-brand-blue transition-colors">
                                        {notice.title}
                                    </span>
                                </div>
                                <div className="flex items-center text-slate-400 text-sm flex-shrink-0 ml-4">
                                    <span className="mr-4 hidden sm:block">{notice.date}</span>
                                    <ChevronRight className="h-5 w-5" />
                                </div>
                            </div>
                        </a>
                    </li>
                ))}
            </ul>
        </div>

        {/* Pagination Mock */}
        <div className="flex justify-center mt-8 space-x-2">
            <button className="px-4 py-2 border border-slate-200 rounded-md text-slate-600 hover:bg-slate-50 disabled:opacity-50" disabled>&lt;</button>
            <button className="px-4 py-2 bg-brand-navy text-white rounded-md font-bold">1</button>
            <button className="px-4 py-2 border border-slate-200 rounded-md text-slate-600 hover:bg-slate-50">2</button>
            <button className="px-4 py-2 border border-slate-200 rounded-md text-slate-600 hover:bg-slate-50">&gt;</button>
        </div>

      </div>
    </Layout>
  );
};

export default Notices;