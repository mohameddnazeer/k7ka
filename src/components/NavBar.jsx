import { Link, useLocation } from 'react-router-dom'
import { useState, useEffect } from 'react'

export default function NavBar() {
    const location = useLocation()
    const [currentTime, setCurrentTime] = useState('')
    const [currentDate, setCurrentDate] = useState('')
    const [searchOpen, setSearchOpen] = useState(false)
    const [searchQuery, setSearchQuery] = useState('')

    useEffect(() => {
        const updateDateTime = () => {
            const now = new Date()
            const dateOptions = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }
            setCurrentDate(now.toLocaleDateString('ar-EG', dateOptions))
            
            const timeOptions = { hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: true }
            setCurrentTime(now.toLocaleTimeString('ar-EG', timeOptions))
        }

        updateDateTime()
        const timer = setInterval(updateDateTime, 1000)
        return () => clearInterval(timer)
    }, [])

    const links = [
        { href: '/', label: 'الرئيسية' },
        { href: '/sawtoha-masmoua', label: 'صوتها مسموع' },
        { href: '/bara-alkahka', label: 'بره الكحكة' },
        { href: '/bayn-albayt-walshoghl', label: 'بين البيت والشغل' },
        { href: '/kalam-qanun', label: 'كلام قانون' },
        { href: '/hikayat-settat', label: 'حكايات ستات' },
        { href: '/ala-alhamesh', label: 'على الهامش' },
        { href: '/gowa-alkahka', label: 'جوه الكحكة' },
    ]

    const breakingNews = [
        "الولاية التعليمية تثبت للحاضن بقوة القانون فور الطلاق دون حاجة لأحكام قضائية.",
        "مباحث الإنترنت تحذر من عقوبات رادعة لجرائم التزييف العميق وصناعة المحتوى المفبرك بالذكاء الاصطناعي.",
        "مطالبات برلمانية وقانونية واسعة بإقرار قانون موحد صارم لمناهضة العنف الأسري والجسدي ضد المرأة.",
        "وزارة التضامن الاجتماعي تعلن زيادة التمويل الممنوح لمشروعات التمكين الاقتصادي للمرأة المعيلة.",
        "إطلاق برنامج تدريبي وطني شامل لمحو الأمية الهجائية والرقيمة للسيدات بالتعاون مع منظمات المجتمع المدني."
    ]

    return (
        <nav className="w-full bg-white text-[#1F2937] relative z-40" dir="rtl" aria-label="التنقل الرئيسي للصحيفة">
            {/* 1. الطبقة العليا: الشريط الإخباري العاجل والوقت والشبكات الاجتماعية */}
            <div className="bg-[#1F2937] text-white text-xs border-b border-gray-800">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex items-center justify-between h-9 overflow-hidden">
                    {/* التاريخ والوقت */}
                    <div className="hidden md:flex items-center gap-4 shrink-0 font-medium text-gray-300">
                        <span>🗓️ {currentDate}</span>
                        <span>⏰ {currentTime}</span>
                    </div>

                    {/* شريط الأخبار العاجلة الدوار */}
                    <div className="flex items-center flex-1 mx-4 overflow-hidden relative h-full">
                        <div className="bg-[#A91D22] text-white px-3 py-1 font-bold text-[10px] sm:text-xs tracking-wider shrink-0 flex items-center gap-1.5 z-10 shadow-md">
                            <span className="h-2 w-2 rounded-full bg-white animate-ping"></span>
                            <span>عاجل</span>
                        </div>
                        <div className="w-full overflow-hidden relative flex items-center">
                            <div className="animate-news-ticker flex items-center gap-12 text-gray-100 font-semibold text-[11px] sm:text-xs">
                                {breakingNews.map((text, idx) => (
                                    <span key={idx} className="flex items-center gap-2">
                                        <span>✦</span>
                                        <span>{text}</span>
                                    </span>
                                ))}
                                {/* تكرار لضمان السلاسة */}
                                {breakingNews.map((text, idx) => (
                                    <span key={`dup-${idx}`} className="flex items-center gap-2">
                                        <span>✦</span>
                                        <span>{text}</span>
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* قنوات التواصل الاجتماعي */}
                    <div className="flex items-center gap-2.5 shrink-0">
                        <a href="https://www.facebook.com/share/1AhGENjvec/" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-white transition">
                            <svg className="h-3.5 w-3.5 fill-current" viewBox="0 0 24 24"><path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"/></svg>
                        </a>
                        <Link to="/gowa-alkahka" className="text-gray-400 hover:text-white transition">
                            <span className="text-xs">📻 راديو كحكة</span>
                        </Link>
                    </div>
                </div>
            </div>

            {/* 2. الطبقة الوسطى: شعار الجريدة والهوية الصحفية */}
            <div className="border-b border-gray-200 py-5 bg-white">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4">
                    {/* اللوجو والعنوان */}
                    <Link to="/" className="flex items-center gap-4 group">
                        <div className="relative h-16 w-20 overflow-hidden rounded-full border border-gray-200 bg-white p-1 shadow-sm transition group-hover:border-[#A91D22]">
                            <img 
                                src="/imgs/newlogo-removebg-preview.png" 
                                alt="شعار بوابة كحكة" 
                                className="h-full w-full object-contain rounded-full"
                            />
                        </div>
                        <div className="text-right">
                            <h1 className="text-3xl font-black tracking-wide text-[#1F2937] font-serif group-hover:text-[#A91D22] transition duration-200">
                                بوابة كحكة الإخبارية
                            </h1>
                            <p className="text-xs font-black tracking-normal text-gray-500 mt-1">
                                المنبر الإعلامي المستقل لقضايا المرأة والأسرة والمجتمع
                            </p>
                        </div>
                    </Link>

                    {/* إعلان أو تفاصيل سريعة للتحرير */}
                    <div className="hidden lg:flex items-center gap-4 text-xs bg-slate-50 border border-slate-100 rounded-xl px-5 py-2.5">
                        <div className="text-right">
                            <div className="font-bold text-gray-700">رئيس التحرير الصحفي</div>
                            <div className="text-gray-500 mt-0.5">مشروع تمكين المرأة إعلامياً وقانونياً</div>
                        </div>
                        <div className="h-8 w-[1px] bg-slate-200"></div>
                        <div className="text-right">
                            <div className="font-bold text-[#A91D22]">تحقيقات حية استقصائية</div>
                            <div className="text-gray-500 mt-0.5">توثيق ونزول مستمر للميدان</div>
                        </div>
                    </div>
                </div>
            </div>

            {/* 3. الطبقة السفلى: التبويبات والبحث والبث المباشر */}
            <div className="sticky top-0 z-40 bg-white border-b border-gray-200 shadow-xs">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex items-center justify-between">
                    
                    {/* التبويبات الفئوية */}
                    <div className="no-scrollbar flex items-center gap-1 overflow-x-auto py-2.5 snap-x scroll-smooth flex-1 select-none">
                        {links.map((link) => {
                            const isActive = location.pathname === link.href
                            return (
                                <Link
                                    key={link.href}
                                    to={link.href}
                                    className={`shrink-0 snap-center rounded-lg px-3.5 py-2 text-xs sm:text-sm font-black transition-all duration-200 ${
                                        isActive
                                            ? 'bg-[#A91D22] text-white shadow-sm font-bold'
                                            : 'text-slate-700 hover:text-[#A91D22] hover:bg-slate-50'
                                    }`}
                                >
                                    {link.label}
                                </Link>
                            )
                        })}
                    </div>

                    {/* أزرار الخدمات المساعدة (البحث + بث البودكاست المباشر) */}
                    <div className="flex items-center gap-3 shrink-0 py-2 border-r border-gray-100 pr-4 mr-4">
                        {/* بث مباشر بودكاست */}
                        <Link 
                            to="/"
                            state={{ scrollTo: 'podcast-section' }}
                            className="inline-flex items-center gap-1.5 rounded-full bg-red-50 hover:bg-red-100 border border-red-200 px-3 py-1.5 text-[10px] sm:text-xs font-bold text-[#A91D22] transition-colors"
                        >
                            <span className="flex h-1.5 w-1.5 relative">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#A91D22] opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-[#A91D22]"></span>
                            </span>
                            <span className="hidden sm:inline">بث مباشر</span>
                            <span>بودكاست</span>
                        </Link>

                        {/* البحث الفوري */}
                        <div className="relative">
                            <button 
                                onClick={() => setSearchOpen(!searchOpen)}
                                className="p-2 rounded-lg hover:bg-slate-50 text-slate-700 transition"
                                aria-label="البحث"
                            >
                                🔍
                            </button>
                            {searchOpen && (
                                <div className="absolute left-0 mt-2 w-72 bg-white border border-gray-200 rounded-xl p-3 shadow-xl z-50">
                                    <form onSubmit={(e) => { e.preventDefault(); setSearchOpen(false); alert(`البحث عن: ${searchQuery}`); }} className="flex gap-2">
                                        <input 
                                            type="text" 
                                            placeholder="ابحث في الجريدة..." 
                                            value={searchQuery}
                                            onChange={(e) => setSearchQuery(e.target.value)}
                                            className="flex-1 border border-gray-200 rounded-lg px-3 py-1.5 text-xs outline-none focus:border-[#A91D22]"
                                            autoFocus
                                        />
                                        <button type="submit" className="bg-[#A91D22] text-white px-3 py-1.5 rounded-lg text-xs font-bold">
                                            بحث
                                        </button>
                                    </form>
                                </div>
                            )}
                        </div>
                    </div>

                </div>
            </div>
        </nav>
    )
}
