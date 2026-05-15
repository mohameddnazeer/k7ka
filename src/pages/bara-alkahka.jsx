import { useState, useEffect } from "react"
import BackgroundSVG from "../components/BackgroundSVG"
import NavBar from "../components/NavBar"
import Footer from "../components/Footer"

const socialMediaTopics = [
    {
        id: 1,
        title: "التريندات القاتلة",
        category: "التحديات الرقمية",
        svg: (color = "currentColor") => (
            <svg viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full opacity-20">
                <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
            </svg>
        ),
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
        category: "الثقافة الاستهلاكية",
        svg: (color = "currentColor") => (
            <svg viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-16 h-16">
                <circle cx="9" cy="21" r="1" />
                <circle cx="20" cy="21" r="1" />
                <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
            </svg>
        ),
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
        title: "التحرش اللفظي",
        category: "أمان الشارع",
        svg: (color = "currentColor") => (
            <svg viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-16 h-16 opacity-30">
                <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
                <line x1="12" y1="9" x2="12" y2="13" />
                <line x1="12" y1="17" x2="12.01" y2="17" />
            </svg>
        ),
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
        title: "التصرف في الشارع من غير مضايقة",
        category: "أخلاقيات",
        svg: (color = "currentColor") => (
            <svg viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-16 h-16">
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                <circle cx="9" cy="7" r="4" />
            </svg>
        ),
        content: "قواعد الذوق العام وكيفية التعامل برقي لبناء مجتمع خالي من المضايقات اللفظية.",
        details: "دليل عملي للسلوك المتحضر في الفضاءات العامة لضمان راحة الجميع."
    }
]

const homeTopics = [
    {
        id: 5,
        title: "الأسواق بين الصدق والأمانة وكذب التجار",
        category: "ثقافة السوق",
        svg: (color = "currentColor") => (
            <svg viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-16 h-16">
                <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
            </svg>
        ),
        content: "جولة داخل الأسواق: كيف تتعرف المراهقة على آليات البيع والشراء وتتجنب فخاخ التجارة؟",
        details: "نصائح عملية في التعامل المالي ومعرفة جودة المنتجات."
    },
    {
        id: 6,
        title: "الديكور",
        category: "ثقافة البيت",
        svg: () => <div className="w-16 h-16 bg-brand-orange/20 rounded-full" />,
        content: "لمسات فنية بسيطة تحول غرفتك إلى عالمك الخاص الذي يعبر عن شخصيتك."
    },
    {
        id: 7,
        title: "الموبيليا",
        category: "ثقافة البيت",
        svg: () => <div className="w-16 h-16 bg-brand-brown/20 rounded-full" />,
        content: "كيف تختارين قطع الأثاث التي تجمع بين الجمال والوظيفة وتعيش معك طويلاً؟"
    }
]

