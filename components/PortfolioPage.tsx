'use client';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

const selectedCertificates = [
  {
    id: '1',
    title: 'Advanced Machine Learning Specialization',
    issuer: 'Stanford University',
    date: 'January 2026',
    description: 'Completed comprehensive ML specialization covering deep learning, neural networks, and practical applications.',
  },
  {
    id: '2',
    title: 'Full Stack Development Professional Certificate',
    issuer: 'Meta',
    date: 'December 2025',
    description: 'Mastered modern web development with React, Node.js, and database design.',
  },
  {
    id: '3',
    title: 'Summer Research Internship',
    issuer: 'MIT Computer Science & Artificial Intelligence Lab',
    date: 'November 2025',
    description: 'Conducted research on natural language processing and published findings in academic conference.',
  },
  {
    id: '4',
    title: 'Cloud Architecture Professional',
    issuer: 'Amazon Web Services',
    date: 'October 2025',
    description: 'Designed and deployed scalable cloud infrastructure solutions.',
  },
  {
    id: '5',
    title: 'Data Science Bootcamp Graduate',
    issuer: 'Google',
    date: 'September 2025',
    description: 'Intensive program covering statistical analysis, machine learning, and data visualization.',
  },
  {
    id: '6',
    title: 'Best AI Project Award',
    issuer: 'TechCrunch Disrupt Hackathon',
    date: 'August 2025',
    description: 'Won first place for developing an AI-powered accessibility tool for visually impaired users.',
  },
];


