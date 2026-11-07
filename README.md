# Glow Face

صفحة هبوط عربية متجاوبة لعلامة Glow Face. مبنية باستخدام React وJSX وTailwind CSS 4، مع اتجاه RTL وخط Tajawal.

## التشغيل

1. ثبّت Node.js.
2. افتح هذا المجلد في الطرفية.
3. شغّل `npm install`.
4. شغّل `npm run dev` لفتح المعاينة المحلية.
5. شغّل `npm run build` لإنشاء نسخة النشر داخل `dist`.

## بنية الملفات

```text
glow-face/
├── index.html
├── package.json
├── vite.config.js
├── public/
│   ├── favicon.svg
│   ├── glow-face-logo.jpeg
│   ├── robots.txt
│   └── skincare-editorial.jpg
└── src/
    ├── App.jsx
    ├── index.css
    └── main.jsx
```

الشعار والصورة التحريرية مضمّنان داخل `public`، والخط Tajawal يُحمّل من Google Fonts.
