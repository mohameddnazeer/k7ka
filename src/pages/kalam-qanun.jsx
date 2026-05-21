import { useState, useEffect } from 'react'
import BackgroundSVG from '../components/BackgroundSVG'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'

const articles = [
    {
        id: 1,
        title: "الولاية التعليمية.. حقك وحق ولادك",
        category: "قانون الأحوال الشخصية",
        content: `بعد الانفصال، تصبح الولاية التعليمية واحدة من أهم النقاط التي تسبب خلافا بين الأبوين. القانون المصري منح للأم الحق في الولاية التعليمية بقوة القانون بمجرد وقوع الطلاق، لضمان مستقبل الأطفال الأكاديمي.`,
        fullContent: [
            {
                heading: "ما هي الولاية التعليمية؟",
                text: "هي السلطة القانونية التي تمنح صاحبها الحق في التقديم للأطفال في المدارس، أو نقل ملفاتهم، أو اختيار نوع التعليم المناسب لهم. الهدف الأساسي منها هو حماية مصلحة الطفل الفضلى ومنع استخدام التعليم كوسيلة للضغط بين الطرفين."
            },
            {
                heading: "لمن يثبت هذا الحق؟",
                text: "وفقا للكتاب الدوري رقم 1 لسنة 2008، الولاية التعليمية تثبت للحاضن (الأم غالبا) طوال فترة الحضانة، ولا تحتاج الأم لرفع دعوى قضائية بمجرد تقديم وثيقة الطلاق للمدرسة أو الإدارة التعليمية."
            },
            {
                heading: "ماذا لو لم يقع الطلاق رسميا؟",
                text: "في حالة وجود نزاع قضائي أو انفصال دون طلاق رسمي، يمكن للأم استصدار أمر وقتي من قاضي الأمور المستعجلة بمحكمة الأسرة للحصول على الولاية التعليمية بشكل عاجل لضمان استمرار تعليم الأبناء."
            }
        ],
        image: "/imgs/law1.png"
    },
    {
        id: 2,
        title: "خلع أم طلاق للضرر؟ كيف تختارين؟",
        category: "قانون الأحوال الشخصية",
        content: `عندما تستحيل العشرة، تقف السيدة أمام خيارين: الخلع أو الطلاق للضرر. كل طريق له مميزاته وتضحياته المادية والقانونية التي يجب فهمها جيدا قبل اتخاذ القرار.`,
        fullContent: [
            {
                heading: "الخلع: السرعة مقابل التنازل",
                text: "الخلع يتميز بسرعة الفصل في القضية، حيث تقرر الزوجة التنازل عن كامل حقوقها المالية (المؤخر، نفقة المتعة، نفقة العدة) ورد مقدم الصداق. هو خيار لمن ترغب في إنهاء العلاقة سريعا دون الحاجة لإثبات الضرر."
            },
            {
                heading: "الطلاق للضرر: أسباب محددة وحقوق كاملة",
                text: "يتطلب الطلاق للضرر إثبات سبب قانوني (مثل التعدي، الهجر، عدم الإنفاق، الزواج بأخرى). ميزته هي الاحتفاظ بكامل الحقوق المالية، لكنه قد يستغرق وقتا أطول في المحاكم لإثبات الضرر بشهادة الشهود أو المستندات."
            }
        ],
        image: "/imgs/law2.png"
    },
    {
        id: 3,
        title: "العنف المنزلي.. كيف يحميك القانون؟",
        category: "قانون العقوبات",
        content: `العنف ليس قدرا، والقانون المصري يجرم الاعتداء البدني والنفسي. توثيق الواقعة هو الخطوة الأولى والأهم لتمكين الجهات القانونية من التدخل وحمايتك.`,
        fullContent: [
            {
                heading: "إثبات واقعة الاعتداء",
                text: "التوجه فورا لأقرب مستشفى حكومي لعمل 'تقرير طبي' يصف الإصابات وتوقيتها. هذا التقرير هو الدليل المادي الأساسي في حالة تقديم بلاغ بالقسم."
            },
            {
                heading: "دور مؤسسة قضايا المرأة المصرية",
                text: "من خلال بروتوكول التعاون، توفر المؤسسة دعما قانونيا مباشرا للسيدات المعنفات، وتوعية بكيفية التعامل مع المحاضر الرسمية وضمان عدم ضياع الحقوق."
            }
        ],
        image: "/imgs/law3.png"
    }
]

