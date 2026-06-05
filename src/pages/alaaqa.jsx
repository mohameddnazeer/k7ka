import { useEffect } from 'react'
import BackgroundSVG from '../components/BackgroundSVG'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import InteractionsPanel from '../components/InteractionsPanel'
import { Link } from 'react-router-dom'
import { TrendingTags, InteractivePoll, DailyCaricature, VideoMediaGallery, ExpertAdviceDesk } from '../components/Youm7Widgets'

const siteSections = [
    {
        title: 'رسالة الموقع',
        text: 'نقدّم محتوى عربيًا تحريريًا يشرح قضايا البيت والأسرة والمرأة والواقع اليومي بلغة واضحة، مع تركيز على الفهم، التوازن، والاحترام.'
    },
    {
        title: 'ماذا تجد هنا',
        text: 'تقارير ومقالات وصفحات تعريفية تغطي موضوعات الحياة المنزلية، المسؤوليات اليومية، التوازن النفسي، والتجارب الاجتماعية المرتبطة بها.'
    },
    {
        title: 'منهجنا التحريري',
        text: 'نحاول عرض الموضوعات من أكثر من زاوية، مع الحفاظ على لغة هادئة وتصميم مريح، حتى تكون القراءة سهلة وواضحة على الهاتف والشاشة الكبيرة.'
    },
    {
        title: 'إشعار الموقع',
        text: 'هذا الموقع يهدف إلى التوعية والعرض التحريري العام، ولا يقدم بديلًا عن الاستشارة المتخصصة عند الحاجة الطبية أو النفسية أو القانونية.'
    }
]

const stats = [
    { label: 'نوع المحتوى', value: 'تحريري عربي' },
    // { label: 'الأسلوب', value: 'RTL واضح' },
    { label: 'النطاق', value: 'شأن أسري ومجتمعي' },
    { label: 'الغاية', value: 'توعية وتوضيح' }
]

const quickLinks = [
    { title: 'الصفحة الرئيسية', to: '/', description: 'العودة إلى المدخل العام للموقع' },
    { title: 'القضايا اليومية', to: '/ala-alhamesh', description: 'قراءة موضوعات المجتمع والهامش' },
    { title: 'البيت والعمل', to: '/bayn-albayt-walshoghl', description: 'ملفات عن التوازن بين المسؤوليات' },
    { title: 'الحكايات والقصص', to: '/hikayat-settat', description: 'صفحات سردية وقصصية من الواقع' },
    { title: 'الأمومة', to: '/sana-ola-omoma', description: 'زاوية عن تجربة الأمومة والبدايات' },
    { title: 'التنظيف المنزلي', to: '/roteen-tanzeef-almanzel', description: 'مادة مرتبطة بالروتين المنزلي' }
]

