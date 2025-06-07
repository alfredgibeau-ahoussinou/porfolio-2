'use client';

import Navigation from './Navigation';
import PageWrapper from './PageWrapper';
import ThemeToggle from './ThemeToggle';
import ScrollToTop from './ScrollToTop';

export default function LayoutContent({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navigation />
      <PageWrapper>
        {children}
      </PageWrapper>
      <ThemeToggle />
      <ScrollToTop />
    </>
  );
} 