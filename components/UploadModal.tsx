'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface UploadModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function UploadModal({ isOpen, onClose }: UploadModalProps) {
  const [isDragging, setIsDragging] = useState(false);
  const [uploadedFile, setUploadedFile] = useState<string | null>(null);
  const [category, setCategory] = useState('Course');
  const [isUploading, setIsUploading] = useState(false);
  const [uploadSuccess, setUploadSuccess] = useState(false);

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    const files = e.dataTransfer.files;
    if (files.length > 0) {
      setUploadedFile(files[0].name);
    }
  };

  const handleFileInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files.length > 0) {
      setUploadedFile(files[0].name);
    }
  };

  const handleSave = () => {
    setIsUploading(true);
    
    // Simulate upload
    setTimeout(() => {
      setIsUploading(false);
      setUploadSuccess(true);
      
      // Reset after success animation
      setTimeout(() => {
        setUploadSuccess(false);
        setUploadedFile(null);
        setCategory('Course');
        onClose();
      }, 1500);
    }, 1500);
  };

  const modalVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { opacity: 1, scale: 1 },
    exit: { opacity: 0, scale: 0.95 },
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-slate-900/50 backdrop-blur-sm z-50"
          />

          {/* Modal */}
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div
              variants={modalVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              className="bg-white rounded-3xl shadow-2xl w-full max-w-lg overflow-hidden"
            >
              {/* Header */}
              <div className="px-8 pt-8 pb-6 border-b border-slate-200">
                <div className="flex items-center justify-between">
                  <h2 className="text-2xl font-serif text-slate-900">
                    Upload Certificate
                  </h2>
                  <button
                    onClick={onClose}
                    className="text-slate-400 hover:text-slate-600 transition-colors"
                  >
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                      <path d="M18 6L6 18M6 6l12 12"/>
                    </svg>
                  </button>
                </div>
              </div>

              {/* Content */}
              <div className="px-8 py-8">
                {uploadSuccess ? (
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="text-center py-12"
                  >
                    <div className="w-16 h-16 bg-green-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                        <path d="M9 16L14 21L23 11" stroke="#22C55E" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                    <h3 className="text-xl font-medium text-slate-900 mb-2">Upload Successful!</h3>
                    <p className="text-slate-600">Your certificate has been added to the vault</p>
                  </motion.div>
                ) : (
                  <>
                    {/* Upload Area */}
                    <div
                      onDragOver={handleDragOver}
                      onDragLeave={handleDragLeave}
                      onDrop={handleDrop}
                      className={`relative border-2 border-dashed rounded-2xl p-12 text-center transition-all ${
                        isDragging
                          ? 'border-blue-500 bg-blue-50'
                          : 'border-slate-300 bg-slate-50 hover:border-slate-400'
                      }`}
                    >
                      <input
                        type="file"
                        id="file-upload"
                        className="hidden"
                        accept=".pdf,.jpg,.jpeg,.png"
                        onChange={handleFileInput}
                      />

                      {uploadedFile ? (
                        <div className="space-y-3">
                          <div className="w-12 h-12 bg-blue-100 rounded-xl mx-auto flex items-center justify-center">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-blue-600">
                              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" stroke="currentColor" strokeWidth="2"/>
                              <path d="M14 2v6h6M12 18v-6M9 15l3-3 3 3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                          </div>
                          <p className="text-sm font-medium text-slate-900">{uploadedFile}</p>
                          <button
                            onClick={() => setUploadedFile(null)}
                            className="text-sm text-slate-600 hover:text-slate-900 transition-colors"
                          >
                            Remove file
                          </button>
                        </div>
                      ) : (
                        <>
                          <div className="mb-4">
                            <svg
                              width="48"
                              height="48"
                              viewBox="0 0 48 48"
                              fill="none"
                              className="mx-auto text-slate-400"
                            >
                              <path
                                d="M24 12v24M12 24h24"
                                stroke="currentColor"
                                strokeWidth="3"
                                strokeLinecap="round"
                              />
                              <circle cx="24" cy="24" r="20" stroke="currentColor" strokeWidth="2"/>
                            </svg>
                          </div>
                          <p className="text-slate-900 font-medium mb-2">
                            Drag & drop your certificate here
                          </p>
                          <p className="text-sm text-slate-600 mb-4">
                            or
                          </p>
                          <label
                            htmlFor="file-upload"
                            className="inline-block px-5 py-2.5 bg-white border border-slate-300 text-slate-700 text-sm font-medium rounded-xl hover:border-slate-400 hover:bg-slate-50 transition-colors cursor-pointer"
                          >
                            Browse Files
                          </label>
                          <p className="text-xs text-slate-500 mt-4">
                            Supports PDF, JPG, PNG (Max 10MB)
                          </p>
                        </>
                      )}
                    </div>

                    {/* Category Selection */}
                    <div className="mt-6">
                      <label className="block text-sm font-medium text-slate-900 mb-3">
                        Category
                      </label>
                      <select
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}
                        className="w-full px-4 py-3 bg-white border border-slate-300 rounded-xl text-slate-900 focus:outline-none focus:border-blue-300 focus:ring-4 focus:ring-blue-50 transition-all"
                      >
                        <option value="Course">Course</option>
                        <option value="Internship">Internship</option>
                        <option value="Achievement">Achievement</option>
                        <option value="Workshop">Workshop</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>
                  </>
                )}
              </div>

              {/* Footer */}
              {!uploadSuccess && (
                <div className="px-8 pb-8 flex gap-3">
                  <button
                    onClick={onClose}
                    className="flex-1 px-5 py-3 bg-slate-100 text-slate-700 rounded-xl font-medium hover:bg-slate-200 transition-colors"
                  >
                    Cancel
                  </button>
                  <motion.button
                    whileHover={{ scale: uploadedFile && !isUploading ? 1.02 : 1 }}
                    whileTap={{ scale: uploadedFile && !isUploading ? 0.98 : 1 }}
                    onClick={handleSave}
                    disabled={!uploadedFile || isUploading}
                    className="flex-1 px-5 py-3 bg-primary-400 text-white rounded-xl font-semibold hover:bg-primary-500 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 shadow"
                  >
                    {isUploading ? (
                      <>
                        <motion.div
                          animate={{ rotate: 360 }}
                          transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                          className="w-4 h-4 border-2 border-white border-t-transparent rounded-full"
                        />
                        Uploading...
                      </>
                    ) : (
                      'Save Certificate'
                    )}
                  </motion.button>
                </div>
              )}
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}
