import React, { useState } from 'react';
import { useData } from '../../contexts/DataContext';
import { Trash2, Plus, Calendar } from 'lucide-react';

const AdminNotices: React.FC = () => {
  const { notices, addNotice, deleteNotice } = useData();
  const [isAdding, setIsAdding] = useState(false);
  const [newNotice, setNewNotice] = useState({ title: '', category: '공지' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newNotice.title) return;
    
    addNotice({
        title: newNotice.title,
        category: newNotice.category
    });
    setNewNotice({ title: '', category: '공지' });
    setIsAdding(false);
  };

  const handleDelete = (id: number) => {
    if (confirm('정말 삭제하시겠습니까?')) {
        deleteNotice(id);
    }
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-slate-800">공지사항 관리</h2>
        <button
          onClick={() => setIsAdding(!isAdding)}
          className="flex items-center bg-brand-blue text-white px-4 py-2 rounded hover:bg-blue-600 font-bold transition-colors"
        >
          <Plus size={18} className="mr-2" /> 새 공지 작성
        </button>
      </div>

      {isAdding && (
        <div className="bg-blue-50 p-6 rounded-lg mb-8 border border-blue-100">
            <h3 className="font-bold text-lg text-brand-navy mb-4">새 공지사항 등록</h3>
            <form onSubmit={handleSubmit} className="flex flex-col md:flex-row gap-4">
                <select
                    value={newNotice.category}
                    onChange={(e) => setNewNotice({...newNotice, category: e.target.value})}
                    className="p-2 border rounded md:w-32"
                >
                    <option value="공지">공지</option>
                    <option value="시험">시험</option>
                    <option value="소식">소식</option>
                </select>
                <input 
                    type="text" 
                    placeholder="공지사항 제목을 입력하세요"
                    className="flex-1 p-2 border rounded"
                    value={newNotice.title}
                    onChange={(e) => setNewNotice({...newNotice, title: e.target.value})}
                />
                <button type="submit" className="bg-brand-navy text-white px-6 py-2 rounded font-bold hover:bg-blue-900">
                    등록
                </button>
            </form>
        </div>
      )}

      <div className="bg-white rounded-lg shadow-sm border border-gray-200">
        <ul className="divide-y divide-gray-100">
          {notices.map((notice) => (
            <li key={notice.id} className="p-4 hover:bg-gray-50 flex items-center justify-between">
              <div className="flex items-center">
                <span className="inline-block w-16 text-center text-xs font-bold text-brand-blue bg-blue-50 px-2 py-1 rounded mr-4">
                    {notice.category}
                </span>
                <div>
                    <h4 className="font-medium text-gray-900">{notice.title}</h4>
                    <div className="flex items-center text-xs text-gray-400 mt-1">
                        <Calendar size={12} className="mr-1" />
                        {notice.date}
                    </div>
                </div>
              </div>
              <button
                onClick={() => handleDelete(notice.id)}
                className="text-gray-400 hover:text-red-500 p-2"
              >
                <Trash2 size={18} />
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default AdminNotices;