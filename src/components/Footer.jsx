import { Link } from "react-router-dom";
import { useState } from "react";

export default function Footer() {
  const [newsletterEmail, setNewsletterEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (!newsletterEmail.trim()) return;
    setSubscribed(true);
    setNewsletterEmail("");
  };

  return (
    <>
      {/* شريط الأخبار العاجلة المتحرك */}
      <div className="bg-[#1F2937] text-white py-2 overflow-hidden shadow-xs border-b border-[#6551a0] mt-[50px]" dir="rtl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center gap-4">
          <span className="bg-[#6551a0] text-white text-[10px] font-black px-2.5 py-1 rounded shrink-0 animate-pulse flex items-center gap-1.5 shadow-sm">
            <span className="w-1.5 h-1.5 bg-white rounded-full"></span>
            عاجل كحكة
          </span>
          <div className="relative flex-1 overflow-hidden h-5">
            <div className="absolute whitespace-nowrap animate-news-ticker flex gap-12 text-xs font-bold items-center">
              <span>📢 صدور كتاب دوري يسهل إجراءات الولاية التعليمية للأمهات الحاضنات فوراً بدون اللجوء للمحاكم</span>
              <span>•</span>
              <span>⚖️ مباحث الإنترنت تحذر من عقوبات مشددة تصل للسجن سنتين في قضايا الابتزاز وتزييف الصور بالذكاء الاصطناعي</span>
              <span>•</span>
              <span>📚 إطلاق مبادرة "فصول النور" بالتعاون مع الجمعيات الأهلية لتعليم 1000 سيدة في صعيد مصر ومساعدتهن في التمكين الاقتصادي</span>
              <span>•</span>
              <span>🤰 إرشادات نفسية متكاملة للأمهات الجدد للتعرف على علامات اكتئاب ما بعد الولادة وطرق الدعم اللازم</span>
            </div>
          </div>
        </div>
      </div>

      <footer
        className="w-full bg-[#111111] text-slate-300 pt-16 pb-8 border-t-4 border-[#6551a0]"
        dir="rtl"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

          {/* الشبكة الرئيسية للتوزيع */}
          <div className="grid grid-cols-1 gap-12 pb-12 md:grid-cols-12 lg:gap-8 border-b border-white/5">

            {/* 1. قسم الهوية والتعريف بهيئة التحرير */}
            <div className="md:col-span-4 space-y-4">
              <div className="flex items-center gap-3">
                <span className="h-2 w-2 rounded-full bg-[#6551a0]"></span>
                <span className="text-2xl font-black tracking-wider text-white font-serif">
                  بوابة كحكة الإخبارية
                </span>
              </div>
              <p className="text-xs leading-relaxed text-slate-400 font-medium max-w-sm text-justify">
                بوابة إخبارية صحفية عربية مستقلة تسلط الضوء على تفاصيل الحياة الأسرية والاجتماعية للمرأة، وتفكك القضايا القانونية بنزاهة وعمق عبر التحقيقات الميدانية والقصص الاستقصائية الحية بالتعاون مع مؤسسة قضايا المرأة المصرية.
              </p>
              <div className="pt-2">
                <h5 className="text-xs font-bold text-white mb-1">هيئة التحرير:</h5>
                <p className="text-[11px] text-slate-500 font-bold">
                  تحت إشراف لجان الوعي القانوني والبحث الميداني بمشروع تمكين المرأة إعلامياً.
                </p>
              </div>
            </div>

            {/* 2. روابط التحرير والسياسات */}
            <div className="md:col-span-2 space-y-4">
              <h4 className="text-xs font-black tracking-wider text-white uppercase border-r-2 border-[#6551a0] pr-2">
                من نحن والسياسات
              </h4>
              <ul className="space-y-2.5 text-xs font-bold">
                {[
                  { name: "عن بوابة كحكة", to: "/alaaqa" },
                  { name: "فريق العمل الصحفي", to: "/team" },
                  // { name: "سياسة الخصوصية", to: "/kalam-qanun" },
                  // { name: "شروط الاستخدام", to: "/kalam-qanun" },
                  // { name: "حقوق الملكية الفكرية", to: "/sawtoha-masmoua" }
                ].map((item) => (
                  <li key={item.name}>
                    <Link
                      to={item.to}
                      className="inline-block text-slate-400 transition hover:text-[#6551a0]"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* 3. الإعلان والتواصل */}
            <div className="md:col-span-3 space-y-4">
              <h4 className="text-xs font-black tracking-wider text-white uppercase border-r-2 border-[#6551a0] pr-2">
                تواصل معنا والإعلان
              </h4>
              <ul className="space-y-3 text-xs font-bold text-slate-400">
                <li className="flex items-center gap-2">
                  <span>✉️</span>
                  <a href="mailto:info@kahkah.com" className="hover:text-white transition">
                    info@kahkah.com (الإدارة والتحرير)
                  </a>
                </li>
                <li className="flex items-center gap-2">
                  <span>📢</span>
                  <Link to="/ala-alhamesh" className="hover:text-white transition">
                    الإعلان لدينا ومساحات الرعاية
                  </Link>
                </li>
                <li className="flex items-center gap-2">
                  <span>📍</span>
                  <span>المقر: القاهرة - جمهورية مصر العربية</span>
                </li>
                <li className="pt-2 text-[10px] text-slate-500 font-bold border-t border-white/5">
                  ⏱️ استقبال البلاغات الميدانية: يومياً من ٩ ص حتى ٦ م
                </li>
              </ul>
            </div>

            {/* 4. الاشتراك في النشرة الإخبارية */}
            <div className="md:col-span-3 space-y-4">
              <h4 className="text-xs font-black tracking-wider text-white uppercase border-r-2 border-[#6551a0] pr-2">
                النشرة البريدية للجريدة
              </h4>
              <p className="text-[11px] leading-relaxed text-slate-400 font-medium">
                اشتركي بنشرتنا لتصلكِ آخر التحقيقات الاستقصائية والملفات القانونية فور نشرها.
              </p>

              {!subscribed ? (
                <form onSubmit={handleSubscribe} className="flex gap-2">
                  <input
                    type="email"
                    placeholder="بريدكِ الإلكتروني..."
                    value={newsletterEmail}
                    onChange={(e) => setNewsletterEmail(e.target.value)}
                    required
                    className="bg-white/5 border border-white/10 rounded px-3 py-2 text-xs text-white outline-none focus:border-[#6551a0] flex-1 font-medium"
                  />
                  <button
                    type="submit"
                    className="bg-[#6551a0] hover:bg-red-700 text-white text-xs font-bold px-4 py-2 rounded transition shadow-md"
                  >
                    اشترك
                  </button>
                </form>
              ) : (
                <div className="bg-[#6551a0]/10 border border-[#6551a0]/20 p-3 rounded text-center text-xs font-bold text-white animate-fadeIn">
                  ✓ تم الاشتراك بنجاح في نشرة الجريدة!
                </div>
              )}
            </div>

          </div>

          {/* الجزء السفلي: الحقوق وقنوات التواصل الاجتماعي */}
          <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-[11px] font-bold text-slate-500 order-2 sm:order-1">
              © {new Date().getFullYear()} بوابة كحكة الإخبارية. جميع الحقوق محفوظة لهيئة التحرير ومعدّي المحتوى الميداني.
            </p>

            {/* شبكات التواصل الاجتماعي في أزرار أيقونية دائرية فخمة */}
            <div className="flex items-center gap-3 order-1 sm:order-2">
              {[
                {
                  name: "Facebook",
                  url: "https://www.facebook.com/share/1AhGENjvec/",
                  icon: (
                    <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24">
                      <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                    </svg>
                  )
                },
                {
                  name: "Instagram",
                  url: "/ala-alhamesh",
                  icon: (
                    <svg className="h-4 w-4 stroke-current fill-none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                    </svg>
                  )
                },
                {
                  name: "X",
                  url: "/hikayat-settat",
                  icon: (
                    <svg className="h-3.5 w-3.5 fill-current" viewBox="0 0 24 24">
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                    </svg>
                  )
                },
                {
                  name: "YouTube",
                  url: "/gowa-alkahka",
                  icon: (
                    <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24">
                      <path d="M23.498 6.163a3.003 3.003 0 0 0-2.11-2.108C19.53 3.5 12 3.5 12 3.5s-7.53 0-9.388.555A3.003 3.003 0 0 0 .502 6.163C0 8.023 0 12 0 12s0 3.977.502 5.837a3.003 3.003 0 0 0 2.11 2.108C4.47 20.5 12 20.5 12 20.5s7.53 0 9.388-.555a3.003 3.003 0 0 0 2.11-2.108C24 15.977 24 12 24 12s0-3.977-.502-5.837zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                    </svg>
                  )
                }
              ].map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-white/5 text-slate-400 border border-white/5 transition hover:bg-[#6551a0] hover:text-white hover:border-transparent hover:-translate-y-1 outline-none"
                  title={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

