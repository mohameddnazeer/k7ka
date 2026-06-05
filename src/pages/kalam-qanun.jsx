import { useState, useEffect, useMemo } from 'react'
import BackgroundSVG from '../components/BackgroundSVG'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import Modal from '../components/Modal'
import InteractionsPanel from '../components/InteractionsPanel'
import { TrendingTags, InteractivePoll, DailyCaricature, VideoMediaGallery, ExpertAdviceDesk } from '../components/Youm7Widgets'

// ==========================================
// DATA LAYER (يمكن نقلها لملف منفصل لاحقاً lawData.js)
// ==========================================
const articles = [
    {
        id: 1,
        title: "الولاية التعليمية.. حقك وحق ولادك",
        category: "قانون الأحوال الشخصية",
        content: `بعد الانفصال، تصبح الولاية التعليمية واحدة من أهم النقاط التي تسبب خلافا بين الأبوين. القانون المصري منح للأم الحق في الولاية التعليمية بقوة القانون بمجرد وقوع الطلاق، لضمان مستقبل الأطفال الأكاديمي.`,
        fullContent: [
            {
                heading: "ما هي الولاية التعليمية؟",
                text: "هي السلطة القانونية التي تمنح صاحبها الحق في التقديم للأطفال في المدارس, أو نقل ملفاتهم، أو اختيار نوع التعليم المناسب لهم. الهدف الأساسي منها هو حماية مصلحة الطفل الفضلى ومنع استخدام التعليم كوسيلة للضغط بين الطرفين."
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
        category: "قانون العقوبات والمجتمع",
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
    },
    {
        id: 4,
        title: "تجريم ختان الإناث: بين الموروث والوعي والقانون",
        category: "قانون العقوبات والمجتمع",
        content: `رغم التحذيرات الطبية والتجريم القانوني، لا تزال قضية ختان الإناث تفرض نفسها كواحدة من أكثر القضايا حساسية وإثارة للجدل، وتبقى الفتيات هن الطرف الأضعف في معادلة تحكمها مفاهيم موروثة.`,
        fullContent: [
            {
                heading: "جذور قديمة لعادة مستمرة",
                text: "تشير دراسات إلى أن ختان الإناث ليس مرتبطًا بدين معين، بل هو عادة قديمة تعود إلى عصور ما قبل الأديان، واستمرت عبر الأجيال مدفوعة بعادات اجتماعية راسخة تم ربطها بشكل خاطئ بالدين أو الشرف."
            },
            {
                heading: "الموقف الديني: خلط بين العادة والعبادة",
                text: "يؤكد علماء الدين أن ختان الإناث ليس فريضة دينية، وأن ما يُتداول حول كونه واجبًا لا يستند إلى نصوص قطعية. ويشددون على أن أي ممارسة تُلحق الضرر بالإنسان مرفوضة شرعاً."
            },
            {
                heading: "القانون يجرّم… ولكن في الخفاء",
                text: "قامت الدولة بتجريم ختان الإناث وفرضت عقوبات مشددة على من يمارسه، سواء كانوا أطباء أو غيرهم. ومع ذلك، تشير تقارير إلى استمرار الحالات في الخفاء، خاصة في المناطق الريفية بعيدًا عن أعين القانون."
            },
            {
                heading: "الآثار الصحية والنفسية الخطيرة",
                text: "يحذر أطباء من مضاعفات صحية جسيمة تشمل النزيف، الالتهابات، ومشاكل جودة الحياة الإنجابية. هذا بالإضافة إلى جرح نفسي عميق وصامت يترك أثراً ممتداً من القلق وفقدان الثقة."
            }
        ],
        image: "/imgs/Eradicating-female-illiteracy.png"
    },
    {
        id: 5,
        title: "استغلال الفتيات بدون عقود عمل واضحة",
        category: "قانون العمل",
        content: `خلف حلم الاستقلال المادي، تختبئ مشكلة خطيرة تتكرر يوميًا داخل أماكن العمل: استغلال البنات وتشغيلهن بدون عقود عمل واضحة تحفظ حقوقهن وتضمن أمانهن الوظيفي والمسؤولية القانونية لأصحاب العمل.`,
        fullContent: [
            {
                heading: "بداية الأزمة وغياب الأمان",
                text: "تبدأ الأزمة عندما تقبل الفتاة بشروط مجحفة دون طلب عقد رسمي بحجة 'فترة تجربة' تمتد لشهور. غياب العقود لا يعني فقط ضياع الحقوق المالية، بل يفتح الباب أمام ضغوط نفسية وشعور دائم بالخوف من الطرد المفاجئ."
            },
            {
                heading: "ساعات عمل مرهقة وحرمان من التأمينات",
                text: "تعاني كثير من الفتيات من العمل لساعات تتجاوز 10 أو 12 ساعة يومياً مقابل رواتب ضعيفة. كما تفقد الفتاة حقها في التأمين الصحي والاجتماعي وحقوق الإجازات والتعويضات في حالة الإصابة."
            },
            {
                heading: "أشكال جديدة: استغلال السوشيال ميديا والمصانع",
                text: "مع انتشار التسويق الإلكتروني, ظهر استغلال الفتيات في إدارة الصفحات وتصوير المحتوى دون عقود وتأخير رواتبهن بحجة ضعف النتائج. وتتكرر الأزمة في المصانع والورش الصغيرة لتجنب الالتزام بالقوانين."
            },
            {
                heading: "كيف تحمي الفتاة نفسها؟",
                text: "ينصح خبراء الاجتماع والقانون بقراءة شروط العمل جيداً، وطلب عقد مكتوب، وعدم تسليم الأوراق الشخصية دون إثبات رسمي، والاحتفاظ بالمحادثات والرسائل المتعلقة بالعمل والراتب لتكون دليلاً عند الحاجة."
            }
        ],
        image: "/imgs/suffering-of-women-on-public.png"
    },
    {
        id: 6,
        title: "الذكاء الاصطناعي والتزييف العميق: حين تصبح المرأة ضحية",
        category: "الجرائم الإلكترونية",
        content: `تحول الذكاء الاصطناعي إلى قوة قادرة على إعادة تشكيل الواقع عبر التزييف العميق (Deepfake). وتجد المرأة نفسها في قلب أزمة مركبة تمس سمعتها وتضعها في مواجهة ظلم مجتمعي معقد.`,
        fullContent: [
            {
                heading: "القانون في مواجهة جرائم ذكية",
                text: "يقف القانون في موقع معقد؛ حيث لم تُصمم معظم التشريعات التقليدية لمواجهة واقع يستطيع فيه شخص مجهول صناعة 'دليل مزيف' بدقة عالية. الإشكالية الأكبر هي تحول عبء الإثبات على الضحية بينما الجاني مستتر."
            },
            {
                heading: "المنظور الديني والأخلاقي",
                text: "تمثل هذه الممارسات انتهاكاً صارخاً لكرامة الإنسان. اختلاق الصور والمقاطع الكاذبة ليس 'مزاحاً رقمياً' بل هو شكل من أشكال البهتان والتشهير المحرم قطعاً في منظومة القيم والأديان."
            },
            {
                heading: "المجتمع وإدانة الضحية مرتين",
                text: "في كثير من الحالات، لا يُقابل المحتوى المفبرك بالتشكيك بل يُستقبل كحقيقة، لتجد المرأة نفسها في موقع الدفاع. الدراسات الحديثة لـ UN Women تؤكد تصاعد العنف الرقمي وامتداده إلى الحياة الواقعية في شكل ضغوط نفسية حادة."
            },
            {
                heading: "المواجهة والمسؤولية المشتركة",
                text: "التعامل مع الظاهرة يتطلب تشريعات مرنة قادرة على مواكبة التكنولوجيا، وتعزيز الوعي الثقافي الذي يمنع لوم الضحية، بالإضافة إلى دور الإعلام في تحري الدقة وعدم تضخيم أو نشر المواد المفبركة."
            }
        ],
        image: "/imgs/Women-obsession-with-beauty.png"
    }
];

const faqData = [
    {
        category: "قانون الأحوال الشخصية",
        q: "كيف أحصل على قرار تمكين من مسكن الزوجية؟",
        a: "يتم تقديم طلب للنيابة العامة مرفقاً به قسيمة الزواج وشهادات ميلاد الأطفال. تقوم النيابة بإجراء تحريات المباحث للتأكد من إقامة الزوجة، ثم يصدر قرار التمكين العاجل بتمكين الحاضنة من مسكن الزوجية بشكل مشترك أو منفرد حسب الحالة."
    },
    {
        category: "قانون الأحوال الشخصية",
        q: "ما هي عقوبة عدم الإنفاق على الزوجة والأبناء؟",
        a: "في حالة صدور حكم نهائي بالنفقة وامتناع الزوج عن الدفع، يحق للزوجة تفعيل المادة 293 من قانون العقوبات (دعوى حبس متجمد نفقة)، والتي تصل عقوبتها للحبس مدة سنة بعد التنبيه عليه بالدفع أو التسوية."
    },
    {
        category: "قانون الأحوال الشخصية",
        q: "هل يسقط حق الأم في الحضانة بزواجها؟",
        a: "نعم، يسقط الحق في الحضانة للأم بزواجها من أجنبي عن المحضون (غير محرم)، وتنتقل الحضانة مباشرة إلى الجدة لأم، ثم الجدة لأب، صعوداً وفقاً للترتيب القانوني، إلا إذا ثبت أن مصلحة الصغير تقتضي غير ذلك."
    },
    {
        category: "الجرائم الإلكترونية",
        q: "ماذا أفعل إذا تعرضت لابتزاز إلكتروني بصور مفبركة بالذكاء الاصطناعي؟",
        a: "خطوتك الأولى هي عدم مسح الرسائل أو المحتوى المفبرك. قومي بأخذ لقطات شاشة (Screenshots) واضحة، ثم توجهي فوراً إلى 'مباحث الإنترنت' في وزارة الداخلية أو تقديم بلاغ عبر الخط الساخن (108). القانون يعاقب على التزييف والابتزاز بعقوبات تصل للسجن المشدد."
    },
    {
        category: "قانون العمل",
        q: "هل يعتبر إثبات العمل ضرورياً إذا لم يكن هناك عقد مكتوب؟",
        a: "وفقاً لقانون العمل، إذا لم يقم صاحب العمل بكتابة عقد، يحق للعاملة إثبات علاقة العمل بكافة طرق الإثبات القانونية، مثل: شهادة الشهود، التحويلات البنكية للراتب، الرسائل الإلكترونية (واتساب/إيميل)، أو محاضر إثبات الحالة من مكتب العمل."
    }
];

// ==========================================
// HELPER COMPONENT: HIGHLIGHT SEARCH TEXT
// ==========================================
function HighlightedText({ text, search }) {
    if (!search.trim()) return <span>{text}</span>;
    const regex = new RegExp(`(${search.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&')})`, 'gi');
    const parts = text.split(regex);
    return (
        <span>
            {parts.map((part, i) =>
                regex.test(part) ? (
                    <mark key={i} className="bg-yellow-100 text-brand-ink px-1 rounded font-bold">{part}</mark>
                ) : part
            )}
        </span>
    );
}

// ==========================================
// SUB-COMPONENT: ARTICLE CARD
// ==========================================
function ArticleCard({ article, searchQuery, onOpen }) {
    const [imgError, setImgError] = useState(false);

    const handleShare = (e) => {
        e.stopPropagation();
        if (navigator.share) {
            navigator.share({
                title: article.title,
                text: article.content,
                url: window.location.href
            }).catch(() => { });
        } else {
            navigator.clipboard.writeText(`${window.location.href}#article-${article.id}`);
            alert('تم نسخ رابط المقال المباشر!');
        }
    };

    return (
        <article className="group flex flex-col overflow-hidden rounded-3xl border border-slate-100 bg-brand-surface transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
            <div className="relative aspect-[16/10] overflow-hidden bg-slate-100 flex items-center justify-center">
                {!imgError ? (
                    <img
                        src={article.image}
                        alt={article.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        onError={() => setImgError(true)}
                        loading="lazy"
                    />
                ) : (
                    <div className="flex flex-col items-center justify-center text-slate-400 gap-2">
                        <svg className="w-12 h-12 stroke-current" fill="none" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                        <span className="text-[10px] font-bold">لا تتوفر صورة</span>
                    </div>
                )}
            </div>

            <div className="flex flex-1 flex-col p-6 text-right">
                <span className="badge-soft mb-2 inline-block bg-brand-accent/5 text-brand-accent px-2 py-0.5 rounded text-[10px] font-bold w-fit">
                    {article.category}
                </span>

                <h3 className="mb-3 text-lg font-black text-brand-ink leading-snug group-hover:text-brand-accent transition-colors">
                    <HighlightedText text={article.title} search={searchQuery} />
                </h3>

                <p className="mb-4 line-clamp-3 text-xs leading-relaxed text-brand-inkMuted/80 font-medium">
                    <HighlightedText text={article.content} search={searchQuery} />
                </p>

                <div className="mt-auto pt-4 border-t border-slate-100 flex items-center justify-between">
                    <button
                        onClick={() => onOpen(article)}
                        className="inline-flex items-center gap-1.5 text-xs font-bold text-brand-accent transition-colors hover:text-brand-secondary"
                    >
                        <span>اقرأ المزيد</span>
                        <svg className="h-3 w-3 transition-transform group-hover:-translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
                        </svg>
                    </button>

                    <button
                        onClick={handleShare}
                        className="p-1.5 rounded-lg bg-[#faf9f6] text-slate-400 hover:text-brand-secondary transition"
                        title="مشاركة الرابط"
                    >
                        🔗
                    </button>
                </div>
            </div>
        </article>
    );
}

export default function KalamQanun() {
    const [selectedArticle, setSelectedArticle] = useState(null);
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('الكل');
    const [activeFaqTab, setActiveFaqTab] = useState('الكل');
    const [openFaqIdx, setOpenFaqIdx] = useState(null);
    const [faqSearch, setFaqSearch] = useState('');

    // Scroll to top on page load or when selected article changes
    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'instant' })
    }, [selectedArticle]);

    const categories = ['الكل', 'قانون الأحوال الشخصية', 'قانون العقوبات والمجتمع', 'قانون العمل', 'الجرائم الإلكترونية'];
    const faqTabs = ['الكل', 'قانون الأحوال الشخصية', 'الجرائم الإلكترونية', 'قانون العمل'];

    const filteredArticles = useMemo(() => {
        return articles.filter(article => {
            const matchesCategory = selectedCategory === 'الكل' || article.category === selectedCategory;
            const matchesSearch = article.title.includes(searchQuery) || article.content.includes(searchQuery);
            return matchesCategory && matchesSearch;
        });
    }, [selectedCategory, searchQuery]);

    const filteredFaqs = useMemo(() => {
        return faqData.filter(faq => {
            const matchesTab = activeFaqTab === 'الكل' || faq.category === activeFaqTab;
            const matchesSearch = faq.q.includes(faqSearch) || faq.a.includes(faqSearch);
            return matchesTab && matchesSearch;
        });
    }, [activeFaqTab, faqSearch]);

    return (
        <div className="relative min-h-screen bg-slate-50 text-[#1F2937] font-arabic overflow-x-hidden" dir="rtl">
            <BackgroundSVG />
            <NavBar />

            <main className="relative z-10 mx-auto w-full px-4  sm:px-6 lg:px-8 max-w-7xl">

                {!selectedArticle ? (
                    <>
                        {/* Header Section */}
                        <div className="mb-12 text-center pt-10">
                            <span className="badge-soft mb-4 inline-block bg-brand-accent/10 text-brand-accent px-4 py-1.5 rounded-full text-sm font-bold animate-pulse">
                                إعلام وتمكين
                            </span>
                            <h1 className="text-4xl font-black text-brand-ink sm:text-6xl mb-6 tracking-tight">
                                كلام قانون
                            </h1>
                            <div className="mb-6 flex flex-col items-center justify-center gap-2">
                                <img
                                    src="/imgs/12.jpeg"
                                    alt="صورة الكاتبة"
                                    className="w-60 h-60 rounded-full object-cover border-2 border-[#B572E8] shadow-xs"
                                />
                                <span className="text-2xl font-bold text-slate-700">
                                    كتب: بهاء جمال
                                </span>
                            </div>
                            <p className="mx-auto max-w-2xl text-lg text-brand-inkMuted/80 font-medium leading-relaxed">
                                تبسيط المفاهيم القانونية بالتعاون مع خبراء قانونيين ومؤسسة قضايا المرأة المصرية. الوعي هو أول خطوة لحماية حقوقك.
                            </p>
                        </div>

                        {/* Collaboration Box */}
                        <div className="mb-12 rounded-[2rem] bg-brand-surface/40 backdrop-blur-sm border border-brand-accent/20 text-brand-ink p-8 text-center relative overflow-hidden shadow-sm">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-brand-accent/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-2xl"></div>
                            <h3 className="text-2xl font-bold mb-3 relative z-10 text-brand-secondary">بروتوكول تعاون</h3>
                            <p className="text-base sm:text-lg text-brand-inkMuted max-w-3xl mx-auto relative z-10 font-medium leading-relaxed">
                                مشروع "الكحكة" يتعاون مع <strong className="text-brand-accent">مؤسسة قضايا المرأة المصرية</strong> لتقديم محتوى قانوني دقيق يهدف إلى توعية النساء بحقوقهن القانونية والاجتماعية.
                            </p>
                        </div>

                        {/* Search & Filter Controls */}
                        <div className="mb-12 flex flex-col md:flex-row gap-6 items-center justify-between bg-brand-surface p-6 rounded-3xl border border-brand-surface/70 shadow-sm">
                            <div className="w-full md:w-1/3 relative">
                                <input
                                    type="text"
                                    placeholder="بحث في المقالات القانونية..."
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                    className="w-full pl-4 pr-11 py-2.5 bg-[#faf9f6] border border-slate-200 rounded-full text-sm font-medium focus:outline-none focus:ring-2 focus:ring-brand-accent/50 focus:border-brand-accent transition-all"
                                />
                                <span className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400">
                                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                    </svg>
                                </span>
                            </div>
                            <div className="w-full md:w-auto flex flex-wrap gap-2 justify-start md:justify-end">
                                {categories.map((cat) => (
                                    <button
                                        key={cat}
                                        onClick={() => setSelectedCategory(cat)}
                                        className={`px-4 py-2 rounded-full text-xs sm:text-sm font-bold transition-all duration-200 ${selectedCategory === cat
                                            ? 'bg-brand-accent text-white shadow-md shadow-brand-accent/20'
                                            : 'bg-[#faf9f6] text-brand-inkMuted hover:bg-slate-100 border border-slate-100'
                                            }`}
                                    >
                                        {cat}
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Articles Grid (with Sidebar) */}
                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start mb-12">
                            <div className="lg:col-span-4">
                                {filteredArticles.length > 0 ? (
                                    <div className="grid gap-6 sm:grid-cols-2">
                                        {filteredArticles.map((article, idx) => (
                                            <div
                                                key={article.id}
                                                className="animate-fadeInUp opacity-0"
                                                style={{ animationDelay: `${idx * 150}ms`, animationFillMode: 'forwards' }}
                                            >
                                                <ArticleCard
                                                    article={article}
                                                    searchQuery={searchQuery}
                                                    onOpen={setSelectedArticle}
                                                />
                                            </div>
                                        ))}
                                    </div>
                                ) : (
                                    <div className="text-center py-16 bg-brand-surface rounded-3xl border border-dashed border-slate-200">
                                        <p className="text-lg font-bold text-brand-inkMuted">لم نجد أي مقالات تطابق خيارات البحث الحالية.</p>
                                    </div>
                                )}
                            </div>

                            {/* <div className="lg:col-span-1 space-y-6 lg:sticky lg:top-24">
                                <InteractivePoll
                                    question="هل تؤيدين فرض عقوبات جنائية مشددة فورية على أصحاب العمل الذين يشغلون الفتيات بدون عقود عمل مكتوبة وموثقة؟"
                                    pollKey="kalam-qanun"
                                    options={["نعم، أؤيد وبشدة", "لا، أرى التوعية كافية"]}
                                />

                                <DailyCaricature
                                    caption="حماية القانون للمرأة"
                                    desc="ميزان العدالة يحمي الحقوق من الضياع."
                                    emoji="⚖️🛡️"
                                />
                            </div> */}
                        </div>

                        {/* ==========================================
                            UPGRADED FAQ SECTION (القسم المطور والمحدث)
                           ========================================== */}


                        {/* Legal Contact Card */}

                    </>
                ) : (
                    <div className="pt-10 pb-20 animate-fadeIn max-w-7xl mx-auto">
                        {/* زر الرجوع */}
                        <div className="flex justify-between items-center border-b border-slate-200 pb-6 mb-8">
                            <button
                                onClick={() => setSelectedArticle(null)}
                                className="flex items-center gap-2 text-xs sm:text-sm font-bold text-brand-secondary border border-brand-secondary bg-white px-4 py-2 rounded-xl hover:bg-brand-secondary/5 transition"
                            >
                                ← العودة لقائمة كلام قانون
                            </button>
                            <span className="text-xs font-bold text-slate-500 bg-emerald-50 text-emerald-700 px-3 py-1 rounded-full border border-emerald-100">مراجعة قانونية معتمدة ⚖️</span>
                        </div>

                        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 items-start">
                            {/* المحتوى الرئيسي (75%) */}
                            <div className="lg:col-span-3 space-y-8 bg-white p-6 sm:p-10 rounded-3xl border border-slate-100 shadow-sm">
                                {/* صورة الغلاف */}
                                {selectedArticle.image && (
                                    <div className="w-full h-64 sm:h-96 relative overflow-hidden rounded-2xl border border-slate-200 shadow-xs">
                                        <img
                                            src={selectedArticle.image}
                                            alt={selectedArticle.title}
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                )}

                                <div className="space-y-6">
                                    <span className="badge-soft inline-block bg-brand-accent/10 text-brand-accent px-3 py-1 rounded-full text-xs font-bold">
                                        {selectedArticle.category}
                                    </span>
                                    <h1 className="text-2xl sm:text-4xl font-black text-brand-ink leading-tight">
                                        {selectedArticle.title}
                                    </h1>
                                    <p className="text-sm sm:text-base text-slate-600 font-bold leading-relaxed border-r-4 border-brand-accent pr-4">
                                        {selectedArticle.content}
                                    </p>

                                    <div className="space-y-8 pt-4">
                                        {selectedArticle.fullContent?.map((section, idx) => (
                                            <div
                                                key={`${selectedArticle.id}-${idx}`}
                                                className="border-b border-slate-100 pb-6 last:border-0 animate-fadeInUp opacity-0"
                                                style={{ animationDelay: `${idx * 100}ms`, animationFillMode: 'forwards' }}
                                            >
                                                <h3 className="text-xl font-black text-brand-secondary mb-3">{section.heading}</h3>
                                                <p className="text-base sm:text-lg text-brand-inkMuted leading-relaxed font-medium whitespace-pre-line text-justify">
                                                    {section.text}
                                                </p>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                <div className="mt-12 space-y-8">
                                    <VideoMediaGallery
                                        title="تقارير كلام قانون المصورة"
                                        clips={[
                                            { title: "تغطية ميدانية: ندوة مؤسسة قضايا المرأة حول مخاطر التزييف العميق والابتزاز", dur: "٥:٤٠" },
                                            { title: "شرح قانوني مبسط: كيف تحصلين على الولاية التعليمية وقرار التمكين سريعاً؟", dur: "٤:١٥" }
                                        ]}
                                    />

                                    <ExpertAdviceDesk
                                        qaList={[
                                            { q: "كيف أتحقق من جدية عقد العمل قبل التوقيع والبدء في الوظيفة؟", a: "تأكدي من كتابة نسختين من العقد على الأقل، وأن يتضمن اسم الشركة وعنوانها، قيمة الراتب الصافي صراحةً، ومسمى الوظيفة وعدد ساعات العمل، ولا تسلمي أوراقك الأصلية دون استلام إيصال بذلك." },
                                            { q: "ما هي المدة المتوقعة لصدور قرار الولاية التعليمية للحاضنة من قاضي الأمور المستعجلة؟", a: "الولاية التعليمية للحاضن بقوة القانون، وفي حال النزاعات، يصدر القاضي أمراً وقتياً في غضون أسبوع إلى أسبوعين على الأكثر لحماية مصلحة الطفل ومسيرته التعليمية." }
                                        ]}
                                    />

                                    <InteractionsPanel articleId={`kalam-qanun-${selectedArticle.id}`} />
                                </div>
                            </div>

                            {/* القائمة الجانبية (25%) */}
                            <div className="lg:col-span-1 space-y-6 lg:sticky lg:top-24">
                                <div className="bg-brand-surface border border-slate-200/60 rounded-3xl p-6 shadow-xs">
                                    <h3 className="text-base font-black text-brand-ink mb-4 border-b border-slate-100 pb-3">مواضيع قانونية ذات صلة</h3>
                                    <div className="space-y-4">
                                        {articles.filter(a => a.id !== selectedArticle.id).map(a => (
                                            <button
                                                key={a.id}
                                                onClick={() => setSelectedArticle(a)}
                                                className="w-full text-right group flex flex-col gap-1 transition-all hover:bg-[#faf9f6] p-2.5 rounded-xl"
                                            >
                                                <span className="text-[10px] font-bold text-brand-accent">{a.category}</span>
                                                <span className="text-xs font-bold text-brand-ink group-hover:text-brand-secondary transition-colors line-clamp-2 leading-snug">{a.title}</span>
                                            </button>
                                        ))}
                                    </div>
                                </div>

                                <InteractivePoll
                                    question="هل تؤيدين فرض عقوبات جنائية مشددة فورية على أصحاب العمل الذين يشغلون الفتيات بدون عقود عمل مكتوبة وموثقة؟"
                                    pollKey="kalam-qanun"
                                    options={["نعم، أؤيد وبشدة", "لا، أرى التوعية كافية"]}
                                />

                                <DailyCaricature
                                    caption="حماية القانون للمرأة"
                                    desc="ميزان العدالة يحمي الحقوق من الضياع."
                                    emoji="⚖️🛡️"
                                />
                            </div>
                        </div>
                    </div>
                )}
                <div className='mt-6'>
                    <TrendingTags tags={["كلام_قانون", "الولاية_التعليمية", "الخلع_والطلاق", "العنف_المنزلي", "جرائم_إلكترونية", "تزييف_عميق"]} />

                </div>
            </main>
            <Footer />
        </div>
    )
}