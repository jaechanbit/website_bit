'use client';

import React from 'react';
import { DataProvider } from '@/contexts/DataContext';

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <DataProvider>
      {children}
    </DataProvider>
  );
}