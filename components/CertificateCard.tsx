'use client';

import { motion } from 'framer-motion';

interface CertificateCardProps {
  title: string;
  issuer: string;
  date: string;
  category: string;
}

export default function CertificateCard({ title, issuer, date, category }: CertificateCardProps) {
  return (
    <motion.div
      whileHover={{ y: -6 }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      className="group bg-white rounded-2xl border border-primary-200 hover:border-primary-400 overflow-hidden transition-colors cursor-pointer shadow-sm"
    >
      {/* Document Preview */}
      <div className="aspect-[4/3] bg-gradient-to-br from-primary-50 to-primary-100 flex items-center justify-center border-b border-primary-100">
        <svg 
          width="64" 
          height="64" 
          viewBox="0 0 64 64" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
          className="text-slate-300 group-hover:text-slate-400 transition-colors"
        >
          <path 
            d="M16 8C16 6.89543 16.8954 6 18 6H38L48 16V56C48 57.1046 47.1046 58 46 58H18C16.8954 58 16 57.1046 16 56V8Z" 
            stroke="currentColor" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round"
          />
          <path 
            d="M38 6V14C38 15.1046 38.8954 16 40 16H48" 
            stroke="currentColor" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round"
          />
          <path 
            d="M24 28H40M24 36H40M24 44H34" 
            stroke="currentColor" 
            strokeWidth="2" 
            strokeLinecap="round"
          />
          <circle cx="50" cy="50" r="8" stroke="currentColor" strokeWidth="2"/>
          <path d="M54 46L50 50L46 46" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>

      {/* Content */}
      <div className="p-5">
        <div className="inline-block px-3 py-1 bg-primary-50 text-primary-700 text-xs font-bb font-semibold rounded-lg mb-3 uppercase tracking-wide">
          {category}
        </div>
        <h3 className="font-bb font-bold text-lg text-slate-900 mb-2 line-clamp-2 leading-snug">
          {title}
        </h3>
        <div className="flex items-center justify-between text-sm font-bb">
          <span className="text-slate-600 font-bb">{issuer}</span>
          <span className="text-slate-400 font-bb">{date}</span>
        </div>
        {/* Actions */}
        <div className="mt-4 pt-4 border-t border-primary-50 flex items-center gap-3 text-sm font-bb">
          <button className="text-primary-600 hover:text-primary-700 font-bb font-semibold transition-colors">
            View
          </button>
          <button className="text-slate-600 hover:text-slate-900 font-bb transition-colors">
            Download
          </button>
          <button className="text-slate-600 hover:text-slate-900 font-bb transition-colors">
            Share
          </button>
        </div>
      </div>
    </motion.div>
  );
}