export default function AlaaqaPage() {
    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'instant' });
    }, []);

    const scrollToSection = (index) => {
        const element = document.getElementById(`section-${index}`)
        if (!element) return
        element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }

    return (
        <div className="relative min-h-screen overflow-hidden bg-slate-50 text-slate-800" dir="rtl">
            <BackgroundSVG />
            <NavBar />
            <main className="relative z-10 mx-auto w-full max-w-7xl px-4 pb-24 pt-12 sm:px-8">
                <TrendingTags tags={["منصة_كحكة", "دليل_الموقع", "رسالة_المجتمع", "القراءة_المتوازنة", "التوجيه_الأسري", "تواصل_معنا"]} />
                <section className="relative overflow-hidden rounded-[2.5rem] border border-slate-100 bg-white shadow-sm">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(178,201,255,0.22),transparent_30%),radial-gradient(circle_at_bottom_left,rgba(181,114,232,0.14),transparent_28%)]" />
                    <div className="relative grid gap-10 p-8 sm:p-12 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
                        <div className="text-right">
                            <span className="inline-flex rounded-full bg-brand-accent/10 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.25em] text-brand-accent">
                                عن الموقع
                            </span>
                            <h1 className="mt-5 text-4xl font-black tracking-tight text-brand-ink sm:text-5xl lg:text-6xl">
                                موقع عربي يشرح الحياة اليومية بوضوح وهدوء
                            </h1>
                            <p className="mt-5 max-w-3xl text-base leading-8 text-slate-600 sm:text-lg">
                                هذه الصفحة مخصّصة لتعريفك بالموقع كله: رسالته، طريقة عمله، نوع المحتوى الذي يقدّمه، وأين تجد بقية الأقسام والملفات.
                            </p>

                            <div className="mt-7 grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
                                {stats.map((item) => (
                                    <div key={item.label} className="rounded-2xl border border-slate-100 bg-white/80 p-4 shadow-sm backdrop-blur-sm">
                                        <div className="text-xs font-bold uppercase tracking-[0.2em] text-slate-400">{item.label}</div>
                                        <div className="mt-2 text-md font-black text-brand-ink">{item.value}</div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <aside className="rounded-[2rem] border border-slate-100 bg-brand-ink p-6 text-white shadow-lg">
                            <div className="flex items-center gap-3 text-brand-accent">
                                <span className="text-2xl">✦</span>
                                <span className="text-xs font-bold uppercase tracking-[0.25em]">ملخص الموقع</span>
                            </div>
                            <h2 className="mt-4 text-2xl font-black leading-tight">ما الذي يقدمه هذا الموقع؟</h2>
                            <p className="mt-4 text-sm leading-7 text-slate-200">
                                منصة تحريرية تعرض موضوعات اجتماعية وأسريّة ونفسية بشكل مبسط، وتجمع بين الصفحة الرئيسية والملفات التفصيلية والصفحات التعريفية.
                            </p>
                            <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
                                <div className="rounded-2xl bg-white/10 p-4">
                                    <div className="text-[11px] font-bold uppercase tracking-[0.2em] text-slate-300">الصفحات الأساسية</div>
                                    <div className="mt-1 text-2xl font-black">7+</div>
                                </div>
                                <div className="rounded-2xl bg-white/10 p-4">
                                    <div className="text-[11px] font-bold uppercase tracking-[0.2em] text-slate-300">التركيز</div>
                                    <div className="mt-1 text-lg font-black">تجربة قراءة عربية</div>
                                </div>
                            </div>
                        </aside>
                    </div>
                </section>

                <section className="mt-8 grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
                    <aside className="lg:sticky lg:top-6 space-y-6">
                        <div className="rounded-[2rem] border border-slate-100 bg-white p-6 shadow-sm">
                            <div className="mb-4 flex items-center justify-between">
                                <h3 className="text-xs font-bold uppercase tracking-[0.25em] text-slate-400">فهرس الصفحة</h3>
                                <span className="rounded-full bg-brand-secondary/10 px-3 py-1 text-xs font-bold text-brand-secondary">{siteSections.length} أقسام</span>
                            </div>
                            <div className="space-y-2">
                                {siteSections.map((section, index) => (
                                    <button
                                        key={section.title}
                                        type="button"
                                        onClick={() => scrollToSection(index)}
                                        className="block w-full rounded-2xl border border-slate-100 bg-slate-50 px-4 py-3 text-right text-sm font-bold text-brand-inkMuted transition hover:border-brand-accent hover:bg-brand-accent hover:text-white"
                                    >
                                        <span className="block text-[11px] uppercase tracking-[0.2em] opacity-60">{String(index + 1).padStart(2, '0')}</span>
                                        <span className="block mt-1 leading-6">{section.title}</span>
                                    </button>
                                ))}
                            </div>
                        </div>

                        <div className="mt-6 rounded-[2rem] border border-slate-100 bg-white p-6 shadow-sm">
                            <h3 className="text-xs font-bold uppercase tracking-[0.25em] text-slate-400">روابط سريعة</h3>
                            <div className="mt-4 space-y-3">
                                {quickLinks.map((item) => (
                                    <Link
                                        key={item.to}
                                        to={item.to}
                                        className="block rounded-2xl border border-slate-100 bg-slate-50 px-4 py-3 transition hover:border-brand-accent hover:bg-brand-accent hover:text-white"
                                    >
                                        <span className="block text-sm font-black">{item.title}</span>
                                        <span className="mt-1 block text-xs leading-6 text-slate-500 transition hover:text-white/80">{item.description}</span>
                                    </Link>
                                ))}
                            </div>
                        </div>

                        <InteractivePoll
                            question="ما هو القسم الذي تودين رؤية المزيد من التغطيات والتحقيقات الصحفية فيه مستقبلاً؟"
                            pollKey="alaaqa-about"
                            options={["قضايا المرأة والقانون", "شؤون البيت والتربية"]}
                        />

                        <DailyCaricature
                            caption="المشهد العام"
                            desc="رسم يعكس تضافر أقسام الموقع المختلفة في بناء مرآة للمجتمع اليومي."
                            emoji="📰🌐💬"
                        />
                    </aside>

                    <article className="space-y-6">
                        <div className="rounded-[2rem] border border-slate-100 bg-white p-6 sm:p-8 shadow-sm">
                            <p className="text-base leading-8 text-slate-700 sm:text-lg">
                                صُمِّم هذا الموقع ليكون مساحة قراءة منظمة، تجمع بين المقالات، والصفحات التعريفية، والملفات الخاصة، بحيث تصل الفكرة بسرعة من غير تشتيت أو ازدحام بصري.
                            </p>
                        </div>

                        {siteSections.map((section, index) => (
                            <section key={section.title} id={`section-${index}`} className="scroll-mt-24 rounded-[2rem] border border-slate-100 bg-white p-6 sm:p-8 shadow-sm">
                                <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-brand-accent/10 px-3 py-1.5 text-xs font-bold text-brand-accent">
                                    <span>✦</span>
                                    {String(index + 1).padStart(2, '0')}
                                </div>
                                <h2 className="text-2xl font-black text-brand-ink sm:text-3xl">{section.title}</h2>
                                <p className="mt-4 text-base leading-8 text-slate-700 sm:text-lg">{section.text}</p>
                            </section>
                        ))}

                        <div className="space-y-8 bg-white p-6 sm:p-8 rounded-[2rem] border border-slate-100 shadow-xs text-right">
                            <VideoMediaGallery
                                title="تعريف بـ منصة كحكة"
                                clips={[
                                    { title: "فيديو تعريفي: جولة سريعة داخل أقسام المنصة وأبرز القضايا التي نناقشها", dur: "٣:٥٠" },
                                    { title: "رسالة رئيس التحرير: كواليس العمل والبحث التحريري خلف التحقيقات الاستقصائية", dur: "٢:٤٥" }
                                ]}
                            />

                            <ExpertAdviceDesk
                                qaList={[
                                    { q: "ما هي الأهداف التوعوية الأساسية التي تسعى المنصة إلى تحقيقها في المجتمع؟", a: "نهدف إلى تقديم مرآة صادقة لقضايا البيت والعمل والقانون والأمومة، وتزويد القارئات بإرشادات موثوقة تساعدهن على اتخاذ قرارات متوازنة وتجاوز الضغوط اليومية." },
                                    { q: "كيف يمكنني المساهمة بقصتي الشخصية أو موضوع تحقيقي للنشر على كحكة؟", a: "نرحب بمشاركات الكاتبات والقصص الإنسانية الواقعية؛ يمكنكِ مراسلتنا بالمسودة أو ملخص الفكرة التحريرية عبر البريد الإلكتروني المخصص للتواصل وسيقوم فريق التحرير بمراجعتها." }
                                ]}
                            />
                        </div>



                        <InteractionsPanel articleId="alaaqa" />


                    </article>
                </section>
            </main>
            <Footer />
        </div>
    )
}
