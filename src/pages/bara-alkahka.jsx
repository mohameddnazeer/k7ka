import { useState, useEffect } from "react"
import BackgroundSVG from "../components/BackgroundSVG"
import NavBar from "../components/NavBar"
import Footer from "../components/Footer"

const socialMediaTopics = [
    {
        id: 1,
        title: "التريندات القاتلة",
        category: "التحديات الرقمية",
        bgImage: "/imgs/carousel/Eradicating-female-illiteracy.jpeg",
        content: "كيف يتحول العالم الافتراضي والبحث عن الشهرة إلى فخ يهدد حياة المراهقات.. تحليل عميق لظاهرة التريندات القاتلة.",
        sections: [
            {
                heading: "تيك توك وتحديات الانتشار: هل أصبحنا أسرى التريند؟",
                body: "الأرقام تشير إلى أن تيك توك وتحديات الانتشار لم تعد مجرد ألعاب عابرة، بل تحولت إلى ما يشبه الضغط النفسي الفظيع على المراهقات. هذه الفكرة تجعلهن يشعرن بأن 'الرقم' على الشاشة هو ما يحدد قيمتهن الاجتماعية، مما يدفعهن لاتخاذ قرارات خطرة من أجل لفت الأنظار، أو 'التريند'."
            },
            {
                heading: "فخاخ الانتماء: لماذا تضغط السوشيال ميديا علينا؟",
                body: "هناك ارتباط وثيق بين الشعور بـ 'الحاجة للانتماء' والمشاركة في التريندات. البنات في سن المراهقة يشعرن بالرعب من فكرة التهميش. الشركات والمنصات تعرف هذا جيداً، ولذلك تصمم خوارزميات تضع الفتيات الشجاعات اللواتي يقمن بأفعال غريبة أو خطيرة في مقدمة المشهد (Feeds)، مما يدفع الأخريات لتقليدهن."
            },
            {
                heading: "الأيقونات الاصطناعية: عندما يصبح الفراغ هو القدوة",
                body: "البحث المستمر عن صورة مثالية غير حقيقية يجعل الفتيات يشعرن بالدونية تجاه الواقع. هبة عيسوي تصرح بأن هذا البحث عن 'الصورة المثالية' في المنشورات (Posts) يخلق نوعاً من الاغتراب النفسي، حيث تحاول الفتاة بناء شخصية كاملة مبنية على إعجاب الغرباء بدلاً من بناء ثقة داخلية حقيقية."
            },
            {
                heading: "صحراء التركيز: ما الذي تفعله الشاشات بعقولنا؟",
                body: "العلماء يتحدثون اليوم عن 'القلق الرقمي الصامت' الذي يسببه الانتظار المستمر لتفاعل الناس مع الصور والمقاطع. هذا الانتظار يخلق دورة كيميائية في الدماغ تشبه الإدمان. تصبح الفتاة محملة بضغط نفسي هائل للتفكير في الفيديو القادم (Next Video) بدلاً من الاستمتاع بلحظاتها الحقيقية، وهذا يقود تدريجياً لفقدان التركيز في التعليم والنمو النفسي."
            },
            {
                heading: "الفجوة العائلية: الغياب الذي يملؤه الهاتف",
                body: "هناك حالة اغتراب واضحة بين الأهل وبين العالم الرقمي الذي تعيش فيه بناتهن. عندما تشعر الفتاة بأنها غير مسموعة في بيتها، تبحث عن الاحتواء في منصات التواصل. المشكلة أن هذه المنصات ليست مكاناً آمناً؛ بل هي غابة من 'التريندات' العنيفة أحياناً، والتي قد تنهي حياة المراهقة في لحظة تهور من أجل 'لايك' واحد إضافي."
            },
            {
                heading: "المصادر الرقمية: هوس اللحظة القاتل",
                body: "تحديات مثل 'كتم الأنفاس' أو 'القفز من السيارات المتحركة' ليست فكاهة، بل هي تجليات لحالة فراغ عاطفي وهوس بالانتشار. المراهقات يصبحن ضحايا لشركات لا تهتم بإنسانيتهن بقدر ما تهتم بزيادة وقت التصفح (Ad Revenue). الأزمة ليست في التكنولوجيا، بل في غياب الوعي بكيفية مواجهة هذا الضغط المستمر."
            },
            {
                heading: "كلمة المجتمع العلمي: العودة للبناء النفسي",
                body: "خبراء الاجتماع يؤكدون أن الحل لا يكمن في 'المنع' لأن المنع يؤدي للتمرد السري. الحل يكمن في 'الاحتواء والعقل'. الفتاة تحتاج أن تشعر أن قيمتها ليست في 'فلتر' أو 'تحدي' بل في مواهبها ووجودها الحقيقي. البناء النفسي المتين هو الدرع الوحيد الذي سيحمي بناتنا من التريندات التي قد تأكل مستقبلهن."
            }
        ],
        conclusion: "التريند ليس قدراً محتوماً، والوعي هو السلاح الوحيد في مواجهة عالم رقمي يحاول تسليع أرواحنا. العودة للجذور، التحدث مع العائلة، وبناء ثقة ذاتية حقيقية بعيداً عن شاشات الهاتف هي الخطوات الأولى لاستعادة السيطرة على حياتنا."
    },
    {
        id: 2,
        title: "إدمان الشوبينج الأونلاين",
        category: "التحديات الرقمية",
        bgImage: "/imgs/carousel/Women-obsession-with-beauty.jpeg",
        content: "بين ضغطة زر واحدة وهوس الشراء.. كيف تحول التسوق الإلكتروني من وسيلة لتلبية الاحتياجات إلى اعتماد نفسي يؤثر على حياة البنات المالية والنفسية؟",
        sections: [
            {
                heading: "لماذا أصبح الشوبينج الأونلاين جذابًا للبنات؟",
                body: "تنجذب البنات الصغيرات للتسوق الإلكتروني بسبب الإعلانات الجذابة، والتخفيضات المستمرة، وتنوع المنتجات بشكل كبير. كما أن التطبيقات تعرض المنتجات بطريقة منظمة ومغرية تجعل الفتاة تشعر أنها تحتاج الكثير من الأشياء حتى لو لم تكن بحاجة حقيقية لها. إضافة إلى ذلك، سهولة الدفع وخيارات التقسيط أحيانًا تجعل عملية الشراء تبدو بسيطة جدًا."
            },
            {
                heading: "تأثير السوشيال ميديا: المؤثرات والتريندات السريعة",
                body: "تلعب منصات مثل Instagram و TikTok دورًا كبيرًا في تعزيز الرغبة في الشراء. فالفتيات يشاهدن يوميًا مؤثرات يعرضن منتجات مختلفة، من ملابس ومكياج ومستلزمات شخصية، مما يخلق شعورًا مستمرًا بالحاجة للتجربة والشراء. كما أن 'التريندات' السريعة تجعل بعض المنتجات تبدو ضرورية لفترة قصيرة ثم تختفي، ما يزيد من الاستهلاك غير المخطط له."
            },
            {
                heading: "الإعلانات الموجهة والخوارزميات الذكية",
                body: "تعتمد تطبيقات التسوق على خوارزميات ذكية تعرض لكل مستخدم منتجات تناسب اهتماماته. فعندما تبحث الفتاة عن منتج معين، تبدأ الإعلانات في مطاردتها في كل مكان على الإنترنت، ما يزيد من الرغبة في الشراء بشكل متكرر."
            },
            {
                heading: "متعة الشراء اللحظية والهروب النفسي",
                body: "أحد أهم أسباب الإدمان هو الشعور المؤقت بالسعادة عند شراء شيء جديد. صرحت هبة عيسوي أن التسوق المفرط عبر الإنترنت قد يكون وسيلة للهروب من التوتر أو الفراغ العاطفي لدى بعض الفتيات. فالكثير من البنات يشعرن بفرحة لحظية عند الضغط على 'شراء الآن'، لكن هذه السعادة تختفي بسرعة، ما يدفعهن لتكرار التجربة مرة أخرى للحصول على نفس الشعور."
            },
            {
                heading: "الضغط الاجتماعي والمقارنة الرقمية",
                body: "تشعر بعض البنات بالضغط عند رؤية صديقاتهن أو المؤثرات على السوشيال ميديا يرتدين ملابس جديدة أو يمتلكن منتجات حديثة باستمرار. وهذا يدفعهن للشعور أن عليهن مواكبة نفس المستوى، حتى لو لم يكن ذلك مناسبًا لظروفهن المادية. الثقة الحقيقية لا تعتمد على المظهر أو المشتريات بل على تقدير الذات الداخلي."
            },
            {
                heading: "التأثير المالي ودور الأسرة في التوعية",
                body: "من أخطر نتائج إدمان الشوبينج الأونلاين هو التأثير على الميزانية الشخصية. فبعض البنات يكتشفن في النهاية أنهن أنفقن أموالاً كثيرة على أشياء غير ضرورية. تلعب الأسرة دورًا مهمًا في توجيه الفتاة نحو الاستهلاك الواعي من خلال الحوار وتحديد الأولويات بدلاً من المنع الكامل."
            },
            {
                heading: "رأي علم الاجتماع: متى يصبح الشراء مشكلة؟",
                body: "صرحت هالة يسري أن انتشار الشوبينج الأونلاين مرتبط بتغير نمط الحياة وزيادة تأثير الإعلانات الرقمية. يصبح الشراء مشكلة عندما يفقد الشخص السيطرة على قراراته المالية، ويتحول إلى وسيلة أساسية للهروب من المشاعر السلبية أو إثبات الهوية الاجتماعية بدلاً من الاحتياج الفعلي."
            }
        ],
        conclusion: "إدمان الشوبينج الأونلاين ليس مجرد رفاهية، بل هو سلوك يتطلب الوعي والتوازن. الحل يكمن في تحديد الميزانية، والانتظار فترة قبل الشراء، والتركيز على الاحتياجات الحقيقية بدلاً من الانجراف خلف التريندات الوهمية."
    }
]