export default function PortfolioPage() {
  const skillOptions = [
    'Machine Learning',
    'React',
    'Node.js',
    'Python',
    'Cloud Architecture',
    'Data Science',
    'UI/UX Design',
    'Product Management',
    'TypeScript',
    'Java',
    'C++',
    'Other',
  ];
  const [skills, setSkills] = useState([
    'Machine Learning',
    'React',
    'Node.js',
    'Python',
    'Cloud Architecture',
    'Data Science',
    'UI/UX Design',
    'Product Management',
  ]);
  const [editSkills, setEditSkills] = useState(false);
  const [newSkill, setNewSkill] = useState('');
  const [newSkillType, setNewSkillType] = useState('');
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };
  const itemVariants = {
    hidden: { opacity: 0, y: 12 },
    show: { opacity: 1, y: 0 },
  };

  // Editable profile state
  const [editMode, setEditMode] = useState(false);
  const defaultProfile = {
    name: 'Student Name',
    tagline: 'Computer Science Student · Machine Learning Enthusiast · Full Stack Developer',
    email: 'student@university.edu',
    location: 'San Francisco, CA',
    about: 'Passionate computer science student with a focus on artificial intelligence and full-stack development. Experienced in building scalable applications and conducting research in natural language processing. Committed to leveraging technology to create meaningful solutions that make a positive impact.'
  };
  const [profile, setProfile] = useState(defaultProfile);
  const [draft, setDraft] = useState(profile);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const stored = localStorage.getItem('profile');
      if (stored) {
        try {
          const parsed = JSON.parse(stored);
          setProfile(parsed);
          setDraft(parsed);
        } catch {}
      }
    }
  }, []);

  const handleEdit = () => {
    setDraft(profile);
    setEditMode(true);
  };
  const handleCancel = () => {
    setEditMode(false);
  };
  const handleSave = () => {
    setProfile(draft);
    setEditMode(false);
  };

  const handleAddSkill = () => {
    const skillToAdd = newSkillType === 'Other' ? newSkill.trim() : newSkillType;
    if (skillToAdd && !skills.includes(skillToAdd)) {
      setSkills([...skills, skillToAdd]);
      setNewSkill('');
      setNewSkillType('');
    }
  };

  return (
    <div className="min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 pb-12 border-b border-slate-200"
        >
          <div className="w-20 h-20 rounded-full bg-gradient-to-br from-primary-400 to-primary-600 mx-auto mb-6 flex items-center justify-center text-white text-2xl font-serif">
            {profile.name.charAt(0)}
          </div>
          {editMode ? (
            <>
              <input
                className="text-4xl sm:text-5xl font-serif text-slate-900 mb-4 w-full text-center bg-transparent outline-none border-b border-primary-200 focus:border-primary-400 transition"
                value={draft.name}
                onChange={e => setDraft(d => ({ ...d, name: e.target.value }))}
              />
              <textarea
                className="text-lg text-slate-600 max-w-2xl mx-auto w-full text-center bg-transparent outline-none border-b border-primary-100 focus:border-primary-300 transition resize-none mt-2"
                value={draft.tagline}
                onChange={e => setDraft(d => ({ ...d, tagline: e.target.value }))}
                rows={2}
              />
              <div className="mt-8 flex items-center justify-center gap-4 text-sm text-slate-500">
                <input
                  className="bg-transparent outline-none border-b border-primary-100 focus:border-primary-300 transition px-2 w-56 text-center"
                  value={draft.email}
                  onChange={e => setDraft(d => ({ ...d, email: e.target.value }))}
                />
                <span>·</span>
                <input
                  className="bg-transparent outline-none border-b border-primary-100 focus:border-primary-300 transition px-2 w-40 text-center"
                  value={draft.location}
                  onChange={e => setDraft(d => ({ ...d, location: e.target.value }))}
                />
              </div>
              <div className="mt-6 flex justify-center gap-3">
                <button onClick={handleSave} className="px-5 py-2 bg-primary-400 text-white rounded-xl font-semibold hover:bg-primary-500 transition-colors">Save</button>
                <button onClick={handleCancel} className="px-5 py-2 bg-slate-100 text-slate-700 rounded-xl font-medium hover:bg-slate-200 transition-colors">Cancel</button>
              </div>
            </>
          ) : (
            <>
              <h1 className="text-4xl sm:text-5xl font-serif text-slate-900 mb-4">
                {profile.name}
              </h1>
              <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                {profile.tagline}
              </p>
              <div className="mt-8 flex items-center justify-center gap-4 text-sm text-slate-500">
                <span>{profile.email}</span>
                <span>·</span>
                <span>{profile.location}</span>
              </div>
              <div className="mt-6 flex justify-center">
                <button onClick={handleEdit} className="px-5 py-2 bg-primary-400 text-white rounded-xl font-semibold hover:bg-primary-500 transition-colors">Edit Profile</button>
              </div>
            </>
          )}
        </motion.div>
        {/* About Section */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-16"
        >
          <h2 className="text-2xl font-serif text-slate-900 mb-4">About</h2>
          {editMode ? (
            <textarea
              className="text-slate-700 leading-relaxed w-full bg-transparent outline-none border-b border-primary-100 focus:border-primary-300 transition resize-none"
              value={draft.about}
              onChange={e => setDraft(d => ({ ...d, about: e.target.value }))}
              rows={4}
            />
          ) : (
            <p className="text-slate-700 leading-relaxed">
              {profile.about}
            </p>
          )}
        </motion.div>

        {/* Certificates Section */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="show"
        >
          <motion.h2 
            variants={itemVariants}
            className="text-2xl font-serif text-slate-900 mb-8"
          >
            Certificates & Achievements
          </motion.h2>
          
          <div className="space-y-8">
            {selectedCertificates.map((cert, index) => (
              <motion.div
                key={cert.id}
                variants={itemVariants}
                className="group"
              >
                <div className="flex gap-6">
                  {/* Timeline Dot */}
                  <div className="flex flex-col items-center">
                    <div className="w-3 h-3 rounded-full bg-primary-400 mt-1.5"></div>
                    {index < selectedCertificates.length - 1 && (
                      <div className="w-px flex-1 bg-primary-100 mt-2"></div>
                    )}
                  </div>

                  {/* Content */}
                  <div className="flex-1 pb-8">
                    <div className="bg-primary-50 rounded-2xl p-6 group-hover:bg-primary-100 transition-colors">
                      <div className="flex items-start justify-between gap-4 mb-3">
                        <h3 className="font-medium text-slate-900 text-lg">
                          {cert.title}
                        </h3>
                        <span className="text-sm text-slate-500 whitespace-nowrap">
                          {cert.date}
                        </span>
                      </div>
                      
                      <div className="text-primary-600 font-medium mb-3">
                        {cert.issuer}
                      </div>
                      
                      <p className="text-slate-600 leading-relaxed">
                        {cert.description}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Skills Section */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 pt-16 border-t border-slate-200"
        >
          <h2 className="text-2xl font-serif text-slate-900 mb-6">Skills</h2>
          {editSkills ? (
            <>
              <div className="flex flex-wrap gap-2 mb-4">
                {skills.map((skill, idx) => (
                  <span key={skill + idx} className="px-4 py-2 bg-slate-100 text-slate-700 rounded-xl text-sm font-medium flex items-center gap-2">
                    {skill}
                    <button
                      className="ml-1 text-xs text-red-400 hover:text-red-600"
                      onClick={() => setSkills(skills.filter((s, i) => i !== idx))}
                      title="Remove skill"
                    >
                      ×
                    </button>
                  </span>
                ))}
              </div>
              <div className="flex flex-col sm:flex-row gap-2 items-center mb-4">
                <select
                  className="px-4 py-2 rounded-xl border border-primary-200 bg-white text-slate-700 text-sm font-medium focus:outline-none focus:border-primary-400"
                  value={newSkillType}
                  onChange={e => setNewSkillType(e.target.value)}
                >
                  <option value="">Select a skill...</option>
                  {skillOptions.map(opt => (
                    <option key={opt} value={opt}>{opt}</option>
                  ))}
                </select>
                {newSkillType === 'Other' && (
                  <input
                    className="px-4 py-2 rounded-xl border border-primary-200 bg-white text-slate-700 text-sm font-medium focus:outline-none focus:border-primary-400"
                    placeholder="Enter custom skill"
                    value={newSkill}
                    onChange={e => setNewSkill(e.target.value)}
                  />
                )}
                <button
                  className="px-4 py-2 bg-primary-400 text-white rounded-xl font-semibold hover:bg-primary-500 transition-colors"
                  onClick={handleAddSkill}
                  disabled={
                    (!newSkillType || (newSkillType === 'Other' && !newSkill.trim())) ||
                    (newSkillType !== 'Other' && skills.includes(newSkillType))
                  }
                >
                  Add Skill
                </button>
              </div>
              <div className="flex gap-3">
                <button
                  className="px-5 py-2 bg-primary-400 text-white rounded-xl font-semibold hover:bg-primary-500 transition-colors"
                  onClick={() => setEditSkills(false)}
                >
                  Done
                </button>
                <span className="text-xs text-slate-500 ml-2">Tip: Use the dropdown to add common skills, or select 'Other' to add your own.</span>
              </div>
            </>
          ) : (
            <>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill, idx) => (
                  <span key={skill + idx} className="px-4 py-2 bg-slate-100 text-slate-700 rounded-xl text-sm font-medium">
                    {skill}
                  </span>
                ))}
              </div>
              <div className="mt-4 flex justify-start">
                <button
                  className="px-5 py-2 bg-primary-400 text-white rounded-xl font-semibold hover:bg-primary-500 transition-colors"
                  onClick={() => setEditSkills(true)}
                >
                  Edit Skills
                </button>
              </div>
            </>
          )}
        </motion.div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 pt-8 border-t border-slate-200 text-center text-sm text-slate-500"
        >
          <p>Portfolio generated by CertiVault · Last updated February 2026</p>
        </motion.div>
      </div>
    </div>
  );
}
