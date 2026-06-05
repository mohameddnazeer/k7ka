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
        { href: '/gowa-alkahka', label: 'جوه الكحكة' },
        { href: '/bara-alkahka', label: 'بره الكحكة' },
        { href: '/sawtoha-masmoua', label: 'صوتها مسموع' },
        { href: '/kalam-qanun', label: 'كلام قانون' },
        { href: '/bayn-albayt-walshoghl', label: 'بين البيت والشغل' },
        { href: '/hikayat-settat', label: 'حكايات ستات' },
        { href: '/ala-alhamesh', label: 'على الهامش' },
        { href: '/horayat-sahafiya', label: 'الحوارات الصحفية' },


        // { href: '/infographic', label: 'إنفوجرافيك' },
    ]

    const breakingNews = [
        "الولاية التعليمية تثبت للحاضن بقوة القانون فور الطلاق دون حاجة لأحكام قضائية.",
        "مباحث الإنترنت تحذر من عقوبات رادعة لجرائم التزييف العميق وصناعة المحتوى المفبرك بالذكاء الاصطناعي.",
        "مطالبات برلمانية وقانونية واسعة بإقرار قانون موحد صارم لمناهضة العنف الأسري والجسدي ضد المرأة.",
        "وزارة التضامن الاجتماعي تعلن زيادة التمويل الممنوح لمشروعات التمكين الاقتصادي للمرأة المعيلة.",
        "إطلاق برنامج تدريبي وطني شامل لمحو الأمية الهجائية والرقيمة للسيدات بالتعاون مع منظمات المجتمع المدني."
    ]

    return (
        <nav className="w-full bg-[#1F2937] text-white font-bold relative z-40" dir="rtl" aria-label="التنقل الرئيسي للصحيفة">
            {/* 1. الطبقة العليا: الشريط الإخباري العاجل والوقت والشبكات الاجتماعية */}
            <div className="bg-[#B572E8] text-white text-xs ">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex items-center justify-between h-9 overflow-hidden">
                    {/* التاريخ والوقت */}
                    <div className="hidden md:flex items-center gap-4 shrink-0 font-medium text-white font-bold">
                        <span>🗓️ {currentDate}</span>
                        <span>⏰ {currentTime}</span>
                    </div>

                    {/* شريط الأخبار العاجلة الدوار */}
                    <div className="flex items-center flex-1 mx-4 overflow-hidden relative h-full">
                        <div className="bg-[#6551a0] text-white px-3 py-1 font-bold text-[10px] sm:text-xs tracking-wider shrink-0 flex items-center gap-1.5 z-10 shadow-md">
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
            <div className="border-b border-gray-800 py-5 bg-[#B572E8]">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4">
                    {/* اللوجو والعنوان */}
                    <Link to="/" className="flex items-center gap-4 group">
                        <div className="relative h-16 w-20 overflow-hidden rounded-full border border-gray-700 bg-white p-1 shadow-sm transition ">
                            <img
                                src="/imgs/newlogo-removebg-preview.png"
                                alt="شعار بوابة كحكة"
                                className="h-full w-full object-contain rounded-full"
                            />
                        </div>
                        <div className="text-right">
                            <h1 className="text-3xl font-black tracking-wide text-white font-serif ">
                                بوابة كحكة الإخبارية
                            </h1>
                            <p className="text-xs font-black tracking-normal text-white mt-1">
                                المنبر الإعلامي المستقل لقضايا المرأة والأسرة والمجتمع
                            </p>
                        </div>
                    </Link>


                </div>
            </div>

            {/* 3. الطبقة السفلى: التبويبات والبحث والبث المباشر */}
            <div className="sticky top-0 z-40 bg-[#B49EF4] font-bold border-b border-purple-400/20 shadow-sm">
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
                                        ? 'bg-[#6551a0] text-white shadow-sm font-black'
                                        : 'text-white hover:text-white hover:bg-white/20'
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