const streetTopics = [
    {
        id: 3,
        title: "التحرش اللفظي وجرح الوجدان الخفي",
        category: "أمان الشارع",
        bgImage: "/imgs/carousel/suffering-of-women-on-public-transportation.jpeg",
        content: "تحقيق ميداني حول ظاهرة التحرش اللفظي في المساحات العامة والخاصة.. كيف يؤثر ذلك على شعور الفتيات بالأمان؟",
        sections: [
            { heading: "ما هو التحرش اللفظي؟", body: "التحرش اللفظي يكون من خلال كل ما يصدر من كلمات أو عبارات جارحة تؤدي إلى أذى أو إهانة أو مضايقة نفسية جسيمة لأي شخص. وهو شكل من أشكال العنف والتمييز في العلاقات أو في المدرسة أو في العمل أو في الأماكن الاجتماعية العامة." },
            { heading: "أشكال التحرش في الشارع", body: "تتعدد أشكال هذا التحرش والكلمات الصادرة وغالباً ما تشكل انتهاكاً لكرامة وحياة الفتيات الأخريات. فالكلمات المكتوبة والصور والأغاني واللقطات المصورة والرسومات والرموز والمقاطع المسجلة والمكالمات الهاتفية كلها جزء من هذه الظاهرة." },
            { heading: "التحرش اللفظي بقصد اللعب", body: "غالباً هذه الحركات والألفاظ والكلمات التي تصدر من بعض الشباب لإزعاج الفتيات ووضعهن تحت ضغط حاد هي أساليب لجذبهن ولكن بطريقة خاطئة في الوقت الحالي، والكثير منهم لا ينظر للأمر بجدية." },
            { heading: "مكافحة ثقافة الصمت المجتمعي", body: "نحن في حاجة ملحة إلى تعزيز القوانين والأنظمة والتشريعات التي تدين وتعاقب المخالفين. كما يجب نشر التوعية في المجتمع لتعليم الشباب الاحترام والتقدير للآخرين وللفتيات لتعزيز قيم الأخلاق داخل المجتمع." },
            { heading: "دور الأسرة في مواجهة المتنمرين", body: "أهم خطوة هي الخروج بحالة 'صدمة' أو 'إحساس بالخطر'؟ يجب التحدث للأهل دائماً لأنهم الدرع الأول، والتربية يجب أن تقوم على الاحترام المتبادل لضمان أمن الفتيات في الشارع." },
            { heading: "التحرش اللفظي على الإنترنت", body: "أهلاً بك في فخ الملاحقات الرقمية؛ حيث يكون التحرش من خلال الهاتف أو رسائل السوشيال ميديا. هذا النوع من التحرش يلاحق الفتاة حتى داخل غرفتها، ويسبب الكثير من التوتر والضغط النفسي." },
            { heading: "آثاره في نفوس الفتيات", body: "الآثار قد تستمر لسنوات في شكل انعدام ثقة بالنفس، الخوف من الخروج بمفردك، أو قلق دائم من الغرباء.. إنها جرح غير مرئي لكنه عميق جداً في الوجدان." },
            { heading: "هل الصمت هو الحل أم المواجهة؟", body: "يجب التفريق بين التجاهل الحكيم وبين ضياع الحق؛ في حالات كثيرة التبليغ أو الرد بحزم والقوة الاجتماعية هي الحل الوحيد لوقف المتعدي عند حده وإعادة حق الفتاة المهدر." },
            { heading: "رؤية المختصين", body: "خبراء علم النفس والاجتماع يرون أن التحرش نتاج ثقافة ذكورية تحتاج الهدم من الأساس، ويجب أن يعامل التحرش اللفظي كجريمة مكتملة الأركان لما له من آثار مدمرة." },
            { heading: "دور المجتمع والتربية", body: "المجتمع والأسرة والمدرسة هم الجهات الثلاث المسئولة؛ فيجب تنشئة جيل يفهم معنى (الحرية الشخصية) ومعنى (الخصوصية) وعدم التعدي عليها بأي لفظ أو تصفير أو حركة." },
            { heading: "نحو شارع آمن للبنات", body: "الآمال معلقة على مبادرات شبابية تهدف لتوعية الشباب في المناطق الشعبية والراقية على حد سواء؛ فالشارع هو ملك للجميع، وحق الفتاة في المشي بأمان هو حق أساسي لا نقاش فيه." },
            { heading: "قصص ملهمة للرفض", body: "هناك اليوم فتيات كثيرات كسرن جدار الصمت واستطعن بأخلاقهن وقوة شخصياتهن إحراج المعتدي ودفعه للاعتذار.. هذه الروح هي ما نحتاج تعميمها." },
            { heading: "أهم القوانين والضوابط", body: "القانون اليوم في صفي! الدولة تضع قوانين حازمة للتحرش اللفظي والجسدي؛ فقط كوني على علم بحقوقك القانونية وكيفية استخدامها لحماية نفسك." },
            { heading: "من المسئول حقيقة؟", body: "المسئولية مشتركة؛ عندما نكف عن 'تبرير' الخطأ للمتحرش ونبدأ في لومه هو فقط، سنجد أن المجتمع بدأ يتغير للأفضل ويحترم كيان الفتاة." },
            { heading: "كيف تكون المواجهة فعالة؟", body: "المواجهة لا تعني الشجار، بل تعني الثبات ومنع التجاوز بالوسائل النظامية الممكنة.. دائماً تذكري أنك لستِ المخطئة، أنتِ الضحية التي تدافع عن كرامتها." }
        ],
        conclusion: "أمان الشارع ليس منحة، بل هو حق أصيل لكل فتاة. التوعية المستمرة والقوانين الرادعة هما السبيل الوحيد لخلق مجتمع يحترم النساء ويقدر وجودهن في كل مكان."
    },
    {
        id: 4,
        title: "التصرف في الشارع دون مضايقة",
        category: "أمان الشارع",
        bgImage: "/imgs/carousel/First-year-of-motherhood.jpeg",
        content: "قواعد الذوق العام وكيفية التعامل برقي لبناء مجتمع خالٍ من المضايقات اللفظية وبناء مساحات عبور آمنة.",
        sections: []
    }
]

