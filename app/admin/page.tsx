'use client';

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Lock } from 'lucide-react';
import { APP_NAME } from '@/lib/constants';

export default function AdminLoginPage() {
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const router = useRouter();

  useEffect(() => {
    // If already logged in, redirect to dashboard
    const auth = sessionStorage.getItem('isAdminAuth');
    if (auth === 'true') {
      router.replace('/admin/dashboard');
    }
  }, [router]);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === 'admin') {
      sessionStorage.setItem('isAdminAuth', 'true');
      router.push('/admin/dashboard');
    } else {
      setError('비밀번호가 올바르지 않습니다.');
    }
  };

  return (
    <div className="min-h-screen bg-slate-100 flex items-center justify-center p-4">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-100 rounded-full text-brand-navy mb-4">
            <Lock size={24} />
          </div>
          <h2 className="text-2xl font-bold text-slate-900">{APP_NAME}</h2>
          <p className="text-slate-500 text-sm mt-2">관리자 페이지 접속을 위해 로그인해주세요.</p>
        </div>

        <form onSubmit={handleLogin}>
          <div className="mb-6">
            <label className="block text-sm font-medium text-slate-700 mb-2">관리자 비밀번호</label>
            <input
              type="password"
              className="w-full px-4 py-2 border border-slate-300 rounded focus:ring-2 focus:ring-brand-blue focus:border-transparent outline-none"
              placeholder="비밀번호를 입력하세요"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            {error && <p className="text-red-500 text-xs mt-2">{error}</p>}
          </div>
          <button
            type="submit"
            className="w-full bg-brand-navy text-white font-bold py-3 rounded hover:bg-blue-900 transition-colors"
          >
            로그인
          </button>
        </form>
        <div className="mt-6 text-center text-xs text-slate-400">
          * 데모 비밀번호: admin
        </div>
      </div>
    </div>
  );
}