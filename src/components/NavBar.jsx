import { Link, useLocation } from 'react-router-dom'

export default function NavBar() {
    const location = useLocation()

    const links = [
        { href: '/', label: 'الرئيسية' },
        { href: '/gowa-alkahka', label: 'جوه الكحكة' },
        { href: '/bara-alkahka', label: 'بره الكحكة' },
        { href: '/sawtoha-masmoua', label: 'صوتها مسموع' },
        { href: '/kalam-qanun', label: 'كلام قانون' },
        { href: '/bayn-albayt-walshoghl', label: 'بين البيت والشغل' },
        { href: '/hikayat-settat', label: 'حكايات ستات' },
        { href: '/ala-alhamesh', label: 'على الهامش' },
    ]

    return (
        <nav 
            className="sticky top-0 z-50 w-full border-b border-slate-200/60 bg-white/90 backdrop-blur-md shadow-sm" 
            dir="rtl"
            aria-label="التنقل الرئيسي"
        >
            {/* الجزء العلوي: الهوية واللوجو فقط لراحة العين */}
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 border-b border-slate-100 py-3">
                <div className="flex items-center justify-between">
                    
                    {/* اللوجو اليمين */}
                    <Link to="/" className="group flex items-center gap-3 transition-transform active:scale-95">
                        <div className="relative h-12 w-16 overflow-hidden rounded-full border border-slate-200/80 bg-white shadow-sm">
                            <img 
                                src="/imgs/newlogo-removebg-preview.png" 
                                alt="كحكة Logo" 
                                className="h-12 w-16  object-contain rounded-full"
                            />
                        </div>
                    </Link>

                    {/* الشعار والتاجلين الشمال */}
                    <div className="bg-slate-50 border border-slate-100 px-4 py-1.5 rounded-full">
                        <h1 className="text-xs font-black tracking-wide text-slate-500">
                            كحكة.. شغل وبيت وحياة
                        </h1>
                    </div>

                </div>
            </div>

            {/* الجزء السفلي: التبويبات (Tabs Row) */}
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                {/* 
                  no-scrollbar: لمنع ظهور الشريط القبيح أسفل التبويبات
                  snap-x: لتسهيل حركة السحب على شاشات الهواتف
                */}
                <div className="no-scrollbar flex items-center justify-start md:justify-center gap-1 overflow-x-auto py-2 snap-x scroll-smooth">
                    {links.map((link) => {
                        const isActive = location.pathname === link.href

                        return (
                            <Link
                                key={link.href}
                                to={link.href}
                                aria-current={isActive ? 'page' : undefined}
                                className={`shrink-0 snap-center rounded-xl px-4 py-2.5 text-sm font-black transition-all duration-300 ${
                                    isActive
                                        ? 'bg-brand-secondary text-white shadow-md shadow-brand-secondary/15'
                                        : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50/80'
                                }`}
                            >
                                {link.label}
                            </Link>
                        )
                    })}
                </div>
            </div>
        </nav>
    )
}