import type { Metadata } from "next";
import { Cairo } from "next/font/google";
import "./globals.css";

const cairo = Cairo({ 
  subsets: ["arabic", "latin"],
  weight: ["400", "600", "700", "900"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Express - نظام محاسبي لشركات التأجير",
  description: "نظام محاسبي متكامل مصمم خصيصاً لشركات تأجير السقالات والمعدات الثقيلة والمركبات",
  keywords: ["محاسبة", "تأجير", "سقالات", "معدات ثقيلة", "إدارة", "ERP"],
  authors: [{ name: "Express Team" }],
  openGraph: {
    title: "Express - نظام محاسبي لشركات التأجير",
    description: "نظام محاسبي متكامل مصمم خصيصاً لشركات تأجير السقالات والمعدات الثقيلة والمركبات",
    type: "website",
    locale: "ar_EG",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl">
      <body className={cairo.className}>{children}</body>
    </html>
  );
}
