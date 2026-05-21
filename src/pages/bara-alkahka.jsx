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
        svg: () => <div className="w-16 h-16 bg-brand-orange/20 rounded-md" />,
        content: "لمسات فنية بسيطة تحول غرفتك إلى عالمك الخاص الذي يعبر عن شخصيتك."
    },
    {
        id: 7,
        title: "الموبيليا",
        category: "ثقافة البيت",
        svg: () => <div className="w-16 h-16 bg-brand-brown/20 rounded-md" />,
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
                    background: rgba(181, 114, 232, 0.18);
                    border-radius: 10px;
                }
                .custom-scrollbar::-webkit-scrollbar-thumb:hover {
                    background: #B572E8;
                }
            `}</style>
            
            <BackgroundSVG />
            <NavBar />
            
            <main className="relative z-10 mx-auto  px-4 pb-24 pt-12 sm:px-6 lg:px-8">
                {/* Hero Section */}
                <div className="relative mb-20 overflow-hidden rounded-[1rem] md:rounded-[1rem] bg-soft-flow p-8 text-brand-ink sm:p-20 text-right">
                    <div className="relative z-10 max-w-3xl">
                        <span className="mb-4 inline-block rounded-md bg-brand-surface px-4 py-1 text-sm font-bold tracking-widest uppercase text-brand-ink">
                            بره الكحكة - 7 تحقيقات
                        </span>
                        <h1 className="mb-6 text-4xl font-black md:text-7xl text-brand-ink">بره الكحكة</h1>
                        <p className="text-lg md:text-xl text-brand-inkMuted">جولة في عالم السوشيال ميديا وأخلاقيات الشارع.</p>
                    </div>
                </div>

                {/* Filter Navigation */}
                <div className="mb-16 flex flex-wrap items-center justify-center gap-4">
                    {[
                        { id: "all", label: "الكل" },
                        { id: "digital", label: "رقمي" },
                        { id: "street", label: "الشارع" },
                        { id: "home", label: "البيت" }
                    ].map((btn) => (
                        <button key={btn.id} onClick={() => setActiveSection(btn.id)}
                            className={`rounded-full px-6 py-2 text-lg font-black transition-all ${activeSection === btn.id ? "bg-brand-secondary text-white scale-105" : "bg-brand-surface text-brand-ink hover:bg-brand-surface/70"}`}>
                            {btn.label}
                        </button>
                    ))}
                </div>

                {/* Grid */}
                <div className="grid gap-8 md:grid-cols-12 mb-12">
                    {[...socialMediaTopics, ...streetTopics, ...homeTopics]
                        .filter(t => activeSection === "all" || (activeSection === "digital" && t.id <= 2) || (activeSection === "street" && t.id === 3) || (activeSection === "home" && t.id > 3))
                        .map((topic, idx) => (
                            <div key={topic.id} 
                                className={`p-8 rounded-[1rem] transition-all cursor-pointer border border-brand-surface/70 hover:border-brand-secondary/60 bg-brand-surface text-brand-ink ${idx === 0 ? "md:col-span-8" : "md:col-span-4"}`}
                                onClick={() => setSelectedTopic(topic)}>
                                <h3 className="text-2xl font-black mb-4">{topic.title}</h3>
                                <p className="text-brand-inkMuted/80">{topic.content}</p>
                            </div>
                        ))}
                </div>
            </main>

            {/* Modal Overlay - Fixed Visibility & Interaction */}
            {selectedTopic && (
                 <div className="fixed inset-0 z-[9999] flex justify-center items-start md:items-center bg-brand-ink/30 p-0 md:p-6 backdrop-blur-xl overflow-y-auto"
                     onClick={() => setSelectedTopic(null)}>
                    
                    {/* Modal Content - Fixed Scrolling */}
                    <div className="relative w-full max-w-6xl flex flex-col md:flex-row bg-brand-surface md:rounded-[1rem] overflow-hidden min-h-screen md:min-h-0 md:max-h-[85vh] border border-brand-surface/70"
                         onClick={(e) => e.stopPropagation()}>
                        
                        {/* Sticky Header for Mobile */}
                        <div className="flex items-center justify-between p-6 border-b border-brand-surface/70 bg-brand-surface/90 backdrop-blur-md sticky top-0 z-30 md:hidden">
                            <h2 className="text-xl font-black text-brand-ink leading-tight line-clamp-1">{selectedTopic.title}</h2>
                            <button onClick={() => setSelectedTopic(null)} className="p-2 rounded-full bg-brand-secondary text-white">
                                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}><path d="M6 18L18 6M6 6l12 12" /></svg>
                            </button>
                        </div>

                        {/* Sidebar (Desktop Only) */}
                        <div className="hidden md:flex md:w-1/3 bg-soft-sheen p-12 flex-col justify-center text-brand-ink relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-64 h-64 bg-white/50 rounded-full -translate-y-1/2 translate-x-1/2 blur-2xl"></div>
                            <span className="text-brand-ink font-black text-sm uppercase mb-4 block underline decoration-4 underline-offset-8">تحقيق خاص</span>
                            <h2 className="text-5xl font-black leading-tight mb-6 relative z-10">{selectedTopic.title}</h2>
                            <div className="w-16 h-1 bg-brand-accent/70 mb-6 relative z-10"></div>
                            <p className="text-brand-inkSubtle italic leading-relaxed relative z-10">"تحليل مجتمعي معمق لظواهر العصر الحديث."</p>
                        </div>

                        {/* Content Area */}
                        <div className="flex-1 flex flex-col min-w-0">
                            {/* Desktop Close Button */}
                            <button onClick={() => setSelectedTopic(null)} className="absolute left-8 top-8 z-50 rounded-full bg-brand-secondary text-white p-4 transition-all hidden md:block">
                                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}><path d="M6 18L18 6M6 6l12 12" /></svg>
                            </button>

                            {/* Scrollable Body */}
                            <div className="md:overflow-y-auto p-6 md:p-16 text-right custom-scrollbar bg-brand-surface">
                                <span className="badge-soft mb-8 uppercase tracking-widest">{selectedTopic.category}</span>
                                
                                <div className="space-y-10 max-w-4xl">
                                    <p className="text-xl md:text-2xl font-black text-brand-ink leading-relaxed border-r-4 border-brand-accent/60 pr-6 italic mb-12">
                                        {selectedTopic.content}
                                    </p>

                                    {selectedTopic.sections?.map((section, idx) => (
                                        <div key={idx} className="border-b border-brand-surface/70 pb-10 last:border-0 group">
                                            <h3 className="text-lg md:text-xl font-black text-brand-ink mb-4 flex items-center gap-4 transition-colors group-hover:text-brand-secondary">
                                                <span className="text-brand-accent/40 text-3xl font-serif">0{idx + 1}</span>
                                                {section.heading}
                                            </h3>
                                            <p className="text-base md:text-lg text-brand-inkMuted/80 leading-loose font-medium">{section.body}</p>
                                        </div>
                                    ))}

                                    {selectedTopic.conclusion && (
                                        <div className="mt-12 bg-soft-sheen p-8 md:p-12 rounded-[1rem] text-brand-ink relative overflow-hidden">
                                            <div className="absolute top-0 left-0 w-24 h-24 bg-white/60 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
                                            <h4 className="text-xl font-black mb-4 text-brand-ink tracking-widest uppercase">الخلاصة</h4>
                                            <p className="text-base md:text-lg font-bold text-brand-inkMuted leading-relaxed italic">{selectedTopic.conclusion}</p>
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