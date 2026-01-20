'use client';

import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Facebook, Instagram, Linkedin, MessageCircle } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-slate-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="md:col-span-2"
          >
            <h3 className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-amber-400 bg-clip-text text-transparent mb-4">
              Express
            </h3>
            <p className="text-slate-300 leading-relaxed mb-6">
              نظام محاسبي متكامل مصمم خصيصاً لشركات تأجير السقالات والمعدات الثقيلة والمركبات
            </p>
            <div className="flex gap-4">
              <a
                href="https://wa.me/971504945895"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-slate-800 hover:bg-green-600 rounded-lg flex items-center justify-center transition-colors"
                aria-label="WhatsApp"
              >
                <MessageCircle className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-slate-800 hover:bg-blue-600 rounded-lg flex items-center justify-center transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-slate-800 hover:bg-pink-600 rounded-lg flex items-center justify-center transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-slate-800 hover:bg-blue-700 rounded-lg flex items-center justify-center transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <h4 className="text-lg font-bold text-amber-400 mb-4">تواصل معنا</h4>
            <div className="space-y-3 text-slate-300">
              <a
                href="mailto:sales@Practivist.ae"
                className="flex items-start gap-3 hover:text-amber-400 transition-colors"
              >
                <Mail className="w-5 h-5 mt-0.5 flex-shrink-0" />
                <span dir="ltr">sales@Practivist.ae</span>
              </a>
              <a
                href="tel:+971504945895"
                className="flex items-start gap-3 hover:text-amber-400 transition-colors"
              >
                <Phone className="w-5 h-5 mt-0.5 flex-shrink-0" />
                <span dir="ltr">+971 50 494 5895</span>
              </a>
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 mt-0.5 flex-shrink-0" />
                <span>الإمارات - أبوظبي</span>
              </div>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h4 className="text-lg font-bold text-amber-400 mb-4">روابط سريعة</h4>
            <ul className="space-y-2 text-slate-300">
              <li>
                <a href="#" className="hover:text-amber-400 transition-colors">
                  عن Express
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-amber-400 transition-colors">
                  الأسعار
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-amber-400 transition-colors">
                  المدونة
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-amber-400 transition-colors">
                  سياسة الخصوصية
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-amber-400 transition-colors">
                  الشروط والأحكام
                </a>
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="border-t border-slate-800 pt-8 text-center text-slate-400"
        >
          <p>
            © {new Date().getFullYear()} Express. جميع الحقوق محفوظة.
          </p>
          <p className="mt-2 text-sm">
            من تطوير ♥️ <a href="https://practivist.ae" className="text-amber-400 hover:text-amber-300">Practivist</a>
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
