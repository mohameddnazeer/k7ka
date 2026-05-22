import { useEffect, useState, useCallback } from 'react'
import { Link } from 'react-router-dom'
import useEmblaCarousel from 'embla-carousel-react'

const heroSlides = [
    {
        title: 'كحكة.. شغل وبيت وحياة',
        subtitle: 'كحكة هي تلك اللحظة التي تلم فيها المرأة شتات يومها لتبدأ رحلتها.. نحن هنا لتوثيق هذه الرحلة، بكل ما فيها من تحديات العمل، دفء البيت، وتفاصيل الحياة التي لا يراها الجميع.',
        image: '/imgs/carousel/Eradicating-female-illiteracy.jpeg',
        to: '/',
        badge: 'مواجهة الأمية لتمكين المرأة'
    },
    {
        title: 'عام الأمومة الأول والتحولات',
        subtitle: 'بين دفء الصغير الملتصق بالقلب وضغوط المهام اليومية المعقدة خلف الجدران المغلقة.',
        image: '/imgs/carousel/First-year-of-motherhood.jpeg',
        to: '/sana-ola-omoma',
        badge: 'قصص وحكايات حية'
    },
    {
        title: 'دوامة الأعمال المنزلية الرتيبة',
        subtitle: 'المجهود الخفي غير المرئي لإبقاء تفاصيل الحياة متزنة ومنظمة ومستمرة كل يوم بسلام.',
        image: '/imgs/carousel/house-cleaning-routine.jpeg',
        to: '/',
        badge: 'المجهود المنزلي الخفي'
    },
    {
        title: 'صراعات الرحلة اليومية للمواصلات',
        subtitle: 'المعاناة الصامتة للمرأة في الفضاءات العامة والمواصلات بحثاً عن مساحة آمنة ومريحة للوصول.',
        image: '/imgs/carousel/suffering-of-women-on-public-transportation.jpeg',
        to: '/bayn-alzahm-walkarama',
        badge: 'الفضاء العام والآمن'
    },
    {
        title: 'بطلات خارقات خلف الأبواب المغلقة',
        subtitle: 'أمهات ذوي الهمم.. عطاء استثنائي مستمر ومقدس يصنع المعجزات اليومية دون أي صخب إعلامي.',
        image: '/imgs/carousel/The-mother-of-the-disabled-a-superhero-no-one-sees.jpeg',
        to: '/',
        badge: 'أمهات استثنائيات'
    },
    {
        title: 'معايير الجمال والهوس العصري',
        subtitle: 'تفكيك شامل وجريء لكافة الضغوط البصرية المفروضة مجتمعياً على ملامح المرأة وهويتها الطبيعية.',
        image: '/imgs/carousel/Women-obsession-with-beauty.jpeg',
        to: '/',
        badge: 'تفكيك الصور النمطية'
    }
]

