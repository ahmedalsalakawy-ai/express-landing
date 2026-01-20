'use client';

import { HeroEn } from '@/components/en/HeroEn';
import { ProblemsEn } from '@/components/en/ProblemsEn';
import { FeaturesEn } from '@/components/en/FeaturesEn';
import { HowItWorksEn } from '@/components/en/HowItWorksEn';
import { WaitingListEn } from '@/components/en/WaitingListEn';
import { FooterEn } from '@/components/en/FooterEn';
import { WhatsAppButton } from '@/components/WhatsAppButton';
import { LanguageSwitcher } from '@/components/LanguageSwitcher';

export default function EnglishPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-50 to-white" dir="ltr">
      <LanguageSwitcher />
      <HeroEn />
      <ProblemsEn />
      <FeaturesEn />
      <HowItWorksEn />
      <WaitingListEn />
      <FooterEn />
      <WhatsAppButton />
    </main>
  );
}
