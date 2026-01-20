'use client';

import { Hero } from '@/components/Hero';
import { Problems } from '@/components/Problems';
import { Features } from '@/components/Features';
import { HowItWorks } from '@/components/HowItWorks';
import { WaitingList } from '@/components/WaitingList';
import { Footer } from '@/components/Footer';
import { WhatsAppButton } from '@/components/WhatsAppButton';
import { LanguageSwitcher } from '@/components/LanguageSwitcher';

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <LanguageSwitcher />
      <Hero />
      <Problems />
      <Features />
      <HowItWorks />
      <WaitingList />
      <Footer />
      <WhatsAppButton />
    </main>
  );
}
