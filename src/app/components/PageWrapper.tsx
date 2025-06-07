'use client';

import { AnimatePresence } from 'framer-motion';
import PageTransition from './PageTransition';

export default function PageWrapper({ children }: { children: React.ReactNode }) {
  return (
    <AnimatePresence mode="wait">
      <PageTransition>
        {children}
      </PageTransition>
    </AnimatePresence>
  );
} 