'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import CertificateCard from './CertificateCard';

const allCertificates = [
  {
    id: '1',
    title: 'Advanced Machine Learning',
    issuer: 'Stanford University',
    date: 'Jan 2026',
    category: 'Course',
    year: '2026',
    skill: 'AI/ML',
  },
  {
    id: '2',
    title: 'Full Stack Development',
    issuer: 'Meta',
    date: 'Dec 2025',
    category: 'Course',
    year: '2025',
    skill: 'Web Development',
  },
  {
    id: '3',
    title: 'Summer Research Internship',
    issuer: 'MIT CSAIL',
    date: 'Nov 2025',
    category: 'Internship',
    year: '2025',
    skill: 'Research',
  },
  {
    id: '4',
    title: 'Cloud Architecture Specialization',
    issuer: 'AWS',
    date: 'Oct 2025',
    category: 'Course',
    year: '2025',
    skill: 'Cloud Computing',
  },
  {
    id: '5',
    title: 'Data Science Bootcamp',
    issuer: 'Google',
    date: 'Sep 2025',
    category: 'Course',
    year: '2025',
    skill: 'Data Science',
  },
  {
    id: '6',
    title: 'Hackathon Winner - Best AI Project',
    issuer: 'TechCrunch Disrupt',
    date: 'Aug 2025',
    category: 'Achievement',
    year: '2025',
    skill: 'AI/ML',
  },
  {
    id: '7',
    title: 'UI/UX Design Professional',
    issuer: 'Adobe',
    date: 'Jul 2025',
    category: 'Course',
    year: '2025',
    skill: 'Design',
  },
  {
    id: '8',
    title: 'Product Management Intern',
    issuer: 'Stripe',
    date: 'Jun 2025',
    category: 'Internship',
    year: '2025',
    skill: 'Product',
  },
  {
    id: '9',
    title: 'Blockchain Fundamentals',
    issuer: 'ConsenSys',
    date: 'May 2025',
    category: 'Course',
    year: '2025',
    skill: 'Blockchain',
  },
];

const filterCategories = [
  { id: 'all', label: 'All' },
  { id: 'Course', label: 'Courses' },
  { id: 'Internship', label: 'Internships' },
  { id: 'Achievement', label: 'Achievements' },
];

const years = ['All Years', '2026', '2025', '2024'];

export default function VaultPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedYear, setSelectedYear] = useState('All Years');

  const filteredCertificates = allCertificates.filter((cert) => {
    const matchesSearch = cert.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      cert.issuer.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || cert.category === selectedCategory;
    const matchesYear = selectedYear === 'All Years' || cert.year === selectedYear;
    return matchesSearch && matchesCategory && matchesYear;
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.06,
      },
    },
  };
  const itemVariants = {
    hidden: { opacity: 0, y: 12 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      {/* Header */}
      <div className="mb-6 text-center">
        <h1 className="text-2xl sm:text-3xl text-slate-900 mb-2 font-bb">My Certificate Vault</h1>
      </div>

      {/* Search Bar */}
      <div className="mb-6 flex justify-center">
        <div className="relative w-full max-w-2xl">
          <svg
            className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
          >
            <circle cx="9" cy="9" r="6" stroke="currentColor" strokeWidth="1.5" />
            <path d="M14 14L17 17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
          <input
            type="text"
            placeholder="Search certificates by name, issuer, or skills (e.g., Python, AWS)..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-12 pr-4 py-3.5 bg-white border border-slate-200 rounded-2xl text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-blue-300 focus:ring-4 focus:ring-blue-50 font-bb text-lg transition-all"
          />
        </div>
      </div>

      {/* Filters */}
      <div className="mb-8 flex flex-wrap gap-3 justify-center">
        <button
          className={`px-5 py-2 rounded-full text-sm font-bb font-semibold border transition-all ${selectedCategory === 'all' ? 'bg-primary-400 text-white border-primary-400 shadow' : 'bg-white text-slate-600 border-slate-200 hover:border-primary-300'}`}
          onClick={() => setSelectedCategory('all')}
        >
          All Documents
        </button>
        {filterCategories.filter(c => c.id !== 'all').map((category) => (
          <button
            key={category.id}
            onClick={() => setSelectedCategory(category.id)}
            className={`px-5 py-2 rounded-full text-sm font-bb font-semibold border transition-all ${selectedCategory === category.id ? 'bg-primary-50 text-primary-700 border-primary-400' : 'bg-white text-slate-600 border-slate-200 hover:border-primary-300'}`}
          >
            {category.label}
          </button>
        ))}
        <select
          value={selectedYear}
          onChange={(e) => setSelectedYear(e.target.value)}
          className="px-4 py-2 bg-white border border-slate-200 rounded-full text-sm font-bb font-semibold text-slate-600 hover:border-primary-300 focus:outline-none focus:border-primary-300 focus:ring-4 focus:ring-primary-50 transition-all cursor-pointer"
        >
          {years.map((year) => (
            <option key={year} value={year}>
              {year}
            </option>
          ))}
        </select>
      </div>

      {/* Certificates Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredCertificates.map((cert, idx) => (
          <CertificateCard key={cert.id} {...cert} />
        ))}
        {/* Add New Document Card */}
        <div className="flex flex-col items-center justify-center border-2 border-dashed border-primary-200 rounded-2xl bg-white min-h-[220px] h-full py-8 cursor-pointer hover:border-primary-400 transition-all">
          <div className="mb-3">
            <svg width="40" height="40" viewBox="0 0 40 40" fill="none" className="text-primary-400">
              <circle cx="20" cy="20" r="18" stroke="currentColor" strokeWidth="2" />
              <path d="M20 14v12M14 20h12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </div>
          <span className="text-primary-400 font-bb font-medium">Add New Document</span>
        </div>
      </div>
    </div>
  );
}