export default function BaraAlkahkaPage() {
    const [activeSection, setActiveSection] = useState("all")
    const [selectedTopic, setSelectedTopic] = useState(null)

    useEffect(() => {
        if (selectedTopic) {
            document.body.style.overflow = "hidden"
        } else {
            document.body.style.overflow = "unset"
        }
        return () => {
            document.body.style.overflow = "unset"
        }
    }, [selectedTopic])

    return (
        <div className="relative min-h-screen bg-brand-offwhite font-arabic" dir="rtl">
            <style jsx>{`
                .custom-scrollbar::-webkit-scrollbar {
                    width: 6px;
                }
                .custom-scrollbar::-webkit-scrollbar-track {
                    background: transparent;
                }
                .custom-scrollbar::-webkit-scrollbar-thumb {
                    background: rgba(90, 56, 37, 0.1);
                    border-radius: 10px;
                }
                .custom-scrollbar::-webkit-scrollbar-thumb:hover {
                    background: #C96A3D;
                }
            `}</style>
            
            <BackgroundSVG />
            <NavBar />
            
            <main className="relative z-10 mx-auto max-w-7xl px-4 pb-24 pt-12 sm:px-6 lg:px-8">
                {/* Hero Section */}
                <div className="relative mb-20 overflow-hidden rounded-[4rem] bg-brand-brown p-8 text-white sm:p-20 shadow-xl text-right">
                    <div className="absolute left-0 top-0 h-full w-1/3 bg-gradient-to-r from-brand-orange/20 to-transparent"></div>
                    <div className="relative z-10 max-w-3xl">
                        <span className="mb-4 inline-block rounded-full bg-brand-orange px-4 py-1 text-sm font-bold tracking-widest uppercase">
                            بره الكحكة ((العمل، الشارع، المجتمع) — 7 موضوعات)
                        </span>
                        <h1 className="mb-6 text-5xl font-black leading-tight sm:text-7xl text-white">بره الكحكة</h1>
                        <p className="text-xl font-medium leading-relaxed opacity-80 text-brand-offwhite/80">
                            جولة في عالم السوسيولوجيا والظواهر الاجتماعية التي تهم البنات والشارع والمجتمع.. لنرى ما يحدث خلف الأبواب وفي الميادين.
                        </p>
                    </div>
                </div>

                {/* Filter Navigation */}
                <div className="mb-16 flex flex-wrap items-center justify-center gap-4">
                    {[
                        { id: "all", label: "كل التحقيقات" },
                        { id: "digital", label: "السوشيال ميديا" },
                        { id: "street", label: "أمان الشارع" },
                        { id: "home", label: "البيت والسوق" }
                    ].map((tab) => (
                        <button
                            key={tab.id}
                            onClick={() => setActiveSection(tab.id)}
                            className={`rounded-full px-8 py-3 text-lg font-black transition-all ${
                                activeSection === tab.id 
                                ? "bg-brand-orange text-white shadow-md shadow-brand-orange/10 scale-105" 
                                : "bg-white text-brand-brown hover:bg-brand-brown/5"
                            }`}
                        >
                            {tab.label}
                        </button>
                    ))}
                </div>

                {/* Grid */}
                <div className="grid gap-8 md:grid-cols-12 mb-12">
                    {(activeSection === "all" || activeSection === "digital") && (
                        <>
                            {socialMediaTopics.map((topic, idx) => (
                                <div key={topic.id} 
                                    className={`${idx === 0 ? "md:col-span-8" : "md:col-span-4"} group relative overflow-hidden rounded-[3rem] ${idx === 0 ? "bg-white" : "bg-brand-orange text-white"} p-10 border border-brand-brown/10 hover:border-brand-orange/30 transition-all cursor-pointer shadow-sm hover:shadow-md`}
                                    onClick={() => setSelectedTopic(topic)}>
                                    <div className="flex flex-col h-full justify-between">
                                        <div className="flex flex-col md:flex-row gap-10 items-center text-right">
                                            {idx === 0 && <div className="w-24 h-24 text-brand-orange flex-shrink-0">{topic.svg()}</div>}
                                            <div className="flex-1 min-w-0">
                                                <span className={`${idx === 0 ? "text-brand-orange" : "text-white/80"} font-bold text-sm mb-2 block uppercase tracking-widest`}>{topic.category}</span>
                                                <h2 className={`text-4xl font-black mb-4 ${idx === 0 ? "text-brand-brown group-hover:text-brand-orange" : "text-white"} transition-colors break-words`}>{topic.title}</h2>
                                                <p className={`text-lg leading-relaxed mb-6 ${idx === 0 ? "text-brand-brown/70" : "text-white/90"}`}>{topic.content}</p>
                                            </div>
                                        </div>
                                        <div className="flex items-center gap-2 font-black italic group-hover:gap-4 transition-all">
                                            <span>تصفح التحقيق الكامل</span>
                                            <svg className="w-6 h-6 rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </>
                    )}

                    {(activeSection === "all" || activeSection === "street") && (
                        <>
                            {streetTopics.map((topic, idx) => (
                                <div key={topic.id} 
                                     className={`p-10 rounded-[3rem] transition-all cursor-pointer group border border-brand-brown/10 hover:border-brand-orange/30 shadow-sm hover:shadow-md ${idx === 0 ? "md:col-span-12 bg-brand-brown text-white/90" : "md:col-span-12 bg-white text-brand-brown"}`}
                                     onClick={() => setSelectedTopic(topic)}>
                                    <div className="flex flex-col md:flex-row items-center justify-between gap-10">
                                        <div className="text-right flex-1 min-w-0">
                                            <span className="text-brand-orange font-bold text-sm mb-2 block">{topic.category}</span>
                                            <h3 className="text-3xl font-black mb-4 break-words">{topic.title}</h3>
                                            <p className="text-lg opacity-80 leading-relaxed max-w-2xl">{topic.content}</p>
                                        </div>
                                        <div className="w-20 h-20 text-brand-orange opacity-40 group-hover:opacity-100 transition-opacity flex-shrink-0">
                                            {topic.svg && topic.svg(idx === 0 ? "white" : "#C96A3D")}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </>
                    )}

                    {(activeSection === "all" || activeSection === "home") && (
                        <>
                            {homeTopics.map((topic) => (
                                <div key={topic.id} 
                                     className="md:col-span-4 p-10 rounded-[3rem] bg-brand-beige/30 transition-all cursor-pointer group border border-brand-brown/10 hover:border-brand-orange/30 shadow-sm hover:shadow-md"
                                     onClick={() => setSelectedTopic(topic)}>
                                    <div className="flex flex-col items-start gap-6 text-right h-full">
                                        <div className="flex-1 min-w-0 w-full">
                                            <span className="text-brand-orange font-bold text-sm mb-2 block">{topic.category}</span>
                                            <h3 className="text-2xl font-black mb-4 text-brand-brown break-words leading-tight">{topic.title}</h3>
                                            <p className="text-lg text-brand-brown/70 leading-relaxed">{topic.content}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </>
                    )}
                </div>
            </main>

            {/* Modal */}
            {selectedTopic && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center bg-brand-brown/60 p-4 backdrop-blur-xl transition-all duration-500">
                    <div className="relative w-full max-w-6xl overflow-hidden rounded-[4rem] bg-brand-offwhite shadow-2xl flex flex-col md:flex-row max-h-[90vh] border border-brand-brown/10">
                        <div className="relative hidden md:flex w-2/5 bg-brand-brown p-16 flex-col justify-between overflow-hidden">
                            <div className="relative z-10">
                                <span className="text-brand-orange font-black text-sm tracking-widest uppercase mb-4 block underline decoration-brand-orange decoration-4 underline-offset-8">تحقيق خاص</span>
                                <h2 className="text-6xl font-black text-white leading-tight mb-8 mt-4">{selectedTopic.title}</h2>
                                <p className="text-brand-offwhite/60 text-xl font-medium leading-relaxed italic border-r-2 border-white/20 pr-6 mr-2">
                                    "جزء من السلسلة الوثائقية لتسليط الضوء على أنماط الحياة الحديثة."
                                </p>
                            </div>
                        </div>

                        <div className="flex-1 relative flex flex-col min-w-0">
                            <div className="absolute top-0 right-0 left-0 h-12 bg-gradient-to-b from-brand-offwhite to-transparent z-10 pointer-events-none"></div>
                            <div className="flex-1 p-8 md:p-16 overflow-y-auto text-right custom-scrollbar relative z-0">
                                <button onClick={() => setSelectedTopic(null)} className="fixed md:absolute left-8 top-8 z-50 rounded-full bg-brand-brown text-white p-4 shadow-lg hover:bg-brand-orange transition-all scale-110">
                                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}><path d="M6 18L18 6M6 6l12 12" /></svg>
                                </button>
                                <div className="max-w-[100%]">
                                    <span className="inline-block rounded-full bg-brand-orange/10 px-6 py-2 text-sm font-black text-brand-orange mb-10">{selectedTopic.category}</span>
                                    <div className="space-y-12 mb-16">
                                        <p className="text-2xl font-black leading-relaxed text-brand-brown pr-8 mr-4 italic border-r-4 border-brand-orange">{selectedTopic.content}</p>
                                        {selectedTopic.sections ? (
                                            selectedTopic.sections.map((section, idx) => (
                                                <div key={idx} className="group border-b border-brand-brown/5 pb-10 last:border-0">
                                                    <h3 className="text-xl font-black text-brand-brown mb-4 group-hover:text-brand-orange transition-colors flex items-center gap-4">
                                                        <span className="text-brand-orange/30 text-3xl font-serif">0{idx + 1}</span>
                                                        {section.heading}
                                                    </h3>
                                                    <p className="text-lg leading-loose text-brand-brown/70 font-medium font-arabic">{section.body}</p>
                                                </div>
                                            ))
                                        ) : (
                                            <p className="text-lg leading-loose text-brand-brown/70 font-medium whitespace-pre-line font-arabic">{selectedTopic.details}</p>
                                        )}
                                        {selectedTopic.conclusion && (
                                            <div className="bg-brand-brown p-10 rounded-[3rem] text-white">
                                                <h4 className="text-xl font-black mb-4 text-brand-orange">كلمة أخيرة</h4>
                                                <p className="text-lg font-bold opacity-90 leading-relaxed italic">{selectedTopic.conclusion}</p>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>
                            <div className="absolute bottom-0 right-0 left-0 h-12 bg-gradient-to-t from-brand-offwhite to-transparent z-10 pointer-events-none"></div>
                        </div>
                    </div>
                </div>
            )}
            
            <Footer />
        </div>
    )
}