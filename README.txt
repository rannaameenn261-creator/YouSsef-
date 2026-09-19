# Baby YouSsef — GitHub Pages Website

موقع جاهز لميلاد YouSsef، بتصميم baby-blue / cream مستوحى من الرسومات المائية والدباديب والغيوم والنجوم.

## الملفات
- `index.html` الصفحة الرئيسية
- `pages/welcome.html` صفحة ترحيب وكلام حلو
- `pages/details.html` تفاصيل البيبي
- `pages/story.html` قصة وتايملاين
- `pages/photo.html` صفحة صورة واحدة
- `style.css` التصميم
- `script.js` زر الموسيقى
- `assets/` الصور والأغنية

## لإضافة صورة البيبي
ضعي الصورة داخل `assets` باسم:
`baby.jpg`

ولو اسم الصورة مختلف، افتحي:
`pages/photo.html`
وغيري:
`../assets/baby.jpg`

## لإضافة الأغنية
ضعي ملف الأغنية داخل `assets` باسم:
`baby-song.mp3`

بعدها علامة ♪ الموجودة أعلى الصفحات ستشغل الأغنية.

## رفعه على GitHub Pages
1. اعملي Repository جديد على GitHub.
2. ارفعي كل الملفات والمجلدات كما هي، خصوصًا `pages` و`assets`.
3. من Settings → Pages اختاري:
   - Deploy from a branch
   - Branch: `main`
   - Folder: `/ (root)`
4. Save وانتظري نشر الموقع.

ملاحظة: GitHub Pages يميز بين الحروف الكبيرة والصغيرة في أسماء الملفات، فخلي الأسماء كما هي.