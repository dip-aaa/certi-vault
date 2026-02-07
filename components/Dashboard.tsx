'use client';

import { motion } from 'framer-motion';
import CertificateCard from './CertificateCard';

const stats = [
  { label: 'Total Certificates', value: '24', icon: 'certificate' },
  { label: 'Courses', value: '12', icon: 'course' },
  { label: 'Internships', value: '3', icon: 'internship' },
  { label: 'Achievements', value: '9', icon: 'achievement' },
];

const recentCertificates = [
  {
    id: '1',
    title: 'Advanced Machine Learning',
    issuer: 'Stanford University',
    date: 'Jan 2026',
    category: 'Course',
  },
  {
    id: '2',
    title: 'Full Stack Development',
    issuer: 'Meta',
    date: 'Dec 2025',
    category: 'Course',
  },
  {
    id: '3',
    title: 'Summer Research Internship',
    issuer: 'MIT CSAIL',
    date: 'Nov 2025',
    category: 'Internship',
  },
  {
    id: '4',
    title: 'Cloud Architecture Specialization',
    issuer: 'AWS',
    date: 'Oct 2025',
    category: 'Course',
  },
  {
    id: '5',
    title: 'Data Science Bootcamp',
    issuer: 'Google',
    date: 'Sep 2025',
    category: 'Course',
  },
  {
    id: '6',
    title: 'Hackathon Winner - Best AI Project',
    issuer: 'TechCrunch Disrupt',
    date: 'Aug 2025',
    category: 'Achievement',
  },
];

const StatIcon = ({ type }: { type: string }) => {
  const icons: Record<string, JSX.Element> = {
    certificate: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 7h16M4 12h16M4 17h10"/>
        <circle cx="18" cy="17" r="3"/>
      </svg>
    ),
    course: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/>
        <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/>
      </svg>
    ),
    internship: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="7" width="20" height="14" rx="2" ry="2"/>
        <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/>
      </svg>
    ),
    achievement: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="8" r="6"/>
        <path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11"/>
      </svg>
    ),
  };
  return icons[type] || null;
};

import { useState, useEffect } from 'react';

export default function Dashboard() {
  const [name, setName] = useState('');
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const stored = localStorage.getItem('profile');
      if (stored) {
        try {
          const parsed = JSON.parse(stored);
          setName(parsed.name || 'Student');
        } catch {
          setName('Student');
        }
      } else {
        setName('Student');
      }
    }
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 12 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
      {/* Welcome Section */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className="mb-12"
      >
        <h1 className="text-3xl sm:text-4xl font-serif text-slate-900 mb-2">
          Welcome back, <span className="text-primary-600 font-bold">{name}</span>
        </h1>
        <p className="text-slate-600 text-lg">
          Your achievements speak louder than words
        </p>
      </motion.div>

      {/* Academic Progress Section */}
      <div className="bg-white rounded-3xl shadow p-8 mb-12 relative overflow-x-auto">
        <h2 className="text-xl sm:text-2xl font-bb font-semibold text-slate-900 mb-1">Academic Progress</h2>
        <p className="text-slate-500 mb-1">Your staircase to excellence.</p>
        <div 
          className="relative flex flex-col items-center justify-center" 
          style={{ 
            minHeight: '260px', 
            backgroundImage: `repeating-linear-gradient(to right, rgba(179,157,219,0.25) 0, rgba(179,157,219,0.25) 1px, transparent 1px, transparent 40px), repeating-linear-gradient(to bottom, rgba(179,157,219,0.25) 0, rgba(179,157,219,0.25) 1px, transparent 1px, transparent 40px)`,
            backgroundSize: '40px 40px',
            backgroundPosition: 'center',
          }}
        >
          <div className="flex w-full justify-between items-center relative z-10 mt-2" style={{ marginTop: '32px' }}>
            <div className="flex flex-col items-center" style={{ width: '100px' }}>
              <div className="bg-white rounded-full shadow p-3 mb-2">
                <svg width="32" height="32" fill="none" className="text-primary-400"><path d="M16 4l6 6-6 6-6-6 6-6zm0 16v8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </div>
              <div className="text-2xl font-bb font-bold text-slate-900">12</div>
              <div className="text-xs text-slate-500 font-bb mt-1">COURSES</div>
            </div>
            <div className="flex flex-col items-center" style={{ width: '100px' }}>
              <div className="bg-white rounded-full shadow p-3 mb-2">
                <svg width="32" height="32" fill="none" className="text-primary-400"><rect x="6" y="10" width="20" height="12" rx="3" stroke="currentColor" strokeWidth="2"/><path d="M10 10V8a6 6 0 0 1 12 0v2" stroke="currentColor" strokeWidth="2"/></svg>
              </div>
              <div className="text-2xl font-bb font-bold text-slate-900">03</div>
              <div className="text-xs text-slate-500 font-bb mt-1">INTERNSHIPS</div>
            </div>
            <div className="flex flex-col items-center" style={{ width: '100px' }}>
              <div className="bg-white rounded-full shadow p-3 mb-2">
                <svg width="32" height="32" fill="none" className="text-primary-400"><path d="M16 6a6 6 0 1 1 0 12a6 6 0 0 1 0-12zm0 12v8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </div>
              <div className="text-2xl font-bb font-bold text-slate-900">05</div>
              <div className="text-xs text-slate-500 font-bb mt-1">ACHIEVEMENTS</div>
            </div>
            <div className="flex flex-col items-center" style={{ width: '120px' }}>
              <div className="bg-primary-400 rounded-full shadow p-4 mb-2 flex items-center justify-center">
                <svg width="36" height="36" fill="none" className="text-white"><circle cx="18" cy="18" r="16" stroke="currentColor" strokeWidth="2"/><path d="M18 10l4 8h-8l4-8zm0 12v-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/></svg>
              </div>
              <div className="text-4xl font-bb font-extrabold text-primary-700">24</div>
              <div className="text-xs text-primary-700 font-bb tracking-widest mt-1">TOTAL CERTIFICATES</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
