import React from 'react';
import Layout from '../components/Layout';
import { MOCK_REVIEWS } from '../constants';
import { Star } from 'lucide-react';

const Reviews: React.FC = () => {
  return (
    <Layout title="수강후기·성과" subtitle="바른컴퓨터학원과 함께 꿈을 이룬 수강생들의 이야기입니다.">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="bg-white p-8 rounded-lg shadow-sm text-center border border-slate-100">
                <div className="text-4xl font-bold text-brand-blue mb-2">98%</div>
                <div className="text-slate-600 font-medium">자격증 합격률</div>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-sm text-center border border-slate-100">
                <div className="text-4xl font-bold text-brand-blue mb-2">1,500+</div>
                <div className="text-slate-600 font-medium">누적 수강생</div>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-sm text-center border border-slate-100">
                <div className="text-4xl font-bold text-brand-blue mb-2">4.9/5.0</div>
                <div className="text-slate-600 font-medium">수강 만족도</div>
            </div>
        </div>

        {/* Review List */}
        <h3 className="text-2xl font-bold text-slate-900 mb-8">생생한 수강후기</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {MOCK_REVIEWS.map((review) => (
                <div key={review.id} className="bg-white p-6 rounded-lg shadow-sm border border-slate-200">
                    <div className="flex items-center justify-between mb-4">
                        <span className="text-xs font-bold text-brand-blue bg-blue-50 px-2 py-1 rounded">{review.course}</span>
                        <span className="text-xs text-slate-400">{review.date}</span>
                    </div>
                    <div className="flex mb-3">
                        {[...Array(5)].map((_, i) => (
                             <Star key={i} className={`h-4 w-4 ${i < review.rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} />
                        ))}
                    </div>
                    <p className="text-slate-700 text-sm mb-4 line-clamp-3 leading-relaxed">
                        "{review.content}"
                    </p>
                    <div className="border-t border-slate-100 pt-4 text-sm font-bold text-slate-900">
                        {review.name}
                    </div>
                </div>
            ))}
        </div>
      </div>
    </Layout>
  );
};

export default Reviews;