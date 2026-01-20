# Express Landing Page 🚀

Landing page احترافية لنظام Express المحاسبي المصمم لشركات تأجير السقالات والمعدات الثقيلة.

## ✨ المميزات

- 🎨 تصميم احترافي بالأزرق والذهبي
- 📱 Responsive على كل الأجهزة
- ⚡ سرعة فائقة مع Next.js 14
- 🌐 دعم كامل للغة العربية (RTL)
- 💾 حفظ البيانات في Supabase
- 🎭 Animations سلسة مع Framer Motion
- 📊 نموذج Waiting List متكامل

## 🛠️ التقنيات المستخدمة

- **Framework:** Next.js 14 (App Router)
- **Styling:** Tailwind CSS
- **UI Components:** Shadcn/ui
- **Animations:** Framer Motion
- **Database:** Supabase
- **Icons:** Lucide React
- **Font:** Cairo (Google Fonts)
- **Language:** TypeScript

## 📋 المتطلبات

- Node.js 18+ مثبت على جهازك
- حساب على [Supabase](https://supabase.com) (مجاني)
- Git (اختياري)

## 🚀 التثبيت والتشغيل

### 1. تثبيت المكتبات

\`\`\`bash
npm install
\`\`\`

### 2. إعداد Supabase

#### أ) إنشاء المشروع:
1. اذهب لـ [Supabase Dashboard](https://supabase.com/dashboard)
2. اضغط "New Project"
3. اختار اسم المشروع وكلمة سر قوية

#### ب) إنشاء جدول الـ Waiting List:

اذهب لـ SQL Editor وشغل الكود ده:

\`\`\`sql
-- Create waitlist table
CREATE TABLE waitlist (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL UNIQUE,
  business_type TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create index for faster email lookups
CREATE INDEX idx_waitlist_email ON waitlist(email);

-- Enable Row Level Security (RLS)
ALTER TABLE waitlist ENABLE ROW LEVEL SECURITY;

-- Create policy to allow inserts
CREATE POLICY "Allow public inserts" 
ON waitlist FOR INSERT 
TO public 
WITH CHECK (true);

-- Create policy to allow the service role to read
CREATE POLICY "Allow service role to read" 
ON waitlist FOR SELECT 
TO service_role 
USING (true);
\`\`\`

#### ج) احصل على الـ API Keys:

1. من Settings → API
2. انسخ:
   - **Project URL** (هيكون شكله زي: `https://xyz.supabase.co`)
   - **service_role key** (من service_role - KEEP THIS SECRET!)

### 3. إعداد Environment Variables

انسخ ملف `.env.local.example` لملف جديد اسمه `.env.local`:

\`\`\`bash
cp .env.local.example .env.local
\`\`\`

افتح `.env.local` وحط الـ keys بتاعتك:

\`\`\`env
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
SUPABASE_SERVICE_KEY=your-service-role-key-here
\`\`\`

### 4. شغل المشروع

\`\`\`bash
npm run dev
\`\`\`

افتح المتصفح على: [http://localhost:3000](http://localhost:3000)

## 📦 البناء للإنتاج

\`\`\`bash
npm run build
npm run start
\`\`\`

## 🌐 النشر على Vercel

### الطريقة السهلة:

1. اعمل Push للكود على GitHub
2. اذهب لـ [Vercel Dashboard](https://vercel.com)
3. اضغط "Import Project"
4. اختار الـ Repo بتاعك
5. أضف الـ Environment Variables:
   - `NEXT_PUBLIC_SUPABASE_URL`
   - `SUPABASE_SERVICE_KEY`
6. اضغط Deploy!

### من الـ CLI:

\`\`\`bash
npm i -g vercel
vercel
\`\`\`

## 📁 هيكل المشروع

\`\`\`
express-landing/
├── app/
│   ├── api/
│   │   └── waitlist/
│   │       └── route.ts          # API endpoint للـ waiting list
│   ├── globals.css               # Global styles
│   ├── layout.tsx                # Root layout مع Arabic font
│   └── page.tsx                  # الصفحة الرئيسية
├── components/
│   ├── ui/                       # Shadcn/ui components
│   │   ├── button.tsx
│   │   ├── input.tsx
│   │   ├── label.tsx
│   │   └── select.tsx
│   ├── Hero.tsx                  # قسم البطل
│   ├── Problems.tsx              # المشاكل اللي بنحلها
│   ├── Features.tsx              # المميزات
│   ├── HowItWorks.tsx           # كيف يعمل
│   ├── WaitingList.tsx          # نموذج التسجيل
│   └── Footer.tsx               # الفوتر
├── lib/
│   └── utils.ts                  # Utility functions
├── .env.local.example           # مثال للـ environment variables
├── package.json
├── tailwind.config.ts
├── tsconfig.json
└── README.md
\`\`\`

## 🎨 التخصيص

### تغيير الألوان:

عدل ملف `tailwind.config.ts`:

\`\`\`typescript
theme: {
  extend: {
    colors: {
      // ألوانك هنا
    }
  }
}
\`\`\`

### تغيير المحتوى:

كل قسم في ملف منفصل في مجلد `components/`:
- `Hero.tsx` - العنوان الرئيسي
- `Problems.tsx` - المشاكل
- `Features.tsx` - المميزات
- إلخ...

### إضافة Google Analytics:

في `app/layout.tsx`، أضف السكريبت في الـ `<head>`:

\`\`\`tsx
<Script src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID" />
\`\`\`

## 🔍 الـ API Endpoint

### POST `/api/waitlist`

حفظ بيانات مشترك جديد.

**Request Body:**
\`\`\`json
{
  "name": "أحمد محمد",
  "email": "ahmed@example.com",
  "businessType": "scaffolding"
}
\`\`\`

**Response (Success - 201):**
\`\`\`json
{
  "success": true,
  "message": "تم التسجيل بنجاح",
  "data": {
    "id": "uuid",
    "name": "أحمد محمد",
    "email": "ahmed@example.com",
    "business_type": "scaffolding",
    "created_at": "2024-01-13T..."
  }
}
\`\`\`

**Response (Error - 400/409/500):**
\`\`\`json
{
  "error": "رسالة الخطأ"
}
\`\`\`

## 📊 قراءة البيانات من Supabase

اذهب لـ Supabase Dashboard → Table Editor → waitlist

أو استخدم SQL:

\`\`\`sql
SELECT * FROM waitlist ORDER BY created_at DESC;
\`\`\`

## 🐛 حل المشاكل الشائعة

### الكود بيشتغل محلياً لكن مش شغال على Vercel:

تأكد إنك حطيت الـ Environment Variables على Vercel!

### خطأ في الـ Supabase connection:

تأكد إن:
1. الـ URL والـ Key صحيحين
2. الجدول `waitlist` موجود
3. الـ RLS Policies مضبوطة

### الـ Form مش بيتحفظ:

تأكد إن:
1. الـ API route موجود في `app/api/waitlist/route.ts`
2. الـ SUPABASE_SERVICE_KEY موجود في `.env.local`

## 📝 الخطوات التالية

- [ ] ربط Domain مخصص
- [ ] إضافة Google Analytics
- [ ] إرسال Welcome Email للمشتركين
- [ ] إضافة Admin Dashboard لإدارة القائمة
- [ ] عمل Email Marketing للـ waiting list

## 🤝 المساهمة

المشروع ده open source! لو عندك أفكار أو تحسينات، feel free to contribute.

## 📄 الترخيص

MIT License - استخدمه زي ما تحب!

## 💬 الدعم

لو محتاج مساعدة، تواصل على:
- Email: info@express-eg.com
- GitHub Issues

---

**صُنع بـ ♥️ لشركات التأجير في مصر والوطن العربي**
