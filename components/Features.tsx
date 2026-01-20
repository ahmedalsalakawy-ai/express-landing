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
    title: 'إدارة المخزون الذكية',
    description: 'تتبع كل قطعة معدات أو سقالة بسهولة - موقعها، حالتها، وتاريخ صيانتها',
    color: 'from-blue-500 to-blue-600'
  },
  {
    icon: FileText,
    title: 'إدارة العقود التلقائية',
    description: 'إنشاء وتجديد عقود الإيجار تلقائياً مع إشعارات للعملاء والموظفين',
    color: 'from-amber-500 to-amber-600'
  },
  {
    icon: BarChart3,
    title: 'تقارير مالية فورية',
    description: 'شوف أرباحك وخسائرك لحظياً لكل مشروع، عميل، أو معدة بضغطة زر',
    color: 'from-green-500 to-green-600'
  },
  {
    icon: Users,
    title: 'إدارة العملاء المتطورة',
    description: 'سجل كامل لكل عميل: تاريخ التعاملات، المستحقات، وتقييم الأداء',
    color: 'from-purple-500 to-purple-600'
  },
  {
    icon: Network,
    title: 'إدارة الفروع المتعددة',
    description: 'تحكم كامل في التجار بفروع متعددة وأسماء مختلفة مع نقل المواد بينهم بدون مشاكل',
    color: 'from-indigo-500 to-indigo-600'
  },
  {
    icon: Bell,
    title: 'تنبيهات ذكية',
    description: 'إشعارات للصيانة، انتهاء العقود، والمستحقات - عشان ماتفوتك حاجة',
    color: 'from-red-500 to-red-600'
  },
  {
    icon: Shield,
    title: 'حماية وأمان',
    description: 'بياناتك محمية بأعلى معايير الأمان مع backup تلقائي يومي',
    color: 'from-slate-500 to-slate-600'
  },
  {
    icon: Smartphone,
    title: 'يشتغل على كل الأجهزة',
    description: 'استخدم Express من الموبايل، التابلت، أو الكمبيوتر - في أي وقت ومكان',
    color: 'from-cyan-500 to-cyan-600'
  },
  {
    icon: Zap,
    title: 'واجهة متعددة اللغات',
    description: 'واجهة بسيطة بالعربية والإنجليزية - موظفينك هيتعلموها في دقائق مش أيام',
    color: 'from-orange-500 to-orange-600'
  }
];

export function Features() {
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
          <span className="text-amber-600 font-semibold text-sm uppercase tracking-wider">المميزات</span>
          <h2 className="text-4xl font-bold text-slate-900 mt-3 mb-4">
            كل اللي شركتك محتاجاه في مكان واحد
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            نظام متكامل مصمم خصيصاً لاحتياجات شركات التأجير
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
          <h3 className="text-2xl font-bold mb-3">مصمم بخبرة سنوات في المجال</h3>
          <p className="text-blue-100 text-lg max-w-3xl mx-auto">
            Express مش مجرد برنامج محاسبي - ده نظام مبني على فهم عميق لاحتياجات شركات التأجير
          </p>
        </motion.div>
      </div>
    </section>
  );
}
