import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer
      className="w-full bg-[#111111] text-slate-300 pt-16 pb-8 border-t border-white/5"
      dir="rtl"
    >
      <div className="mx-auto  px-4 sm:px-6 lg:px-8">
        {/* الشبكة الرئيسية للتوزيع */}
        <div className="grid grid-cols-1 gap-12 pb-12 md:grid-cols-12 lg:gap-8 border-b border-white/5">
          {/* 1. قسم الهوية والتعريف - يأخذ مساحة أكبر */}
          <div className="md:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              {/* لو عندك ملف لوجو حطه هنا، أو سيبه كأسم فخم */}
              <span  className="h-1.5 w-1.5 rounded-full bg-brand-secondary"></span>
              <span className="text-2xl font-black tracking-wider text-white">
                كُحْكَة
              </span>
            </div>
            <p className="text-sm leading-relaxed text-slate-400 font-medium max-w-sm">
              منصة صحفية عربية مستقلة تسلط الضوء على تفاصيل الحياة الأسرية
              والاجتماعية للمرأة، وتفكك القضايا بنزاهة وعمق عبر التحقيقات والقصص
              الحية.
            </p>
          </div>

          {/* 2. روابط سريعة للموقع */}
          <div className="md:col-span-2 space-y-4">
            <h4 className="text-sm font-bold tracking-wider text-white uppercase">
              روابط سريعة
            </h4>
            <ul className="space-y-2.5 text-sm font-medium">
              {[
                { name: "الرئيسية", to: "/" },
                { name: "التحقيقات", to: "/sawtoha-masmoua" },
                { name: "فريق العمل", to: "/team" },
                { name: "تواصل معنا", to: "/contact" },
              ].map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.to}
                    className="inline-block text-slate-400 transition-all duration-200 hover:text-brand-secondary hover:translate-x-1"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* 3. تصنيفات ومسارات المحتوى الاكثر طلباً */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="text-sm font-bold tracking-wider text-white uppercase">
              مسارات المحتوى
            </h4>
            <ul className="space-y-2.5 text-sm font-medium">
              {[
                { name: "بودكاست جوه الكحكة", to: "/gowa-alkahka" },
                { name: "تقارير على الهامش", to: "/ala-alhamesh" },
                { name: "حكايات ستات وبنات", to: "/hikayat-settat" },
                { name: "كلام قانون وتبسيط حقوق", to: "/kalam-qanun" },
              ].map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.to}
                    className="inline-block text-slate-400 transition-all duration-200 hover:text-brand-secondary hover:translate-x-1"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* 4. تفاصيل ومعلومات الاتصال */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="text-sm font-bold tracking-wider text-white uppercase">
              التواصل المباشر
            </h4>
            <ul className="space-y-3 text-sm font-medium text-slate-400">
              <li className="flex items-center gap-2.5">
                <span className="text-xs text-brand-secondary">✉</span>
                <a
                  href="mailto:info@kahkah.com"
                  className="hover:text-white transition-colors"
                >
                  info@kahkah.com
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <svg
                  className="h-4 w-4 text-brand-secondary fill-current"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                </svg>
                <a
                  href="https://www.facebook.com/share/1AhGENjvec/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-brand-secondary transition-colors text-sm font-medium"
                >
                  كــــــحـكـة
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <span className="text-xs text-brand-secondary">📍</span>
                <span>القاهرة - جمهورية مصر العربية</span>
              </li>
              <li className="pt-1 text-xs text-slate-500 font-normal border-t border-white/5">
                ⏱ ساعات العمل: يومياً من 9 ص حتى 6 م
              </li>
            </ul>
          </div>
        </div>

        {/* الجزء السفلي: الحقوق وقنوات التواصل الاجتماعي */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs font-medium text-slate-500 order-2 sm:order-1">
            © {new Date().getFullYear()} كحكة. جميع الحقوق محفوظة للمنصة ومعدّي
            المحتوى.
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
      url: "#", 
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
      url: "#", 
      icon: (
        <svg className="h-3.5 w-3.5 fill-current" viewBox="0 0 24 24">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
        </svg>
      ) 
    },
    { 
      name: "YouTube", 
      url: "#", 
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
      className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-white/5 text-slate-400 border border-white/5 transition-all duration-300 hover:bg-brand-secondary hover:text-white hover:border-transparent hover:-translate-y-1 outline-none"
      title={social.name}
    >
      {social.icon}
    </a>
  ))}
</div>
        </div>
      </div>
    </footer>
  );
}
