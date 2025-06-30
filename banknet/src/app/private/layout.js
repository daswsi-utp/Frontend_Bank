'use client';

import { SessionProvider } from '@/contexts/SessionContext';

export default function PrivateLayout({ children }) {
  return (
    <SessionProvider>
      {children}
    </SessionProvider>
  );
}
