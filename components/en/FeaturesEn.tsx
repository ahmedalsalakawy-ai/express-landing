'use client';

import { motion } from 'framer-motion';
import { 
  Package, 
  FileText, 
  BarChart3, 
  Users, 
  Bell, 
  Shield,
  Smartphone,
  Zap,
  Network
} from 'lucide-react';

const features = [
  {
    icon: Package,
    title: 'Smart Inventory Management',
    description: 'Track every piece of equipment or scaffolding easily - its location, condition, and maintenance history',
    color: 'from-blue-500 to-blue-600'
  },
  {
    icon: FileText,
    title: 'Automated Contract Management',
    description: 'Create and renew rental contracts automatically with notifications for customers and staff',
    color: 'from-amber-500 to-amber-600'
  },
  {
    icon: BarChart3,
    title: 'Real-Time Financial Reports',
    description: 'View your profits and losses instantly for each project, customer, or equipment at the click of a button',
    color: 'from-green-500 to-green-600'
  },
  {
    icon: Users,
    title: 'Advanced Customer Management',
    description: 'Complete record for each customer: transaction history, outstanding payments, and performance rating',
    color: 'from-purple-500 to-purple-600'
  },
  {
    icon: Network,
    title: 'Multi-Branch Management',
    description: 'Full control over merchants with multiple branches and different names with seamless material transfer between them',
    color: 'from-indigo-500 to-indigo-600'
  },
  {
    icon: Bell,
    title: 'Smart Notifications',
    description: 'Alerts for maintenance, contract expirations, and outstanding payments - so you never miss anything',
    color: 'from-red-500 to-red-600'
  },
  {
    icon: Shield,
    title: 'Security & Protection',
    description: 'Your data is protected with the highest security standards with automatic daily backups',
    color: 'from-slate-500 to-slate-600'
  },
  {
    icon: Smartphone,
    title: 'Works on All Devices',
    description: 'Use Express from mobile, tablet, or computer - anytime, anywhere',
    color: 'from-cyan-500 to-cyan-600'
  },
  {
    icon: Zap,
    title: 'Multi-Language Interface',
    description: 'Simple interface in Arabic and English - your staff will learn it in minutes, not days',
    color: 'from-orange-500 to-orange-600'
  }
];

export function FeaturesEn() {
  return (
    <section className="py-20 bg-gradient-to-b from-slate-50 to-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-amber-600 font-semibold text-sm uppercase tracking-wider">Features</span>
          <h2 className="text-4xl font-bold text-slate-900 mt-3 mb-4">
            Everything Your Company Needs in One Place
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            A complete system designed specifically for rental company needs
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05, duration: 0.5 }}
                className="group bg-white rounded-xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 hover:border-blue-200"
              >
                <div className={`w-14 h-14 bg-gradient-to-br ${feature.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <Icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* Trust Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="mt-16 bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-8 text-center text-white"
        >
          <h3 className="text-2xl font-bold mb-3">Built with Years of Industry Experience</h3>
          <p className="text-blue-100 text-lg max-w-3xl mx-auto">
            Express isn't just accounting software - it's a system built on deep understanding of rental company needs
          </p>
        </motion.div>
      </div>
    </section>
  );
}
