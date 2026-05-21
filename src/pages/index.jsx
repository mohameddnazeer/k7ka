import { Link } from 'react-router-dom'
import { useState, Fragment } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import BackgroundSVG from '../components/BackgroundSVG'
import HeroHeader from '../components/HeroHeader'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'

const topicCards = [
    {
        title: 'التحقيقات',
        to: '/sawtoha-masmoua',
        text: 'إجراء تحقيقات ميدانية توسيع شبكة المصادر والاعتماد على الشهادات الحية وتجارب النساء الواقعية.',
        image: '/imgs/3.png',
        span: 'md:col-span-2'
    },
    {
        title: 'بودكاست',
        to: '/gowa-alkahka',
        text: 'مساحة صوتية لاستقبال قضايا الجمهور وإشراك المتابعات في اقتراح الموضوعات.',
        image: '/imgs/5.png',
        span: 'md:col-span-1'
    },
    {
        title: 'التقارير',
        to: '/ala-alhamesh',
        text: 'خمسة عشر تقريراً صحفياً يعالج قضايا المرأة بمهنية عالية.',
        image: '/imgs/1.png',
        span: 'md:col-span-1'
    },
    {
        title: 'الحوارات',
        to: '/hikayat-settat',
        text: 'خمسة حوارات معمقة تعبر عن صوت المرأة بعيداً عن التنميط.',
        image: '/imgs/2.png',
        span: 'md:col-span-1'
    },
    {
        title: 'كلام قانون',
        to: '/kalam-qanun',
        text: 'دعم تمكين المرأة إعلامياً وقانونياً وتعزيز الوعي بحقوقها.',
        image: '/imgs/6.png',
        span: 'md:col-span-1'
    },
    {
        title: 'الخطة المستقبلية',
        to: '/bara-alkahka',
        text: 'تطوير خطة النشر وفتح قنوات تواصل مباشرة وبروتوكول تعاون مع مؤسسة قضايا المرأة المصرية.',
        image: '/imgs/4.png',
        span: 'md:col-span-2' // Fixed alignment span to compress layout footprint
    },
]

const carouselCards = [
    {
        title: 'دليل البداية السريعة',
        text: 'ابدئي من المسار الذي يناسبك: قانوني، نفسي، أو اجتماعي في خطوات واضحة.',
        to: '/kalam-qanun',
    },
    {
        title: 'أكثر الملفات قراءة',
        text: 'مجموعة مختارة من التحقيقات التي لاقت تفاعلًا واسعًا من القراء.',
        to: '/sawtoha-masmoua',
    },
    {
        title: 'قصص من الواقع',
        text: 'حكايات من نساء يواجهن نفس الأسئلة يوميًا بين البيت والعمل.',
        to: '/hikayat-settat',
    },
    {
        title: 'مساحة للتأمل',
        text: 'مقالات تساعدك على فهم الضغوط الداخلية بدون لوم أو أحكام قاسية.',
        to: '/gowa-alkahka',
    },
    {
        title: 'حضور في المجتمع',
        text: 'قراءات عن تأثير الظهور العام والعمل المجتمعي على هوية المرأة.',
        to: '/bara-alkahka',
    },
]

const faqItems = [
    {
        question: 'ما الهدف الأساسي من منصة كحكه؟',
        answer: 'المنصة تركز على تقديم محتوى اجتماعي وإنساني يساعد في فهم أدوار المرأة داخل البيت وخارجه، مع أسلوب واضح وقريب من الواقع.',
    },
    {
        question: 'كيف أختار القسم المناسب لي؟',
        answer: 'يمكنك البدء من عناوين الأقسام أو من مسارات المحتوى المقترحة. كل صفحة لها وصف مختصر يساعدك على الوصول السريع لما تحتاجينه.',
    },
    {
        question: 'هل المحتوى قانوني موثوق؟',
        answer: 'قسم كلام قانون يقدم تبسيطًا للمفاهيم والحقوق بلغة سهلة، مع الحرص على الوضوح والدقة في الطرح.',
    },
    {
        question: 'هل يمكن قراءة المحتوى من الهاتف بسهولة؟',
        answer: 'نعم، الصفحة مصممة بشكل متجاوب بالكامل لتعمل بسلاسة على الموبايل والتابلت وأجهزة الكمبيوتر.',
    },
    {
        question: 'ما الفرق بين جوه الكحكة وبره الكحكة؟',
        answer: 'جوه الكحكة يركز على المشاعر والصراعات الداخلية، بينما بره الكحكة يهتم بالحضور في المجتمع والعمل العام وتأثيره على الهوية.',
    },
]

