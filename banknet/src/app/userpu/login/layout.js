'use client';

import { SessionProvider } from '@/contexts/SessionContext';

export default function LoginLayout({ children }) {
  return (
    <SessionProvider>
      {children}
    </SessionProvider>
  );
}
