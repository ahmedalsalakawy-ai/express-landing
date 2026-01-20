'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Globe } from 'lucide-react';

export function LanguageSwitcher() {
  const pathname = usePathname();
  const isEnglish = pathname.startsWith('/en');

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5 }}
      className="fixed top-6 right-6 z-50"
    >
      <Link
        href={isEnglish ? '/' : '/en'}
        className="flex items-center gap-2 bg-white/90 backdrop-blur-sm hover:bg-white px-4 py-2.5 rounded-full shadow-lg border border-slate-200 transition-all hover:shadow-xl group"
      >
        <Globe className="w-4 h-4 text-blue-600 group-hover:rotate-12 transition-transform" />
        <span className="font-semibold text-slate-700">
          {isEnglish ? '🇦🇪 العربية' : '🇬🇧 English'}
        </span>
      </Link>
    </motion.div>
  );
}
