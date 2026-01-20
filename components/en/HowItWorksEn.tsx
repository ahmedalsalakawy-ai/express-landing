'use client';

import { motion } from 'framer-motion';
import { UserPlus, Settings, Rocket } from 'lucide-react';

const steps = [
  {
    icon: UserPlus,
    number: '01',
    title: 'Sign Up & Subscribe',
    description: 'Join the waiting list and get a special discount for early subscribers'
  },
  {
    icon: Settings,
    number: '02',
    title: 'Setup Your System',
    description: 'Our team will help you transfer your data and customize Express to your needs'
  },
  {
    icon: Rocket,
    number: '03',
    title: 'Start Working',
    description: 'Within days, your company will be operating more efficiently at lower costs'
  }
];

export function HowItWorksEn() {
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
          <span className="text-amber-600 font-semibold text-sm uppercase tracking-wider">How It Works</span>
          <h2 className="text-4xl font-bold text-slate-900 mt-3 mb-4">
            Get Started in 3 Simple Steps
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            From registration to launch in less than a week
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 relative">
            {/* Connecting Line */}
            <div className="hidden md:block absolute top-24 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-200 via-amber-200 to-blue-200" style={{ top: '3.5rem' }} />

            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2, duration: 0.6 }}
                  className="relative"
                >
                  {/* Step Number Badge */}
                  <div className="flex justify-center mb-6">
                    <div className="relative">
                      <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center text-white text-2xl font-bold shadow-lg z-10 relative">
                        {step.number}
                      </div>
                      <div className="absolute inset-0 bg-amber-400 rounded-full blur-lg opacity-50 animate-pulse" />
                    </div>
                  </div>

                  {/* Icon */}
                  <div className="flex justify-center mb-4">
                    <div className="w-16 h-16 bg-slate-100 rounded-xl flex items-center justify-center">
                      <Icon className="w-8 h-8 text-blue-600" />
                    </div>
                  </div>

                  {/* Content */}
                  <h3 className="text-2xl font-bold text-slate-900 mb-3 text-center">
                    {step.title}
                  </h3>
                  <p className="text-slate-600 text-center leading-relaxed">
                    {step.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* CTA Box */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="mt-16 bg-gradient-to-br from-slate-50 to-blue-50 rounded-2xl p-8 border-2 border-blue-100 text-center"
        >
          <div className="max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-slate-900 mb-3">
              Ready to Start Your Journey with Express?
            </h3>
            <p className="text-slate-600 mb-6">
              Join hundreds of companies waiting for launch and get exclusive benefits
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-lg shadow-sm">
                <span className="text-2xl">🎁</span>
                <span className="text-sm font-medium text-slate-700">40% discount for early subscribers</span>
              </div>
              <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-lg shadow-sm">
                <span className="text-2xl">⚡</span>
                <span className="text-sm font-medium text-slate-700">Free setup with the team</span>
              </div>
              <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-lg shadow-sm">
                <span className="text-2xl">🎓</span>
                <span className="text-sm font-medium text-slate-700">Free staff training</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
