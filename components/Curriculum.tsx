import React, { useState } from 'react';
import { CURRICULUM_DATA } from '../constants';
import { BookOpen, Code, FileText, MonitorPlay, PenTool } from 'lucide-react';

const Curriculum: React.FC = () => {
  const [activeTab, setActiveTab] = useState(CURRICULUM_DATA[0].id);

  const getIcon = (tag: string) => {
    if (tag.includes('Coding')) return <Code className="w-5 h-5" />;
    if (tag.includes('Design')) return <PenTool className="w-5 h-5" />;
    if (tag.includes('Media')) return <MonitorPlay className="w-5 h-5" />;
    return <FileText className="w-5 h-5" />;
  };

  return (
    <section id="courses" className="py-20 bg-brand-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            교육과정 안내
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            기초부터 전문가 과정까지, 목표에 맞는 최적의 로드맵을 제공합니다.
          </p>
        </div>

        {/* Tabs */}
        <div className="flex justify-center mb-10">
          <div className="bg-white p-1 rounded-xl shadow-sm inline-flex">
            {CURRICULUM_DATA.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveTab(category.id)}
                className={`px-6 py-3 rounded-lg text-sm font-bold transition-all ${
                  activeTab === category.id
                    ? 'bg-brand-600 text-white shadow-md'
                    : 'text-gray-500 hover:text-brand-600'
                }`}
              >
                {category.title}
              </button>
            ))}
          </div>
        </div>

        {/* Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {CURRICULUM_DATA.find((c) => c.id === activeTab)?.items.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow p-6 border border-gray-100 flex flex-col h-full"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="p-2 bg-brand-100 rounded-lg text-brand-600">
                  {getIcon(item.tags[0] || '')}
                </div>
                <div className="flex gap-2">
                  {item.tags.slice(0, 2).map((tag, idx) => (
                    <span key={idx} className="text-xs px-2 py-1 bg-gray-100 text-gray-600 rounded-full">
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
              <p className="text-gray-600 text-sm flex-grow">{item.description}</p>
              <button className="mt-4 w-full py-2 bg-gray-50 text-brand-600 text-sm font-medium rounded-lg hover:bg-brand-50 transition-colors">
                상세보기
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Curriculum;