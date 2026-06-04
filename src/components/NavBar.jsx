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
        { href: '/infographic', label: 'إنفوجرافيك' },
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
                                    className={`shrink-0 snap-center rounded-lg px-3.5 py-2 text-xs sm:text-sm transition-all duration-200 ${isActive
                                        ? 'bg-[#A91D22] text-white shadow-sm font-black'
                                        : 'text-slate-700 hover:text-[#A91D22] hover:bg-slate-50 '
                                        }`}
                                >
                                    {link.label}
                                </Link>
                            )
                        })}
                    </div>



                </div>
            </div>
        </nav>
    )
}