export default function HeroHeader() {
    const [emblaRef, emblaApi] = useEmblaCarousel({
        direction: 'rtl',
        loop: true,
        align: 'start',
        skipSnaps: false
    })
    
    const [selectedIndex, setSelectedIndex] = useState(0)

    const onSelect = useCallback(() => {
        if (!emblaApi) return
        setSelectedIndex(emblaApi.selectedScrollSnap())
    }, [emblaApi])

    useEffect(() => {
        if (!emblaApi) return
        emblaApi.on('select', onSelect)
        
        const autoplay = setInterval(() => {
            emblaApi.scrollNext()
        }, 6000) // Transitions fluidly every 6 seconds

        return () => {
            clearInterval(autoplay)
            emblaApi.off('select', onSelect)
        }
    }, [emblaApi, onSelect])

    return (
        <header className="relative w-full overflow-hidden rounded-2xl border border-slate-200/40 shadow-lg bg-slate-950 mb-6" dir="rtl">
            
            {/* Full Screen View Window Wrapper */}
            <div className="overflow-hidden relative h-[75vh] sm:h-[80vh] w-full" ref={emblaRef}>
                <div className="flex h-full w-full">
                    {heroSlides.map((slide, index) => (
                        <div key={index} className="min-w-0 flex-[0_0_100%] h-full relative group">
                            
                            {/* Backdrop Immersive Image asset */}
                            <img 
                                src={slide.image} 
                                alt={slide.title} 
                                className="w-full h-full object-cover select-none transform scale-100 transition-transform duration-[6000ms] ease-out"
                                draggable="false"
                            />
                            
                            {/* Linear Gradient Scrim Layer for premium readability text matching */}
                            <div className="absolute inset-0 bg-gradient-to-l from-black/90 via-black/40 to-transparent pointer-events-none" />
                            <div className="absolute inset-0 bg-black/10 pointer-events-none" />

                            {/* Floating Metadata Container Content Layout */}
                            <div className="absolute inset-0 flex flex-col justify-center items-start px-6 sm:px-12 lg:px-20 max-w-3xl space-y-6 text-white z-20">
                                
                                {/* Top Badging Metadata */}
                                <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-black/40 backdrop-blur-md px-3 py-1 shadow-sm">
                                    <span className="relative flex h-2 w-2">
                                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-accent opacity-75"></span>
                                        <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-accent"></span>
                                    </span>
                                    <span className="text-xs font-bold tracking-wide text-slate-100">
                                        منصة حكاياتها.. تصل صوتها • {slide.badge}
                                    </span>
                                </div>
                                
                                {/* Primary Massive Arabic Headline */}
                                <h1 className="text-4xl font-black leading-[1.15] sm:text-5xl lg:text-6xl text-white drop-shadow-sm tracking-tight">
                                    {index === 0 ? (
                                        <>
                                            كحكة..<br />
                                            <span className="text-brand-secondary bg-clip-text">شغل وبيت وحياة</span>
                                        </>
                                    ) : (
                                        slide.title
                                    )}
                                </h1>
                                
                                {/* Context Sub-paragraphs description text layout */}
                                <p className="text-sm sm:text-base leading-relaxed text-slate-200/90 font-medium max-w-xl drop-shadow-sm">
                                    {slide.subtitle}
                                </p>
                                
                                {/* Interactive Trigger Target Action Button Layer */}
                                <div className="pt-2">
                                    <Link 
                                        to={slide.to} 
                                        className="inline-flex items-center justify-center rounded-xl bg-white text-slate-950 px-6 py-3.5 text-xs font-black shadow-lg shadow-black/20 hover:bg-brand-secondary hover:text-white transition-all duration-300 hover:-translate-y-0.5 outline-none"
                                    >
                                        <span>ابدئي من الملف الرئيسي</span>
                                    </Link>
                                </div>

                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Absolute Placed Carousel Indicators Controller Overlay */}
            <div className="absolute bottom-6 left-6 right-6 z-30 flex items-center justify-between pointer-events-none">
                
                {/* Horizontal Bullet Navigation Pagination Dots */}
                <div className="flex items-center gap-1.5 pointer-events-auto bg-black/20 backdrop-blur-xs p-1.5 rounded-full">
                    {heroSlides.map((_, index) => (
                        <button
                            key={index}
                            type="button"
                            onClick={() => emblaApi && emblaApi.scrollTo(index)}
                            className={`h-1.5 rounded-full transition-all duration-300 focus:outline-none ${
                                selectedIndex === index 
                                    ? 'w-6 bg-white shadow-sm' 
                                    : 'w-1.5 bg-white/40 hover:bg-white/70'
                            }`}
                            aria-label={`الانتقال للوحة ${index + 1}`}
                        />
                    ))}
                </div>

                {/* Micro branding stamp tracking index view context */}
                <div className="hidden sm:block text-[10px] font-bold text-white/60 tracking-widest bg-black/30 backdrop-blur-md px-2.5 py-1 rounded-md border border-white/5">
                    ٠{selectedIndex + 1} / ٠{heroSlides.length}
                </div>

            </div>

        </header>
    )
}