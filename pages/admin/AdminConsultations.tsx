import React from 'react';
import { useData } from '../../contexts/DataContext';
import { CheckCircle, Clock, Trash2 } from 'lucide-react';

const AdminConsultations: React.FC = () => {
  const { consultations, toggleConsultationStatus, deleteConsultation } = useData();

  const sortedConsultations = [...consultations].sort((a, b) => 
    new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  const handleDelete = (id: string) => {
    if (window.confirm('이 상담 내역을 정말 삭제하시겠습니까?')) {
        deleteConsultation(id);
    }
  };

  return (
    <div>
      <h2 className="text-2xl font-bold text-slate-800 mb-6">상담 신청 내역</h2>
      
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
        {consultations.length === 0 ? (
            <div className="p-8 text-center text-gray-500">
                아직 접수된 상담 내역이 없습니다.
            </div>
        ) : (
            <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
                <thead>
                <tr className="bg-gray-50 border-b border-gray-200 text-sm text-gray-600">
                    <th className="px-6 py-4 font-bold">상태</th>
                    <th className="px-6 py-4 font-bold">접수일시</th>
                    <th className="px-6 py-4 font-bold">이름</th>
                    <th className="px-6 py-4 font-bold">연락처</th>
                    <th className="px-6 py-4 font-bold">대상</th>
                    <th className="px-6 py-4 font-bold">희망과정</th>
                    <th className="px-6 py-4 font-bold">관리</th>
                </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                {sortedConsultations.map((item) => (
                    <tr key={item.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4">
                        <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                        item.status === 'COMPLETED' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
                        }`}>
                        {item.status === 'COMPLETED' ? '상담완료' : '접수대기'}
                        </span>
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-500">{item.date}</td>
                    <td className="px-6 py-4 font-medium text-gray-900">{item.name}</td>
                    <td className="px-6 py-4 text-sm text-gray-500">{item.phone}</td>
                    <td className="px-6 py-4 text-sm text-gray-500">{item.target}</td>
                    <td className="px-6 py-4 text-sm text-gray-500">{item.course}</td>
                    <td className="px-6 py-4 flex gap-2">
                        <button
                            onClick={() => toggleConsultationStatus(item.id)}
                            className={`text-xs px-3 py-1.5 rounded border transition-colors ${
                                item.status === 'PENDING' 
                                ? 'border-green-200 text-green-700 hover:bg-green-50' 
                                : 'border-gray-200 text-gray-500 hover:bg-gray-50'
                            }`}
                        >
                            {item.status === 'PENDING' ? '완료 처리' : '대기 처리'}
                        </button>
                        <button
                            onClick={() => handleDelete(item.id)}
                            className="text-gray-400 hover:text-red-500 p-1.5 hover:bg-red-50 rounded"
                            title="삭제"
                        >
                            <Trash2 size={16} />
                        </button>
                    </td>
                    </tr>
                ))}
                </tbody>
            </table>
            </div>
        )}
      </div>
    </div>
  );
};

export default AdminConsultations;