const homeTopics = [
    {
        id: 5,
        title: "الأسواق بين أمانة التجار وفخاخ البيع",
        category: "ثقافة البيت والأسواق",
        bgImage: "/imgs/carousel/house-cleaning-routine.jpeg",
        content: "جولة واقعية داخل الأسواق: كيف تتعرف الفتاة على آليات البيع والشراء وتتجنب الخداع التجاري بذكاء؟",
        sections: []
    },
    {
        id: 6,
        title: "فنون الديكور المنزلي كمرآة للذات",
        category: "ثقافة البيت والأسواق",
        bgImage: "/imgs/carousel/Women-obsession-with-beauty.jpeg",
        content: "لمسات هندسية وفنية بسيطة وغير مكلفة تحول غرفتك الخاصة إلى مساحة دافئة تعبر عن هويتك الحقيقية.",
        sections: []
    },
    {
        id: 7,
        title: "ثقافة الموبيليا واختيار الأثاث المستدام",
        category: "ثقافة البيت والأسواق",
        bgImage: "/imgs/carousel/Women-obsession-with-beauty.jpeg",
        content: "كيف تختارين قطع الأثاث العملية والمريحة التي تجمع بين المظهر الجمالي والصلابة لتعيش معك طويلاً؟",
        sections: []
    }
]

