import { Link, useLocation } from 'react-router-dom'
import { useState, useEffect, useRef } from 'react'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'


const articles = [
    {
        id: 1,
        title: "الولاية التعليمية للأم وحماية الأبناء بعد الانفصال: معركة الحقوق المفقودة",
        subtitle: "القانون المصري يمنح الحاضن الولاية التعليمية بقوة القانون لمنع استخدام التعليم كورقة ضغط بين الطرفين.",
        category: "كلام قانون",
        author: "اسراء أحمد",
        date: "٢ يونيو ٢٠٢٦",
        time: "١٠:١٥ ص",
        views: 12450,
        likes: 520,
        image: "/imgs/carousel/Eradicating-female-illiteracy.jpeg",
        to: "/kalam-qanun",
        content: [
            { heading: "ما هي الولاية التعليمية؟", text: "هي السلطة القانونية التي تمنح صاحبها الحق في التقديم للأطفال في المدارس، أو نقل ملفاتهم، أو اختيار نوع التعليم المناسب لهم. الهدف الأساسي منها هو حماية مصلحة الطفل الفضلى ومنع استخدام التعليم كوسيلة للضغط بين الطرفين." },
            { heading: "لمن يثبت هذا الحق؟", text: "وفقا للكتاب الدوري رقم 1 لسنة 2008، الولاية التعليمية تثبت للحاضن (الأم غالبا) طوال فترة الحضانة، ولا تحتاج الأم لرفع دعوى قضائية بمجرد تقديم وثيقة الطلاق للمدرسة أو الإدارة التعليمية." },
            { heading: "موقف القضاء في النزاعات المستعجلة", text: "في حالة وجود نزاع قضائي أو انفصال دون طلاق رسمي، يمكن للأم استصدار أمر وقتي من قاضي الأمور المستعجلة بمحكمة الأسرة للحصول على الولاية التعليمية بشكل عاجل لضمان استمرار تعليم الأبناء." }
        ],
        comments: [
            { user: "حوريه اسامه", text: "قرار عادل جداً يرفع العبء عن كاهل الأمهات المطلقات." },
            { user: "عائشة حسين", text: "التعليم يجب أن يظل بمنأى عن أي صراعات زوجية." }
        ]
    },
    {
        id: 2,
        title: "المرأة المعيلة: القيادة الفردية في مهب الأزمات الاقتصادية وتآكل الدخل",
        subtitle: "تعيل النساء ما يقارب ثلث الأسر المصرية والعربية وتواجه أعباءً مضاعفة بين العمل الشاق والرعاية.",
        category: "على الهامش",
        author: "عائشة حسين",
        date: "٢ يونيو ٢٠٢٦",
        time: "٠٩:٣٠ ص",
        views: 9820,
        likes: 410,
        image: "/imgs/10.jpeg",
        to: "/ala-alhamesh",
        content: [
            { heading: "الصراع اليومي بين لقمة العيش وتربية الأبناء", text: "تستيقظ المرأة المعيلة في الفجر لتكسب قوت يومها من بيع البضائع البسيطة أو العمل في مهن شاقة. تقضي يومها في توازن حرج ومؤلم بين كسب المال لتدبير الإيجار ومصاريف المدارس، وبين غيابها الاضطراري عن المنزل لمراقبة سلوك أطفالها." },
            { heading: "التمييز الفج في الأجور ومحدودية الفرص", text: "رغم الكفاءة والجهد المضاعف، تعاني المرأة المعيلة من تمييز واضح في الأجور في القطاعات الحرة مقارنة بالرجال، كما تصطدم بغياب القروض الميسرة التي تمكنها من تكبير تجارتها أو مشروعها الصغير دون شروط معقدة." },
            { heading: "أهمية الدعم المؤسسي المستدام والتأمين الصحي", text: "تفتقر الغالبية العظمى من النساء المعيلات لغطاء تأميني وصحي يحميهن في حال المرض؛ فمرض المرأة المعيلة يعني توقف دخل الأسرة كاملاً. من هنا تنبع المطالبات بضم هذه الفئة إلى مظلات تأمينية شاملة ومعاشات كريمة تضمن صون كرامتهن." }
        ],
        comments: [
            { user: "بهاء جمال", text: "أحيي كل امرأة معيلة تكافح بمفردها لبناء مستقبل أبنائها." }
        ]
    },
    {
        id: 3,
        title: "النسوية على السوشيال ميديا: بين تمكين النساء وصناعة الوهم الرقمي والتريند",
        subtitle: "تفكيك نقدي لخطاب النسوية الرقمية والتأثير النفسي والاجتماعي المترتب على صراعات الخوارزميات.",
        category: "صوتها مسموع",
        author: "بهاء جمال",
        date: "١ يونيو ٢٠٢٦",
        time: "٠٦:٤٥ م",
        views: 15600,
        likes: 830,
        image: "/imgs/3.png",
        to: "/sawtoha-masmoua",
        content: [
            { heading: "من النخبة إلى الترند: كيف تغيّرت ملامح النسوية؟", text: "في السابق، ارتبطت النسوية بخطابات فكرية معقدة، وأسماء أكاديمية، ونقاشات تدور في نطاق ضيق نسبيًا. لكن مع صعود السوشيال ميديا، انتقلت هذه القضايا إلى المجال العام، حيث باتت تُطرح في فيديوهات قصيرة ومنشورات مختصرة تصل إلى ملايين المتابعين خلال ساعات. ما حدث هو تبسيط واسع للمفاهيم، وهو أمر إيجابي من حيث الانتشار، لكنه خطير من حيث فقدان العمق." },
            { heading: "تمكين حقيقي أم أداء رقمي؟", text: "رصد التحقيق عشرات الحسابات التي تقدم محتوى نسويًا، وتبيّن أن جزءًا منها يلعب دورًا مهمًا في رفع الوعي، من خلال مناقشة قضايا مثل الاستقلال الاقتصادي، والحقوق القانونية، والعنف ضد المرأة. لكن في المقابل، يرى خبراء الإعلام أن هناك نمطًا آخر من المحتوى يعتمد على الاستفزاز كوسيلة للانتشار وجذب التفاعل." },
            { heading: "من يصنع الصوت؟ خوارزميات تتحكم في الوعي", text: "التحقيق يكشف أن ما يظهر على السوشيال ميديا ليس بالضرورة انعكاسًا حقيقيًا للواقع، بل نتيجة لاختيارات خوارزمية تعتمد على التفاعل. خبراء الإعلام الرقمي يؤكدون أن المحتوى الأكثر إثارة للجدل هو الأكثر انتشارًا، وهو ما يعني أن الأصوات المعتدلة قد لا تحظى بنفس الظهور." }
        ],
        comments: [
            { user: "حوريه اسامه", text: "تحليل ممتاز! السوشيال ميديا شوهت الكثير من المفاهيم الجادة لصالح التفاعل والتريند." }
        ]
    },
    {
        id: 4,
        title: "إنجاب البنات: موروث ثقافي في مواجهة الحقيقة البيولوجية والدينية للنوع",
        subtitle: "تفاصيل التحقيق الاجتماعي حول تفضيل الذكور وتأثير ذلك على استقرار الأسر والصحة النفسية للأمهات.",
        category: "على الهامش",
        author: "بسمه رضا",
        date: "١ يونيو ٢٠٢٦",
        time: "٠٢:١٥ م",
        views: 8430,
        likes: 310,
        image: "/imgs/7.png",
        to: "/ala-alhamesh",
        content: [
            { heading: "جذور تاريخية لا تزال حاضرة", text: "تشير الدراسات الاجتماعية إلى أن تفضيل الذكور ليس ظاهرة حديثة، بل يمتد إلى عصور قديمة ارتبطت فيها قيمة الفرد بقدرته على العمل والحماية. في تلك الفترات، اعتُبر الذكر مصدر قوة، بينما نُظر إلى الأنثى كعبء اقتصادي." },
            { heading: "الدين يحسم الجدل", text: "على خلاف ما يعتقد البعض، لا يدعم الدين أي تمييز بين الذكور والإناث. بل على العكس، يرفع من مكانة البنات ويحث على الإحسان إليهن. ويؤكد علماء الدين أن رفض إنجاب البنات يتنافى مع جوهر القيم الإنسانية والدينية." }
        ],
        comments: []
    },
    {
        id: 5,
        title: "أم المعاق: المعركة اليومية الصامتة في مواجهة مجتمع وبنية تحتية غير مهيأة",
        subtitle: "شهادات حية لأمهات أطفال ذوي الاحتياجات الخاصة وتحديات الدمج وغياب الدعم المؤسسي والنفسي.",
        category: "على الهامش",
        author: "بسمه رضا",
        date: "٣١ مايو ٢٠٢٦",
        time: "١١:٠٠ ص",
        views: 7910,
        likes: 290,
        image: "/imgs/carousel/The-mother-of-the-disabled-a-superhero-no-one-sees.jpeg",
        to: "/om-eltifl-dhawi-al-eaahaq",
        content: [
            { heading: "العزلة الاجتماعية والانسحاب من الحياة", text: "تجد أم الطفل المعاق نفسها مجبرة على التخلي عن وظيفتها وحياتها الاجتماعية لتتحول إلى مرافق دائم على مدار الساعة. تضيق مساحتها الشخصية وتصبح طموحاتها مؤجلة لأجل غير مسمى في ظل غياب مراكز رعاية حكومية مجانية وموثوقة." },
            { heading: "غياب الدعم النفسي للأم كشريك أساسي", text: "يركز الجميع على تأهيل الطفل، بينما تترك الأم لتواجه التوتر الشديد، والاحتراق النفسي، والقلق الدائم حول مستقبل الابن بعد رحيلها. تحتاج هذه الفئة إلى برامج دعم نفسي حكومية ومجتمعية إلزامية." }
        ],
        comments: []
    },
    {
        id: 6,
        title: "صراعات الرحلة اليومية للمواصلات: بين الزحام والكرامة اليومية للمرأة",
        subtitle: "المعاناة الصامتة للمرأة في المواصلات العامة وبحثها عن مساحات آمنة للتنقل والعمل.",
        category: "قضايا المجتمع",
        author: "عائشة حسين",
        date: "٣٠ مايو ٢٠٢٦",
        time: "٠٨:١٥ ص",
        views: 11200,
        likes: 670,
        image: "/imgs/carousel/suffering-of-women-on-public-transportation.jpeg",
        to: "/bayn-alzahm-walkarama",
        content: [
            { heading: "المعاناة اليومية في الفضاء العام", text: "تمثل الرحلة اليومية بالمواصلات العامة عبئاً حقيقياً على صحة المرأة الجسدية والنفسية، حيث تواجه الزحام الخانق وغياب الخصوصية والاعتداءات اللفظية والجسدية في بعض الأحيان." },
            { heading: "مطالب بمساحات مخصصة وآمنة", text: "تطالب الحركات الاجتماعية بتوفير خيارات مواصلات عامة مخصصة للنساء وتوسيع نطاق عربات السيدات في المترو ووسائل النقل الأخرى لضمان أمانهن وحريتهن في الحركة." }
        ],
        comments: []
    },
    {
        id: 7,
        title: "معايير الجمال والهوس العصري: تفكيك الضغوط المفروضة على ملامح وهوية المرأة",
        subtitle: "كيف تسهم الصور النمطية وعمليات التجميل المتكررة في هز ثقة الفتيات بأنفسهن؟",
        category: "صحة وجمال",
        author: "احمد ابراهيم",
        date: "٢٩ مايو ٢٠٢٦",
        time: "٠٤:٣٠ م",
        views: 14200,
        likes: 810,
        image: "/imgs/carousel/Women-obsession-with-beauty.jpeg",
        to: "/hous-eltagmeel",
        content: [
            { heading: "تفكيك الصور النمطية البصرية", text: "يعاني الجيل الجديد من الفتيات من ضغط بصري غير مسبوق تفرضه الفلاتر ومنصات السوشيال ميديا وعيادات التجميل، مما يعزز فكرة وجود ملامح مثالية موحدة ويؤدي إلى اضطراب صورة الجسد." },
            { heading: "نحو قبول الذات الطبيعية", text: "يدعو خبراء علم النفس والاجتماع إلى دعم المبادرات التوعوية التي تبرز الجمال الطبيعي المتنوع وتدرب الفتيات على كشف وتجاوز الخدع البصرية والتجارية للتسويق الجمالي." }
        ],
        comments: []
    },
    {
        id: 8,
        title: "عام الأمومة الأول: بين دفء الصغير وضغوط المهام والتحولات النفسية الحادة",
        subtitle: "صراعات وتجارب الأمهات الجدد خلف الأبواب المغلقة في التوفيق بين الرعاية ومساحتهن الشخصية.",
        category: "المرأة والأسرة",
        author: "بسمه رضا",
        date: "٢٨ مايو ٢٠٢٦",
        time: "٠٢:٠٠ م",
        views: 6540,
        likes: 210,
        image: "/imgs/carousel/First-year-of-motherhood.jpeg",
        to: "/sana-ola-omoma",
        content: [
            { heading: "صدمة التحول والهوية الجديدة", text: "بين دفء الرضيع والمسؤوليات الضخمة المفاجئة، تعيش الأم الجديدة اضطرابات نفسية حادة وجروح جسدية وتغييراً كاملاً في جدول نومها وحياتها الاجتماعية، وهو ما يتطلب تفهماً ومساندة حقيقية من الزوج والأسرة." }
        ],
        comments: []
    },
    {
        id: 9,
        title: "دوامة الأعمال المنزلية الرتيبة: المجهود الخفي غير المرئي لإبقاء التوازن",
        subtitle: "تفكيك عبء الرعاية المنزلية الذي يقع بالكامل على عاتق الزوجة دون تقدير مادي أو معنوي.",
        category: "المرأة والأسرة",
        author: "احمد ابراهيم",
        date: "٢٧ مايو ٢٠٢٦",
        time: "٠٩:٠٠ ص",
        views: 5200,
        likes: 180,
        image: "/imgs/carousel/house-cleaning-routine.jpeg",
        to: "/roteen-tanzeef-almanzel",
        content: [
            { heading: "العمل غير المرئي في المنزل", text: "الطبخ، التنظيف، الغسيل، ومتابعة دراسة الأطفال؛ أعمال يومية متكررة تستهلك طاقة المرأة وتأخذ وقتاً هائلاً، لكن يُنظر إليها كمسلمات وواجبات افتراضية خالية من القيمة المهنية والمالية." }
        ],
        comments: []
    },
    {
        id: 10,
        title: "الطلاق للضرر أم الخلع؟ دليل المرأة لاتخاذ القرار الصحيح وحفظ حقوقها المالية",
        subtitle: "شرح الفروق القانونية والإجرائية والمادية والزمنية لمسارات فك الرابطة الزوجية.",
        category: "كلام قانون",
        author: "عائشة حسين",
        date: "٢٦ مايو ٢٠٢٦",
        time: "١٢:٣٠ م",
        views: 11050,
        likes: 490,
        image: "/imgs/carousel/Eradicating-female-illiteracy.jpeg",
        to: "/kalam-qanun",
        content: [
            { heading: "الخلع: السرعة مقابل التنازل المالي", text: "يتميز الخلع بسرعة الفصل القضائي، حيث تقرر الزوجة التنازل عن كامل حقوقها الشرعية والمالية (مؤخر الصداق، نفقة المتعة والعدة) لتسترد حريتها سريعاً." },
            { heading: "الطلاق للضرر: حقوق كاملة ولكن بزمن أطول", text: "يطلب إثبات أسباب واضحة (التعدي، الهجر، سوء المعاشرة) بشهادة الشهود أو المستندات، وميزته هي احتفاظ الزوجة بكامل مستحقاتها المالية لكنه قد يطول في المحاكم." }
        ],
        comments: []
    },
    {
        id: 11,
        title: "الجرائم الإلكترونية والتزييف العميق: التهديد التقني الجديد لسمعة وحياة المرأة",
        subtitle: "آليات الحماية القانونية والرقمية ومسؤوليات الإبلاغ عند التعرض للابتزاز بالصور المفبركة.",
        category: "كلام قانون",
        author: "بهاء جمال",
        date: "٢٥ مايو ٢٠٢٦",
        time: "١٠:٠٠ ص",
        views: 13900,
        likes: 720,
        image: "/imgs/carousel/Women-obsession-with-beauty.jpeg",
        to: "/kalam-qanun",
        content: [
            { heading: "تحدي الابتزاز بالذكاء الاصطناعي", text: "تجد الكثير من النساء أنفسهن ضحايا لتركيب الصور ومقاطع الفيديو بدقة شديدة بهدف التشهير أو الابتزاز. القانون يعاقب على هذه الجريمة بعقوبات سجن مشددة." },
            { heading: "خطوات الحماية الفورية", text: "ينصح بالاحتفاظ بالأدلة الرقمية (لقطات الشاشة) والتوجه فوراً لمباحث الإنترنت لتقديم بلاغ رسمي، وتفادي الاستسلام لطلبات المبتز أو التكتم على المشكلة." }
        ],
        comments: []
    },
    {
        id: 12,
        title: "قصص نجاح من فصول النور: سيدات يهزمن الأمية ويفتحن مشاريع مستقلة بالقرى",
        subtitle: "تقارير ميدانية حول تحدي الجهل وكيف يسهم تعليم الفتيات والسيدات في حمايتهن من الفقر.",
        category: "قصص ملهمة",
        author: "بهاء جمال",
        date: "٢٤ مايو ٢٠٢٦",
        time: "٠٣:٠٠ م",
        views: 7120,
        likes: 380,
        image: "/imgs/2.png",
        to: "/mahw-el-omya",
        content: [
            { heading: "التعليم كبوابة للاستقلال والكرامة", text: "تروي السيدات في فصول محو الأمية كيف تبدلت حياتهن وقدرتهن على إدارة المعاملات المالية البسيطة دون استغلال أو احتيال، وكيف أثر ذلك على مستوى رعاية أسرهن." }
        ],
        comments: []
    },
    {
        id: 13,
        title: "صراع الأدوار والمسؤوليات: دليل الأم العاملة للتوازن الصعب",
        subtitle: "تحقيق يبحث في التوفيق بين التطلعات المهنية والالتزام العائلي دون احتراق نفسي.",
        category: "بين البيت والشغل",
        author: "حوريه اسامه",
        date: "٢٣ مايو ٢٠٢٦",
        time: "١١:١٥ ص",
        views: 8900,
        likes: 340,
        image: "/imgs/carousel/house-cleaning-routine.jpeg",
        to: "/bayn-albayt-walshoghl",
        content: [
            { heading: "العبء المزدوج للأم العاملة", text: "بين ضغط ساعات العمل في المكتب وواجبات الرعاية والمتابعة للأطفال في المنزل، تجد الأم العاملة نفسها في سباق مستمر يستنزف طاقتها الجسدية والعصبية." }
        ],
        comments: []
    },
    {
        id: 14,
        title: "البنت القوية: لقب اجتماعي داعم أم قيد يفرض التحمل الصامت؟",
        subtitle: "تفكيك مفهوم القوة في عيون الفتيات وكيف يتحول التوقع بالتحمل إلى احتراق عاطفي.",
        category: "جوه الكحكة",
        author: "حوريه اسامه",
        date: "٢٢ مايو ٢٠٢٦",
        time: "٠٤:٠٠ م",
        views: 12100,
        likes: 540,
        image: "/imgs/carousel/Women-obsession-with-beauty.jpeg",
        to: "/gowa-alkahka",
        content: [
            { heading: "قناع القوة وكبت الضعف الإنساني", text: "تشعر الكثير من الفتيات بالخوف من إظهار التعب أو طلب الدعم حتى لا يفقدن لقب البنت القوية، مما يعزز العزلة النفسية والكتمان." }
        ],
        comments: []
    },
    {
        id: 15,
        title: "الخوف من الزواج والارتباط: إعادة تفكيك وتشكيل مفهوم الاستقرار",
        subtitle: "دراسة اجتماعية حول عزوف وتوجس الجيل الجديد من الالتزام وبناء أسر في ظل التحولات المعاصرة.",
        category: "جوه الكحكة",
        author: "حوريه اسامه",
        date: "٢١ مايو ٢٠٢٦",
        time: "١٠:١٥ ص",
        views: 14300,
        likes: 710,
        image: "/imgs/3.png",
        to: "/gowa-alkahka",
        content: [
            { heading: "تغير الأولويات والحذر النفسي", text: "لم يعد تأخر الارتباط ناتجًا عن الرفض التام، بل عن الحذر الشديد والرغبة في تحقيق الاستقلال المالي والوعي الكامل قبل الإقدام على خطوة الشراكة." }
        ],
        comments: []
    },
    {
        id: 16,
        title: "التريندات القاتلة وتحديات الفضاء الرقمي: فخ الشهرة السريعة",
        subtitle: "كيف تسحب خوارزميات السوشيال ميديا المراهقات إلى مسارات خطرة تهدد سلامتهن؟",
        category: "بره الكحكة",
        author: "اسراء أحمد",
        date: "٢٠ مايو ٢٠٢٦",
        time: "٠٩:٠٠ ص",
        views: 18500,
        likes: 920,
        image: "/imgs/carousel/Eradicating-female-illiteracy.jpeg",
        to: "/bara-alkahka",
        content: [
            { heading: "خوارزميات تصنع الخطر لجذب التفاعل", text: "تستهدف المنصات حاجة المراهقين للانتماء والقبول، فتعرض التحديات العنيفة والخطيرة كقصص نجاح لانتشار التريند." }
        ],
        comments: []
    },
    {
        id: 17,
        title: "التحرش اللفظي في المساحات العامة والخاصة: كسر جدار الصمت",
        subtitle: "تحقيق ميداني يرصد جروح الوجدان الخفية والمطالبات بقوانين حازمة لأمن الشارع للبنات.",
        category: "بره الكحكة",
        author: "اسراء أحمد",
        date: "١٩ مايو ٢٠٢٦",
        time: "١٢:٠٠ م",
        views: 15300,
        likes: 800,
        image: "/imgs/carousel/suffering-of-women-on-public-transportation.jpeg",
        to: "/bara-alkahka",
        content: [
            { heading: "الآثار النفسية الممتدة ومقاومة التبرير", text: "يؤدي التحرش اللفظي المتكرر لتراجع الثقة والشعور بالخوف المستمر في الفضاء العام، مما يفرض مواجهته اجتماعياً وتشريعياً دون أي تبرير للمعتدي." }
        ],
        comments: []
    },
    {
        id: 18,
        title: "حكايات ستات: مذكرات أم مغتربة بين شوق الأوطان ورعاية الصغار",
        subtitle: "سرديات وقصص واقعية تروي اليوميات المليئة بالتحديات والدروس والمسؤوليات للأمهات.",
        category: "حكايات ستات",
        author: "احمد ابراهيم",
        date: "١٨ مايو ٢٠٢٦",
        time: "٠٢:٣٠ م",
        views: 6200,
        likes: 190,
        image: "/imgs/carousel/First-year-of-motherhood.jpeg",
        to: "/hikayat-settat",
        content: [
            { heading: "الغربة وصدمة التربية الفردية", text: "تروي الحكايات مشاعر العزلة والبعد عن المساندة العائلية التقليدية للأم في بلاد الغربة، وكيف تصنع مجتمعها البديل لحماية أطفالها." }
        ],
        comments: []
    }
];



