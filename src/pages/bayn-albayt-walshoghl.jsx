import { useState, useEffect, useRef } from 'react'
import BackgroundSVG from '../components/BackgroundSVG'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import Modal from '../components/Modal'

export default function SawtohaMasmouaPage() {
    // تحديد التحقيق النشط حالياً في الصفحة
    const [activeInvestigation, setActiveInvestigation] = useState(1);
    const [query, setQuery] = useState('');
    const [showTOC, setShowTOC] = useState(false);
    const tocRef = useRef(null);

    useEffect(() => {
        const onKey = (e) => { if (e.key === 'Escape') setShowTOC(false); };
        if (showTOC) {
            document.body.style.overflow = 'hidden';
            document.addEventListener('keydown', onKey);
            setTimeout(() => tocRef.current?.focus(), 60);
        } else {
            document.body.style.overflow = '';
        }
        return () => {
            document.body.style.overflow = '';
            document.removeEventListener('keydown', onKey);
        };
    }, [showTOC]);

    const investigationsData = {
        1: {
            tag: "التحقيق الأول",
            title: "النسوية على السوشيال ميديا… بين تمكين النساء وصناعة الوهم الرقمي",
            intro: "لم تعد النسوية مجرد تيار فكري يُناقش داخل قاعات الجامعات أو صفحات الكتب، بل تحولت في السنوات الأخيرة إلى خطاب يومي متداول عبر منصات التواصل الاجتماعي، حيث تختلط القضايا الحقيقية بالشعارات السريعة، وتتجاور التجارب الإنسانية مع محتوى مُصمم لجذب التفاعل. في هذا الفضاء المفتوح، أصبحت كل فتاة قادرة على التعبير، وكل قصة قابلة للانتشار، لكن في المقابل، لم يعد من السهل التمييز بين ما يعكس واقعًا فعليًا، وما يُصاغ فقط ليواكب “التريند”.",
            content: [
                {
                    heading: "من النخبة إلى الترند: كيف تغيّرت ملامح النسوية؟",
                    text: "في السابق، ارتبطت النسوية بخطابات فكرية معقدة، وأسماء أكاديمية، ونقاشات تدور في نطاق ضيق نسبيًا. لكن مع صعود السوشيال ميديا، انتقلت هذه القضايا إلى المجال العام، حيث باتت تُطرح في فيديوهات قصيرة ومنشورات مختصرة تصل إلى ملايين المتابعين خلال ساعات.\nتوضح أستاذة علم الاجتماع أن “ما حدث هو عملية تبسيط واسعة للمفاهيم النسوية، وهو أمر إيجابي من حيث الانتشار، لكنه خطير من حيث فقدان العمق”. وتشير إلى أن كثيرًا من المفاهيم يتم تداولها الآن بشكل مجتزأ، ما يؤدي أحياناً إلى سوء فهم أو تعميمات غير دقيقة.\nهذا التحول لم يُغير فقط طريقة عرض القضايا، بل أعاد تشكيلها، حيث أصبحت بعض موضوعات تُطرح بناءً على قابليتها للانتشار، لا أهميتها الفعلية، وهو ما خلق فجوة بين “النسوية كفكر” و”النسوية كمحتوى”."
                },
                {
                    heading: "تمكين حقيقي أم أداء رقمي؟",
                    text: "رصد التحقيق عشرات الحسابات التي تقدم محتوى نسويًا، وتبيّن أن جزءًا منها يلعب دورًا مهمًا في رفع الوعي، من خلال مناقشة قضايا مثل الاستقلال الاقتصادي، والحقوق القانونية، والعنف ضد المرأة.\nلكن في المقابل، يرى خبراء الإعلام أن هناك نمطًا آخر من المحتوى يعتمد على “الاستفزاز” كوسيلة للانتشار، حيث يتم طرح آراء حادة أو مثيرة للجدل بهدف جذب التفاعل، حتى لو كان ذلك على حساب دقة الطرح.\nأحد المحللين الإعلاميين يوضح أن “السوشيال ميديا لا تكافئ الأكثر وعيًا، بل الأكثر إثارة”، وهو ما يدفع بعض صناع المحتوى إلى تبني خطاب مبالغ فيه أو متطرف، ليظلوا في دائرة الضوء.\nهذا التداخل يجعل من الصعب على المتابع العادي التمييز بين من يسعى للتمكين فعليًا، ومن يوظف القضية كوسيلة لبناء حضور رقمي."
                },
                {
                    heading: "القانون بين الضغط الرقمي وحدود الواقع",
                    text: "على المستوى القانوني، لا يمكن إنكار أن السوشيال ميديا لعبت دورًا مهمًا في تسليط الضوء على قضايا كانت تُهمل أو يتم التستر عليها، مثل التحرش والعنف الأسري.\nمحامون متخصصون يؤكدون أن “بعض القضايا لم تكن لتصل إلى الرأي العام لولا الضغط الرقمي”، وهو ما ساهم في تحريك المياه الراكدة، ودفع الجهات المعنية إلى اتخاذ إجراءات أو مراجعة قوانين قائمة.\nلكن في الوقت نفسه، يشددون على أن “القانون لا يُبنى على التريند”، وأن هناك فجوة واضحة بين الزخم الإلكتروني والإجراءات القانونية التي تتطلب أدلة وإجراءات معقدة.\nهذا يعني أن النسوية الرقمية قد تكون أداة ضغط فعالة، لكنها ليست بديلًا عن العمل القانوني المنظم، وهو ما يضع حدودًا واضحة لتأثيرها الفعلي."
                }
            ],
            summary: "في النهاية، لا يمكن اختزال النسوية على السوشيال ميديا في كونها تمكينًا حقيقيًا أو تريندًا فارغًا فقط، فهي تحمل ملامح الاثنين معًا. هي مساحة أعادت للمرأة صوتها، لكنها أيضًا ساحة مفتوحة للتشويه والمبالغة. والفارق الحقيقي لا يكمن في المنصة، بل في كيفية استخدامها: هل تتحول إلى أداة وعي وتغيير، أم تظل مجرد موجة عابرة تستهلك القضايا وتنتقل إلى غيرها؟ الإجابة، كما يرى مختصون، لا تزال قيد التشكل… مع كل منشور جديد."
        },
        2: {
            tag: "التحقيق الثاني",
            title: "المرأة والعمل التنفيذي… كسر السقف الزجاجي في الإدارات العليا",
            intro: "خطت المرأة خطوات واسعة في اقتحام مجالات الإدارة التنفيذية، متجاوزة الصورة النمطية التي حصرتها لسنوات في العمل السكرتاري أو المعاون. ومع ذلك، لا يزال صعود المرأة إلى منصب المدير التنفيذي أو القيادي محاطاً بملفات معقدة وتحديات صامتة ترتبط ببنية العمل التقليدية.",
            content: [
                {
                    heading: "الاستحقاق مقابل التشكيك المبطن",
                    text: "يكشف رصدنا الميداني لبيئات العمل التنفيذية أن النساء في مناصب الإدارة العليا يواجهن في البداية اختباراً مضاعفاً لإثبات الكفاءة مقارنة بنظرائهن من الرجال. تُشير إحدى المديرات التنفيذيات في قطاع التكنولوجيا: 'عند تعييني، كان هناك شعور عام غير معلن بأن هذا الاختيار جاء لإرضاء شروط التنوع الجندري للمؤسسة، وليس بناءً على جدارتي المهنية المحضة'. هذا النوع من التشكيك يدفع القياديات للعمل لساعات أطول وتحت ضغط نفسي مستمر لكسر هذا التصور الجائر."
                }
            ],
            summary: "المرأة في العمل التنفيذي ليست مجرد رقم تكميلي في لوحة الإدارة، بل هي شريك تصحيحي يعيد هيكلة المنظومة الاقتصادية. التمكين الحقيقي يبدأ عندما يختفي الاستغراب من وجود امرأة في مقعد القيادة الأول."
        },
        3: {
            tag: "التحقيق الثالث",
            title: "في قلب المكاتب الصامتة وبيئة العمل الذكورية",
            intro: "خلف الأبواب المغلقة للمؤسسات ذات الطابع الذكوري المهيمن، تخوض العاملات معارك يومية هادئة. هذا التحقيق يبحث في آليات التكيف والاستبعاد التي تتعرض لها النساء في قطاعات مثل الهندسة الميدانية، المقاولات، وبعض الدوائر التقنية المغلقة.",
            content: [
                {
                    heading: "عزل غير معلن: 'ثقافة الاستراحة'",
                    text: "ترصد الشهادات الحية نمطاً من الاستبعاد يسمى 'العزل المهني الاجتماعي'، حيث تُتخذ العديد من القرارات الجانبية وتُبنى شبكات المصالح بين الموظفين الرجال في مساحات غير رسمية (كالاستراحات أو اللقاءات الخارجية بعد العمل)، وهي مساحات يصعب على المرأة التواجد فيها للقيود الاجتماعية، مما يحرمها تلقائياً من الاندماج في مراكز القوى داخل العمل."
                }
            ],
            summary: "تغيير بيئة العمل الذكورية لا يتطلب فقط توظيف المزيد من النساء، بل يتطلب إعادة صياغة ثقافة المؤسسة وقوانينها الداخلية لتكون مساحة آمنة وعادلة للجميع دون تمييز مسبق."
        },
        4: {
            tag: "التحقيق الرابع",
            title: "الحدود النفسية للمرأة… المساحات المنسية والأمان المفقود",
            intro: "تواجه المرأة في مجتمعاتنا ضغوطاً متزايدة لتلعب دور 'المرأة الخارقة' (Superwoman) التي توازن بين العمل، رعاية المنزل، والواجبات الاجتماعية، دون أي حق في التعب أو التراجع. هذا التحقيق يسلط الضوء على تآكل الحدود النفسية للمرأة واستنزاف طاقتها العاطفية.",
            content: [
                {
                    heading: "فخ العطاء غير المشروط",
                    text: "تؤكد الأخصائيات النفسيات أن التنشئة الاجتماعية تدرب الفتيات منذ الصغر على تقديم رغبات الآخرين على رغباتهن الذاتية. هذا النمط ينتقل معها إلى بيت الزوجية والعمل، حيث تجد المرأة صعوبة بالغة في قول كلمة 'لا'، مما يجعلها عرضة للاستغلال العاطفي والمهني المستمر وتآكل مساحتها الخاصة."
                }
            ],
            summary: "الحفاظ على السلام النفسي للمرأة يبدأ بوعيها الشخصي بأن طاقتها محدودة، وأن تراجعها مؤقتاً لالتقاط الأنفاس هو حق إنساني أصيل، وليس ذنباً يتطلب الاعتذار."
        },
        5: {
            tag: "التحقيق الخامس",
            title: "هوس المرأة بالأونلاين… بين فخ الاستهلاك الاقتصادي وتزييف الواقع",
            intro: "أصبحت التجارة الرقمية ومواقع الموضة والجمال جزءاً لا يتجزأ من اليوميات الرقمية للمرأة. لكن خلف بريق الإعلانات الخاطفة وتوصيات المؤثرات (Influencers)، يختبئ نمط استهلاكي شره يؤثر على البنية الاقتصادية والنفسية للمرأة والأسرة.",
            content: [
                {
                    heading: "صناعة الحاجة المزيفة",
                    text: "تعتمد خوارزميات التسوق الرقمي على دراسة سلوك المرأة بدقة، واستهداف نقاط ضعفها النفسية. يوضح خبراء الاقتصاد أن الإعلانات لا تبيع منتجاً بل تبيع 'شكل الحياة المثالي'. تشعر المرأة تحت وطأة هذا الضخ المستمر بأنها بحاجة لشراء مستحضرات أو ملابس معينة فقط لتشعر بالانتماء لطبقة اجتماعية أو ثقافية معينة."
                }
            ],
            summary: "العالم الرقمي مرآة مكبرة؛ يمكنه تحويل المرأة إلى مستهلكة مستنزَفة في سباق المظاهر، أو تمكينها كصانعة سوق مستقلة. الوعي الرقمي والاقتصادي هو الخط الفاصل بين الفخ والفرصة."
        },
        6: {
            tag: "التحقيق السادس",
            title: "أخلاقيات بلا نصوص دينية… الضمير الإنساني والمعايير المجتمعية",
            intro: "يثور جدل فلسفي واجتماعي واسع حول مرجعية الأخلاق في العصر الحديث. يتناول هذا التحقيق كيفية تشكل الوعي الأخلاقي والمنظومة القايمة لدى النساء بعيداً عن الأطر والنصوص الدينية التقليدية، والاعتماد بدلاً من ذلك على الضمير الإنساني والعدالة الفطرية.",
            content: [
                {
                    heading: "الضمير الفطري والعدالة الإنسانية",
                    text: "يرصد التحقيق آراءً لمفكرات وباحثات يرين أن الأخلاق الأساسية - كالصدق، الأمانة، حماية الضعيف، ورفض الظلم - هي قيم إنسانية فطرية مشتركة لا تحتاج إلى وصاية أو نصوص تشريعية لتوجيهها. تعبر إحدى الباحثات: 'المرأة تمارس التعاطف والعدالة انطلاقاً من ضميرها الإنساني وتجربتها الحياتية في مواجهة التمييز'."
                }
            ],
            summary: "الأخلاق الإنسانية تلتقي مع جوهر الأديان في نصرة الحق والعدل. ويبقى السلوك الفعلي في احترام كرامة الإنسان وحقوق المرأة هو المقياس الحقيقي لنبل الضمير، أياً كانت مرجعيته الفكرية."
        }
    };

    const currentInvestigation = investigationsData[activeInvestigation];

    const investigationsList = Object.entries(investigationsData).filter(([, inv]) => {
        const q = query.trim().toLowerCase();
        if (!q) return true;
        return (inv.title + ' ' + inv.intro + ' ' + (inv.summary || '')).toLowerCase().includes(q);
    });

    const scrollToSection = (idx) => {
        const el = document.getElementById(`section-${idx}`);
        if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        setShowTOC(false);
    };

    return (
        <div className="relative min-h-screen bg-slate-50 text-slate-900 overflow-hidden" dir="rtl">
            <BackgroundSVG />
            <NavBar />
            
            {/* رأس الصفحة الرئيسي بتصميم صحفي فاخر */}
            <header className="relative z-10 pt-16 pb-12 text-center px-4 max-w-4xl mx-auto">
                <span className="text-xs font-bold tracking-widest text-brand-accent uppercase bg-brand-accent/10 px-3 py-1 rounded-full mb-4 inline-block">
                    ملفات استقصائية خاصة
                </span>
                <h1 className="text-5xl sm:text-7xl font-black text-brand-ink tracking-tight mt-2 mb-6">
                    صوتها مسموع
                </h1>
                <p className="text-lg sm:text-xl text-slate-600 leading-relaxed max-w-2xl mx-auto font-medium">
                    تحقيقات ميدانية معمقة، تعتمد على الشهادات الحية وتجارب النساء الواقعية لإيصال أصواتهن بصدق، وشفافية، وعمق مهني.
                </p>
            </header>

            {/* بحث سريع وأشرطة التحقيقات */}
            <div className="sticky top-0 z-40 bg-[#faf9f6]/80 backdrop-blur-md border-y border-slate-200/60 py-4 mb-8">
                <div className="max-w-5xl mx-auto px-4 flex flex-col sm:flex-row sm:items-center gap-3">
                    <div className="flex-1">
                        <label className="relative block">
                            <input
                                aria-label="بحث التحقيقات"
                                value={query}
                                onChange={(e) => setQuery(e.target.value)}
                                className="w-full pr-10 pl-4 py-3 rounded-2xl border border-slate-200 bg-white placeholder-slate-400 text-right"
                                placeholder="ابحث في العناوين أو الملخص..."
                            />
                            <div className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400">🔎</div>
                        </label>
                    </div>

                    <div className="flex gap-3 items-center">
                        <button
                            onClick={() => setShowTOC(prev => !prev)}
                            className="px-4 py-2 rounded-full bg-white text-slate-700 border border-slate-200 shadow-sm text-sm"
                        >فهرس الملف</button>
                    </div>
                </div>

                <nav className="mt-3">
                    <div className="max-w-5xl mx-auto px-4">
                        <div className="flex gap-3 overflow-x-auto no-scrollbar pb-1 sm:pb-0 justify-start sm:justify-center">
                            {investigationsList.map(([id, inv]) => {
                                const isSelected = activeInvestigation === Number(id);
                                return (
                                    <button
                                        key={id}
                                        onClick={() => setActiveInvestigation(Number(id))}
                                        className={`px-5 py-2.5 rounded-full text-sm font-bold whitespace-nowrap transition-all duration-300 transform active:scale-95 ${
                                            isSelected 
                                            ? 'bg-brand-ink text-white shadow-md shadow-brand-ink/20' 
                                            : 'bg-white text-slate-600 hover:text-slate-900 hover:bg-slate-100/80 border border-slate-200/50'
                                        }`}
                                    >
                                        {inv.tag}
                                    </button>
                                );
                            })}
                        </div>
                    </div>
                </nav>
            </div>

            {/* منطقة المحتوى المخصصة للقراءة الغامرة */}
            <main className="relative z-10 max-w-4xl mx-auto px-4 pb-32">
                <article key={activeInvestigation} className="animate-fadeIn space-y-12">
                    
                    {/* عنوان التحقيق المفتوح حالياً */}
                    <header className="text-center sm:text-right border-b border-slate-200 pb-8">
                        <span className="text-brand-accent font-bold text-sm bg-brand-accent/5 px-3 py-1 rounded-md">
                            {currentInvestigation.tag}
                        </span>
                        <h2 className="text-3xl sm:text-4xl font-black text-brand-ink leading-tight mt-4">
                            {currentInvestigation.title}
                        </h2>
                    </header>

                    {/* مقدمة التحقيق المتميزة */}
                    <div className="bg-white p-8 sm:p-10 rounded-3xl border border-slate-100 shadow-xs relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-2 h-full bg-brand-accent"></div>
                        <p className="text-xl font-medium text-slate-800 leading-relaxed text-justify">
                            {currentInvestigation.intro}
                        </p>
                    </div>

                    {/* سرد المحاور الداخلية على شكل بطاقات تحريرية متتالية */}
                    <div className="space-y-8">
                        {currentInvestigation.content.map((section, index) => (
                            <section 
                                id={`section-${index}`}
                                key={index} 
                                className="bg-white p-6 sm:p-10 rounded-3xl border border-slate-100/80 shadow-xs hover:shadow-md transition-shadow duration-300 group"
                            >
                                <div className="flex items-start gap-4 sm:gap-6">
                                    {/* الرقم التسلسلي للمحور كعنصر بصري */}
                                    <span className="text-4xl font-black text-slate-200 group-hover:text-brand-accent/30 transition-colors duration-300 select-none pt-1">
                                        {String(index + 1).padStart(2, '0')}
                                    </span>
                                    <div className="space-y-4 flex-1">
                                        <div className="flex items-start justify-between">
                                            <h3 className="text-2xl font-bold text-brand-ink group-hover:text-brand-accent transition-colors duration-300">
                                                {section.heading}
                                            </h3>
                                            <div className="flex items-center gap-2">
                                                <button onClick={() => navigator.clipboard?.writeText(section.heading)} className="text-xs text-slate-400 hover:text-slate-700">نسخ العنوان</button>
                                                <button onClick={() => scrollToSection(index)} className="text-xs text-slate-400 hover:text-slate-700">اذهب للمحور</button>
                                            </div>
                                        </div>
                                        <p className="whitespace-pre-line text-slate-600 text-lg leading-relaxed text-justify">
                                            {section.text}
                                        </p>
                                    </div>
                                </div>
                            </section>
                        ))}
                    </div>

                    {/* خاتمة وخلاصة الملف الاستقصائي */}
                    <footer className="bg-brand-ink text-white p-8 sm:p-12 rounded-[2.5rem] shadow-lg relative overflow-hidden">
                        <div className="absolute -bottom-10 -left-10 text-9xl opacity-5 pointer-events-none font-serif">”</div>
                        <h4 className="text-xl font-bold text-brand-accent mb-4 tracking-wide">خلاصة الملف الاستقصائي</h4>
                        <p className="text-lg text-slate-100 leading-relaxed font-medium text-justify">
                            {currentInvestigation.summary}
                        </p>
                    </footer>

                </article>

                {/* خط فاصل أنيق قبل قسم التواصل */}
                <hr className="my-16 border-slate-200" />

                {/* صندوق تفاعلي سفلي عريض لدعوة القارئات للمشاركة والتمكين */}
                <section className="bg-white border border-slate-100 rounded-[2.5rem] p-8 sm:p-12 text-center shadow-xs max-w-2xl mx-auto transition-transform duration-300 hover:scale-[1.01]">
                    <div className="w-16 h-16 bg-[#faf9f6] rounded-full flex items-center justify-center text-3xl mx-auto mb-6 shadow-2xs">
                        ⚖️
                    </div>
                    <h4 className="text-2xl font-bold text-brand-ink mb-2">هل تودين مشاركة تجربتكِ الميدانية؟</h4>
                    <p className="text-slate-600 max-w-md mx-auto mb-8 text-sm leading-relaxed">
                        نحن في فريق التوعية القانونية والبحث الميداني نستمع لشهادات النساء بخصوصية وأمان مطلق لبناء مجتمع أكثر عدالة.
                    </p>
                    <button className="inline-flex items-center justify-center bg-brand-ink text-white font-bold py-3.5 px-8 rounded-full hover:bg-brand-accent transition-colors duration-300 shadow-md shadow-brand-ink/10 text-sm">
                        تواصلِ مع فريق التوعية الميدانية
                    </button>
                </section>
            </main>
            
            {/* Table of Contents Modal (portal) */}
            {showTOC && (
                <Modal onClose={() => setShowTOC(false)} className="modal-scroll bg-white w-full max-w-md rounded-lg shadow-2xl overflow-y-auto">
                    <div className="sticky top-0 bg-white/95 backdrop-blur-sm border-b border-slate-100 px-6 py-4 flex items-center justify-between">
                        <h4 className="text-right font-bold">فهرس الملف</h4>
                        <button onClick={() => setShowTOC(false)} className="w-9 h-9 rounded-full bg-slate-50 flex items-center justify-center">✕</button>
                    </div>
                    <div className="p-6 space-y-4">
                        {currentInvestigation.content.map((s, i) => (
                            <button key={i} onClick={() => scrollToSection(i)} className="w-full text-right p-3 rounded-lg bg-slate-50 hover:bg-slate-100 text-slate-700">{String(i+1).padStart(2,'0')}. {s.heading}</button>
                        ))}
                    </div>
                </Modal>
            )}

            <Footer />
        </div>
    )
}