export default function KalamQanunPage() {
    const [selectedArticle, setSelectedArticle] = useState(null)

    useEffect(() => {
        if (selectedArticle) {
            document.body.style.overflow = 'hidden'
        } else {
            document.body.style.overflow = 'unset'
        }
        return () => {
            document.body.style.overflow = 'unset'
        }
    }, [selectedArticle])

    return (
        <div className="relative min-h-screen overflow-hidden bg-brand-offwhite" dir="rtl">
            <BackgroundSVG />
            <NavBar />
            
            <main className="relative z-10 mx-auto w-full  px-4 pb-24 sm:px-6 lg:px-8">
                {/* Header Section */}
                <div className="mb-16 text-center">
                    <span className="badge-soft mb-4">
                        إعلام وتمكين
                    </span>
                    <h1 className="text-4xl font-black text-brand-ink sm:text-6xl mb-6 tracking-tight">
                        كلام قانون
                    </h1>
                    <p className="mx-auto max-w-2xl text-lg text-brand-inkMuted/80 font-medium">
                        تبسيط المفاهيم القانونية بالتعاون مع خبراء قانونيين ومؤسسة قضايا المرأة المصرية. الوعي هو أول خطوة لحماية حقوقك.
                    </p>
                </div>

                {/* Collaboration Box */}
                <div className="mb-16 rounded-[2rem] bg-soft-flow text-brand-ink p-8 text-center relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-white/40 rounded-full -translate-y-1/2 translate-x-1/2 blur-2xl"></div>
                    <h3 className="text-2xl font-bold mb-4 relative z-10">بروتوكول تعاون</h3>
                    <p className="text-lg text-brand-inkMuted max-w-3xl mx-auto relative z-10 font-medium leading-relaxed">
                        مشروع "الكحكة" يتعاون مع <strong>مؤسسة قضايا المرأة المصرية</strong> لتقديم محتوى قانوني دقيق يهدف إلى توعية النساء بحقوقهن القانونية والاجتماعية.
                    </p>
                </div>

                {/* Articles Grid */}
                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {articles.map((article) => (
                        <article 
                            key={article.id}
                            className="group flex flex-col overflow-hidden rounded-3xl border border-brand-surface/70 bg-brand-surface transition-all hover:-translate-y-1"
                        >
                            <div className="relative aspect-[16/10] overflow-hidden bg-brand-surface flex items-center justify-center">
                                <span className="text-brand-inkSubtle font-black text-xl">قانون</span>
                                <div className="absolute top-4 right-4">
                                    <span className="rounded-full bg-brand-surface/90 backdrop-blur-sm px-3 py-1 text-xs font-bold text-brand-ink border border-brand-surface/70">
                                        {article.category}
                                    </span>
                                </div>
                            </div>
                            
                            <div className="flex flex-1 flex-col p-6 text-right">
                                <h2 className="mb-4 text-xl font-black text-brand-ink leading-tight transition-colors group-hover:text-brand-secondary">
                                    {article.title}
                                </h2>
                                <p className="mb-6 line-clamp-3 text-sm leading-relaxed text-brand-inkMuted/80 font-medium whitespace-pre-wrap">
                                    {article.content}
                                </p>
                                <div className="mt-auto">
                                    <button 
                                        onClick={() => setSelectedArticle(article)}
                                        className="inline-flex items-center gap-2 text-sm font-bold text-brand-accent transition hover:gap-3"
                                    >
                                        إقرئي المزيد
                                        <svg className="h-4 w-4 rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        </article>
                    ))}
                </div>

                {/* Legal FAQ Section */}
                <section className="mt-24">
                    <div className="mb-12">
                        <h2 className="text-3xl font-black text-brand-ink mb-4">أسئلة قانونية شائعة</h2>
                        <div className="h-1.5 w-24 bg-brand-accent rounded-full"></div>
                    </div>
                    <div className="grid gap-6">
                        {[
                            { q: "كيف أحصل على قرار تمكين من مسكن الزوجية؟", a: "يتم تقديم طلب للنيابة العامة مرفقاً به قسيمة الزواج وشهادات ميلاد الأطفال، وتقوم النيابة بإجراء تحريات المباحث لصدور قرار التمكين." },
                            { q: "ما هي عقوبة عدم الإنفاق على الزوجة والأبناء؟", a: "في حالة صدور حكم نهائي بالنفقة وامتناع الزوج، يحق للزوجة تفعيل المادة 293 من قانون العقوبات التي قد تصل عقوبتها للحبس سنة." },
                            { q: "هل يسقط حق الأم في الحضانة بزواجها؟", a: "نعم، يسقط الحق في الحضانة للأم بزواجها بغير محرم للمحضون من حيث الأصل، وتنتقل الحضانة لمن يليها في الترتيب القانوني (الجدة لأم عادة)." }
                        ].map((faq, idx) => (
                            <div key={idx} className="bg-brand-surface p-8 rounded-3xl border border-brand-surface/70 text-right">
                                <h4 className="text-xl font-black text-brand-secondary mb-3">? {faq.q}</h4>
                                <p className="text-lg text-brand-inkMuted/80 font-medium leading-relaxed">{faq.a}</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Legal Advice Card (Interactive Style) */}
                <section className="mt-24 bg-soft-sheen rounded-[3rem] p-10 sm:p-20 text-brand-ink relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-64 h-64 bg-white/50 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl"></div>
                    <div className="relative z-10 grid lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-4xl font-black mb-6">احتاجي مساعدة قانونية؟</h2>
                            <p className="text-xl text-brand-inkMuted mb-8 font-medium leading-relaxed">
                                توفر مؤسسة قضايا المرأة المصرية خطوطاً ساخنة ودعماً قانونياً مباشراً للسيدات. لا تترددي في طلب المشورة.
                            </p>
                            <div className="flex flex-wrap gap-4">
                                <div className="bg-brand-surface backdrop-blur-md px-6 py-3 rounded-2xl border border-brand-surface/70">
                                    <span className="block text-xs uppercase font-bold text-brand-inkSubtle">الخط الساخن</span>
                                    <span className="text-2xl font-black text-brand-ink">16...</span>
                                </div>
                                <div className="bg-brand-surface backdrop-blur-md px-6 py-3 rounded-2xl border border-brand-surface/70">
                                    <span className="block text-xs uppercase font-bold text-brand-inkSubtle">المقر الرئيسي</span>
                                    <span className="text-xl font-black text-brand-ink">القاهرة - الجيزة</span>
                                </div>
                            </div>
                        </div>
                        <div className="bg-brand-surface backdrop-blur-sm rounded-[2rem] p-8 border border-brand-surface/70">
                            <h4 className="text-xl font-bold mb-4 italic">"الحق في المعرفة هو المدخل الأول لاسترداد الحقوق المسلوبة."</h4>
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 rounded-full bg-brand-surface"></div>
                                <span className="font-bold text-brand-ink">فريق التوعية القانونية</span>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Article Modal */}
                {selectedArticle && (
                    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
                        <div 
                            className="absolute inset-0 bg-brand-ink/30 backdrop-blur-md"
                            onClick={() => setSelectedArticle(null)}
                        ></div>
                        <div className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-[2.5rem] bg-brand-surface p-6 sm:p-12 no-scrollbar">
                            <button 
                                onClick={() => setSelectedArticle(null)}
                                className="absolute top-6 left-6 rounded-full bg-brand-surface p-2 text-brand-ink transition hover:bg-brand-secondary hover:text-white"
                            >
                                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>

                            <div className="text-right">
                                <span className="badge-soft mb-4">
                                    {selectedArticle.category}
                                </span>
                                <h2 className="text-3xl font-black text-brand-ink sm:text-5xl mb-12 leading-tight">
                                    {selectedArticle.title}
                                </h2>
                                
                                <div className="space-y-12">
                                    {selectedArticle.fullContent?.map((section, idx) => (
                                        <div key={idx} className="border-r-4 border-brand-accent/60 pr-6">
                                            <h3 className="text-2xl font-black text-brand-ink mb-4">{section.heading}</h3>
                                            <p className="text-lg text-brand-inkMuted/80 leading-relaxed font-medium">
                                                {section.text}
                                            </p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </main>
            <Footer />
        </div>
    )
}
