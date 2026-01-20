'use client';

import { motion } from 'framer-motion';
import { AlertCircle, TrendingDown, FileX, Clock } from 'lucide-react';

const problems = [
  {
    icon: FileX,
    title: 'أوراق وملفات Excel متناثرة',
    description: 'صعوبة تتبع المعدات والعقود عبر ملفات متعددة وغير متزامنة'
  },
  {
    icon: TrendingDown,
    title: 'خسائر غير محسوبة',
    description: 'عدم معرفة الأرباح والخسائر الحقيقية لكل مشروع أو معدة'
  },
  {
    icon: Clock,
    title: 'إهدار الوقت في الحسابات',
    description: 'ساعات طويلة في جمع البيانات وإعداد التقارير يدوياً'
  },
  {
    icon: AlertCircle,
    title: 'أخطاء بشرية متكررة',
    description: 'أخطاء في الفواتير والجرد تؤدي لخلافات مع العملاء'
  }
];

export function Problems() {
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
          <span className="text-amber-600 font-semibold text-sm uppercase tracking-wider">المشاكل اللي بنحلها</span>
          <h2 className="text-4xl font-bold text-slate-900 mt-3 mb-4">
            هل بتواجه التحديات دي؟
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            معظم شركات التأجير بتعاني من نفس المشاكل اللي بتعطل النمو
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
            <span className="text-lg font-semibold">Express بيحل كل المشاكل دي في نظام واحد</span>
            <span className="text-2xl">✨</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
