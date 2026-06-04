import { useState, useEffect, useRef } from 'react'
import { useLocation } from 'react-router-dom'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import BackgroundSVG from '../components/BackgroundSVG'

// 23 Infographic images data definitions (1 to 23)
const infographicsData = Array.from({ length: 23 }, (_, index) => {
    const displayId = index + 1
    const fileId = 50 + index
    return {
        id: displayId,
        src: `/imgs/infographic/${fileId}.jpeg`,
        title: `إنفوجرافيك كحكة - ملف رقم ${displayId}`,
        category: displayId % 2 === 0 ? "قضايا مجتمعية" : "حقوق المرأة والأسرة",
        desc: `رسم توضيحي إحصائي مبسط يسلط الضوء على البيانات، القوانين والمفاهيم التوعوية الهامة للمجتمع.`
    }
})

export default function InfographicPage() {
    const location = useLocation()
    const [activeIndex, setActiveIndex] = useState(0)
    const [isPlaying, setIsPlaying] = useState(false)
    const [copiedId, setCopiedId] = useState(null)
    const sliderRef = useRef(null)

    // Handle deep linking / routing to a specific infographic ID from URL
    useEffect(() => {
        const queryParams = new URLSearchParams(location.search || window.location.hash.split('?')[1] || '')
        const idParam = queryParams.get('id')
        if (idParam) {
            const parsedId = parseInt(idParam, 10)
            const index = infographicsData.findIndex(item => item.id === parsedId)
            if (index !== -1) {
                setActiveIndex(index)
                // Smooth scroll to slider on initial load if query parameter exists
                setTimeout(() => {
                    sliderRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' })
                }, 100)
            }
        }
    }, [location])

    // Autoplay slider logic
    useEffect(() => {
        if (!isPlaying) return

        const timer = setInterval(() => {
            setActiveIndex(prevIndex => (prevIndex + 1) % infographicsData.length)
        }, 4000)

        return () => clearInterval(timer)
    }, [isPlaying])

    const handlePrev = () => {
        setIsPlaying(false)
        setActiveIndex(prevIndex => (prevIndex - 1 + infographicsData.length) % infographicsData.length)
    }

    const handleNext = () => {
        setIsPlaying(false)
        setActiveIndex(prevIndex => (prevIndex + 1) % infographicsData.length)
    }

    const selectImage = (index) => {
        setIsPlaying(false)
        setActiveIndex(index)
        sliderRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' })
    }

    const currentImage = infographicsData[activeIndex]

    // Handle copy link to specific infographic
    const handleCopyLink = (id) => {
        const shareUrl = `${window.location.origin}${window.location.pathname}#/infographic?id=${id}`
        navigator.clipboard?.writeText(shareUrl).then(() => {
            setCopiedId(id)
            setTimeout(() => setCopiedId(null), 3000)
        }).catch(err => {
            console.error('Failed to copy text: ', err)
        })
    }

    return (
        <div className="relative min-h-screen bg-[#faf9f6] text-[#1F2937] overflow-hidden" dir="rtl">
            <BackgroundSVG />
            <NavBar />

            <main className="relative z-10 mx-auto w-full max-w-7xl px-4 pb-24 pt-16 sm:px-8">
                {/* Header Section */}
                <header className="mb-12 text-center animate-fadeIn">
                    <div className="mb-4 inline-block">
                        <span className="bg-[#A91D22]/10 text-[#A91D22] text-xs font-black px-4 py-1.5 rounded-full uppercase tracking-wider">
                            الصحافة البصرية
                        </span>
                    </div>
                    <h1 className="mb-4 text-4xl font-black text-brand-ink sm:text-6xl tracking-tight font-serif">
                        إنفوجرافيك كحكة
                    </h1>
                    <p className="mx-auto max-w-2xl text-lg leading-relaxed text-slate-600 font-medium">
                        عروض بصرية ورسوم توضيحية مبسطة تختصر الإحصائيات، الأرقام والتشريعات المتعلقة بقضايا المرأة والطفل والأسرة لتقديم المعلومة بوضوح ودقة.
                    </p>
                </header>

                {/* Main Carousel Display */}
                <section ref={sliderRef} className="max-w-4xl mx-auto mb-16 animate-fadeInUp">
                    <div className="bg-white rounded-3xl border border-slate-100 shadow-xl overflow-hidden p-6 sm:p-8 relative">
                        
                        {/* Slide Indicator badge */}
                        <div className="absolute top-8 right-8 z-10 bg-black/60 backdrop-blur-xs text-white text-xs font-bold px-3 py-1 rounded-full">
                            {activeIndex + 1} / {infographicsData.length}
                        </div>

                      

                        {/* Image Viewer Container */}
                        <div className="relative aspect-[4/5] sm:aspect-[16/10] w-full max-h-[600px] overflow-hidden bg-slate-50 rounded-2xl flex items-center justify-center group mb-6 border border-slate-100">
                            <img
                                src={currentImage.src}
                                alt={currentImage.title}
                                className="h-full w-full object-contain transition-all duration-500 ease-out"
                            />

                            {/* Carousel Navigation Arrows */}
                            <button
                                onClick={handlePrev}
                                className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/90 hover:bg-[#A91D22] hover:text-white text-slate-800 rounded-full shadow-lg flex items-center justify-center transition-all duration-200 z-10 focus:outline-none"
                                aria-label="الصورة السابقة"
                            >
                                <span className="text-xl font-bold">→</span>
                            </button>
                            <button
                                onClick={handleNext}
                                className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/90 hover:bg-[#A91D22] hover:text-white text-slate-800 rounded-full shadow-lg flex items-center justify-center transition-all duration-200 z-10 focus:outline-none"
                                aria-label="الصورة التالية"
                            >
                                <span className="text-xl font-bold">←</span>
                            </button>
                        </div>

                        {/* Active Slide Info & Actions Layout */}
                        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 border-t border-slate-100 pt-6">
                            <div className="space-y-2 max-w-xl">
                                <h2 className="text-2xl font-black text-slate-850 font-serif leading-snug">
                                    {currentImage.title}
                                </h2>
                                <p className="text-sm text-slate-500 font-medium">
                                    {currentImage.desc}
                                </p>
                            </div>

                            {/* Action Buttons */}
                            <div className="flex flex-wrap items-center gap-3 shrink-0">
                                {/* Autoplay Switch */}
                                <button
                                    onClick={() => setIsPlaying(!isPlaying)}
                                    className={`px-4 py-2.5 rounded-xl text-xs font-bold transition-all duration-200 flex items-center gap-2 border shadow-xs ${
                                        isPlaying 
                                            ? 'bg-amber-500 border-amber-600 text-white hover:bg-amber-600' 
                                            : 'bg-white border-slate-200 text-slate-700 hover:bg-slate-50'
                                    }`}
                                >
                                    <span>{isPlaying ? '⏸️ إيقاف التدوير' : '▶️ تشغيل تلقائي'}</span>
                                </button>

                                {/* Share Link */}
                                <button
                                    onClick={() => handleCopyLink(currentImage.id)}
                                    className="px-4 py-2.5 bg-white border border-slate-200 hover:bg-slate-50 text-slate-700 rounded-xl text-xs font-bold transition-all duration-200 flex items-center gap-2 shadow-xs"
                                >
                                    <span>🔗 {copiedId === currentImage.id ? 'تم نسخ الرابط!' : 'مشاركة'}</span>
                                </button>

                                {/* Download Image */}
                                <a
                                    href={currentImage.src}
                                    download={`k7ka-infographic-${currentImage.id}.jpeg`}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="px-4 py-2.5 bg-[#A91D22] hover:bg-[#8f1519] text-white rounded-xl text-xs font-bold transition-all duration-200 flex items-center gap-2 shadow-sm"
                                >
                                    <span>📥 تحميل الإنفوجرافيك</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Grid Gallery Title */}
                <div className="flex items-center gap-2 border-b border-gray-300 pb-3 mb-8 max-w-6xl mx-auto">
                    <span className="w-4 h-4 bg-[#A91D22] block"></span>
                    <h2 className="text-2xl font-black tracking-tight text-slate-800 font-serif">كل الإنفوجرافيكس ({infographicsData.length})</h2>
                </div>

                {/* Grid Gallery */}
                <section className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
                    {infographicsData.map((item, index) => {
                        const isActive = index === activeIndex
                        return (
                            <div
                                key={item.id}
                                onClick={() => selectImage(index)}
                                className={`bg-white rounded-2xl border overflow-hidden p-3 shadow-xs cursor-pointer transition-all duration-300 hover:shadow-lg hover:-translate-y-1 ${
                                    isActive 
                                        ? 'border-2 border-[#A91D22] ring-4 ring-[#A91D22]/10 scale-98' 
                                        : 'border-slate-200/80 hover:border-[#A91D22]/50'
                                }`}
                            >
                                <div className="aspect-[4/5] bg-slate-50 rounded-xl overflow-hidden relative mb-3 group">
                                    <img
                                        src={item.src}
                                        alt={item.title}
                                        className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                                        loading="lazy"
                                    />
                                    {isActive && (
                                        <div className="absolute inset-0 bg-[#A91D22]/10 flex items-center justify-center">
                                            <span className="bg-[#A91D22] text-white text-[10px] font-bold px-2 py-1 rounded-md">معروض حالياً</span>
                                        </div>
                                    )}
                                </div>
                                <div className="text-right space-y-1">
                                    <h3 className={`text-xs font-black truncate ${isActive ? 'text-[#A91D22]' : 'text-slate-800'}`}>
                                        إنفوجرافيك رقم {item.id}
                                    </h3>
                                </div>
                            </div>
                        )
                    })}
                </section>
            </main>

            <Footer />
        </div>
    )
}
