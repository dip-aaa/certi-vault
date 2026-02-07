'use client';

import { useState } from 'react';
import Navbar from '@/components/Navbar';
import UploadModal from '@/components/UploadModal';
import Dashboard from '@/components/Dashboard';
import VaultPage from '@/components/VaultPage';
import PortfolioPage from '@/components/PortfolioPage';

export default function Home() {
  const [isUploadModalOpen, setIsUploadModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-50 via-white to-primary-100">
      <Navbar onUploadClick={() => setIsUploadModalOpen(true)} />
      <main>
        <section id="dashboard">
          <Dashboard />
        </section>
        <section id="vault">
          <VaultPage />
        </section>
        <section id="portfolio">
          <PortfolioPage />
        </section>
      </main>
      <UploadModal 
        isOpen={isUploadModalOpen}
        onClose={() => setIsUploadModalOpen(false)}
      />
      <footer className="w-full text-center py-4 text-slate-500 text-sm font-bb">
        © 2026 CertiVault. All rights reserved.
      </footer>
    </div>
  );
}