export default function Home() {
    const [openFaqIndex, setOpenFaqIndex] = useState(0)
    const [emblaRef, emblaApi] = useEmblaCarousel({
        direction: 'rtl',
        align: 'start',
        containScroll: 'trimSnaps',
    })

    const scrollCarousel = (direction) => {
        if (!emblaApi) return
        if (direction === 'next') {
            emblaApi.scrollNext()
            return
        }
        emblaApi.scrollPrev()
    }

    return (
        <div className="relative min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-brand-secondary/20 selection:text-brand-ink" dir="rtl">
            <BackgroundSVG />
            <NavBar />
            
            {/* Reduced dynamic space gaps from space-y-36 to space-y-24 */}
            <main className="relative z-10 mx-auto w-full px-4 pb-20 sm:px-6 lg:px-12 space-y-24 pt-4 max-w-7xl">
                
                {/* Unified Hero Header Container */}
                <div className="space-y-12">
                    <HeroHeader />
                    <section className="relative px-4 max-w-4xl mx-auto text-center space-y-6">
                        <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/80 px-3 py-1 backdrop-blur-md shadow-sm">
                            <span className="flex h-1.5 w-1.5 rounded-full bg-brand-secondary animate-pulse"></span>
                            <span className="text-[11px] font-bold text-slate-600 tracking-wide">أهلاً بكِ في مساحتكِ الخاصة</span>
                        </div>
                        <div className="mx-auto max-w-3xl space-y-4 text-base sm:text-lg text-slate-600 font-medium leading-relaxed">
                            <p>
                                كحكة مساحة تحريرية فريدة تجمع التحقيقات الميدانية والقصص الإنسانية والمعرفة العملية في قالب بصري حديث يساعدك على استكشاف المحتوى بسلاسة ووضوح.
                            </p>
                        </div>
                        <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
                            <Link to="/alaaqa" className="rounded-xl bg-brand-ink text-white px-6 py-3 text-sm font-bold shadow-lg shadow-brand-ink/10 transition-all duration-300 hover:bg-brand-secondary hover:shadow-brand-secondary/20 hover:-translate-y-0.5 outline-none">
                                ابدئي من الملف الرئيسي
                            </Link>
                            <Link to="/hikayat-settat" className="rounded-xl bg-white border border-slate-200 text-slate-700 px-6 py-3 text-sm font-bold transition-all duration-300 hover:bg-slate-50 hover:border-slate-300 hover:-translate-y-0.5 outline-none">
                                اكتشفي الحكايات
                            </Link>
                        </div>
                    </section>
                </div>

                {/* 2. سيكشن أهداف المشروع */}
                <section className="grid items-center gap-8 lg:grid-cols-12">
                    <div className="lg:col-span-7 space-y-6 order-2 lg:order-1">
                        <div className="space-y-1">
                            <span className="text-[11px] font-black tracking-widest text-brand-secondary uppercase bg-brand-secondary/10 px-2.5 py-0.5 rounded">رؤيتنا ورسالتنا</span>
                            <h2 className="text-2xl font-black text-brand-ink sm:text-4xl tracking-tight">أهداف نسعى لتحقيقها معاً</h2>
                        </div>
                        
                        <div className="grid gap-3.5 sm:grid-cols-2">
                            {[
                                { title: 'المعالجة المهنية', text: 'نشر الوعى الكامل بقضايا المرأة المعاصرة عبر أطروحات صحفية تتسم بالمصداقية والعمق.' },
                                { title: 'التحقيقات الحية', text: 'تقديم محتوى توعوى وتحليلى رصين يعتمد كلياً على النزول للميدان والتقاط القصص المنسية.' },
                                { title: 'التمكين الشامل', text: 'دعم حضور المرأة وإبراز فاعليتها إعلامياً وقانونياً وتعزيز الوعي بحقوقها اليومية.' },
                                { title: 'كسر القوالب', text: 'خلق منصة صحفية حرة ومستقلة تعبر عن صوت المرأة الواقعي بعيداً عن أشكال التنميط التقليدي.' }
                            ].map((target, idx) => (
                                <div key={idx} className="group rounded-xl bg-white border border-slate-100 p-5 shadow-sm transition-all duration-300 hover:border-brand-secondary/30 hover:shadow-md">
                                    <div className="mb-2 flex h-7 w-7 items-center justify-center rounded-lg bg-slate-50 text-brand-secondary text-xs font-black group-hover:bg-brand-secondary group-hover:text-white transition-colors duration-300">
                                        {idx + 1} ٠ 
                                    </div>
                                    <h3 className="text-base font-bold text-brand-ink mb-0.5">{target.title}</h3>
                                    <p className="text-xs leading-relaxed text-slate-500 font-medium">{target.text}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="lg:col-span-5 relative order-1 lg:order-2 flex justify-center">
                        <div className="absolute -inset-4 bg-gradient-to-tr from-brand-secondary/5 to-brand-accent/5 rounded-full blur-2xl -z-10"></div>
                        <div className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-white to-slate-50 p-6 border border-slate-200/60 shadow-md w-[80%] aspect-square flex items-center justify-center group">
                            <img 
                                src="/imgs/7.png" 
                                alt="كحكة Logo" 
                                className="w-full h-full object-contain filter drop-shadow-md transition-transform duration-500 group-hover:scale-105"
                            />
                        </div>
                    </div>
                </section>

                {/* 3. سيكشن الفيديو */}
                <section className="relative overflow-hidden rounded-2xl bg-brand-ink text-white shadow-xl p-6 sm:p-10 lg:p-12">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(var(--brand-secondary-rgb),0.1),transparent_50%)]"></div>
                    <div className="grid items-center gap-8 lg:grid-cols-12 relative z-10">
                        <div className="lg:col-span-5 space-y-4">
                            <span className="inline-block text-[11px] font-black tracking-widest text-brand-accent uppercase bg-white/10 px-2.5 py-0.5 rounded">الإنتاج البصري والسمعي</span>
                            <h2 className="text-2xl font-black tracking-tight sm:text-4xl leading-tight">قوة المحتوى المرئي في نقل الواقع</h2>
                            <p className="text-sm sm:text-base text-slate-300 font-medium leading-relaxed">
                                نؤمن تماماً بأن الصورة والصوت هما أقصر الطرق لملامسة وجدان المتلقي. نأخذكِ خلف كواليس الأرقام والبيانات الجافة، لنحولها معاً إلى قصص إنسانية وثائقية تنبض بالحياة.
                            </p>
                            <div className="flex flex-wrap gap-2.5 pt-2">
                                <Link to="/sawtoha-masmoua" className="rounded-lg bg-brand-secondary text-white font-bold px-5 py-2.5 text-xs shadow-md transition hover:bg-brand-secondary/90 outline-none">
                                    متابعة ملف التحقيقات
                                </Link>
                                <Link to="/gowa-alkahka" className="rounded-lg border border-white/20 bg-white/5 font-bold px-5 py-2.5 text-xs transition hover:bg-white/10 outline-none">
                                    استمعي للبودكاست
                                </Link>
                            </div>
                        </div>

                        <div className="lg:col-span-7">
                            <div className="overflow-hidden rounded-xl border border-white/10 bg-black/40 shadow-xl">
                                <video 
                                    controls 
                                    className="w-full aspect-video object-cover"
                                    poster="/imgs/newlogo.png"
                                >
                                    <source src="/videos/video.mp4" type="video/mp4" />
                                </video>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 4. سيكشن الجمهور المستهدف */}
                <section className="space-y-6">
                    <div className="max-w-xl mx-auto text-center">
                        <span className="text-[11px] font-black tracking-widest text-slate-400 uppercase">لمن نكتب؟</span>
                        <h2 className="text-2xl font-black text-brand-ink tracking-tight">الجمهور المستهدف وشراكة الوعي</h2>
                    </div>
                    
                    <div className="grid gap-0 rounded-2xl overflow-hidden border border-slate-200/80 bg-white shadow-sm md:grid-cols-2 divide-y md:divide-y-0 md:divide-x md:divide-x-reverse divide-slate-100">
                        <div className="p-6 sm:p-8 space-y-3 hover:bg-slate-50/40 transition-colors duration-300">
                            <div className="inline-flex items-center justify-center rounded-lg bg-brand-secondary/10 text-brand-secondary px-2.5 py-0.5 text-xs font-bold">الحاضرة دائماً</div>
                            <h3 className="text-xl font-black text-brand-ink">الجمهور المستهدف الأساسي</h3>
                            <p className="text-sm leading-relaxed text-slate-600 font-medium">
                                النساء والسيدات الشغوفات من سن ١٨ إلى ٤٥ عاماً، اللواتي يبحثن عن مساحات آمنة وحرة ومستقلة تعبر عن تفاصيل واقعهن اليومي المعاش.
                            </p>
                        </div>
                        <div className="p-6 sm:p-8 space-y-3 hover:bg-slate-50/40 transition-colors duration-300">
                            <div className="inline-flex items-center justify-center rounded-lg bg-brand-accent/10 text-brand-accent px-2.5 py-0.5 text-xs font-bold">شركاء التغيير</div>
                            <h3 className="text-xl font-black text-brand-ink">الجمهور المستهدف الثانوي</h3>
                            <p className="text-sm leading-relaxed text-slate-600 font-medium">
                                الباحثون والمهتمون بقضايا الجندر، صناع القرار والرأي العام، الإعلاميون والحقوقيون الساعون دوماً لتطوير بيئات مجتمعية أكثر شمولاً وعدالة.
                            </p>
                        </div>
                    </div>
                </section>

                {/* 5. سيكشن الأقسام الرئيسية */}
                <section className="space-y-8">
                    <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 border-b border-slate-200 pb-4">
                        <div className="space-y-1">
                            <span className="text-[11px] font-black tracking-widest text-brand-secondary uppercase">أبواب تحريرية</span>
                            <h2 className="text-2xl font-black text-brand-ink tracking-tight sm:text-3xl">استكشفي الأقسام الرئيسية</h2>
                        </div>
                        <p className="text-sm text-slate-500 font-medium max-w-sm">
                            كل نافذة تحريرية صُممت بعناية لتأخذكِ في رحلة استكشافية غنية بمحتوى صحفي متخصص.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
                        {topicCards.map((card) => (
                            <Link
                                key={card.title}
                                to={card.to}
                                className={`group flex flex-col justify-between overflow-hidden rounded-xl bg-white border border-slate-200/60 shadow-sm transition-all duration-300 hover:shadow-md ${card.span}`}
                            >
                                <div className="space-y-3">
                                    <div className="relative aspect-[21/9] md:aspect-video w-full overflow-hidden bg-slate-50">
                                        <img 
                                            src={card.image || '/imgs/newlogo.png'} 
                                            alt={card.title}
                                            className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-102"
                                            loading="lazy"
                                        />
                                    </div>
                                    <div className="px-5 pt-1">
                                        <h3 className="text-lg font-black text-brand-ink group-hover:text-brand-secondary transition-colors duration-200">{card.title}</h3>
                                        <p className="mt-1 text-xs leading-relaxed text-slate-500 font-medium line-clamp-2">{card.text}</p>
                                    </div>
                                </div>
                                
                                <div className="px-5 pb-5 pt-3">
                                    <div className="inline-flex items-center gap-1 text-xs font-black text-brand-secondary group-hover:gap-2 transition-all duration-300">
                                        <span>تصفحي الملف التحريري</span>
                                        <svg viewBox="0 0 24 24" className="h-3 w-3 transition-transform duration-300 group-hover:-translate-x-0.5" fill="none" stroke="currentColor" strokeWidth="3">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                                        </svg>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </section>

                {/* 6. سيكشن مسارات سريعة */}
                <section className="space-y-6">
                    <div className="flex items-center justify-between border-b border-slate-200 pb-3">
                        <div className="flex items-center gap-2">
                            <div className="h-1.5 w-1.5 rounded-full bg-brand-accent"></div>
                            <h2 className="text-xl font-black text-brand-ink sm:text-2xl tracking-tight">مسارات قراءة سريعة</h2>
                        </div>
                        <div className="flex gap-1">
                            <button
                                type="button"
                                onClick={() => scrollCarousel('prev')}
                                className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-white border border-slate-200 text-slate-600 transition hover:bg-brand-ink hover:text-white focus:outline-none"
                                aria-label="السابق"
                            >
                                <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="3">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                                </svg>
                            </button>
                            <button
                                type="button"
                                onClick={() => scrollCarousel('next')}
                                className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-white border border-slate-200 text-slate-600 transition hover:bg-brand-ink hover:text-white focus:outline-none"
                                aria-label="التالي"
                            >
                                <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="3">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                                </svg>
                            </button>
                        </div>
                    </div>

                    <div className="relative overflow-hidden" ref={emblaRef}>
                        <div className="flex gap-4">
                            {carouselCards.map((card) => (
                                <article
                                    key={card.title}
                                    className="min-w-0 flex-[0_0_85%] sm:flex-[0_0_45%] lg:flex-[0_0_28%] rounded-xl bg-white border border-slate-200/60 p-5 shadow-sm flex flex-col justify-between group transition-all duration-300 hover:border-slate-300"
                                >
                                    <div className="space-y-1.5">
                                        <h3 className="text-base font-black text-brand-ink group-hover:text-brand-secondary transition-colors duration-200">{card.title}</h3>
                                        <p className="text-xs leading-relaxed text-slate-500 font-medium">{card.text}</p>
                                    </div>
                                    <Link
                                        to={card.to}
                                        className="mt-4 inline-flex items-center justify-center rounded-lg bg-slate-50 border border-slate-100 px-3 py-2 text-xs font-black text-brand-ink transition hover:bg-brand-secondary hover:text-white focus:outline-none"
                                    >
                                        افتحي المسار المختصر
                                    </Link>
                                </article>
                            ))}
                        </div>
                    </div>
                </section>

                {/* 7. سيكشن سؤال وجواب */}
                <section className=" mx-auto space-y-6">
                    <div className="text-center">
                        <span className="text-[11px] font-black tracking-widest text-brand-secondary uppercase">الأسئلة الشائعة</span>
                        <h2 className="text-2xl font-black text-brand-ink tracking-tight">دليل إجابات كحكة الفوري</h2>
                    </div>

                    <div className="rounded-xl border border-slate-200/80 bg-white shadow-sm overflow-hidden divide-y divide-slate-100">
                        {faqItems.map((item, index) => {
                            const isOpen = openFaqIndex === index;
                            return (
                                <Fragment key={item.question}>
                                    <article className="transition-colors duration-200">
                                        <button
                                            type="button"
                                            onClick={() => setOpenFaqIndex(isOpen ? -1 : index)}
                                            className="flex w-full items-center justify-between gap-4 px-5 py-4 text-right font-black text-brand-ink text-sm sm:text-base focus:outline-none hover:bg-slate-50/50"
                                            aria-expanded={isOpen}
                                        >
                                            <span className={isOpen ? "text-brand-secondary transition-colors" : ""}>{item.question}</span>
                                            <span
                                                className={`inline-flex h-5 w-5 shrink-0 items-center justify-center rounded border text-[8px] font-black transition-all duration-200 ${
                                                    isOpen 
                                                        ? 'bg-brand-ink border-transparent text-white rotate-180' 
                                                        : 'bg-slate-50 border-slate-200 text-slate-500'
                                                }`}
                                            >
                                                {isOpen ? '▲' : '▼'}
                                            </span>
                                        </button>
                                        
                                        <div 
                                            className={`transition-all duration-200 ease-in-out overflow-hidden ${
                                                isOpen ? 'max-h-[300px]' : 'max-h-0'
                                            }`}
                                        >
                                            <div className="px-5 pb-4 pt-0.5 text-slate-600 font-medium text-xs sm:text-sm leading-relaxed bg-slate-50/40">
                                                {item.answer}
                                            </div>
                                        </div>
                                    </article>
                                </Fragment>
                            )
                        })}
                    </div>
                </section>
            </main>
            
            <Footer />
        </div>
    )
}