const podcastEpisodes = [
    {
        id: 1,
        title: "الحلقة الأولى: خلف الأبواب المغلقة - صمت الأم الجديدة",
        desc: "نستضيف في هذه الحلقة أخصائية نفسية لتفكيك التوقعات المثالية للمجتمع وتأثيرها على الأمهات في السنة الأولى.",
        duration: "١٢:٣٠",
        audioUrl: "https://www.google.com/speech-api/v2/synthesize?enc=mpeg&client=chromium&key=AIzaSyBOti4mM-6x9WDnZIjIeyEU21OpBXqWBgw&text=%D8%B9%D9%86%D9%88%D8%A7%D9%86%20%D8%A7%D9%84%D8%AD%D9%84%D9%82%D8%A9%3A%20%D8%AE%D9%84%D9%81%20%D8%A7%D9%84%D8%A3%D8%A8%D9%88%D8%A7%D8%A8%20%D8%A7%D9%84%D9%85%D8%BA%D9%84%D9%82%D8%A9%20-%20%D8%B5%D9%85%D8%AA%20%D8%A7%D9%84%D8%A3%D9%85%20%D8%A7%D9%84%D8%AC%D8%AF%D9%8A%D8%AF%D8%A9%0A%D8%A7%D9%84%D9%85%D8%AF%D8%A9%20%D8%A7%D9%84%D9%85%D8%AA%D9%88%D9%82%D8%B9%D8%A9%3A%208%20-%2012%20%D8%AF%D9%82%D9%8A%D9%82%D8%A9%0A%D8%A7%D9%84%D8%A3%D8%B3%D9%84%D9%88%D8%A8%3A%20%D9%88%D8%AB%D8%A7%D8%A6%D9%82%D9%8A%D8%8C%20%D8%A7%D8%B3%D8%AA%D9%82%D8%B5%D8%A7%D8%A6%D9%8A%D8%8C%20%D8%A5%D9%86%D8%B3%D8%A7%D9%86%D9%8A%0A%D8%A7%D9%84%D9%84%D8%BA%D8%A9%3A%20%D8%B9%D8%B1%D8%A8%D9%8A%D8%A9%20%D9%81%D8%B5%D8%AD%D9%89%20%D9%85%D8%B9%D8%A7%D8%B5%D8%B1%D8%A9%D8%8C%20%D9%82%D8%B1%D9%8A%D8%A8%D8%A9%20%D9%84%D9%84%D9%82%D9%84%D8%A8%D8%8C%20%D9%88%D8%A5%D9%8A%D9%82%D8%A7%D8%B9%20%D8%B3%D8%B1%D8%AF%D9%8A%20%D9%87%D8%A7%D8%AF%D8%A6%20%D9%88%D9%85%D8%AA%D8%A3%D9%86%D9%8D.%0A%0A%5B%D9%85%D8%A4%D8%AB%D8%B1%D8%A7%D8%AA%20%D8%B5%D9%88%D8%AA%D9%8A%D8%A9%20(SFX)%5D%0A(%D8%B5%D9%88%D8%AA%20%D8%AF%D9%82%D8%A7%D8%AA%20%D8%B3%D8%A7%D8%B9%D8%A9%20%D8%AD%D8%A7%D8%A6%D8%B7%20%D9%81%D9%8A%20%D9%85%D9%86%D8%AA%D8%B5%D9%81%20%D8%A7%D9%84%D9%84%D9%8A%D9%84..%20%D8%AA%D9%83%D8%AA%D9%83%D8%A9%20%D9%85%D9%86%D8%AA%D8%B8%D9%85%D8%A9%20%D9%88%D9%88%D8%A7%D8%B6%D8%AD%D8%A9.%20%D9%8A%D8%AA%D8%AF%D8%A7%D8%AE%D9%84%20%D9%85%D8%B9%D9%87%D8%A7%20%D8%B5%D9%88%D8%AA%20%D8%A8%D9%83%D8%A7%D8%A1%20%D8%B7%D9%81%D9%84%20%D8%B1%D8%B6%D9%8A%D8%B9%20%D8%AE%D8%A7%D9%81%D8%AA%20%D9%8A%D8%A3%D8%AA%D9%8A%20%D9%85%D9%86%20%D8%BA%D8%B1%D9%81%D8%A9%20%D9%85%D8%AC%D8%A7%D9%88%D8%B1%D8%A9.%20%D8%B5%D9%88%D8%AA%20%D8%AA%D9%86%D9%87%D9%8A%D8%AF%D8%A9%20%D8%B9%D9%85%D9%8A%D9%82%D8%A9%20%D9%84%D8%A7%D9%85%D8%B1%D8%A3%D8%A9%D8%8C%20%D8%AB%D9%85%20%D8%AE%D8%B7%D9%88%D8%A7%D8%AA%20%D9%85%D8%AA%D8%AB%D8%A7%D9%82%D9%84%D8%A9%20%D8%B9%D9%84%D9%89%20%D8%A3%D8%B1%D8%B6%D9%8A%D8%A9%20%D8%AE%D8%B4%D8%A8%D9%8A%D8%A9..%20%D9%8A%D8%B5%D9%85%D8%AA%20%D8%A8%D9%83%D8%A7%D8%A1%20%D8%A7%D9%84%D8%B7%D9%81%D9%84%20%D9%88%D9%8A%D8%A8%D9%82%D9%89%20%D8%B5%D9%88%D8%AA%20%D8%A7%D9%84%D8%B3%D8%A7%D8%B9%D8%A9%D8%8C%20%D8%AB%D9%85%20%D9%8A%D8%AA%D9%84%D8%A7%D8%B4%D9%89%20%D8%AA%D8%AF%D8%B1%D9%8A%D8%AC%D9%8A%D8%A7%D9%8B)%0A%0A%5B%D8%A7%D9%84%D9%85%D9%82%D8%AF%D9%85%D8%A9%20%D8%A7%D9%84%D8%AE%D8%A7%D8%B7%D9%81%D8%A9%20-%20Hook%5D%0A%D8%A7%D9%84%D8%B1%D8%A7%D9%88%D9%8A%20(%D8%A8%D8%B5%D9%88%D8%AA%20%D9%87%D8%A7%D8%AF%D8%A6%D8%8C%20%D9%82%D8%B1%D9%8A%D8%A8%20%D9%85%D9%86%20%D8%A7%D9%84%D9%85%D9%8A%D9%83%D8%B1%D9%88%D9%81%D9%88%D9%86%D8%8C%20%D9%8A%D8%AD%D9%85%D9%84%20%D8%AA%D8%B9%D8%A7%D8%B7%D9%81%D8%A7%D9%8B%20%D8%B9%D9%85%D9%8A%D9%82%D8%A7%D9%8B)%3A%0A&lang=ar-EG&speed=0.5&pitch=0.5"
    },
    {
        id: 2,
        title: "الحلقة الثانية: العمل المنزلي المجهول - من يقدر المجهود؟",
        desc: "نقاش مفتوح حول القيمة المعنوية والاجتماعية لإدارة شؤون المنزل وعبء الرعاية اليومي.",
        duration: "١٨:٤٥",
        audioUrl: "https://www.google.com/speech-api/v2/synthesize?enc=mpeg&client=chromium&key=AIzaSyBOti4mM-6x9WDnZIjIeyEU21OpBXqWBgw&text=%D8%B9%D9%86%D9%88%D8%A7%D9%86%20%D8%A7%D9%84%D8%AD%D9%84%D9%82%D8%A9%3A%20%D8%A7%D9%84%D8%B9%D9%85%D9%84%20%D8%A7%D9%84%D9%85%D9%86%D8%B2%D9%84%D9%8A%20%D8%A7%D9%84%D9%85%D8%AC%D9%87%D9%88%D9%84%20-%20%D9%85%D9%86%20%D9%8A%D9%82%D8%AF%D8%B1%20%D8%A7%D9%84%D9%85%D8%AC%D9%87%D9%88%D8%AF%D8%9F%0A%D8%A7%D9%84%D9%85%D8%AF%D8%A9%20%D8%A7%D9%84%D9%85%D8%AA%D9%88%D9%82%D8%B9%D8%A9%3A%208%20-%2012%20%D8%AF%D9%82%D9%8A%D9%82%D8%A9%0A%D8%A7%D9%84%D8%A3%D8%B3%D9%84%D9%88%D8%A8%3A%20%D9%88%D8%AB%D8%A7%D8%A6%D9%82%D9%8A%D8%8C%20%D8%A7%D8%B3%D8%AA%D9%82%D8%B5%D8%A7%D8%A6%D9%8A%D8%8C%20%D8%A5%D8%AC%D8%AA%D9%85%D8%A7%D8%B9%D9%8A%0A%0A%5B%D9%85%D8%A4%D8%AB%D8%B1%D8%A7%D8%AA%20%D8%B5%D9%88%D8%AA%D9%8A%D8%A9%20-%20SFX%5D%0A(%D8%B5%D9%88%D8%AA%20%D9%85%D9%86%D8%A8%D9%87%20%D9%87%D8%A7%D8%AA%D9%81%20%D9%8A%D8%B1%D9%86%20%D9%81%D9%8A%20%D8%A7%D9%84%D8%B3%D8%A7%D8%AF%D8%B3%D8%A9%20%D8%B5%D8%A8%D8%A7%D8%AD%D8%A7%D9%8B..%20%D9%8A%D9%8F%D8%BA%D9%84%D9%82%20%D8%A8%D8%B3%D8%B1%D8%B9%D8%A9.%20%D9%8A%D9%84%D9%8A%D9%87%20%D8%B5%D9%88%D8%AA%20%D8%AE%D8%B7%D9%88%D8%A7%D8%AA%20%D8%B3%D8%B1%D9%8A%D8%B9%D8%A9%D8%8C%20%D8%A7%D8%AD%D8%AA%D9%83%D8%A7%D9%83%20%D8%A3%D9%88%D8%A7%D9%86%D9%8A%20%D8%A7%D9%84%D9%85%D8%B7%D8%A8%D8%AE%D8%8C%20%D8%B5%D9%88%D8%AA%20%D8%BA%D9%84%D8%A7%D9%8A%D8%A9%20%D8%A7%D9%84%D9%85%D9%8A%D8%A7%D9%87%D8%8C%20%D8%AA%D8%AF%D8%A7%D8%AE%D9%84%20%D8%A3%D8%B5%D9%88%D8%A7%D8%AA%20%D8%AE%D8%A7%D9%81%D8%AA%D8%A9%20%D9%84%D9%86%D8%B4%D8%B1%D8%A9%20%D8%A3%D8%AE%D8%A8%D8%A7%D8%B1%20%D9%85%D9%86%20%D8%A7%D9%84%D8%AA%D9%84%D9%81%D8%A7%D8%B2%20%D9%81%D9%8A%20%D8%A7%D9%84%D8%BA%D8%B1%D9%81%D8%A9%20%D8%A7%D9%84%D9%85%D8%AC%D8%A7%D9%88%D8%B1%D8%A9%20%D9%85%D8%B9%20%D8%B5%D9%88%D8%AA%20%D8%B7%D9%81%D9%84%20%D9%8A%D8%B3%D8%A3%D9%84%20%D8%B9%D9%86%20%D9%82%D9%85%D9%8A%D8%B5%D9%87%20%D8%A7%D9%84%D9%85%D8%AF%D8%B1%D8%B3%D9%8A.%20%D9%8A%D8%AA%D8%B5%D8%A7%D8%B9%D8%AF%20%D8%A7%D9%84%D8%A5%D9%8A%D9%82%D8%A7%D8%B9%20%D9%84%D9%8A%D8%B5%D8%A8%D8%AD%20%D9%85%D8%B2%D9%8A%D8%AC%D8%A7%D9%8B%20%D9%85%D9%86%20%D8%B6%D8%AC%D9%8A%D8%AC%20%D8%A7%D9%84%D8%AD%D9%8A%D8%A7%D8%A9%20%D8%A7%D9%84%D9%8A%D9%88%D9%85%D9%8A%D8%A9%D8%8C%20%D8%AB%D9%85%20%D9%8A%D8%AA%D9%88%D9%82%D9%81%20%D9%81%D8%AC%D8%A3%D8%A9)%0A%0A%5B%D8%A7%D9%84%D9%85%D9%82%D8%AF%D9%85%D8%A9%20%D9%88%D8%A7%D9%84%D9%82%D8%B5%D8%A9%20%D8%A7%D9%84%D8%A7%D9%81%D8%AA%D8%AA%D8%A7%D8%AD%D9%8A%D8%A9%20-%20Opening%20Story%5D%0A%D8%A7%D9%84%D8%B1%D8%A7%D9%88%D9%8A%20(%D8%A8%D8%B5%D9%88%D8%AA%20%D9%87%D8%A7%D8%AF%D8%A6%D8%8C%20%D8%A7%D8%B3%D8%AA%D9%82%D8%B5%D8%A7%D8%A6%D9%8A%20%D9%88%D8%AA%D8%A3%D9%85%D9%84%D9%8A)%3A%0A&lang=ar-EG&speed=0.5&pitch=0.5"

    },
    {
        id: 3,
        title: "الحلقة الثالثة: أمان التنقل والكرامة اليومية بالمواصلات",
        desc: "مداخلات وشهادات حية من فتيات يروين تفاصيل رحلاتهن اليومية ومقترحاتهن لتعزيز الأمان.",
        duration: "٢٢:١٠",
        audioUrl: "https://www.google.com/speech-api/v2/synthesize?enc=mpeg&client=chromium&key=AIzaSyBOti4mM-6x9WDnZIjIeyEU21OpBXqWBgw&text=%D8%B9%D9%86%D9%88%D8%A7%D9%86%20%D8%A7%D9%84%D8%AD%D9%84%D9%82%D8%A9%3A%20%D8%A3%D9%85%D8%A7%D9%86%20%D8%A7%D9%84%D8%AA%D9%86%D9%82%D9%84%20%D9%88%D8%A7%D9%84%D9%83%D8%B1%D8%A7%D9%85%D8%A9%20%D8%A7%D9%84%D9%8A%D9%88%D9%85%D9%8A%D8%A9%20%D8%A8%D8%A7%D9%84%D9%85%D9%88%D8%A7%D8%B5%D9%84%D8%A7%D8%AA%0A%D8%A7%D9%84%D8%A3%D8%B3%D9%84%D9%88%D8%A8%3A%20%D9%88%D8%AB%D8%A7%D8%A6%D9%82%D9%8A%D8%8C%20%D8%A7%D8%B3%D8%AA%D9%82%D8%B5%D8%A7%D8%A6%D9%8A%D8%8C%20%D8%A5%D9%86%D8%B3%D8%A7%D9%86%D9%8A%D8%8C%20%D8%AA%D9%85%D9%83%D9%8A%D9%86%D9%8A%0A%D8%A7%D9%84%D9%84%D8%BA%D8%A9%3A%20%D9%81%D8%B5%D8%AD%D9%89%20%D9%85%D8%B9%D8%A7%D8%B5%D8%B1%D8%A9%D8%8C%20%D8%AC%D8%A7%D8%AF%D8%A9%D8%8C%20%D8%AA%D9%84%D8%A7%D9%85%D8%B3%20%D8%A7%D9%84%D9%88%D8%A7%D9%82%D8%B9%20%D9%88%D8%AA%D8%AF%D8%B9%D9%88%20%D9%84%D9%84%D8%AA%D8%BA%D9%8A%D9%8A%D8%B1.%0A%0A%5B%D8%A7%D9%84%D9%85%D8%B4%D9%87%D8%AF%20%D8%A7%D9%84%D8%A7%D9%81%D8%AA%D8%AA%D8%A7%D8%AD%D9%8A%20%D8%A7%D9%84%D8%AF%D8%B1%D8%A7%D9%85%D9%8A%20-%20Dramatic%20Opening%20Scene%5D%0A(%D9%85%D8%A4%D8%AB%D8%B1%D8%A7%D8%AA%20%D8%B5%D9%88%D8%AA%D9%8A%D8%A9%3A%20%D8%B6%D8%AC%D9%8A%D8%AC%20%D8%B4%D8%A7%D8%B1%D8%B9%20%D9%85%D8%B2%D8%AF%D8%AD%D9%85%20%D9%81%D9%8A%20%D9%88%D9%82%D8%AA%20%D8%A7%D9%84%D8%B0%D8%B1%D9%88%D8%A9%D8%8C%20%D8%A3%D8%A8%D9%88%D8%A7%D9%82%20%D8%B3%D9%8A%D8%A7%D8%B1%D8%A7%D8%AA%20%D9%85%D8%AA%D8%AF%D8%A7%D8%AE%D9%84%D8%A9%D8%8C%20%D8%B5%D9%88%D8%AA%20%D9%85%D8%AD%D8%B1%D9%83%20%D8%AD%D8%A7%D9%81%D9%84%D8%A9%20%D9%8A%D9%82%D8%AA%D8%B1%D8%A8%20%D9%88%D8%AA%D8%AA%D9%88%D9%82%D9%81%20%D8%A8%D8%B5%D8%B1%D9%8A%D8%B1%20%D9%85%D9%83%D8%A7%D8%A8%D8%AD%20%D8%AD%D8%A7%D8%AF.%20%D9%8A%D8%B9%D9%84%D9%88%20%D8%B5%D9%88%D8%AA%20%D8%AE%D9%81%D9%82%D8%A7%D9%86%20%D9%82%D9%84%D8%A8%20%D9%85%D9%86%D8%AA%D8%B8%D9%85%20%D9%88%D8%B3%D8%B1%D9%8A%D8%B9%D8%8C%20%D9%8A%D8%AA%D9%84%D8%A7%D8%B4%D9%89%20%D8%A7%D9%84%D8%B6%D8%AC%D9%8A%D8%AC%20%D8%AA%D8%AF%D8%B1%D9%8A%D8%AC%D9%8A%D8%A7%D9%8B%20%D9%84%D9%8A%D8%A8%D9%82%D9%89%20%D8%AE%D9%81%D9%82%D8%A7%D9%86%20%D8%A7%D9%84%D9%82%D9%84%D8%A8%20%D9%85%D8%B9%20%D9%85%D9%88%D8%B3%D9%8A%D9%82%D9%89%20%D9%88%D8%AA%D8%B1%D9%8A%D8%A9%20%D9%85%D8%AA%D9%88%D8%AA%D8%B1%D8%A9)%0A%0A%D8%A7%D9%84%D8%B1%D8%A7%D9%88%D9%8A%20(%D8%A8%D8%B5%D9%88%D8%AA%20%D8%AC%D8%A7%D8%AF%D8%8C%20%D9%87%D8%A7%D8%AF%D8%A6%D8%8C%20%D9%88%D8%B9%D9%85%D9%8A%D9%82)%3A%0A&lang=ar-EG&speed=0.5&pitch=0.5"

    }
];

