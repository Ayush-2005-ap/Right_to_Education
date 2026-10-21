import React from 'react';
import { Outlet } from 'react-router-dom';
import { Header } from './Header';
import { KeyProvisionsToolbar } from './KeyProvisionsToolbar';
import { Breadcrumbs } from './Breadcrumbs';
import { Footer } from './Footer';

interface RootLayoutProps {
  children?: React.ReactNode;
}

export const RootLayout: React.FC<RootLayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col bg-background text-on-surface">
      <Header />
      <KeyProvisionsToolbar />
      <Breadcrumbs />
      <main id="main-content" className="flex-1 w-full">
        {children || <Outlet />}
      </main>
      <Footer />
    </div>
  );
};
