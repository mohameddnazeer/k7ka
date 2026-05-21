import { useState, useEffect, useMemo } from 'react'
import BackgroundSVG from '../components/BackgroundSVG'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'

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
            }).catch(() => {});
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
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
                        </svg>
                        <span className="text-xs font-bold">كلام قانون</span>
                    </div>
                )}
                <div className="absolute top-4 right-4 z-10 flex gap-2">
                    <span className="rounded-full bg-brand-surface/90 backdrop-blur-sm px-3 py-1 text-xs font-bold text-brand-ink border border-slate-200 shadow-sm">
                        {article.category}
                    </span>
                </div>
                <button 
                    onClick={handleShare}
                    className="absolute bottom-4 left-4 p-2 rounded-full bg-white/80 backdrop-blur-sm text-slate-600 hover:text-brand-accent hover:bg-white shadow-sm transition-all opacity-0 group-hover:opacity-100"
                    title="مشاركة المقال"
                >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M8.684 10.742l4.622-2.312m0 7.14l-4.622-2.312M19 4a3 3 0 11-6 0 3 3 0 016 0zM6 16a3 3 0 11-6 0 3 3 0 016 0zm13 4a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                </button>
            </div>
            
            <div className="flex flex-1 flex-col p-6">
                <h2 className="mb-4 text-xl font-black text-brand-ink leading-tight transition-colors group-hover:text-brand-accent">
                    <HighlightedText text={article.title} search={searchQuery} />
                </h2>
                <p className="mb-6 line-clamp-3 text-sm leading-relaxed text-brand-inkMuted/80 font-medium whitespace-pre-wrap">
                    <HighlightedText text={article.content} search={searchQuery} />
                </p>
                <div className="mt-auto pt-4 border-t border-brand-offwhite">
                    <button 
                        onClick={() => onOpen(article)}
                        className="inline-flex items-center gap-2 text-sm font-bold text-brand-accent transition-all hover:gap-3 focus:outline-none"
                    >
                        إقرئي المزيد
                        <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 12H5M12 19l-7-7 7-7" />
                        </svg>
                    </button>
                </div>
            </div>
        </article>
    );
}

