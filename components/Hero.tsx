'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight, CheckCircle } from 'lucide-react';

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 pt-20 pb-32">
      {/* Decorative elements */}
      <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:40px_40px]" />
      <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-to-bl from-amber-500/20 to-transparent rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-white"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 bg-amber-500/20 border border-amber-500/30 rounded-full px-4 py-2 mb-6"
            >
              <span className="text-amber-400 text-sm font-medium">قريباً في السوق</span>
            </motion.div>

            <h1 className="text-5xl lg:text-6xl font-bold mb-4 leading-tight">
              نظام <span className="text-amber-400">Express</span> المحاسبي
            </h1>
            
            <p className="text-lg text-blue-200 mb-6">من تطوير Practivist</p>
            
            <p className="text-xl text-blue-100 mb-8 leading-relaxed">
              الحل المحاسبي المتكامل المصمم خصيصاً لشركات تأجير السقالات والمعدات الثقيلة والمركبات
            </p>

            {/* Key Benefits */}
            <div className="space-y-3 mb-8">
              {[
                'إدارة كاملة للمخزون والجرد',
                'متابعة العقود والإيجارات بسهولة',
                'تقارير الأرباح والخسائر لحظياً',
                'واجهة سهلة بالعربية والإنجليزية'
              ].map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <CheckCircle className="w-5 h-5 text-amber-400 flex-shrink-0" />
                  <span className="text-blue-50">{benefit}</span>
                </motion.div>
              ))}
            </div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Button
                size="lg"
                className="bg-amber-500 hover:bg-amber-600 text-blue-900 font-semibold text-lg px-8 py-6 group"
                onClick={() => document.getElementById('waiting-list')?.scrollIntoView({ behavior: 'smooth' })}
              >
                انضم لقائمة الانتظار
                <ArrowRight className="mr-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-white/30 text-white hover:bg-white/10 text-lg px-8 py-6"
              >
                شاهد العرض التوضيحي
              </Button>
            </motion.div>

            {/* Social Proof */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9 }}
              className="mt-12 flex items-center gap-8"
            >
              <div>
                <div className="text-3xl font-bold text-amber-400">500+</div>
                <div className="text-sm text-blue-200">شركة في الانتظار</div>
              </div>
              <div className="h-12 w-px bg-white/20" />
              <div>
                <div className="text-3xl font-bold text-amber-400">95%</div>
                <div className="text-sm text-blue-200">توفير في الوقت</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Mockup Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="relative"
          >
            <div className="relative z-10 bg-white rounded-2xl shadow-2xl p-8 border-4 border-amber-400/50">
              {/* Placeholder for dashboard mockup */}
              <div className="aspect-video bg-gradient-to-br from-blue-50 to-slate-100 rounded-lg flex items-center justify-center">
                <div className="text-center">
                  <div className="text-6xl mb-4">📊</div>
                  <p className="text-slate-600 font-medium">لوحة التحكم - Express</p>
                  <p className="text-sm text-slate-400 mt-2">معاينة النظام قريباً</p>
                </div>
              </div>
            </div>
            
            {/* Decorative floating cards */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="absolute -top-4 -right-4 bg-white rounded-lg shadow-xl p-4 z-20"
            >
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                  <span className="text-xl">✓</span>
                </div>
                <div>
                  <div className="text-xs text-slate-500">إيراد اليوم</div>
                  <div className="text-lg font-bold text-slate-800">+25,000 د.إ</div>
                </div>
              </div>
            </motion.div>

            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 3, repeat: Infinity, delay: 0.5 }}
              className="absolute -bottom-4 -left-4 bg-white rounded-lg shadow-xl p-4 z-20"
            >
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 bg-amber-100 rounded-full flex items-center justify-center">
                  <span className="text-xl">📦</span>
                </div>
                <div>
                  <div className="text-xs text-slate-500">المعدات المؤجرة</div>
                  <div className="text-lg font-bold text-slate-800">142/200</div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
