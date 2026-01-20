'use client';

import { motion } from 'framer-motion';
import { AlertCircle, TrendingDown, FileX, Clock } from 'lucide-react';

const problems = [
  {
    icon: FileX,
    title: 'Scattered Papers & Excel Files',
    description: 'Difficulty tracking equipment and contracts across multiple unsynced files'
  },
  {
    icon: TrendingDown,
    title: 'Uncalculated Losses',
    description: 'Not knowing the true profits and losses for each project or equipment'
  },
  {
    icon: Clock,
    title: 'Time Wasted on Calculations',
    description: 'Long hours collecting data and preparing reports manually'
  },
  {
    icon: AlertCircle,
    title: 'Recurring Human Errors',
    description: 'Mistakes in invoices and inventory leading to disputes with customers'
  }
];

export function ProblemsEn() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-amber-600 font-semibold text-sm uppercase tracking-wider">Problems We Solve</span>
          <h2 className="text-4xl font-bold text-slate-900 mt-3 mb-4">
            Are You Facing These Challenges?
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Most rental companies suffer from the same issues that hinder growth
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {problems.map((problem, index) => {
            const Icon = problem.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="bg-red-50 border-2 border-red-100 rounded-xl p-6 hover:shadow-lg transition-shadow"
              >
                <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-red-600" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">
                  {problem.title}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  {problem.description}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* Solution Teaser */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-12 text-center"
        >
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-blue-700 text-white px-6 py-3 rounded-full">
            <span className="text-lg font-semibold">Express solves all these problems in one system</span>
            <span className="text-2xl">✨</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