// ==========================================
// MAIN PAGE COMPONENT
// ==========================================
export default function KalamQanunPage() {
    const [selectedArticle, setSelectedArticle] = useState(null)
    const [searchQuery, setSearchQuery] = useState('')
    const [selectedCategory, setSelectedCategory] = useState('الكل')
    const [readProgress, setReadProgress] = useState(0)
    
    // حالات التحكم الخاصة بقسم الأسئلة الشائعة المُطور
    const [faqSearch, setFaqSearch] = useState('')
    const [activeFaqTab, setActiveFaqTab] = useState('الكل')
    const [openFaqIdx, setOpenFaqIdx] = useState(null)

    // استخراج تصنيفات المقالات والأسئلة تلقائياً
    const categories = useMemo(() => ['الكل', ...new Set(articles.map(a => a.category))], [])
    const faqTabs = useMemo(() => ['الكل', ...new Set(faqData.map(f => f.category))], [])

    // تصفية المقالات
    const filteredArticles = useMemo(() => {
        const query = searchQuery.trim().toLowerCase();
        return articles.filter(article => {
            const matchesCategory = selectedCategory === 'الكل' || article.category === selectedCategory
            const matchesSearch = !query || 
                                  article.title.toLowerCase().includes(query) || 
                                  article.content.toLowerCase().includes(query)
            return matchesCategory && matchesSearch
        })
    }, [searchQuery, selectedCategory])

    // تصفية الأسئلة الشائعة بناءً على التبويب والبحث الخاص بها
    const filteredFaqs = useMemo(() => {
        const query = faqSearch.trim().toLowerCase();
        return faqData.filter(faq => {
            const matchesTab = activeFaqTab === 'الكل' || faq.category === activeFaqTab;
            const matchesSearch = !query || 
                                  faq.q.toLowerCase().includes(query) || 
                                  faq.a.toLowerCase().includes(query);
            return matchesTab && matchesSearch;
        });
    }, [faqSearch, activeFaqTab]);

    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === 'Escape') setSelectedArticle(null)
        }

        if (selectedArticle) {
            document.body.style.overflow = 'hidden'
            window.addEventListener('keydown', handleKeyDown)
        } else {
            document.body.style.overflow = 'unset'
            setReadProgress(0)
        }
        
        return () => {
            document.body.style.overflow = 'unset'
            window.removeEventListener('keydown', handleKeyDown)
        }
    }, [selectedArticle])

    const handleModalScroll = (e) => {
        const element = e.currentTarget;
        const totalHeight = element.scrollHeight - element.clientHeight;
        if (totalHeight > 0) {
            const progress = (element.scrollTop / totalHeight) * 100;
            setReadProgress(progress);
        }
    };

    return (
        <div className="relative min-h-screen overflow-hidden bg-slate-50 text-right" dir="rtl">
            <BackgroundSVG />
            <NavBar />
            
            <main className="relative z-10 mx-auto w-full px-4 pb-24 sm:px-6 lg:px-8 max-w-7xl">
                
                {/* Header Section */}
                <div className="mb-12 text-center pt-10">
                    <span className="badge-soft mb-4 inline-block bg-brand-accent/10 text-brand-accent px-4 py-1.5 rounded-full text-sm font-bold animate-pulse">
                        إعلام وتمكين
                    </span>
                    <h1 className="text-4xl font-black text-brand-ink sm:text-6xl mb-6 tracking-tight">
                        كلام قانون
                    </h1>
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
                            className="w-full pl-4 pr-11 py-2.5 bg-slate-50 border border-slate-200 rounded-full text-sm font-medium focus:outline-none focus:ring-2 focus:ring-brand-accent/50 focus:border-brand-accent transition-all"
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
                                className={`px-4 py-2 rounded-full text-xs sm:text-sm font-bold transition-all duration-200 ${
                                    selectedCategory === cat 
                                        ? 'bg-brand-accent text-white shadow-md shadow-brand-accent/20' 
                                        : 'bg-slate-50 text-brand-inkMuted hover:bg-slate-100 border border-slate-100'
                                }`}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Articles Grid */}
                {filteredArticles.length > 0 ? (
                    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                        {filteredArticles.map((article) => (
                            <ArticleCard 
                                key={article.id} 
                                article={article} 
                                searchQuery={searchQuery}
                                onOpen={setSelectedArticle} 
                            />
                        ))}
                    </div>
                ) : (
                    <div className="text-center py-16 bg-brand-surface rounded-3xl border border-dashed border-slate-200">
                        <p className="text-lg font-bold text-brand-inkMuted">لم نجد أي مقالات تطابق خيارات البحث الحالية.</p>
                    </div>
                )}

                {/* ==========================================
                    UPGRADED FAQ SECTION (القسم المطور والمحدث)
                   ========================================== */}
                <section className=" bg-gradient-to-b from-transparent to-slate-100/50 pt-12 pb-8  rounded-[3rem]">
                    {/* عنوان القسم */}
                    <div className="mb-10 text-center">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-secondary/10 text-brand-secondary text-xs font-bold mb-3">
                            <span>💡</span> الأسئلة الأكثر تداولاً
                        </div>
                        <h2 className="text-3xl font-black text-brand-ink sm:text-4xl mb-4">
                            موسوعة الأسئلة القانونية الشائعة
                        </h2>
                        <p className="mx-auto max-w-xl text-sm sm:text-base text-brand-inkMuted/80 font-medium leading-relaxed">
                            إجابات قانونية سريعة ومبسطة لأكثر المواقف الحياتية والقانونية التي تواجه النساء في المجتمع.
                        </p>
                        <div className="mx-auto mt-4 h-1 w-20 bg-brand-accent rounded-full"></div>
                    </div>

                    {/* أدوات البحث والتصفية للأسئلة الشائعة */}
                    <div className="max-w-4xl mx-auto mb-8 px-4 flex flex-col md:flex-row gap-4 items-center justify-between">
                        {/* التبويبات الفئوية للأسئلة */}
                        <div className="flex flex-wrap gap-2 justify-start w-full md:w-auto">
                            {faqTabs.map((tab) => (
                                <button
                                    key={tab}
                                    onClick={() => {
                                        setActiveFaqTab(tab);
                                        setOpenFaqIdx(null); // غلق أي سؤال مفتوح عند تغيير التبويب
                                    }}
                                    className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all ${
                                        activeFaqTab === tab
                                            ? 'bg-brand-secondary text-white shadow-sm'
                                            : 'bg-white text-brand-inkMuted hover:bg-slate-50 border border-slate-200'
                                    }`}
                                >
                                    {tab}
                                </button>
                            ))}
                        </div>

                        {/* حقل البحث الخاص بالأسئلة */}
                        <div className="relative w-full md:w-72">
                            <input 
                                type="text"
                                placeholder="ابحثي عن سؤال معين..."
                                value={faqSearch}
                                onChange={(e) => {
                                    setFaqSearch(e.target.value);
                                    setOpenFaqIdx(null);
                                }}
                                className="w-full pl-4 pr-9 py-2 bg-white border border-slate-200 rounded-xl text-xs font-medium focus:outline-none focus:ring-2 focus:ring-brand-secondary/30 focus:border-brand-secondary transition-all"
                            />
                            <span className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400">
                                <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                </svg>
                            </span>
                        </div>
                    </div>

                    {/* قائمة الأسئلة (Accordion) */}
                    <div className="grid gap-4 max-w-4xl mx-auto px-4">
                        {filteredFaqs.length > 0 ? (
                            filteredFaqs.map((faq, idx) => {
                                const isOpen = openFaqIdx === idx;
                                return (
                                    <div 
                                        key={idx} 
                                        className={`bg-white rounded-2xl border transition-all duration-200 ${
                                            isOpen 
                                                ? 'border-brand-accent/30 shadow-md shadow-brand-accent/5 ring-1 ring-brand-accent/10' 
                                                : 'border-slate-100 hover:border-slate-200 shadow-sm'
                                        }`}
                                    >
                                        <button
                                            onClick={() => setOpenFaqIdx(isOpen ? null : idx)}
                                            aria-expanded={isOpen}
                                            className="w-full flex items-start justify-between p-5 text-right font-black text-base sm:text-lg text-brand-secondary hover:text-brand-accent transition-colors focus:outline-none gap-4"
                                        >
                                            <div className="flex gap-3 items-start">
                                                <span className={`text-xs px-2 py-0.5 mt-1 rounded-md font-bold whitespace-nowrap hidden sm:inline-block ${
                                                    isOpen ? 'bg-brand-accent/10 text-brand-accent' : 'bg-slate-100 text-slate-500'
                                                }`}>
                                                    {faq.category}
                                                </span>
                                                <span className="leading-tight">
                                                    <HighlightedText text={faq.q} search={faqSearch} />
                                                </span>
                                            </div>
                                            <span className={`flex-shrink-0 mt-1 p-1 rounded-full bg-slate-50 text-brand-accent transition-transform duration-300 ${isOpen ? 'rotate-180 bg-brand-accent/10' : ''}`}>
                                                <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                                                </svg>
                                            </span>
                                        </button>
                                        
                                        <div className={`grid transition-all duration-300 ease-in-out ${isOpen ? 'grid-rows-[1fr] border-t border-slate-50 bg-slate-50/40' : 'grid-rows-[0fr]'}`}>
                                            <div className="overflow-hidden">
                                                <div className="p-5 text-sm sm:text-base text-brand-inkMuted/90 font-medium leading-relaxed flex gap-3 items-start">
                                                    <span className="text-brand-accent font-black text-lg select-none">جـ:</span>
                                                    <p className="whitespace-pre-line">
                                                        <HighlightedText text={faq.a} search={faqSearch} />
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })
                        ) : (
                            <div className="text-center py-12 bg-white rounded-2xl border border-dashed border-slate-200">
                                <p className="text-sm font-bold text-slate-400">لا توجد أسئلة تطابق بحثك حالياً.</p>
                            </div>
                        )}
                    </div>
                </section>

                {/* Legal Contact Card */}
               <section className="mt-24 bg-brand-secondary/5 rounded-[3rem] p-10 sm:p-16 text-brand-ink relative overflow-hidden border border-brand-secondary/10">
    <div className="absolute top-0 left-0 w-64 h-64 bg-brand-accent/5 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl"></div>
    <div className="relative z-10 grid lg:grid-cols-2 gap-12 items-center">
        <div>
            <h2 className="text-4xl font-black mb-6 text-brand-ink">الدعم والاستشارات القانونية</h2>
            <p className="text-xl text-brand-inkMuted mb-8 font-medium leading-relaxed">
                توفر مؤسسة قضايا المرأة المصرية خطوطاً ساخنة وخدمات الدعم القانوني المباشر للسيدات. نحن هنا لتقديم المشورة والمساعدة اللازمة لضمان حماية حقوقكن.
            </p>
            <div className="flex flex-wrap gap-4 justify-start">
                <div className="bg-brand-surface backdrop-blur-md px-6 py-3 rounded-2xl border border-slate-100 shadow-sm">
                    <span className="block text-xs uppercase font-bold text-brand-inkSubtle mb-1">الخط الساخن للمؤسسة</span>
                    <span className="text-2xl font-black text-brand-accent">022511223</span>
                </div>
                <div className="bg-brand-surface backdrop-blur-md px-6 py-3 rounded-2xl border border-slate-100 shadow-sm">
                    <span className="block text-xs uppercase font-bold text-brand-inkSubtle mb-1">المقر الرئيسي</span>
                    <span className="text-xl font-black text-brand-ink">القاهرة - الجيزة</span>
                </div>
            </div>
        </div>
        <div className="bg-brand-surface/80 backdrop-blur-sm rounded-[2rem] p-8 border border-slate-100 shadow-sm">
            <h4 className="text-xl font-bold mb-4 text-brand-secondary">"إن الوعي بالحقوق القانونية هو الخطوة الأولى والأساسية لاستعادتها وحمايتها."</h4>
            <div className="flex items-center gap-4 justify-start">
                <div className="w-12 h-12 rounded-full bg-brand-accent/10 flex items-center justify-center text-brand-accent font-bold">⚖️</div>
                <span className="font-bold text-brand-ink">فريق التوعية القانونية — مشروع الكحكة</span>
            </div>
        </div>
    </div>
</section>

                {/* Premium Article Modal Section */}
                {selectedArticle && (
                    <div 
                        className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 transition-all"
                        role="dialog"
                        aria-modal="true"
                    >
                        <div 
                            className="absolute inset-0 bg-brand-ink/60 backdrop-blur-md transition-opacity duration-300"
                            onClick={() => setSelectedArticle(null)}
                        ></div>
                        
                        <div 
                            onScroll={handleModalScroll}
                            className="relative w-full max-w-4xl max-h-[85vh] overflow-y-auto rounded-[2.5rem] bg-brand-surface shadow-2xl border border-slate-100 scrollbar-thin animate-[fadeIn_0.2s_ease-out]"
                        >
                            {/* خط مؤشر القراءة المتغير في أعلى المودال */}
                            <div className="sticky top-0 right-0 left-0 h-1.5 bg-slate-100 z-30">
                                <div 
                                    className="h-full bg-brand-accent transition-all duration-75"
                                    style={{ width: `${readProgress}%` }}
                                ></div>
                            </div>

                            {/* زر الإغلاق الثابت مع السكرول */}
                            <button 
                                onClick={() => setSelectedArticle(null)}
                                className="absolute top-6 left-6 z-40 rounded-full bg-white/90 backdrop-blur-md p-2.5 text-brand-ink shadow-md transition-all hover:bg-brand-accent hover:text-white focus:outline-none"
                                aria-label="إغلاق النافذة"
                            >
                                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>

                            {/* صورة البانر العلوي للمقال داخل المودال لزيادة الجاذبية البصرية */}
                            <div className="w-full h-56 sm:h-72 relative">
                                <img 
                                    src={selectedArticle.image} 
                                    alt={selectedArticle.title} 
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-brand-surface via-brand-surface/20 to-transparent"></div>
                            </div>

                            <div className="p-6 sm:p-12 -mt-16 relative z-10">
                                <span className="badge-soft mb-4 inline-block bg-brand-accent/10 text-brand-accent px-3 py-1 rounded-full text-xs font-bold">
                                    {selectedArticle.category}
                                </span>
                                <h2 className="text-2xl font-black text-brand-ink sm:text-4xl mb-8 leading-tight max-w-[90%]">
                                    {selectedArticle.title}
                                </h2>
                                
                                <div className="space-y-8 mt-6">
                                    {selectedArticle.fullContent?.map((section, idx) => (
                                        <div key={idx} className="border-r-4 border-brand-accent/40 pr-6 transition-all hover:border-brand-accent">
                                            <h3 className="text-xl font-black text-brand-secondary mb-3">{section.heading}</h3>
                                            <p className="text-base sm:text-lg text-brand-inkMuted leading-relaxed font-medium whitespace-pre-line">
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