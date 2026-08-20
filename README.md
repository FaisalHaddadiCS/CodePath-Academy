# CodePath Academy

منصة تعليمية تفاعلية لطلاب علوم الحاسب، تجمع بين الدروس المنظمة، الاختبارات، والمساعد التعليمي المدعوم بالذكاء الاصطناعي.

## أبرز المزايا

- دروس تفاعلية قصيرة مع رسوم متحركة للأكواد.
- مساعد ذكي لشرح المفاهيم وتصحيح الأكواد وإنشاء اختبارات تدريبية.
- اختبارات ديناميكية مع متابعة تقدم المتعلم.
- نظام تسجيل دخول وإدارة للمستخدمين.

## التقنيات المستخدمة

- **الواجهة:** React, TypeScript, Vite, React Router, Zustand.
- **الخلفية:** Node.js, Express, TypeScript, Prisma, SQLite.
- **الذكاء الاصطناعي:** Google Gemini API.

## التشغيل محليًا

### تثبيت الاعتماديات

```bash
cd frontend && npm install
cd ../backend && npm install
```

### إعداد قاعدة البيانات

```bash
cd backend
npx prisma db push
npx prisma generate
npx tsx src/seed.ts
```

### تشغيل المشروع

شغّل الواجهة والخلفية في نافذتين منفصلتين:

```bash
# Backend
cd backend && npm run dev

# Frontend
cd frontend && npm run dev
```

تتوفر الواجهة عادةً على `http://localhost:5173` والخلفية على `http://localhost:5000`.

## بإشراف

[SDAIA Academy](https://github.com/SDAIAAcademy)
