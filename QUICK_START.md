# 🚀 دليل التشغيل السريع - Express Landing Page

## خطوة بخطوة (للمبتدئين):

### 1️⃣ تحميل الملفات
- نزل المشروع على جهازك
- افتح Terminal/Command Prompt في مجلد المشروع

### 2️⃣ تثبيت Node.js
إذا مش مثبت:
- روح على https://nodejs.org
- نزل النسخة LTS
- ثبتها على جهازك
- تأكد بالأمر: `node --version`

### 3️⃣ تثبيت المكتبات
\`\`\`bash
npm install
\`\`\`
(هياخد 2-3 دقائق أول مرة)

### 4️⃣ إعداد Supabase (قاعدة البيانات المجانية)

#### أ) إنشاء حساب:
1. اذهب لـ https://supabase.com
2. اضغط "Start your project"
3. سجل بالـ GitHub أو Email

#### ب) إنشاء مشروع جديد:
1. اضغط "New Project"
2. اختار اسم: `express-landing`
3. كلمة سر قوية (احفظها!)
4. المنطقة: اختار أقرب منطقة ليك
5. اضغط "Create new project" (هياخد دقيقة)

#### ج) إنشاء جدول البيانات:
1. من القائمة الجانبية → اختار "SQL Editor"
2. اضغط "New query"
3. انسخ والصق الكود ده:

\`\`\`sql
CREATE TABLE waitlist (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL UNIQUE,
  business_type TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

CREATE INDEX idx_waitlist_email ON waitlist(email);

ALTER TABLE waitlist ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Allow public inserts" 
ON waitlist FOR INSERT 
TO public 
WITH CHECK (true);

CREATE POLICY "Allow service role to read" 
ON waitlist FOR SELECT 
TO service_role 
USING (true);
\`\`\`

4. اضغط "Run" (زرار أخضر أو Ctrl+Enter)
5. لو طلع "Success" يبقى تمام ✅

#### د) احصل على المفاتيح:
1. من القائمة الجانبية → "Settings" → "API"
2. هتلاقي:
   - **Project URL**: انسخه (زي: `https://abc123.supabase.co`)
   - **anon/public key**: لا، مش ده!
   - **service_role key**: ده اللي محتاجينه (اضغط "Reveal" وانسخه)

### 5️⃣ ربط المشروع بالقاعدة

1. في مجلد المشروع، دور على ملف `.env.local.example`
2. اعمل نسخة منه واسميه `.env.local` (شيل كلمة .example)
3. افتح `.env.local` في أي Text Editor
4. حط المفاتيح اللي نسختها:

\`\`\`env
NEXT_PUBLIC_SUPABASE_URL=https://abc123.supabase.co
SUPABASE_SERVICE_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
\`\`\`

5. احفظ الملف ✅

### 6️⃣ شغل المشروع! 🎉

\`\`\`bash
npm run dev
\`\`\`

انتظر لحد ما يظهر:
\`\`\`
✓ Ready in 2.3s
○ Local: http://localhost:3000
\`\`\`

افتح المتصفح على: **http://localhost:3000**

---

## 🎊 مبروك! المشروع شغال

### اختبر الـ Waiting List:
1. اسكرول لتحت للفورم
2. اكتب اسم وإيميل
3. اختار نوع النشاط
4. اضغط "انضم لقائمة الانتظار"
5. لو طلع ✅ يبقى البيانات اتحفظت!

### شوف البيانات في Supabase:
1. ارجع لـ Supabase Dashboard
2. من القائمة → "Table Editor"
3. اختار جدول `waitlist`
4. هتشوف البيانات اللي دخلتها! 🎉

---

## 🌐 نشر الموقع على الإنترنت (مجاناً!)

### على Vercel (الأسهل والمجاني):

1. اعمل حساب على https://vercel.com
2. اربط GitHub
3. ارفع المشروع على GitHub:
   \`\`\`bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin YOUR_GITHUB_REPO_URL
   git push -u origin main
   \`\`\`
4. من Vercel → Import Project → اختار الـ Repo
5. في صفحة الإعدادات، أضف Environment Variables:
   - `NEXT_PUBLIC_SUPABASE_URL`
   - `SUPABASE_SERVICE_KEY`
6. اضغط Deploy!
7. خلال دقيقة، موقعك هيكون live! 🚀

---

## ❓ مشاكل شائعة وحلولها

### المشكلة: "npm: command not found"
**الحل:** Node.js مش مثبت. نزله من nodejs.org

### المشكلة: "Module not found"
**الحل:** 
\`\`\`bash
rm -rf node_modules
npm install
\`\`\`

### المشكلة: "Supabase connection error"
**الحل:** 
- تأكد إن المفاتيح صحيحة في `.env.local`
- تأكد إن اسم الملف `.env.local` (مش .example)
- اعمل restart للسيرفر (Ctrl+C ثم `npm run dev`)

### المشكلة: الموقع مش بيحفظ البيانات
**الحل:**
- تأكد إنك عملت الـ SQL query في Supabase
- تأكد إن الـ RLS policies موجودة
- شوف الـ Console في المتصفح (F12) فيه أخطاء؟

---

## 📞 محتاج مساعدة؟

1. اقرا الـ README.md الكامل
2. شوف الأخطاء في Console (اضغط F12 في المتصفح)
3. اسأل ChatGPT أو Claude عن الخطأ
4. ابعتلي على info@express-eg.com

---

**نصيحة أخيرة:** خد وقتك، واحدة واحدة، وهتنجح! 💪