// تصنيفات وتقسيم المقالات لتسهيل عرضها في الأقسام المخصصة
const leadArticle = articles[0];
const latestArticles = articles.slice(1, 5);
const investigativeArticles = articles.filter(art => art.category === 'على الهامش' || art.category === 'صوتها مسموع');
const familyArticles = articles.filter(art => art.category === 'المرأة والأسرة' || art.category === 'بين البيت والشغل');
const societyArticles = articles.filter(art => art.category === 'قضايا المجتمع' || art.category === 'صحة وجمال' || art.category === 'بره الكحكة');
const legalArticles = articles.filter(art => art.category === 'كلام قانون');
const successArticles = articles.filter(art => art.category === 'قصص ملهمة' || art.category === 'حكايات ستات');
const gowaArticles = articles.filter(art => art.category === 'جوه الكحكة');
const featuredStories = [articles[0], articles[2], articles[5], articles[9], articles[12], articles[15], articles[17]].filter(Boolean);
const breakingTickerItems = [...articles.slice(0, 8), ...articles.slice(0, 4)];
const flashStories = [...articles, ...articles.slice(0, 12)].slice(0, 26);
const continuousFeedItems = [...articles, ...articles.slice(0, 12)];
const latestComments = articles
    .flatMap(article => (article.comments || []).map(comment => ({ ...comment, article })))
    .slice(0, 8);