export default function BaraAlkahkaPage() {
    const [activeSection, setActiveSection] = useState("all")
    const [selectedTopic, setSelectedTopic] = useState(null)

    useEffect(() => {
        document.body.style.overflow = selectedTopic ? "hidden" : "unset"
        return () => { document.body.style.overflow = "unset" }
    }, [selectedTopic])

    // Unified filtering condition mapped accurately to data structure properties
    const filteredTopics = [...socialMediaTopics, ...streetTopics, ...homeTopics].filter(topic => {
        if (activeSection === "all") return true
        if (activeSection === "digital") return topic.category === "التحديات الرقمية"
        if (activeSection === "street") return topic.category === "أمان الشارع"
        if (activeSection === "home") return topic.category === "ثقافة البيت والأسواق"
        return true
    })

    return (
        <div className="relative min-h-screen bg-slate-50 font-arabic overflow-x-hidden selection:bg-brand-secondary/20" dir="rtl">
            <BackgroundSVG />
            <NavBar />
            
            <main className="relative z-10 mx-auto px-4 pb-20 pt-10 sm:px-6 lg:px-8 max-w-7xl">
                
                {/* Hero Editorial Header Banner */}
                <div className="relative mb-12 overflow-hidden rounded-2xl bg-white border border-slate-200/60 p-8 sm:p-14 text-right shadow-sm">
                    <div className="absolute top-0 left-0 w-80 h-80 bg-brand-secondary/5 rounded-full blur-[90px] -translate-x-14 -translate-y-14 pointer-events-none"></div>
                    <div className="relative z-10 max-w-2xl space-y-4">
                        <span className="inline-flex items-center gap-1.5 rounded-lg bg-slate-900 px-3 py-1 text-xs font-bold text-white shadow-xs">
                            بره الكحكة • ٠٧ ملفات تحريرية
                        </span>
                        <h1 className="text-4xl font-black md:text-5xl text-brand-ink tracking-tight">بره الكحكة</h1>
                        <p className="text-sm sm:text-base leading-relaxed text-slate-600 font-medium">
                            جولة واقعية وتحليلات ميدانية معمقة ترصد تداخلات العالم الافتراضي ومتاهات السوشيال ميديا وأخلاقيات الفضاء العام للشارع والبيت.
                        </p>
                    </div>
                </div>

                {/* Filter Navigation Category Tabs */}
                <div className="mb-10 flex flex-wrap items-center justify-center gap-2">
                    {[
                        { id: "all", label: "جميع التحقيقات" },
                        { id: "digital", label: "التحديات الرقمية" },
                        { id: "street", label: "أمان الشارع" },
                        { id: "home", label: "البيت والأسواق" }
                    ].map((btn) => (
                        <button 
                            key={btn.id} 
                            onClick={() => setActiveSection(btn.id)}
                            className={`rounded-xl px-5 py-2.5 text-xs font-black transition-all duration-300 outline-none border ${
                                activeSection === btn.id 
                                    ? "bg-brand-ink text-white border-brand-ink shadow-md shadow-brand-ink/10 scale-[1.02]" 
                                    : "bg-white text-slate-600 border-slate-200/80 hover:bg-slate-50 hover:text-brand-ink"
                            }`}
                        >
                            {btn.label}
                        </button>
                    ))}
                </div>

                {/* Dynamic Asymmetric Card Grid Component */}
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {filteredTopics.map((topic, index) => {
                        // Create an alternating featured card width layout for an editorial magazine feel
                        const isFeatured = index === 0 || (index === 3 && filteredTopics.length > 3)
                        
                        return (
                            <div 
                                key={topic.id} 
                                onClick={() => setSelectedTopic(topic)}
                                className={`group relative rounded-2xl overflow-hidden border border-slate-200/70 bg-white transition-all duration-300 hover:shadow-md hover:border-slate-300/90 cursor-pointer flex flex-col justify-between min-h-[240px] p-6 ${
                                    isFeatured ? "sm:col-span-2" : "sm:col-span-1"
                                }`}
                            >
                                {topic.bgImage && (
                                    <>
                                        <div className="absolute inset-0 z-0">
                                            <img 
                                                src={topic.bgImage} 
                                                alt={topic.title} 
                                                className="w-full h-full object-cover grayscale opacity-15 transition-all duration-500 group-hover:scale-105 group-hover:opacity-20 group-hover:grayscale-0"
                                            />
                                        </div>
                                        <div className="absolute inset-0 bg-gradient-to-t from-white via-white/90 to-white/40 z-0" />
                                    </>
                                )}

                                <div className="relative z-10 space-y-4">
                                    <span className="inline-block text-[10px] font-bold text-brand-secondary bg-brand-secondary/5 border border-brand-secondary/10 rounded-md px-2 py-0.5">
                                        {topic.category}
                                    </span>
                                    <h3 className="text-xl font-black text-brand-ink leading-snug group-hover:text-brand-secondary transition-colors duration-200">
                                        {topic.title}
                                    </h3>
                                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-medium line-clamp-3">
                                        {topic.content}
                                    </p>
                                </div>

                                <div className="relative z-10 pt-4 flex items-center justify-end border-t border-slate-100 mt-4">
                                    <span className="inline-flex items-center gap-1 text-[11px] font-bold text-brand-ink group-hover:text-brand-secondary transition-colors">
                                        <span>{topic.sections?.length > 0 ? "اقرئي التحقيق الكامل" : "استكشفي الملف"}</span>
                                        <svg viewBox="0 0 24 24" className="h-3 w-3 fill-none stroke-current transition-transform duration-200 group-hover:-translate-x-1" strokeWidth="3"><path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" /></svg>
                                    </span>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </main>

            {/* Immersive Reader Modal View Layout */}
            {selectedTopic && (
                <div 
                    className="fixed inset-0 z-[9999] flex justify-center items-stretch md:items-center bg-brand-ink/40 p-0 md:p-6 backdrop-blur-sm overflow-y-auto animate-fade-in"
                    onClick={() => setSelectedTopic(null)}
                >
                    <div 
                        className="relative w-full max-w-5xl flex flex-col md:flex-row bg-white md:rounded-2xl overflow-hidden min-h-screen md:min-h-0 md:max-h-[88vh] shadow-2xl border border-slate-200/50 animate-slide-up"
                        onClick={(e) => e.stopPropagation()}
                    >
                        
                        {/* Mobile Top App-bar Header Layer */}
                        <div className="flex items-center justify-between px-5 py-4 border-b border-slate-100 bg-white sticky top-0 z-30 md:hidden shadow-xs">
                            <span className="text-[11px] font-bold text-brand-secondary bg-brand-secondary/5 rounded px-2 py-0.5">{selectedTopic.category}</span>
                            <button onClick={() => setSelectedTopic(null)} className="p-2 rounded-xl bg-slate-100 text-slate-700 active:scale-95 transition-transform" aria-label="إغلاق">
                                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}><path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" /></svg>
                            </button>
                        </div>

                        {/* Static Identity Branding Sidebar Frame */}
                        <div className="relative hidden md:flex md:w-1/3 bg-slate-950 p-10 flex-col justify-between text-white overflow-hidden">
                            {selectedTopic.bgImage ? (
                                <div className="absolute inset-0 z-0 opacity-20">
                                    <img src={selectedTopic.bgImage} alt="" className="w-full h-full object-cover" />
                                    <div className="absolute inset-0 bg-gradient-to-b from-transparent to-slate-950" />
                                </div>
                            ) : (
                                <div className="absolute top-0 right-0 w-64 h-64 bg-brand-secondary/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl pointer-events-none" />
                            )}
                            
                            <div className="relative z-10 space-y-2">
                                <span className="text-brand-secondary font-black text-xs uppercase tracking-widest block">بره الكحكة</span>
                                <div className="h-1 w-8 bg-brand-secondary rounded"></div>
                            </div>

                            <div className="relative z-10 space-y-3 my-auto">
                                <span className="text-[10px] font-bold text-slate-400 bg-white/10 px-2 py-0.5 rounded border border-white/5 inline-block">{selectedTopic.category}</span>
                                <h2 className="text-3xl font-black leading-tight tracking-tight text-white">{selectedTopic.title}</h2>
                            </div>

                            <p className="relative z-10 text-[11px] text-slate-400 font-medium italic">
                                * مادة تحريرية موثقة من الهيئة الاستشارية لمنصة كحكة.
                            </p>
                        </div>

                        {/* Content Scroll Feed Frame Wrapper */}
                        <div className="flex-1 flex flex-col min-w-0 bg-white">
                            
                            {/* Desktop Absolute Top Floating Exit Button */}
                            <button 
                                onClick={() => setSelectedTopic(null)} 
                                className="absolute left-6 top-6 z-50 rounded-xl bg-slate-900 text-white p-2.5 transition-all hover:bg-brand-secondary shadow-md outline-none hidden md:block group"
                                title="إغلاق نافذة القراءة"
                            >
                                <svg className="h-4 w-4 transition-transform duration-200 group-hover:rotate-90" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}><path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" /></svg>
                            </button>

                            {/* Scroll Area Container View */}
                            <div className="overflow-y-auto flex-1 p-6 md:p-12 text-right bg-white [&::-webkit-scrollbar]:w-1.5 [&::-webkit-scrollbar-track]:bg-transparent [&::-webkit-scrollbar-thumb]:bg-brand-secondary/20 [&::-webkit-scrollbar-thumb]:rounded-full hover:[&::-webkit-scrollbar-thumb]:bg-brand-secondary/40">
                                <div className="max-w-3xl space-y-8">
                                    
                                    {/* Abstract Blockquote Frame */}
                                    <div className="border-r-4 border-brand-secondary bg-slate-50/70 p-5 rounded-l-xl">
                                        <p className="text-base sm:text-lg font-bold text-slate-800 leading-relaxed italic">
                                            "{selectedTopic.content}"
                                        </p>
                                    </div>

                                    {/* Inner Nested Article Loops Grid */}
                                    <div className="space-y-8 pt-2">
                                        {selectedTopic.sections?.length > 0 ? (
                                            selectedTopic.sections.map((section, idx) => (
                                                <div key={idx} className="border-b border-slate-100 pb-8 last:border-0 last:pb-0 group">
                                                    <h3 className="text-base sm:text-lg font-black text-brand-ink mb-3 flex items-center gap-3 transition-colors duration-200 group-hover:text-brand-secondary">
                                                        <span className="text-brand-secondary/30 text-2xl font-mono tracking-tight">0{idx + 1}</span>
                                                        {section.heading}
                                                    </h3>
                                                    <p className="text-xs sm:text-sm text-slate-600 leading-loose font-medium">
                                                        {section.body}
                                                    </p>
                                                </div>
                                            ))
                                        ) : (
                                            <div className="text-center py-10 border border-dashed border-slate-200 rounded-xl bg-slate-50/40">
                                                <p className="text-xs font-bold text-slate-400">الملف التفصيلي تحت التوثيق والتحرير حالياً.</p>
                                            </div>
                                        )}
                                    </div>

                                    {/* Custom Conclusion Container Footing */}
                                    {selectedTopic.conclusion && (
                                        <div className="mt-10 bg-slate-900 text-slate-100 p-6 sm:p-8 rounded-xl relative overflow-hidden shadow-inner">
                                            <div className="absolute top-0 left-0 w-32 h-32 bg-white/5 rounded-full -translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>
                                            <h4 className="text-sm font-black mb-2 text-brand-secondary tracking-widest uppercase">خلاصة التحقيق</h4>
                                            <p className="text-xs sm:text-sm font-medium text-slate-300 leading-relaxed">
                                                {selectedTopic.conclusion}
                                            </p>
                                        </div>
                                    )}
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            )}
            
            <Footer />
        </div>
    )
}