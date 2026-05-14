import { Link, useLocation } from 'react-router-dom'
import { useEffect, useState } from 'react'

export default function NavBar() {
    const location = useLocation()
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    useEffect(() => {
        setIsMenuOpen(false)
    }, [location.pathname])

    const links = [
        { href: '/', label: 'الرئيسية' },
        { href: '/sawtoha-masmoua', label: 'التحقيقات' },
        { href: '/gowa-alkahka', label: 'بودكاست' },
        { href: '/ala-alhamesh', label: 'التقارير' },
        { href: '/hikayat-settat', label: 'الحوارات' },
        { href: '/kalam-qanun', label: 'كلام قانون' },
    ]

    return (
        <nav
            className="sticky top-0 z-50 mb-8 w-full border-b border-brand-purple/10 bg-white/95 shadow-[0_10px_30px_rgba(90,62,155,0.08)] backdrop-blur-md"
            dir="rtl"
            aria-label="التنقل الرئيسي"
        >
            <div className="mx-auto w-full px-4 py-3 sm:px-8">
                <div className="flex items-center justify-between gap-3">
                    <Link to="/" className="group inline-flex items-center transition-transform hover:scale-105 active:scale-95">
                        <div className="">
                             <div className="relative h-12 w-16 overflow-hidden rounded-full border-2 border-brand-purple/20 bg-white shadow-inner">
                                <img 
                                    src="/imgs/newlogo.png" 
                                    alt="كحكة Logo" 
                                    className="p-1 rounded-full h-full w-full object-contain"
                                />
                             </div>
                        </div>
                    </Link>
                    <div className="hidden sm:block">
                        <h1 className="text-sm font-bold tracking-wide text-brand-purpleMedium italic">كحكة.. شغل وبيت وحياة</h1>
                    </div>

                    <button
                        type="button"
                        onClick={() => setIsMenuOpen((prev) => !prev)}
                        className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-brand-purple/20 bg-brand-offwhite text-brand-purple transition hover:border-brand-pinkAccent hover:text-brand-pinkAccent md:hidden"
                        aria-expanded={isMenuOpen}
                        aria-controls="mobile-nav-menu"
                        aria-label={isMenuOpen ? 'إغلاق القائمة' : 'فتح القائمة'}
                    >
                        {isMenuOpen ? (
                            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 6l12 12M18 6L6 18" />
                            </svg>
                        ) : (
                            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M4 7h16M4 12h16M4 17h16" />
                            </svg>
                        )}
                    </button>
                </div>

                <div className="mt-3 hidden flex-wrap items-center justify-center gap-2 md:flex">
                    {links.map((link) => {
                        const isActive = location.pathname === link.href

                        return (
                            <Link
                                key={link.href}
                                to={link.href}
                                aria-current={isActive ? 'page' : undefined}
                                className={`rounded-full px-5 py-2 text-sm font-bold transition-all duration-300 ${
                                    isActive
                                        ? 'bg-brand-purple text-white shadow-[0_6px_16px_rgba(90,62,155,0.25)]'
                                        : 'text-brand-purple hover:bg-brand-purpleLight/20 hover:text-brand-purpleMedium'
                                }`}
                            >
                                {link.label}
                            </Link>
                        )
                    })}
                </div>

                {isMenuOpen ? (
                    <div
                        id="mobile-nav-menu"
                        className="no-scrollbar mt-3 -mx-1 flex flex-col gap-1 overflow-y-auto rounded-2xl border border-brand-brown/15 bg-white/70 p-2 md:hidden"
                    >
                        {links.map((link) => {
                            const isActive = location.pathname === link.href

                            return (
                                <Link
                                    key={link.href}
                                    to={link.href}
                                    aria-current={isActive ? 'page' : undefined}
                                    className={`rounded-xl px-3 py-2.5 text-sm font-bold transition ${
                                        isActive
                                            ? 'bg-brand-purple text-white'
                                            : 'text-brand-purple hover:bg-brand-purpleLight/20'
                                    }`}
                                >
                                    {link.label}
                                </Link>
                            )
                        })}
                    </div>
                ) : null}
            </div>
        </nav>
    )
}