const mostReadStories = [...articles]
    .sort((a, b) => b.views - a.views)
    .slice(0, 6);
const mostViewedStories = [...articles]
    .sort((a, b) => b.views - a.views)
    .slice(0, 6);
const mostCommentedStories = [...articles]
    .sort((a, b) => (b.comments?.length || 0) - (a.comments?.length || 0))
    .slice(0, 6);
const editorPickStories = [articles[0], articles[2], articles[10], articles[11], articles[15], articles[17]].filter(Boolean);
const trendingTopics = Object.entries(
    articles.reduce((accumulator, article) => {
        accumulator[article.category] = (accumulator[article.category] || 0) + 1;
        return accumulator;
    }, {})
)
    .sort((first, second) => second[1] - first[1])
    .slice(0, 6);

const getShareCount = (article) => Math.max(18, Math.round(article.views * 0.03) + Math.round((article.likes || 0) * 0.75));

const renderStatsLine = (article, className = '') => (
    <div className={`flex flex-wrap items-center gap-x-3 gap-y-1 text-[10px] font-bold text-gray-500 ${className}`}>
        <span>👁 {article.views.toLocaleString()}</span>
        <span>💬 {(article.comments || []).length}</span>
        <span>❤️ {(article.likes || 0).toLocaleString()}</span>
        <span>📤 {getShareCount(article).toLocaleString()}</span>
    </div>
);

