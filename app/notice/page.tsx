import { MOCK_NOTICES } from '@/lib/constants';
import { ChevronRight, Calendar } from 'lucide-react';
import Link from 'next/link';

export default function NoticePage() {
  return (
    <div className="flex flex-col">
      <div className="bg-brand-navy text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">공지사항</h1>
          <p className="text-blue-100 text-lg max-w-2xl mx-auto">학원의 새로운 소식과 일정 안내를 확인하세요.</p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-white shadow-sm rounded-lg border border-slate-200 overflow-hidden">
            <ul className="divide-y divide-slate-100">
                {MOCK_NOTICES.map((notice) => (
                    <li key={notice.id} className="hover:bg-slate-50 transition-colors">
                        <Link href="#" className="block p-6">
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
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
      </div>
    </div>
  );
}