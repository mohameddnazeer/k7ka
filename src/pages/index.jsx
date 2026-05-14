import { Link } from 'react-router-dom'
import { useState } from 'react'
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
    },
    {
        title: 'بودكاست',
        to: '/gowa-alkahka',
        text: 'مساحة صوتية لاستقبال قضايا الجمهور وإشراك المتابعات في اقتراح الموضوعات.',
        image: '/imgs/5.png',
    },
    {
        title: 'التقارير',
        to: '/ala-alhamesh',
        text: 'خمسة عشر تقريراً صحفياً يعالج قضايا المرأة بمهنية عالية.',
        image: '/imgs/1.png',
    },
    {
        title: 'الحوارات',
        to: '/hikayat-settat',
        text: 'خمسة حوارات معمقة تعبر عن صوت المرأة بعيداً عن التنميط.',
        image: '/imgs/2.png',
    },
    {
        title: 'كلام قانون',
        to: '/kalam-qanun',
        text: 'دعم تمكين المرأة إعلامياً وقانونياً وتعزيز الوعي بحقوقها.',
        image: '/imgs/6.png',
    },
    {
        title: 'الخطة المستقبلية',
        to: '/bara-alkahka',
        text: 'تطوير خطة النشر وفتح قنوات تواصل مباشرة وبروتوكول تعاون مع مؤسسة قضايا المرأة المصرية.',
        image: '/imgs/4.png',
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
        <div className="relative min-h-screen overflow-hidden bg-brand-offwhite bg-hero-radial" dir="rtl">
            <BackgroundSVG />
                <NavBar />
                <main className="relative z-10 mx-auto w-full px-4 pb-16 sm:px-8">
                    <HeroHeader />

                    <section className="rounded-3xl border border-brand-purple/10 bg-white/90 p-6 text-center backdrop-blur sm:p-10">
                        <h2 className="mb-4 text-3xl font-black text-brand-purple sm:text-4xl">منصة أقرب لحياة النساء اليومية</h2>
                        <p className="mx-auto mb-4 max-w-3xl text-lg leading-9 text-brand-textDark/80 font-medium">
                            كحكة مساحة تحريرية تجمع التحقيقات، القصص، والمعرفة العملية في تصميم حديث يساعد القارئة على الوصول للمعلومة بسرعة ووضوح.
                        </p>
                        <p className="mx-auto mb-8 max-w-3xl text-lg leading-9 text-brand-textDark/80 font-medium">
                            استعرضي الملفات حسب احتياجك: من الحقوق والقانون إلى ضغوط الداخل والحضور في المجتمع، مع محتوى قابل للتطبيق في الحياة اليومية.
                        </p>
                        <div className="flex flex-wrap items-center justify-center gap-3">
                            <Link
                                to="/alaaqa"
                                className="rounded-full bg-brand-purple px-7 py-3 text-sm font-bold text-white transition hover:bg-brand-purpleMedium shadow-lg shadow-brand-purple/20"
                            >
                                ابدئي من الملف الرئيسي
                            </Link>
                            <Link
                                to="/hikayat-settat"
                                className="rounded-full border border-brand-purple px-7 py-3 text-sm font-bold text-brand-purple transition hover:bg-brand-purple hover:text-white"
                            >
                                اكتشفي الحكايات
                            </Link>
                        </div>
                    </section>

                    <section className="mt-10 overflow-hidden rounded-3xl border border-brand-purple/10 bg-white shadow-sm">
                        <div className="grid items-stretch md:grid-cols-2">
                            <div className="p-6 sm:p-10">
                                <h3 className="mt-4 text-3xl font-black text-brand-purple sm:text-4xl">أهداف المشروع</h3>
                                <div className="mt-5 space-y-4 text-base leading-relaxed text-brand-textDark/80 sm:text-lg">
                                    <p className="flex items-center gap-2">
                                        <span className="h-1.5 w-1.5 rounded-full bg-brand-purple"></span>
                                        نشر الوعى بقضايا المرأة من خلال معالجة صحفية مهنية
                                    </p>
                                    <p className="flex items-center gap-2">
                                        <span className="h-1.5 w-1.5 rounded-full bg-brand-purple"></span>
                                        تقديم محتوى توعوى وتحليلى يعتمد على التحقيقات والتقارير
                                    </p>
                                    <p className="flex items-center gap-2">
                                        <span className="h-1.5 w-1.5 rounded-full bg-brand-purple"></span>
                                        دعم تمكين المرأة إعلامياً وقانونياً
                                    </p>
                                    <p className="flex items-center gap-2">
                                        <span className="h-1.5 w-1.5 rounded-full bg-brand-purple"></span>
                                        خلق منصة صحفية تعبر عن صوت المرأة بعيداً عن التنميط
                                    </p>
                                </div>
                                <ul className="mt-8 grid gap-2 text-sm text-brand-textDark/70 sm:grid-cols-2">
                                    <li className="rounded-xl border border-brand-purple/10 bg-brand-offwhite px-3 py-2 flex items-center gap-2 transition hover:bg-brand-purple/5">
                                        <span className="h-2 w-2 rounded-full bg-brand-pinkAccent"></span>
                                        جمهورنا الأساسي: النساء (١٨-٤٥)
                                    </li>
                                    <li className="rounded-xl border border-brand-purple/10 bg-brand-offwhite px-3 py-2 flex items-center gap-2 transition hover:bg-brand-purple/5">
                                        <span className="h-2 w-2 rounded-full bg-brand-blueViolet"></span>
                                        تحقيقات ميدانية واقعية
                                    </li>
                                </ul>
                            </div>
                            <div className="relative min-h-[290px] bg-gradient-to-br from-brand-purpleLight/10 via-brand-blueViolet/5 to-brand-offwhite p-8">
                               <img 
                                    src="/imgs/7.png" 
                                    alt="كحكة Logo" 
                                    className="p-1 w-full h-full object-contain"
                                />
                            </div>
                        </div>
                    </section>

                    <section className="mt-10 overflow-hidden rounded-3xl border border-brand-purple/10 bg-brand-purpleLight/5">
                        <div className="grid items-stretch md:grid-cols-2">
                            <div className="relative min-h-[300px] overflow-hidden p-4 sm:p-6">
                                <div className="h-full w-full overflow-hidden rounded-2xl border border-brand-purple/10 bg-black shadow-inner">
                                    <video 
                                        controls 
                                        className="w-full h-full aspect-video object-cover"
                                        poster="/imgs/newlogo.png"
                                    >
                                        <source src="/videos/video.mp4" type="video/mp4" />
                                        المتصفح الخاص بك لا يدعم تشغيل الفيديو.
                                    </video>
                                </div>
                            </div>
                            <div className="p-6 sm:p-10 flex flex-col justify-center">
                                <h3 className="text-3xl font-black text-brand-purple">قوة المحتوى المرئي</h3>
                                <p className="mt-4 text-base leading-8 text-brand-textDark/80 sm:text-lg font-medium">
                                    نؤمن بأن الصورة والصوت هما أقصر الطرق لقلوب النساء. شاهدوا كيف نحول الأرقام والبيانات الصماء إلى قصص إنسانية تنبض بالحياة، وتصل للعالم بجودة صحفية استثنائية.
                                </p>
                                <div className="mt-8 flex flex-wrap gap-4">
                                    <Link
                                        to="/sawtoha-masmoua"
                                        className="rounded-full bg-brand-pinkAccent px-8 py-3 text-sm font-bold text-white transition hover:scale-105 shadow-lg shadow-brand-pinkAccent/20"
                                    >
                                        متابعة ملف التحقيقات
                                    </Link>
                                    <Link
                                        to="/gowa-alkahka"
                                        className="rounded-full bg-brand-blueViolet px-8 py-3 text-sm font-bold text-white transition hover:scale-105 shadow-lg shadow-brand-blueViolet/20"
                                    >
                                        استمعي للبودكاست
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className="mt-10 rounded-3xl border border-brand-purple/10 bg-white p-6 sm:p-10 shadow-sm">
                         <h3 className="mt-4 text-3xl font-black text-brand-purple sm:text-4xl text-center">الجمهور المستهدف</h3>
                        <div className="mt-8 grid gap-6 md:grid-cols-2">
                            <div className="rounded-2xl border border-brand-purple/10 bg-brand-purpleLight/5 p-6 text-center transition hover:bg-white hover:shadow-lg duration-300">
                                <h4 className="text-2xl font-black text-brand-purpleMedium">جمهور أساسي</h4>
                                <p className="mt-4 text-lg leading-relaxed text-brand-textDark/80 font-medium">النساء أو السيدات من سن ١٨ إلى ٤٥ عاماً، الباحثات عن مساحة تعبر عن واقعهن الحقيقي.</p>
                            </div>
                            <div className="rounded-2xl border border-brand-blueViolet/10 bg-brand-blueViolet/5 p-6 text-center transition hover:bg-white hover:shadow-lg duration-300">
                                <h4 className="text-2xl font-black text-brand-blueViolet">جمهور ثانوِى</h4>
                                <p className="mt-4 text-lg leading-relaxed text-brand-textDark/80 font-medium">المهتمون بقضايا المرأة، صناع الرأي، الإعلاميون، والحقوقيون الساعون للتوعية والتغيير.</p>
                            </div>
                        </div>
                    </section>

                    <section className="mt-10 rounded-3xl border border-brand-purple/10 bg-brand-purpleLight/5 p-5 sm:p-8">
                        <div className="mb-10 text-center">
                            <h3 className="mt-3 text-3xl font-black text-brand-purple sm:text-4xl text-center">استكشفي الأقسام الرئيسية</h3>
                            <p className="mt-2 text-base text-brand-textDark/60 sm:text-lg">
                                كل بطاقة تأخذكِ في رحلة استكشافية لمحتوى متخصص وفريد
                            </p>
                        </div>

                        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                            {topicCards.map((card) => (
                                <Link
                                    key={card.title}
                                    to={card.to}
                                    className="group block overflow-hidden rounded-2xl border border-brand-purple/10 bg-white shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:border-brand-purple/30"
                                >
                                    <div className="relative h-48 w-full overflow-hidden bg-brand-purpleLight/10">
                                        <img 
                                            src={card.image || '/imgs/newlogo.png'} 
                                            alt={card.title}
                                            className="transition-transform duration-500 group-hover:scale-110 w-full h-full object-cover"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-brand-purple/80 to-transparent flex items-end p-4 opacity-0 group-hover:opacity-100 transition-opacity">
                                            <span className="text-white font-bold text-sm">استكشفي الآن</span>
                                        </div>
                                    </div>
                                    <div className="p-6">
                                        <h4 className="mb-2 text-xl font-black text-brand-purpleMedium group-hover:text-brand-purple transition-colors">{card.title}</h4>
                                        <p className="text-sm leading-7 text-brand-textDark/70 font-medium line-clamp-2">{card.text}</p>
                                        <div className="mt-4 flex items-center text-sm font-bold text-brand-pinkAccent">
                                            <span>اقرئي المزيد</span>
                                            <svg viewBox="0 0 24 24" className="mr-1 h-4 w-4 transition-transform group-hover:-translate-x-1" fill="none" stroke="currentColor" strokeWidth="3">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                                            </svg>
                                        </div>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </section>

                    <section className="mt-10 rounded-3xl border border-brand-purple/10 bg-white p-5 sm:p-8 shadow-sm">
                        <div className="mb-8 text-center">
                            <h3 className="text-3xl font-black text-brand-purple">مسارات سريعة</h3>
                        </div>

                        <div className="relative">
                            <button
                                type="button"
                                onClick={() => scrollCarousel('prev')}
                                className="absolute right-1 top-1/2 z-10 inline-flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-brand-purple/10 bg-white/95 text-brand-purple shadow-lg transition hover:bg-brand-purple hover:text-white rotate-180"
                                aria-label="التحرك إلى البطاقات السابقة"
                            >
                                <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2.5">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                                </svg>
                            </button>

                            <button
                                type="button"
                                onClick={() => scrollCarousel('next')}
                                className="absolute left-1 top-1/2 z-10 inline-flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-brand-purple/10 bg-white/95 text-brand-purple shadow-lg transition hover:bg-brand-purple hover:text-white"
                                aria-label="التحرك إلى البطاقات التالية"
                            >
                                <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2.5">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                                </svg>
                            </button>

                            <div className="overflow-hidden px-8 sm:px-10" ref={emblaRef} aria-label="مسارات محتوى أفقية">
                                <div className="flex gap-4">
                                    {carouselCards.map((card) => (
                                        <article
                                            key={card.title}
                                            className="min-w-0 flex-[0_0_86%] rounded-3xl border border-brand-purple/10 bg-white p-6 shadow-sm transition-all duration-300 hover:shadow-lg sm:flex-[0_0_48%] lg:flex-[0_0_32%] group"
                                        >
                                            <h4 className="text-2xl font-black text-brand-purple">{card.title}</h4>
                                            <p className="mt-4 text-base leading-7 text-brand-textDark/80 font-medium">{card.text}</p>
                                            <Link
                                                to={card.to}
                                                className="mt-6 inline-flex rounded-full bg-brand-purple px-6 py-2.5 text-sm font-bold text-white transition hover:bg-brand-purpleMedium shadow-md shadow-brand-purple/20"
                                            >
                                                افتحي المسار
                                            </Link>
                                        </article>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className="mt-10 rounded-3xl border border-brand-purple/10 bg-white p-5 sm:p-8 shadow-sm">
                        <div className="mb-6 text-center">
                            <h3 className="mt-3 text-3xl font-black text-brand-purple sm:text-4xl">سؤال وجواب</h3>
                            <p className="mt-2 text-base text-brand-textDark/60 sm:text-lg">
                                إجابات سريعة على أهم تساؤلات المتابعين حول المنصة
                            </p>
                        </div>

                        <div className="space-y-4">
                            {faqItems.map((item, index) => (
                                <article
                                    key={item.question}
                                    className={`group overflow-hidden rounded-2xl border transition-all duration-300 ${
                                        openFaqIndex === index ? 'border-brand-purple/30 bg-brand-purpleLight/5 shadow-md' : 'border-brand-purple/10 bg-brand-offwhite hover:border-brand-purple/20'
                                    }`}
                                >
                                    <button
                                        type="button"
                                        onClick={() => setOpenFaqIndex((current) => (current === index ? -1 : index))}
                                        className="flex w-full items-center justify-between gap-3 px-6 py-5 text-right text-base font-bold text-brand-purple sm:text-lg"
                                        aria-expanded={openFaqIndex === index}
                                    >
                                        <span>{item.question}</span>
                                        <span
                                            className={`inline-flex h-8 w-8 items-center justify-center rounded-full border border-brand-purple/20 text-brand-purple transition-all duration-300 ${
                                                openFaqIndex === index ? 'rotate-90 bg-brand-purple text-white border-transparent' : 'bg-white'
                                            }`}
                                        >
                                            {openFaqIndex === index ? '−' : '+'}
                                        </span>
                                    </button>
                                    {openFaqIndex === index ? (
                                        <div className="border-t border-brand-purple/10 bg-white/60 px-6 py-5">
                                            <p className="text-base leading-8 text-brand-textDark/80 font-medium sm:text-lg">{item.answer}</p>
                                        </div>
                                    ) : null}
                                </article>
                            ))}
                        </div>
                    </section>
                </main>
                <Footer />
            </div>
    )
}