export default function Home() {
    const location = useLocation();
    const [selectedArticle, setSelectedArticle] = useState(null);
    const audioRef = useRef(null);
    const [heroIndex, setHeroIndex] = useState(0);
    const [heroPaused, setHeroPaused] = useState(false);
    const [featuredArticle, setFeaturedArticle] = useState(leadArticle);
    const [likedState, setLikedState] = useState(false);
    const [likeCount, setLikeCount] = useState(0);
    const [activeComments, setActiveComments] = useState([]);
    const [newCommentName, setNewCommentName] = useState('');
    const [newCommentText, setNewCommentText] = useState('');

    // حالات البث الصوتي واستطلاعات الرأي
    const [playingEpisode, setPlayingEpisode] = useState(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const [pollVoted, setPollVoted] = useState(false);
    const [pollResults, setPollResults] = useState({ yes: 74, no: 26 });

    // حالات الاستشارات والدعم التفاعلي
    const [consultType, setConsultType] = useState('legal');
    const [consultText, setConsultText] = useState('');
    const [consultSubmitted, setConsultSubmitted] = useState(false);

    const handleConsultSubmit = (e) => {
        e.preventDefault();
        if (!consultText.trim()) return;
        setConsultSubmitted(true);
        setConsultText('');
        setTimeout(() => setConsultSubmitted(false), 5000);
    };

    const handleVote = (choice) => {
        setPollVoted(true);
        if (choice === 'yes') {
            setPollResults(prev => ({ ...prev, yes: prev.yes + 1 }));
        } else {
            setPollResults(prev => ({ ...prev, no: prev.no + 1 }));
        }
    };

    useEffect(() => {
        if (selectedArticle || heroPaused || featuredStories.length === 0) return;

        const timer = window.setInterval(() => {
            setHeroIndex(prev => (prev + 1) % featuredStories.length);
        }, 4500);

        return () => window.clearInterval(timer);
    }, [heroPaused, selectedArticle]);

    useEffect(() => {
        if (selectedArticle) {
            setLikedState(false);
            setLikeCount(selectedArticle.likes || 0);
            setActiveComments(selectedArticle.comments || []);
        }
    }, [selectedArticle]);

    useEffect(() => {
        if (selectedArticle) return;

        const nextFeatured = featuredStories[heroIndex] || leadArticle;
        setFeaturedArticle(nextFeatured);
    }, [heroIndex, selectedArticle]);

    useEffect(() => {
        if (location.state?.scrollTo !== 'podcast-section') return;

        const element = document.getElementById('podcast-section');
        if (!element) return;

        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, [location.state]);

    useEffect(() => {
        const audioElement = audioRef.current;
        if (!audioElement) return;

        const audioUrl = playingEpisode?.audioUrl;
        if (!audioUrl) {
            audioElement.pause();
            audioElement.removeAttribute('src');
            audioElement.load();
            return;
        }

        if (audioElement.src !== audioUrl) {
            audioElement.src = audioUrl;
            audioElement.load();
        }

        if (isPlaying) {
            audioElement.play().catch(() => setIsPlaying(false));
        } else {
            audioElement.pause();
        }
    }, [playingEpisode, isPlaying]);

    const playEpisode = (episode) => {
        setPlayingEpisode(episode);
        setIsPlaying(true);
    };

    const openArticleDetails = (art) => {
        setSelectedArticle(art);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const handleNewsTickerClick = (art) => {
        const nextIndex = featuredStories.findIndex(item => item.id === art.id);
        if (nextIndex >= 0) {
            setHeroIndex(nextIndex);
        }
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const openHeroStory = (art) => {
        setSelectedArticle(art);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const goToHeroSlide = (direction) => {
        setHeroIndex(prev => {
            if (direction === 'next') {
                return (prev + 1) % featuredStories.length;
            }

            return (prev - 1 + featuredStories.length) % featuredStories.length;
        });
    };

    const toggleLike = () => {
        if (likedState) {
            setLikeCount(prev => prev - 1);
            setLikedState(false);
        } else {
            setLikeCount(prev => prev + 1);
            setLikedState(true);
        }
    };

    const handleShare = () => {
        navigator.clipboard?.writeText(window.location.href);
        alert('تم نسخ رابط المقال للمشاركة!');
    };

    const handleAddComment = (e) => {
        e.preventDefault();
        if (!newCommentText.trim()) return;
        const newComment = {
            user: newCommentName.trim() || 'قارئة مجهولة',
            text: newCommentText.trim()
        };
        setActiveComments(prev => [...prev, newComment]);
        setNewCommentText('');
        setNewCommentName('');
    };

    return (
        <div className="relative min-h-screen bg-[#faf9f6] text-slate-900 font-sans selection:bg-[#A91D22]/10 selection:text-[#A91D22]" dir="rtl">
            <NavBar />



            {/* الجسم الأساسي للموقع - شبكة الصحيفة */}
            {!selectedArticle ? (
                <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-6 space-y-12 animate-fadeIn">

                    {/* 1. شبكة الهيرو الرئيسية (3 أعمدة - Lead / Latest / Sidebar) */}
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">

                        {/* العمود الأيمن: الخبر الرئيسي المميز (50% عرض) */}
                        <section className="lg:col-span-8 space-y-4">
                            <div className="flex items-center gap-2 border-b border-gray-300 pb-2">
                                <span className="w-3.5 h-3.5 bg-[#A91D22] block"></span>
                                <h2 className="text-lg font-black tracking-tight text-[#1F2937] font-serif">الخبر الرئيسي</h2>
                            </div>

                            <article
                                onClick={() => openHeroStory(featuredArticle)}
                                onMouseEnter={() => setHeroPaused(true)}
                                onMouseLeave={() => setHeroPaused(false)}
                                className="bg-white border border-gray-200 p-3 shadow-xs cursor-pointer group hover:border-[#A91D22] hover:shadow-md transition-all duration-300 ease-out animate-fadeIn overflow-hidden"
                            >
                                <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-100 news-zoom-container rounded-xl">
                                    <img
                                        src={featuredArticle.image}
                                        alt={featuredArticle.title}
                                        className="w-full h-full object-cover news-zoom-img"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                                    <div className="absolute top-3 right-3 bg-[#A91D22] text-white text-[10px] font-black px-2.5 py-1 rounded shadow-sm uppercase">
                                        {featuredArticle.category}
                                    </div>

                                    <div className="absolute left-3 top-3 flex flex-col gap-2">
                                        <button
                                            type="button"
                                            onClick={(event) => {
                                                event.stopPropagation();
                                                goToHeroSlide('prev');
                                            }}
                                            className="h-8 w-8 rounded-full bg-white/90 text-[#1F2937] font-black shadow-sm hover:bg-white transition"
                                            aria-label="الخبر السابق"
                                        >
                                            ←
                                        </button>
                                        <button
                                            type="button"
                                            onClick={(event) => {
                                                event.stopPropagation();
                                                goToHeroSlide('next');
                                            }}
                                            className="h-8 w-8 rounded-full bg-white/90 text-[#1F2937] font-black shadow-sm hover:bg-white transition"
                                            aria-label="الخبر التالي"
                                        >
                                            →
                                        </button>
                                    </div>

                                    <div className="absolute inset-x-0 bottom-0 p-4 sm:p-5 text-white space-y-3">
                                        <div className="flex items-center justify-between gap-3 text-[10px] font-black uppercase tracking-wider text-white/80">
                                            <span>{featuredArticle.time}</span>
                                            <span>{featuredStories[heroIndex]?.category || featuredArticle.category}</span>
                                        </div>
                                        <div className="space-y-2 max-w-3xl">
                                            <h3 className="text-2xl sm:text-4xl font-black leading-tight font-serif">
                                                {featuredArticle.title}
                                            </h3>
                                            <p className="text-sm sm:text-base text-white/85 leading-relaxed font-medium max-w-2xl">
                                                {featuredArticle.subtitle}
                                            </p>
                                            {renderStatsLine(featuredArticle, 'text-white/85')}
                                        </div>
                                    </div>
                                </div>

                                <div className="mt-3 flex items-center justify-between gap-3">
                                    <div className="flex items-center gap-1.5">
                                        {featuredStories.map((story, index) => (
                                            <button
                                                key={story.id}
                                                type="button"
                                                onClick={(event) => {
                                                    event.stopPropagation();
                                                    setHeroIndex(index);
                                                }}
                                                className={`h-2.5 rounded-full transition-all ${index === heroIndex ? 'w-6 bg-[#A91D22]' : 'w-2.5 bg-gray-300 hover:bg-gray-400'}`}
                                                aria-label={`الخبر ${index + 1}`}
                                            />
                                        ))}
                                    </div>
                                    <span className="inline-flex items-center gap-1.5 text-xs font-black text-[#A91D22] border-b-2 border-transparent group-hover:border-[#A91D22] transition duration-200">
                                        اقرأ التقرير الكامل
                                        <span>←</span>
                                    </span>
                                </div>
                            </article>
                        </section>

                        {/* العمود الأوسط: شريط العناوين الأحدث (25% عرض) */}
                        <section className="lg:col-span-4 space-y-4">
                            <div className="flex items-center gap-2 border-b border-gray-300 pb-2">
                                <span className="w-3.5 h-3.5 bg-gray-600 block"></span>
                                <h2 className="text-lg font-black tracking-tight text-[#1F2937] font-serif">شريط الأخبار</h2>
                            </div>

                            <div className="divide-y divide-gray-200 bg-white border border-gray-200 px-4 shadow-2xs">
                                {latestArticles.map((art, idx) => (
                                    <article
                                        key={art.id}
                                        onClick={() => handleNewsTickerClick(art)}
                                        className="py-3.5 px-2 -mx-2 rounded-xl cursor-pointer group flex items-start gap-3 transition-all duration-300 hover:bg-slate-50 hover:translate-x-[-4px] animate-fadeInUp opacity-0"
                                        style={{ animationDelay: `${idx * 80}ms`, animationFillMode: 'forwards' }}
                                    >
                                        <div className="w-16 h-16 shrink-0 bg-slate-50 overflow-hidden border border-gray-100 news-zoom-container">
                                            <img
                                                src={art.image}
                                                alt={art.title}
                                                className="w-full h-full object-cover news-zoom-img"
                                            />
                                        </div>
                                        <div className="flex-1 space-y-1">
                                            <div className="flex justify-between items-center gap-1.5">
                                                <span className="text-[10px] font-bold text-[#A91D22] uppercase">{art.category}</span>
                                                <span className="text-[9px] font-medium text-gray-400">{art.time}</span>
                                            </div>
                                            <h4 className="text-xs font-bold text-gray-800 leading-tight line-clamp-2 group-hover:text-[#A91D22] transition duration-150">
                                                {art.title}
                                            </h4>
                                        </div>
                                    </article>
                                ))}
                            </div>
                        </section>

                    </div>




                    {/* 2. قسم التحقيقات والتقارير الاستقصائية (Investigations & Reports) */}
                    <section className="space-y-6">
                        <div className="flex items-center justify-between border-b border-gray-300 pb-3">
                            <div className="flex items-center gap-2">
                                <span className="w-4 h-4 bg-[#A91D22] block"></span>
                                <h2 className="text-xl sm:text-2xl font-black tracking-tight text-[#1F2937] font-serif">تحقيقات وتقارير استقصائية</h2>
                            </div>
                            <span className="text-xs font-black text-gray-500 bg-white border border-gray-200 px-3 py-1 rounded">الملف الاستقصائي لـ كحكة</span>
                        </div>

                        <div className="grid gap-6 md:grid-cols-3">
                            {investigativeArticles.map((art, idx) => (
                                <article
                                    key={art.id}
                                    onClick={() => openArticleDetails(art)}
                                    className="bg-white border border-gray-200 p-4 shadow-3xs cursor-pointer group hover:border-[#A91D22] hover:scale-[1.015] hover:shadow-md transition-all duration-300 ease-out animate-fadeInUp opacity-0"
                                    style={{ animationDelay: `${idx * 150}ms`, animationFillMode: 'forwards' }}
                                >
                                    <div className="relative aspect-[16/10] overflow-hidden bg-slate-100 mb-3.5 news-zoom-container">
                                        <img
                                            src={art.image}
                                            alt={art.title}
                                            className="w-full h-full object-cover news-zoom-img"
                                        />
                                        <span className="absolute top-3 right-3 bg-[#1F2937] text-white text-[9px] font-black px-2 py-0.5 rounded shadow-sm">
                                            تحقيق ميداني
                                        </span>
                                    </div>
                                    <div className="space-y-2">
                                        <div className="text-[10px] font-bold text-[#A91D22] flex items-center gap-1.5">
                                            <span>{art.category}</span>
                                            <span>•</span>
                                            <span>{art.date}</span>
                                        </div>
                                        <h3 className="text-base font-black text-[#1F2937] leading-snug line-clamp-2 group-hover:text-[#A91D22] transition font-serif">
                                            {art.title}
                                        </h3>
                                        <p className="text-xs text-gray-500 font-medium leading-relaxed line-clamp-3">
                                            {art.subtitle}
                                        </p>
                                    </div>
                                </article>
                            ))}
                        </div>
                    </section>

                    {/* ملف خاص: صوتها مسموع - السقف الزجاجي والتمكين الفعلي */}
                    <section className="space-y-6">
                        <div className="flex items-center justify-between border-b border-gray-300 pb-3">
                            <div className="flex items-center gap-2">
                                <span className="w-4 h-4 bg-[#A91D22] block"></span>
                                <h2 className="text-xl sm:text-2xl font-black tracking-tight text-[#1F2937] font-serif">ملف صوتها مسموع: القيادة والتأثير الرقمي</h2>
                            </div>
                            <Link to="/sawtoha-masmoua" className="text-xs font-black text-[#A91D22] hover:underline">عرض ملف صوتها مسموع بالكامل ←</Link>
                        </div>

                        <div className="grid gap-6 lg:grid-cols-12 items-stretch">
                            {/* اقتباس تحريري مميز (4 أعمدة) */}


                            {/* المقالات التابعة للقسم (8 أعمدة) */}
                            <div className="lg:col-span-8 grid gap-6 sm:grid-cols-2">
                                {articles.filter(art => art.category === 'صوتها مسموع').slice(0, 2).map((art, idx) => (
                                    <article
                                        key={art.id}
                                        onClick={() => openArticleDetails(art)}
                                        className="bg-white border border-gray-200 p-5 rounded-2xl shadow-3xs cursor-pointer group hover:border-[#A91D22] hover:scale-[1.01] hover:shadow-md transition-all duration-300 ease-out flex flex-col justify-between animate-fadeInUp opacity-0"
                                        style={{ animationDelay: `${idx * 150}ms`, animationFillMode: 'forwards' }}
                                    >
                                        <div className="space-y-3">
                                            <div className="flex justify-between items-center text-[10px] font-bold text-gray-400">
                                                <span className="bg-red-50 text-[#A91D22] px-2 py-0.5 rounded border border-red-100">{art.category}</span>
                                                <span>👁️ {art.views.toLocaleString()}</span>
                                            </div>
                                            <h3 className="text-base font-black text-gray-800 leading-snug font-serif group-hover:text-[#A91D22] transition">
                                                {art.title}
                                            </h3>
                                            <p className="text-xs text-gray-500 font-medium leading-relaxed line-clamp-3">
                                                {art.subtitle}
                                            </p>
                                        </div>
                                        <div className="mt-4 pt-3 border-t border-gray-50 flex justify-between items-center text-xs font-bold text-[#A91D22]">
                                            <span>التحقيق الاستقصائي بالكامل</span>
                                            <span className="group-hover:translate-x-[-4px] transition-transform">←</span>
                                        </div>
                                    </article>
                                ))}
                            </div>
                        </div>
                    </section>

                    {/* ملف خاص: على الهامش - الغارمات، المعيلات وصمود الأمهات */}
                    <section className="space-y-6">
                        <div className="flex items-center justify-between border-b border-gray-300 pb-3">
                            <div className="flex items-center gap-2">
                                <span className="w-4 h-4 bg-slate-800 block"></span>
                                <h2 className="text-xl sm:text-2xl font-black tracking-tight text-[#1F2937] font-serif">ملف على الهامش: تحديات صامتة وأسر تديرها نساء</h2>
                            </div>
                            <Link to="/ala-alhamesh" className="text-xs font-black text-[#A91D22] hover:underline">زيارة ملف على الهامش بالكامل ←</Link>
                        </div>

                        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                            {articles.filter(art => art.category === 'على الهامش' || art.to === '/ala-alhamesh').slice(0, 3).map((art, idx) => (
                                <article
                                    key={art.id}
                                    onClick={() => openArticleDetails(art)}
                                    className="bg-white border border-gray-200 p-5 rounded-2xl shadow-3xs cursor-pointer group hover:border-[#A91D22] hover:scale-[1.01] hover:shadow-md transition-all duration-300 ease-out flex flex-col justify-between animate-fadeInUp opacity-0"
                                    style={{ animationDelay: `${idx * 150}ms`, animationFillMode: 'forwards' }}
                                >
                                    <div className="space-y-4">
                                        <div className="relative aspect-video rounded-xl overflow-hidden bg-slate-100 border border-gray-100 news-zoom-container">
                                            <img
                                                src={art.image}
                                                alt={art.title}
                                                className="w-full h-full object-cover news-zoom-img"
                                            />
                                        </div>
                                        <div className="space-y-2 text-right">
                                            <div className="flex justify-between items-center text-[10px] font-bold text-gray-400">
                                                <span className="bg-slate-100 text-slate-700 px-2 py-0.5 rounded border border-slate-200">{art.category}</span>
                                                <span>🗓️ {art.date}</span>
                                            </div>
                                            <h3 className="text-base font-black text-gray-800 leading-snug font-serif group-hover:text-[#A91D22] transition">
                                                {art.title}
                                            </h3>
                                            <p className="text-xs text-gray-500 font-medium leading-relaxed line-clamp-3">
                                                {art.subtitle}
                                            </p>
                                        </div>
                                    </div>
                                    <div className="mt-5 pt-3 border-t border-gray-50 flex justify-between items-center text-xs font-bold text-[#A91D22]">
                                        <span>قراءة المزيد</span>
                                        <span className="group-hover:translate-x-[-4px] transition-transform">←</span>
                                    </div>
                                </article>
                            ))}
                        </div>
                    </section>

                    {/* 3. قسم المرأة والأسرة وشؤون المجتمع (مكثف ومزدوج) */}
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">

                        {/* قسم شؤون المرأة والأسرة (8 أعمدة) */}
                        <section className="lg:col-span-8 space-y-6">
                            <div className="flex items-center gap-2 border-b border-gray-300 pb-3">
                                <span className="w-3.5 h-3.5 bg-slate-800 block"></span>
                                <h2 className="text-xl font-black text-[#1F2937] font-serif">بين البيت والشغل</h2>
                            </div>

                            <div className="grid gap-5 sm:grid-cols-2">
                                {familyArticles.concat(societyArticles).slice(0, 4).map((art, idx) => (
                                    <article
                                        key={art.id}
                                        onClick={() => openArticleDetails(art)}
                                        className="bg-white border border-gray-100 p-4 shadow-3xs cursor-pointer flex gap-4 group hover:border-[#A91D22] hover:scale-[1.01] hover:shadow-md transition-all duration-300 ease-out animate-fadeInUp opacity-0"
                                        style={{ animationDelay: `${idx * 100}ms`, animationFillMode: 'forwards' }}
                                    >
                                        <div className="w-24 h-24 shrink-0 bg-slate-100 overflow-hidden border border-gray-200 news-zoom-container">
                                            <img
                                                src={art.image}
                                                alt={art.title}
                                                className="w-full h-full object-cover news-zoom-img"
                                            />
                                        </div>
                                        <div className="flex-1 flex flex-col justify-between">
                                            <div className="space-y-1">
                                                <span className="text-[9px] font-bold text-[#A91D22]">{art.category}</span>
                                                <h3 className="text-xs sm:text-sm font-black text-gray-800 leading-snug line-clamp-2 group-hover:text-[#A91D22] transition font-serif">
                                                    {art.title}
                                                </h3>
                                            </div>
                                            <span className="text-[10px] text-gray-400 font-bold block pt-1 border-t border-gray-50">{art.author}</span>
                                        </div>
                                    </article>
                                ))}
                            </div>
                        </section>



                    </div>

                    {/* أقسام شؤون العمل والتنقل: بين البيت والشغل & بين الزحام والكرامة */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">

                        {/* قسم بين البيت والشغل */}
                        <section className="bg-white border border-gray-200 rounded-2xl p-6 shadow-3xs flex flex-col justify-between space-y-4">
                            <div className="space-y-3">
                                <div className="flex items-center justify-between border-b border-gray-100 pb-3">
                                    <div className="flex items-center gap-2">
                                        <span className="w-3.5 h-3.5 bg-indigo-600 block rounded-full"></span>
                                        <h2 className="text-lg font-black text-gray-800 font-serif">بين البيت والشغل: صراع الأدوار</h2>
                                    </div>
                                    <Link to="/bayn-albayt-walshoghl" className="text-xs font-black text-indigo-600 hover:underline">الملف الكامل ←</Link>
                                </div>
                                <p className="text-xs text-gray-500 leading-relaxed">
                                    دليل عملي وتحقيقات ميدانية تبحث في تحديات التوفيق وصراع الأدوار للأم العاملة وكيفية النجاة من الاحتراق العصبي والجسدي.
                                </p>

                                <div className="space-y-3 pt-2">
                                    {articles.filter(art => art.to === '/bayn-albayt-walshoghl').slice(0, 1).map(art => (
                                        <div
                                            key={art.id}
                                            onClick={() => openArticleDetails(art)}
                                            className="group cursor-pointer bg-slate-50 p-4 rounded-xl border border-gray-100 hover:border-indigo-600 hover:bg-white hover:shadow-xs transition duration-300"
                                        >
                                            <span className="text-[9px] font-bold text-indigo-600 bg-indigo-50 px-2 py-0.5 rounded border border-indigo-100 inline-block mb-2">تحقيق الأمومة العاملة</span>
                                            <h3 className="text-sm font-black text-gray-800 group-hover:text-indigo-600 transition leading-snug font-serif">
                                                {art.title}
                                            </h3>
                                            <p className="text-xs text-gray-500 mt-2 line-clamp-2 leading-relaxed">
                                                {art.subtitle}
                                            </p>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="bg-indigo-50/30 border border-indigo-100/50 p-3.5 rounded-xl space-y-2 mt-4">
                                <h4 className="text-xs font-black text-indigo-950">💡 نصائح سريعة للأم العاملة:</h4>
                                <ul className="text-[10px] text-indigo-900 space-y-1 font-medium list-disc list-inside pr-1">
                                    <li>ضعي حدوداً واضحة بين ساعات العمل والمكتب ومساحة العائلة بالمنزل.</li>
                                    <li>شاركي المسؤوليات المنزلية مع الشريك دون حرج أو شعور بالذنب الافتراضي.</li>
                                    <li>خصصي 15 دقيقة يومياً للتنفس والاسترخاء التام وتفريغ شحنات التوتر.</li>
                                </ul>
                            </div>
                        </section>



                    </div>

                    {/* 4. كلام قانون - Legal Desk (قسم بطاقات الأسئلة والأجوبة السريعة) */}
                    <section className="space-y-6">
                        <div className="flex items-center justify-between border-b border-gray-300 pb-3">
                            <div className="flex items-center gap-2">
                                <span className="w-4 h-4 bg-slate-800 block"></span>
                                <h2 className="text-xl sm:text-2xl font-black tracking-tight text-[#1F2937] font-serif">كلام قانون</h2>
                            </div>
                            <span className="text-xs font-bold text-[#A91D22] bg-red-50 border border-red-200 px-3 py-1 rounded">حقوقكِ في خطوات مبسطة</span>
                        </div>

                        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                            {legalArticles.slice(0, 3).map((art, idx) => (
                                <article
                                    key={art.id}
                                    onClick={() => openArticleDetails(art)}
                                    className="bg-white border border-gray-200 rounded-xl p-5 shadow-3xs cursor-pointer group hover:border-[#A91D22] hover:scale-[1.01] hover:shadow-md transition-all duration-300 ease-out flex flex-col justify-between animate-fadeInUp opacity-0"
                                    style={{ animationDelay: `${idx * 120}ms`, animationFillMode: 'forwards' }}
                                >
                                    <div className="space-y-3">
                                        <div className="flex justify-between items-center text-[10px] font-bold text-gray-400">
                                            <span className="bg-slate-100 text-slate-700 px-2 py-0.5 rounded">{art.category}</span>
                                            <span>🗓️ {art.date}</span>
                                        </div>
                                        <h3 className="text-base font-black text-gray-800 leading-snug font-serif group-hover:text-[#A91D22] transition">
                                            {art.title}
                                        </h3>
                                        <p className="text-xs text-gray-500 font-medium leading-relaxed line-clamp-3">
                                            {art.subtitle}
                                        </p>
                                    </div>
                                    <div className="mt-4 pt-3 border-t border-gray-50 flex justify-between items-center text-xs font-bold text-[#A91D22]">
                                        <span>مراجعة قانونية معتمدة ⚖️</span>
                                        <span className="group-hover:translate-x-[-4px] transition-transform">←</span>
                                    </div>
                                </article>
                            ))}
                        </div>
                    </section>



                    {/* 5. قسم البودكاست والوسائط المتعددة (جوه الكحكة - Dark Section) */}
                    <section id="podcast-section" className="bg-[#111111] text-white rounded-2xl p-6 sm:p-10 relative overflow-hidden shadow-xl scroll-mt-24">
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(169,29,34,0.15),transparent_60%)]"></div>

                        <div className="relative z-10 space-y-8">
                            {/* ترويسة القسم */}
                            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 border-b border-white/10 pb-4">
                                <div className="space-y-1">
                                    <span className="text-[#A91D22] font-black text-xs uppercase tracking-widest bg-red-500/10 px-2.5 py-0.5 rounded">البث المسموع والمرئي</span>
                                    <h2 className="text-2xl sm:text-3xl font-black font-serif">بودكاست جوه الكحكة</h2>
                                </div>
                                <p className="text-xs text-slate-400 max-w-sm leading-relaxed">
                                    مساحتنا الصوتية الحرة لاستقبال تفاصيل الصراعات الداخلية والمشاعر، نسلط من خلالها الضوء على هموم خفية.
                                </p>
                            </div>

                            {/* هيكل البث الصوتي التفاعلي */}
                            <div className="grid lg:grid-cols-12 gap-8 items-stretch">
                                {/* المشغل (4 أعمدة) */}
                                <div className="lg:col-span-4 bg-white/5 border border-white/10 rounded-xl p-5 flex flex-col justify-between items-center text-center shadow-md">
                                    <div className="space-y-4 w-full">
                                        <div className={`w-20 h-20 bg-[#A91D22]/10 rounded-full border border-[#A91D22]/20 flex items-center justify-center text-3xl mx-auto shadow-inner transition-all duration-500 ${isPlaying ? 'animate-pulse scale-105 bg-[#A91D22]/20 border-[#A91D22]/30' : ''}`}>
                                            📻
                                        </div>
                                        <div className="space-y-1.5">
                                            <h3 className="text-sm font-black text-white leading-tight flex items-center justify-center gap-2">
                                                {playingEpisode ? playingEpisode.title : "راديو كحكة الإخباري"}
                                                {isPlaying && (
                                                    <div className="flex items-end gap-0.5 h-4 mb-0.5">
                                                        <span className="w-0.5 bg-[#A91D22] rounded-full animate-wave" style={{ animationDelay: '0.1s' }}></span>
                                                        <span className="w-0.5 bg-[#A91D22] rounded-full animate-wave" style={{ animationDelay: '0.3s' }}></span>
                                                        <span className="w-0.5 bg-[#A91D22] rounded-full animate-wave" style={{ animationDelay: '0.5s' }}></span>
                                                    </div>
                                                )}
                                            </h3>
                                            <p className="text-[10px] text-slate-400 font-bold">
                                                {playingEpisode ? `مدة الحلقة: ${playingEpisode.duration}` : "اختر الحلقة المناسبة للتشغيل بالجانب"}
                                            </p>
                                        </div>
                                    </div>

                                    {/* واجهة تشغيل صوتية تمثيلية */}
                                    <div className="w-full space-y-4 pt-4 border-t border-white/5 mt-4">
                                        {/* شريط التقدم */}
                                        <div className="space-y-1">
                                            <div className="w-full bg-white/10 h-1 rounded-full overflow-hidden">
                                                <div className={`bg-[#A91D22] h-full ${isPlaying ? 'w-[40%] transition-all duration-1000' : 'w-0'}`}></div>
                                            </div>
                                            <div className="flex justify-between text-[8px] text-slate-400 font-bold">
                                                <span>{isPlaying ? '٠٨:٢٥' : '٠٠:٠٠'}</span>
                                                <span>{playingEpisode ? playingEpisode.duration : '٠٠:٠٠'}</span>
                                            </div>
                                        </div>

                                        {/* أزرار التحكم */}
                                        <div className="flex justify-center items-center gap-4">
                                            <button className="text-slate-400 hover:text-white transition text-xs">⏮️</button>
                                            <button
                                                onClick={() => {
                                                    if (!playingEpisode) {
                                                        playEpisode(podcastEpisodes[0])
                                                        return;
                                                    }

                                                    setIsPlaying(prev => !prev)
                                                }}
                                                className={`w-12 h-12 rounded-full bg-[#A91D22] text-white font-bold flex items-center justify-center hover:bg-red-700 shadow-md transition-all duration-300 ${isPlaying ? 'animate-pulseGlow' : ''}`}
                                            >
                                                {isPlaying ? '⏸️' : '▶️'}
                                            </button>
                                            <button className="text-slate-400 hover:text-white transition text-xs">⏭️</button>
                                        </div>
                                    </div>
                                </div>

                                {/* قائمة الحلقات (8 أعمدة) */}
                                <div className="lg:col-span-8 space-y-3 flex flex-col justify-center">
                                    {podcastEpisodes.map((ep, idx) => {
                                        const isCurrent = playingEpisode?.id === ep.id
                                        return (
                                            <div
                                                key={ep.id}
                                                onClick={() => playEpisode(ep)}
                                                className={`p-4 rounded-xl cursor-pointer border flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 animate-fadeInRight opacity-0 transition-all duration-300 ${isCurrent
                                                    ? 'bg-[#A91D22]/10 border-[#A91D22]/40 text-white scale-[1.01]'
                                                    : 'bg-white/5 border-white/5 text-slate-300 hover:bg-white/10 hover:text-white hover:scale-[1.005]'
                                                    }`}
                                                style={{ animationDelay: `${idx * 120}ms`, animationFillMode: 'forwards' }}
                                            >
                                                <div className="space-y-1">
                                                    <h4 className="text-xs font-black flex items-center gap-2">
                                                        <span className={`w-1.5 h-1.5 rounded-full ${isCurrent ? 'bg-[#A91D22]' : 'bg-slate-400'}`}></span>
                                                        {ep.title}
                                                    </h4>
                                                    <p className="text-[10px] text-slate-400 font-medium leading-relaxed">
                                                        {ep.desc}
                                                    </p>
                                                </div>
                                                <span className="text-[10px] font-bold text-slate-400 bg-white/5 px-3 py-1 rounded shrink-0">{ep.duration}</span>
                                            </div>
                                        )
                                    })}
                                </div>

                                <audio
                                    ref={audioRef}
                                    preload="none"
                                    onEnded={() => setIsPlaying(false)}
                                    onError={() => setIsPlaying(false)}
                                />
                            </div>
                        </div>
                    </section>

                    {/* قسم جوه الكحكة - المشاعر والضغوط النفسية */}
                    <section className="space-y-6">
                        <div className="flex items-center justify-between border-b border-gray-300 pb-3">
                            <div className="flex items-center gap-2">
                                <span className="w-4 h-4 bg-[#A91D22] block"></span>
                                <h2 className="text-xl sm:text-2xl font-black tracking-tight text-[#1F2937] font-serif">منتدى جوه الكحكة (المشاعر والصراعات النفسية)</h2>
                            </div>
                            <Link to="/gowa-alkahka" className="text-xs font-black text-[#A91D22] hover:underline">عرض جميع موضوعات القسم ←</Link>
                        </div>

                        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                            {gowaArticles.slice(0, 3).map((art, idx) => (
                                <article
                                    key={art.id}
                                    onClick={() => openArticleDetails(art)}
                                    className="bg-white border border-gray-200 p-5 rounded-2xl shadow-3xs cursor-pointer group hover:border-[#A91D22] hover:scale-[1.01] hover:shadow-md transition-all duration-300 ease-out flex flex-col justify-between animate-fadeInUp opacity-0"
                                    style={{ animationDelay: `${idx * 120}ms`, animationFillMode: 'forwards' }}
                                >
                                    <div className="space-y-3 text-right">
                                        <div className="flex justify-between items-center text-[10px] font-bold text-gray-400">
                                            <span className="bg-purple-50 text-purple-700 px-2 py-0.5 rounded">{art.category}</span>
                                            <span>👁️ {art.views.toLocaleString()}</span>
                                        </div>
                                        <h3 className="text-base font-black text-gray-800 leading-snug font-serif group-hover:text-[#A91D22] transition">
                                            {art.title}
                                        </h3>
                                        <p className="text-xs text-gray-500 font-medium leading-relaxed line-clamp-3">
                                            {art.subtitle}
                                        </p>
                                    </div>
                                    <div className="mt-5 pt-3 border-t border-gray-50 flex justify-between items-center text-xs font-bold text-[#A91D22]">
                                        <span>تفريغ ودعم نفسي 🧠</span>
                                        <span className="group-hover:translate-x-[-4px] transition-transform">←</span>
                                    </div>
                                </article>
                            ))}
                        </div>
                    </section>

                    {/* أقسام المرأة والمنزل: سنة أولى أمومة & روتين تنظيف المنزل */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">



                    </div>







                    {/* قسم بره الكحكة - تحديات الفضاء الرقمي والشارع */}
                    <section className="space-y-6">
                        <div className="flex items-center justify-between border-b border-gray-300 pb-3">
                            <div className="flex items-center gap-2">
                                <span className="w-4 h-4 bg-slate-800 block"></span>
                                <h2 className="text-xl sm:text-2xl font-black tracking-tight text-[#1F2937] font-serif">ملف بره الكحكة (الفضاء الرقمي والشارع)</h2>
                            </div>
                            <Link to="/bara-alkahka" className="text-xs font-black text-[#A91D22] hover:underline">تصفح ملفات الشارع والإنترنت ←</Link>
                        </div>

                        <div className="grid gap-6 sm:grid-cols-2">
                            {articles.filter(art => art.category === 'بره الكحكة' || art.to === '/bara-alkahka').slice(0, 2).map((art, idx) => (
                                <article
                                    key={art.id}
                                    onClick={() => openArticleDetails(art)}
                                    className="bg-white border border-gray-200 rounded-2xl p-6 shadow-3xs cursor-pointer group hover:border-[#A91D22] hover:scale-[1.01] hover:shadow-md transition-all duration-300 ease-out flex flex-col sm:flex-row gap-6 animate-fadeInUp opacity-0"
                                    style={{ animationDelay: `${idx * 150}ms`, animationFillMode: 'forwards' }}
                                >
                                    <div className="sm:w-1/3 aspect-[4/3] rounded-xl overflow-hidden bg-slate-100 border border-gray-100 news-zoom-container shrink-0">
                                        <img
                                            src={art.image}
                                            alt={art.title}
                                            className="w-full h-full object-cover news-zoom-img"
                                        />
                                    </div>
                                    <div className="flex-1 flex flex-col justify-between space-y-3 text-right">
                                        <div className="space-y-1.5">
                                            <span className="text-[10px] font-bold text-amber-700 bg-amber-50 px-2 py-0.5 rounded border border-amber-100/50 inline-block">{art.category}</span>
                                            <h3 className="text-base font-black text-gray-800 leading-snug font-serif group-hover:text-[#A91D22] transition">
                                                {art.title}
                                            </h3>
                                            <p className="text-xs text-gray-500 font-medium leading-relaxed line-clamp-2">
                                                {art.subtitle}
                                            </p>
                                        </div>
                                        <div className="flex justify-between items-center text-xs font-bold text-gray-400">
                                            <span>✍️ {art.author}</span>
                                            <span className="text-[#A91D22] group-hover:translate-x-[-4px] transition-transform">اقرئي التحقيق الكامل ←</span>
                                        </div>
                                    </div>
                                </article>
                            ))}
                        </div>
                    </section>

                    {/* دليل الأبواب التحريرية الكامل للمنصة */}
                    {/* دليل أبواب كحكة التفاعلي الشامل */}
                    <section className="space-y-6">
                        <div className="flex items-center justify-between border-b border-gray-300 pb-3 animate-fadeIn">
                            <div className="flex items-center gap-2">
                                <span className="w-4 h-4 bg-[#A91D22] block"></span>
                                <h2 className="text-xl sm:text-2xl font-black tracking-tight text-[#1F2937] font-serif">دليل أبواب منصة كحكة التحريرية الكامل</h2>
                            </div>
                            <span className="text-xs font-bold text-gray-400 font-serif">١٤ باباً استقصائياً وتوعوياً بالكامل</span>
                        </div>

                        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                            {[
                                {
                                    title: "صوتها مسموع",
                                    path: "/sawtoha-masmoua",
                                    icon: "📢",
                                    tag: "تحقيق استقصائي",
                                    desc: "تحقيقات ميدانية معمقة بخصوص التمكين الرقمي، بيئات العمل التنفيذية وسقف القيادة الزجاجي.",
                                    topics: ["النسوية الافتراضية", "العمل القيادي للمرأة", "البيئة المكتبية الذكورية"]
                                },
                                {
                                    title: "على الهامش",
                                    path: "/ala-alhamesh",
                                    icon: "🤰",
                                    tag: "ملفات مجتمعية",
                                    desc: "تحقيقات استقصائية حية بخصوص أسر الغارمات، ضغوط تفضيل الذكور، وكلفة إنجاب البنات النفسية.",
                                    topics: ["موروثات النوع", "أمهات بلا أمومة", "استغلال فقر المرأة"]
                                },
                                {
                                    title: "بره الكحكة",
                                    path: "/bara-alkahka",
                                    icon: "🌐",
                                    tag: "تحديات معاصرة",
                                    desc: "جولة واقعية في فخاخ العالم الرقمي والتريندات القاتلة، إدمان الشوبينج، والتحرش اللفظي بالشارع.",
                                    topics: ["هوس السوشيال ميديا", "أمان الشارع للبنات", "إدمان الشراء أونلاين"]
                                },
                                {
                                    title: "جوه الكحكة",
                                    path: "/gowa-alkahka",
                                    icon: "🧠",
                                    tag: "الصراعات النفسية",
                                    desc: "الضغوط النفسية الداخلية للفتاة، الخوف من الزواج، والبحث عن شريك الحياة المناسب والنضج العاطفي.",
                                    topics: ["البنت القوية", "الخوف من الارتباط", "الراجل الصح"]
                                },
                                {
                                    title: "بين البيت والشغل",
                                    path: "/bayn-albayt-walshoghl",
                                    icon: "💼",
                                    tag: "شؤون العمل والبيت",
                                    desc: "التوفيق الصعب وصراع الأدوار بين طموح العمل في المكتب والواجب الأسري والمنزلي والاحتراق النفسي.",
                                    topics: ["الأم العاملة والذنب", "تنسيق الأولويات", "رعاية الأطفال"]
                                },
                                {
                                    title: "بين الزحام والكرامة",
                                    path: "/bayn-alzahm-walkarama",
                                    icon: "🚌",
                                    tag: "أمان الشارع",
                                    desc: "المعاناة اليومية الصامتة للمرأة في المواصلات العامة وبحثها عن الخصوصية والأمان الفعلي أثناء العبور.",
                                    topics: ["مساحات مخصصة", "كرامة التنقل", "ضغوط الزحام"]
                                },
                                {
                                    title: "حكايات ستات",
                                    path: "/hikayat-settat",
                                    icon: "📖",
                                    tag: "سرديات وقصص",
                                    desc: "سلسلة مذكرات وقصص واقعية تروي تجارب الأمهات والفتيات اليومية الحية بكل تفاصيلها ودروسها.",
                                    topics: ["مذكرات أم مغتربة", "قصص الكفاح الصامت", "تجارب واقعية"]
                                },
                                {
                                    title: "روتين تنظيف المنزل",
                                    path: "/roteen-tanzeef-almanzel",
                                    icon: "🧹",
                                    tag: "شؤون المنزل",
                                    desc: "العبء العقلي غير المرئي لإدارة روتين تنظيف البيت وكيف يتأرجح بين الراحة النفسية والتوتر المرضي.",
                                    topics: ["مجهود خفي غير مرئي", "عدالة توزيع الأدوار", "فخ الكمال المنزلي"]
                                },
                                {
                                    title: "سنة أولى أمومة",
                                    path: "/sana-ola-omoma",
                                    icon: "🍼",
                                    tag: "دليل الرعاية",
                                    desc: "دليل عملي ونفسي يستعرض تحولات الأمومة الأولى وصدمات تغيير الهوية والاضطرابات العاطفية المترتبة.",
                                    topics: ["اكتئاب ما بعد الولادة", "احتياجات الرضيع الأولى", "دعم الشريك"]
                                },
                                {
                                    title: "أم الطفل ذوي الاحتياجات الخاصة",
                                    path: "/om-eltifl-dhawi-al-eaahaq",
                                    icon: "♿",
                                    tag: "صمود ودعم",
                                    desc: "صمود أسر أطفال ذوي الهمم وتحديات الدمج المدرسي وغياب الدعم المؤسسي والنفسي والاجتماعي لها.",
                                    topics: ["دمج ذوي الهمم", "مرارة التنمر والشفقة", "عزلة الأم المعيلة"]
                                },
                                {
                                    title: "كلام قانون",
                                    path: "/kalam-qanun",
                                    icon: "⚖️",
                                    tag: "توعية تشريعية",
                                    desc: "شرح قانوني وإجرائي مبسط لقضايا الولاية التعليمية، الطلاق للضرر، الخلع، وحماية الخصوصية الرقمية.",
                                    topics: ["الولاية التعليمية", "مسارات فك الرابطة", "مكافحة الابتزاز"]
                                },
                                {
                                    title: "هوس التجميل",
                                    path: "/hous-eltagmeel",
                                    icon: "💄",
                                    tag: "صحة وجمال",
                                    desc: "تفكيك نقدي لمعايير الجمال العصرية المستوحاة من الفلاتر وعيادات التجميل، ودوافع التصالح وقبول الذات.",
                                    topics: ["سلطة الصور النمطية", "وراء المرآة والجمال", "التصالح مع الملامح"]
                                },
                                {
                                    title: "محو الأمية",
                                    path: "/mahw-el-omya",
                                    icon: "📚",
                                    tag: "قصص نجاح",
                                    desc: "رحلات كفاح لسيدات قرويات تحدين الجهل لفتح فصول النور وبدء مشروعات مستقلة لضمان عيش كريم.",
                                    topics: ["تحدي الجهل ريفياً", "تأسيس مشاريع مستقلة", "أثر تعليم النساء"]
                                },
                                {
                                    title: "علاقة (عن الموقع)",
                                    path: "/alaaqa",
                                    icon: "🔗",
                                    tag: "عن كحكة",
                                    desc: "التعريف برسالة الموقع، ومنهجه التحريري في عرض قضايا المرأة والأسرة بلغة هادئة وصور محترمة.",
                                    topics: ["رسالة المنصة للجمهور", "منهج الحياد والتوازن", "قنوات التواصل الفوري"]
                                }
                            ].map((item, idx) => (
                                <Link
                                    key={item.path}
                                    to={item.path}
                                    className="bg-white border border-gray-200 p-5 rounded-2xl shadow-3xs cursor-pointer group hover:border-[#A91D22] hover:scale-[1.01] hover:shadow-md transition-all duration-300 ease-out flex flex-col justify-between animate-fadeInUp opacity-0"
                                    style={{ animationDelay: `${idx * 50}ms`, animationFillMode: 'forwards' }}
                                >
                                    <div className="space-y-3.5 text-right">
                                        <div className="flex justify-between items-center text-[10px] font-black">
                                            <span className="bg-red-50 text-[#A91D22] px-2 py-0.5 rounded border border-red-100">{item.tag}</span>
                                            <span className="text-xl">{item.icon}</span>
                                        </div>
                                        <h3 className="text-base font-black text-slate-800 leading-snug font-serif group-hover:text-[#A91D22] transition">
                                            {item.title}
                                        </h3>
                                        <p className="text-xs text-gray-500 font-medium leading-relaxed line-clamp-3">
                                            {item.desc}
                                        </p>
                                    </div>
                                    <div className="mt-5 pt-3 border-t border-gray-100 space-y-2">
                                        <div className="flex flex-wrap gap-1.5">
                                            {item.topics.map((t, i) => (
                                                <span key={i} className="text-[9px] font-bold text-gray-400 bg-slate-50 px-1.5 py-0.5 rounded">
                                                    {t}
                                                </span>
                                            ))}
                                        </div>
                                        <div className="flex justify-end items-center text-xs font-black text-[#A91D22] pt-1">
                                            <span className="group-hover:translate-x-[-4px] transition-transform">دخول الباب ←</span>
                                        </div>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </section>



                </main>
            ) : (
                <main className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 pt-10 pb-20 space-y-8 animate-fadeIn">

                    {/* زر الرجوع */}
                    <div className="flex justify-between items-center border-b border-gray-200 pb-4">
                        <button
                            onClick={() => setSelectedArticle(null)}
                            className="flex items-center gap-2 text-xs sm:text-sm font-black text-[#A91D22] border border-[#A91D22] bg-white px-4 py-2 rounded-lg hover:bg-red-50 hover:translate-x-[4px] active:scale-95 transition-all duration-300"
                        >
                            ← العودة إلى الرئيسية
                        </button>
                        <span className="text-xs font-bold text-gray-500">قسم {selectedArticle.category}</span>
                    </div>

                    {/* صورة الغلاف */}
                    <div className="w-full h-64 sm:h-96 relative overflow-hidden bg-slate-100 rounded-xl border border-gray-200 shadow-sm group">
                        <img
                            src={selectedArticle.image}
                            alt={selectedArticle.title}
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-102"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent"></div>
                    </div>

                    {/* المحتوى التفصيلي */}
                    <div className="space-y-6">

                        <div className="space-y-3 border-b border-gray-200 pb-5">
                            <span className="inline-block bg-red-50 text-[#A91D22] border border-red-200 text-xs font-black px-3 py-1 rounded">
                                {selectedArticle.category}
                            </span>
                            <h1 className="text-2xl sm:text-4xl font-black text-[#1F2937] leading-tight font-serif">
                                {selectedArticle.title}
                            </h1>
                            <p className="text-sm sm:text-base text-gray-500 font-bold leading-relaxed">
                                {selectedArticle.subtitle}
                            </p>

                            <div className="flex flex-wrap items-center gap-4 text-xs text-gray-400 font-bold pt-2">
                                <span>✍️ كاتب المقال: {selectedArticle.author}</span>
                                <span>🗓️ تاريخ النشر: {selectedArticle.date}</span>
                                <span>⏰ توقيت النشر: {selectedArticle.time}</span>
                                <span>⏱️ وقت القراءة: ٤-٦ دقائق</span>
                                <span className="text-[#A91D22]">👁️ {selectedArticle.views.toLocaleString()} قراءة</span>
                            </div>
                        </div>

                        {/* متن الخبر الموزع على فقرات أو محاور */}
                        <div className="space-y-6 text-[#1F2937] text-base sm:text-lg leading-relaxed text-justify font-medium whitespace-pre-line">
                            {selectedArticle.content ? (
                                selectedArticle.content.map((sec, idx) => (
                                    <div
                                        key={idx}
                                        className="space-y-2 border-r-4 border-[#A91D22]/40 pr-4 animate-fadeInUp opacity-0"
                                        style={{ animationDelay: `${idx * 150}ms`, animationFillMode: 'forwards' }}
                                    >
                                        <h3 className="text-lg font-black text-[#1F2937]">{sec.heading}</h3>
                                        <p className="text-gray-600 text-sm sm:text-base leading-relaxed">{sec.text}</p>
                                    </div>
                                ))
                            ) : (
                                <p className="text-gray-600 text-sm sm:text-base leading-relaxed">المحتوى الإخباري الكامل متوفر في الصفحة الخاصة بالتبويب.</p>
                            )}
                        </div>

                        {/* لوحة التفاعل (التفاعلات الإخبارية) */}
                        <div className="flex flex-wrap items-center justify-between gap-4 py-4 border-t border-b border-gray-100">


                            <Link
                                to={selectedArticle.to}
                                className="bg-[#1F2937] hover:bg-[#A91D22] text-white text-xs font-black px-5 py-2.5 rounded-lg shadow-sm transition"
                            >
                                عرض الملف الكامل للقسم
                            </Link>
                        </div>



                        {/* أخبار ذات صلة وموصى بها */}
                        <div className="pt-6 border-t border-gray-100 space-y-4">
                            <h3 className="text-xs font-black text-gray-800">تقارير موصى بها لكِ</h3>
                            <div className="grid gap-4 sm:grid-cols-3">
                                {articles.filter(a => a.id !== selectedArticle.id).slice(0, 3).map((art) => (
                                    <div
                                        key={art.id}
                                        onClick={() => openArticleDetails(art)}
                                        className="cursor-pointer group space-y-2 text-right bg-slate-50/50 p-2 border border-slate-100 rounded-xl hover:border-[#A91D22] hover:scale-[1.02] hover:shadow-md transition-all duration-300 ease-out"
                                    >
                                        <div className="aspect-video w-full overflow-hidden bg-slate-100 rounded-lg">
                                            <img
                                                src={art.image}
                                                alt={art.title}
                                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                            />
                                        </div>
                                        <span className="text-[8px] font-bold text-[#A91D22]">{art.category}</span>
                                        <h4 className="text-xs font-bold text-gray-800 line-clamp-2 leading-tight group-hover:text-[#A91D22] transition-colors duration-200 font-serif">
                                            {art.title}
                                        </h4>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                </main>
            )}
            <Footer />
        </div>
    )
}