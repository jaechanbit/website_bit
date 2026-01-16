import React, { useState, useEffect } from 'react';
import { useData } from '../../contexts/DataContext';
import { Course } from '../../types';
import { Edit2, Save, X, Plus, Image as ImageIcon, Trash2 } from 'lucide-react';

const AdminCourses: React.FC = () => {
  const { nationalCourses, studentCourses, updateCourse, addCourse, deleteCourse } = useData();
  const [activeTab, setActiveTab] = useState<'NATIONAL' | 'STUDENT'>('NATIONAL');
  const [editingId, setEditingId] = useState<string | null>(null);
  const [editForm, setEditForm] = useState<Course | null>(null);

  // Adding state
  const [isAdding, setIsAdding] = useState(false);
  const [newCourseForm, setNewCourseForm] = useState({
    title: '',
    description: '',
    target: 'NATIONAL',
    tags: '',
    image: ''
  });

  // Sync new course target with active tab when tab changes
  useEffect(() => {
    setNewCourseForm(prev => ({ ...prev, target: activeTab }));
  }, [activeTab]);

  const currentCourses = activeTab === 'NATIONAL' ? nationalCourses : studentCourses;

  const handleEditClick = (course: Course) => {
    setEditingId(course.id);
    setEditForm({ ...course });
    setIsAdding(false); // Close add form if open
  };

  const handleCancelEdit = () => {
    setEditingId(null);
    setEditForm(null);
  };

  const handleSaveEdit = () => {
    if (editForm) {
      updateCourse(editForm);
      setEditingId(null);
      setEditForm(null);
      alert('과정 정보가 수정되었습니다.');
    }
  };

  const handleDeleteClick = (course: Course) => {
    if (window.confirm(`'${course.title}' 과정을 삭제하시겠습니까?`)) {
        deleteCourse(course.id, course.target);
    }
  };

  const handleAddSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newCourseForm.title) {
        alert('과정명을 입력해주세요.');
        return;
    }
    
    addCourse({
        title: newCourseForm.title,
        description: newCourseForm.description,
        target: newCourseForm.target as 'NATIONAL' | 'STUDENT',
        tags: newCourseForm.tags.split(',').map(t => t.trim()).filter(Boolean),
        image: newCourseForm.image || `https://picsum.photos/800/600?random=${Date.now()}`
    });
    
    setIsAdding(false);
    setNewCourseForm({
        title: '',
        description: '',
        target: activeTab,
        tags: '',
        image: ''
    });
    alert('새로운 과정이 등록되었습니다.');
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-slate-800">교육과정 관리</h2>
        {!isAdding && !editingId && (
            <button 
                onClick={() => setIsAdding(true)}
                className="flex items-center bg-brand-navy text-white px-4 py-2 rounded hover:bg-blue-900 font-bold transition-colors"
            >
                <Plus size={18} className="mr-2" /> 새 과정 등록
            </button>
        )}
      </div>
      
      {/* Add New Course Form */}
      {isAdding && (
        <div className="bg-blue-50 p-6 rounded-lg mb-8 border border-blue-100 shadow-sm">
             <div className="flex justify-between items-center mb-4">
                <h3 className="font-bold text-lg text-brand-navy">새 과정 등록</h3>
                <button onClick={() => setIsAdding(false)} className="text-gray-500 hover:text-gray-700">
                    <X size={20} />
                </button>
             </div>
             <form onSubmit={handleAddSubmit} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">과정 구분</label>
                        <select 
                            value={newCourseForm.target}
                            onChange={(e) => setNewCourseForm({...newCourseForm, target: e.target.value})}
                            className="w-full px-3 py-2 border border-gray-300 rounded focus:ring-brand-blue focus:border-brand-blue"
                        >
                            <option value="NATIONAL">국민내일배움카드 과정</option>
                            <option value="STUDENT">초·중·고 교육과정</option>
                        </select>
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">과정명</label>
                        <input
                            type="text"
                            value={newCourseForm.title}
                            onChange={(e) => setNewCourseForm({...newCourseForm, title: e.target.value})}
                            className="w-full px-3 py-2 border border-gray-300 rounded focus:ring-brand-blue focus:border-brand-blue"
                            placeholder="예: ITQ 마스터 과정"
                            required
                        />
                    </div>
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">설명</label>
                    <textarea
                        value={newCourseForm.description}
                        onChange={(e) => setNewCourseForm({...newCourseForm, description: e.target.value})}
                        className="w-full px-3 py-2 border border-gray-300 rounded focus:ring-brand-blue focus:border-brand-blue"
                        rows={3}
                        placeholder="과정에 대한 간단한 설명을 입력하세요."
                    />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">태그 (쉼표로 구분)</label>
                        <input
                            type="text"
                            value={newCourseForm.tags}
                            onChange={(e) => setNewCourseForm({...newCourseForm, tags: e.target.value})}
                            className="w-full px-3 py-2 border border-gray-300 rounded focus:ring-brand-blue focus:border-brand-blue"
                            placeholder="예: 자격증, 실무, 기초"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">이미지 URL (선택)</label>
                        <div className="flex">
                            <span className="inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500 text-sm">
                                <ImageIcon size={16} />
                            </span>
                            <input
                                type="text"
                                value={newCourseForm.image}
                                onChange={(e) => setNewCourseForm({...newCourseForm, image: e.target.value})}
                                className="flex-1 px-3 py-2 border border-gray-300 rounded-r-md focus:ring-brand-blue focus:border-brand-blue"
                                placeholder="이미지 URL을 입력하세요 (비워두면 랜덤 이미지)"
                            />
                        </div>
                    </div>
                </div>
                <div className="flex justify-end gap-2 pt-2">
                    <button 
                        type="button" 
                        onClick={() => setIsAdding(false)} 
                        className="px-4 py-2 border border-gray-300 rounded text-gray-700 hover:bg-gray-50"
                    >
                        취소
                    </button>
                    <button 
                        type="submit" 
                        className="px-6 py-2 bg-brand-navy text-white rounded font-bold hover:bg-blue-900"
                    >
                        등록하기
                    </button>
                </div>
             </form>
        </div>
      )}

      {/* Tabs */}
      <div className="flex border-b border-gray-200 mb-6">
        <button
          className={`py-2 px-6 font-medium ${activeTab === 'NATIONAL' ? 'text-brand-blue border-b-2 border-brand-blue' : 'text-gray-500 hover:text-gray-700'}`}
          onClick={() => setActiveTab('NATIONAL')}
        >
          국민내일배움카드 과정
        </button>
        <button
          className={`py-2 px-6 font-medium ${activeTab === 'STUDENT' ? 'text-brand-blue border-b-2 border-brand-blue' : 'text-gray-500 hover:text-gray-700'}`}
          onClick={() => setActiveTab('STUDENT')}
        >
          초·중·고 교육과정
        </button>
      </div>

      <div className="space-y-4">
        {currentCourses.length === 0 && (
            <div className="text-center py-10 text-gray-500">
                등록된 교육과정이 없습니다.
            </div>
        )}
        {currentCourses.map((course) => (
          <div key={course.id} className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
            {editingId === course.id && editForm ? (
              <div className="space-y-4">
                <div className="flex justify-between items-center mb-2">
                    <h4 className="font-bold text-gray-800">과정 수정</h4>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">과정명</label>
                  <input
                    type="text"
                    value={editForm.title}
                    onChange={(e) => setEditForm({ ...editForm, title: e.target.value })}
                    className="w-full px-3 py-2 border rounded"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">설명</label>
                  <textarea
                    value={editForm.description}
                    onChange={(e) => setEditForm({ ...editForm, description: e.target.value })}
                    className="w-full px-3 py-2 border rounded"
                    rows={3}
                  />
                </div>
                <div>
                   <label className="block text-sm font-medium text-gray-700 mb-1">태그 (쉼표로 구분)</label>
                   <input
                    type="text"
                    value={editForm.tags.join(', ')}
                    onChange={(e) => setEditForm({ ...editForm, tags: e.target.value.split(',').map(t => t.trim()) })}
                    className="w-full px-3 py-2 border rounded"
                   />
                </div>
                <div className="flex gap-2 justify-end">
                  <button onClick={handleCancelEdit} className="flex items-center px-4 py-2 border rounded text-gray-600 hover:bg-gray-50">
                    <X size={16} className="mr-2" /> 취소
                  </button>
                  <button onClick={handleSaveEdit} className="flex items-center px-4 py-2 bg-brand-navy text-white rounded hover:bg-blue-900">
                    <Save size={16} className="mr-2" /> 저장
                  </button>
                </div>
              </div>
            ) : (
              <div className="flex justify-between items-start">
                <div className="flex-1">
                  <div className="flex items-center mb-2">
                    <h3 className="text-lg font-bold text-slate-900 mr-3">{course.title}</h3>
                    <div className="flex gap-1 flex-wrap">
                        {course.tags.map((tag, idx) => <span key={idx} className="px-2 py-0.5 bg-gray-100 text-xs text-gray-600 rounded">#{tag}</span>)}
                    </div>
                  </div>
                  <p className="text-gray-600 mb-2">{course.description}</p>
                </div>
                <div className="flex items-center ml-4 flex-shrink-0 space-x-2">
                  <button
                    onClick={() => handleEditClick(course)}
                    className="flex items-center text-gray-500 hover:text-brand-blue transition-colors px-3 py-1 rounded hover:bg-blue-50 border border-transparent hover:border-blue-100"
                  >
                    <Edit2 size={16} className="mr-1" /> 수정
                  </button>
                  <button
                    onClick={() => handleDeleteClick(course)}
                    className="flex items-center text-gray-400 hover:text-red-600 transition-colors px-3 py-1 rounded hover:bg-red-50 border border-transparent hover:border-red-100"
                  >
                    <Trash2 size={16} className="mr-1" /> 삭제
                  </button>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminCourses;