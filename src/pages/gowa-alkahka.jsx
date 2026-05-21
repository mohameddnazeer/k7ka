import { useState, useEffect } from 'react'
import BackgroundSVG from '../components/BackgroundSVG'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'

const articles = [
    {
        id: 1,
        title: "البنت القوية”… لقب يرفعها أم عبء يرهقها؟",
        category: "الضغوط النفسية",
        content: `في السنوات الأخيرة، أصبح وصف “البنت القوية” واحدًا من أكثر الألقاب تداولًا على السوشيال ميديا وفي الخطاب المجتمعي عمومًا. تُمدح الفتاة التي تتحمل، لا تشتكي، تنجح وحدها، وتواجه الحياة دون مساعدة، وكأن القوة لم تعد صفة إنسانية متوازنة، بل نموذجًا مثاليًا يجب الوصول إليه بأي ثمن. لكن خلف هذا الإعجاب الظاهري، يطرح الواقع سؤالًا أكثر عمقًا: هل تحوّل هذا اللقب إلى عبء نفسي يُفرض على الفتيات بدل أن يكون دعمًا لهن؟`,
        fullContent: [
            {
                heading: "من القوة إلى التوقع: كيف تغيّر معنى “البنت القوية”؟",
                text: "لم يعد وصف “البنت القوية” مجرد إطراء عابر، بل أصبح صورة نمطية متكررة يتم توقعها من الفتيات في مواقف مختلفة. فهي التي يجب أن تتحمل المسؤولية، وتتجاوز الألم بسرعة، وتنجح في الدراسة والعمل والعلاقات دون أن تُظهر ضعفًا واضحًا. خبراء الاجتماع يرون أن هذا التحول جعل القوة تتحول من خيار شخصي إلى “توقع الاجتماعي Carson”، ما يعني أن الفتاة لا تُمدح فقط عندما تكون قوية، بل تُحاسب إذا لم تكن كذلك. وهكذا، يتغير المعنى تدريجيًا من دعم الفتاة إلى فرض نموذج مثالي عليها."
            },
            {
                heading: "ضغط “السوبر وومان”: هل يُطلب من الفتاة أن تفعل كل شيء؟",
                text: "في الواقع الاجتماعي الحالي، يُلاحظ أن الفتاة تُطلب منها أدوار متعددة في وقت واحد: التفوق الدراسي، النجاح المهني، الحفاظ على المظهر، إدارة العلاقات، وتحمل الضغوط الأسرية. أحد خبراء علم الاجتماع يوضح أن “المجتمع الحديث يرفع سقف التوقعات من الفتاة بشكل غير متوازن، ويضعها في مقارنة مستمرة مع نموذج مثالي غير واقعي”. هذا النموذج الذي يشبه “السوبر وومان” لا يترك مساحة حقيقية للراحة أو الضعف الإنساني، بل يجعل أي لحظة تعب أو انهيار تبدو وكأنها فشل في تحقيق الصورة المطلوبة."
            },
            {
                heading: "السوشيال ميديا وتضخيم صورة القوة",
                text: "تلعب منصات التواصل الاجتماعي دورًا مهمًا في ترسيخ صورة “البنت القوية المثالية”. فالمحتوى المنتشر غالبًا يُظهر فتيات ناجحات لا يتوقفن عن العمل، أو يتجاوزن الأزمات بسهولة، مع عبارات تحفيزية مثل “لا تحتاجين لأحد” أو “كوني قوية دائمًا”. خبراء الإعلام الرقمي يشيرون إلى أن هذا النوع من المحتوى، رغم نواياه الإيجابية، قد يخلق ضغطًا غير مباشر على الفتيات، لأن الحياة الواقعية لا تعكس دائمًا هذه الصورة المثالية."
            },
            {
                heading: "الجانب النفسي: عندما تصبح القوة قناعًا",
                text: "من الناحية النفسية، يرى المختصون أن الضغط المستمر لتقديم صورة “القوة الدائمة” قد يؤدي إلى كبت المشاعر. أخصائية نفسية توضح أن “بعض الفتيات يشعرن أن التعبير عن الحزن أو الضعف يعني فقدان لقب القوة، لذلك يفضلن إخفاء مشاعرهن”. هذا الكبت المستمر قد يؤدي إلى إرهاق نفسي داخلي، وقلق، وأحيانًا نوبات من الانفجار العاطفي بعد فترات طويلة من التحمل الصامت."
            },
            {
                heading: "بين الإعجاب والضغط: نظرة المجتمع للبنت القوية",
                text: "مجتمعيًا، يتم الاحتفاء بالفتاة القوية بشكل كبير، لكنها في الوقت نفسه قد تُترك وحدها في مواجهة كل شيء. فالإعجاب بالقوة أحيانًا يتحول إلى افتراض أنها لا تحتاج دعمًا أو مساعدة، لأنها “قادرة دائمًا”. خبراء الاجتماع يرون أن هذا التناقض يضع الفتاة في دائرة مغلقة: تُمدح لأنها قوية، وتُترك وحيدة لأنها قوية أيضًا."
            },
            {
                heading: "هل القوة خيار أم ضرورة مفروضة؟",
                text: "بعض الفتيات يؤكدن أنهن أصبحن “قويات” ليس اختيارًا، بل نتيجة ظروف فرضت عليهن الاعتماد على أنفسهن. بينما ترى أخريات أن القوة أصبحت وسيلة للبقاء في مجتمع لا يمنح مساحة كافية للضعف. هذا التباين يعكس أن “القوة” ليست دائمًا صفة داخلية، بل أحيانًا رد فعل على بيئة اجتماعية واقتصادية تتطلب الاعتماد على الذات بشكل مستمر."
            },
            {
                heading: "إعادة تعريف القوة: من التحمل إلى التوازن",
                text: "في المقابل، يدعو مختصون نفسيون إلى إعادة تعريف مفهوم القوة نفسه، بحيث لا يُختزل في التحمل والصمت فقط. القوة الحقيقية هي القدرة على التوازن بين الإنجاز والتعبير عن المشاعر، وبين الاعتماد على الذات وطلب الدعم عند الحاجة. هذا الفهم الجديد يخفف من الضغط على الفتيات، ويعيد للقوة معناها الإنساني الطبيعي بدل صورتها المثالية الصارمة."
            },
            {
                heading: "الخلاصة",
                text: "في النهاية، يتضح أن لقب “البنت القوية” يحمل في داخله وجهين متناقضين: وجهًا داعمًا يمنح الفخر، ووجهًا آخر قد يتحول إلى عبء صامت يفرض توقعات غير واقعية. ويبقى السؤال الأهم: هل نحن بحاجة إلى المزيد من “القوة المطلقة”… أم إلى فهم أعمق لمعنى الإنسانية نفسها؟"
            }
        ],
        image: "/imgs/7.png"
    },
    {
        id: 2,
        title: "الخوف من الزواج… جيل يهرب من الاستقرار أم يعيد تعريفه؟",
        category: "المشاعر",
        content: `في السنوات الأخيرة، لم يعد الحديث عن الزواج مرتبطًا فقط بـ“تكوين أسرة” أو “استقرار اجتماعي”، بل أصبح موضوعًا يثير جدلًا واسعًا بين جيل الشباب الذين يبدون ترددًا متزايدًا. بين ارتفاع تكاليف المعيشة، وتغير الأولويات، وتجارب العلاقات غير المستقرة، يظهر ما يمكن وصفه بـ“الخوف من الزواج” كظاهرة اجتماعية تتسع بهدوء، وتطرح سؤالًا مهمًا: هل نحن أمام جيل يرفض الاستقرار؟ أم جيل يعيد تعريف معنى الزواج نفسه؟`,
        fullContent: [
            {
                heading: "تأخر الزواج: من ظاهرة فردية إلى نمط اجتماعي متكرر",
                text: "لم يعد تأخر الزواج حالة فردية مرتبطة بظروف خاصة، بل أصبح نمطًا متكررًا في العديد من المجتمعات. خبراء الاجتماع يوضحون أن “تغير شكل الاقتصاد، وارتفاع متطلبات الحياة، جعل فكرة الزواج أكثر تعقيدًا من الماضي، ولم تعد مجرد قرار عاطفي بل قرار اقتصادي أيضًا”."
            },
            {
                heading: "الاقتصاد كعامل حاسم: “قبل الحب لازم حسابات”",
                text: "يرى عدد من الشباب أن العامل الاقتصادي أصبح من أهم أسباب تأجيل الزواج. ارتفاع تكاليف السكن وضغط المسؤوليات جعل فكرة الاستقرار الزوجي تبدو للبعض “عبئًا أكبر من القدرة الحالية”. الزواج لم يعد قائمًا فقط على التوافق العاطفي، بل أصبح مرتبطًا بقدرة الطرفين على تحمل الأعباء المادية."
            },
            {
                heading: "تجارب العلاقات: جيل أكثر حذرًا وأقل اندفاعًا",
                text: "ساهمت تجارب العلاقات غير المستقرة في خلق حالة من الحذر. أخصائيون نفسيون يؤكدون أن التعرض المتكرر لتجارب فشل عاطفي يجعل الفرد أكثر تحفظًا تجاه فكرة الالتزام طويل المدى. كما أن الانفتاح الرقمي جعل البعض يشعرون أن الالتزام قد يعني فقدان الحرية."
            },
            {
                heading: "صوت الشباب: بين الرغبة في الحب والخوف من المسؤولية",
                text: "تظهر المقابلات تباينًا واضحًا؛ فالفكرة لم تعد مخيفة من الحب، بل من المسؤولية وما بعدها. الاستقرار المادي والنفسي أصبح شرطًا قبل أي خطوة، ما يعكس جيلًا لا يرفض الزواج بشكل كامل، لكنه يعيد ترتيب أولوياته."
            },
            {
                heading: "نظرة المجتمع: ضغط تقليدي في مواجهة واقع متغير",
                text: "لا يزال المجتمع يمارس ضغطًا واضحًا تجاه الزواج المبكر، مما يخلق فجوة بين التوقعات التقليدية وواقع الجيل الحالي. هذا الضغط قد يخلق حالة من التوتر والارتباك في اتخاذ القرار."
            },
            {
                heading: "الجانب النفسي: الخوف من الفشل أكثر من الزواج نفسه",
                text: "المشكلة ليست في الزواج كفكرة، بل في الخوف من الفشل. الجيل الحالي أكثر وعيًا بتفاصيل العلاقات، لكنه أيضًا أكثر قلقًا، والرغبة في تحقيق الاستقلال الشخصي قبل الارتباط أصبحت عاملًا حاسمًا."
            },
            {
                heading: "بين الحرية والاستقرار: إعادة تعريف مفهوم الزواج",
                text: "الجيل الحالي يعيد تعريف الزواج كشراكة قائمة على التفاهم والاستقلال وتوازن المسؤوليات. هذا التحول يعكس تغيرًا في الوعي، لكن تأجيل القرار بشكل مبالغ فيه قد يؤدي إلى عزلة اجتماعية لاحقًا."
            },
            {
                heading: "الخلاصة",
                text: "الخوف من الزواج هو انعكاس لتحولات أعمق يعيشها الجيل الحالي. يبقى السؤال: هل نحن أمام جيل يهرب من الزواج؟ أم جيل يحاول فقط أن لا يدخل إليه دون استعداد كافٍ؟"
            }
        ],
        image: "/imgs/2.png"
    },
    {
        id: 3,
        title: "الراجل الصح في عيون البنات",
        category: "المشاعر",
        content: `تحقيق ميداني يكشف: الأمان أهم من الحب.. والطموح يتفوق على الفلوس. لم يعد الحديث عن “الراجل الصح” مجرد نقاش عابر بين الفتيات، بل تحوّل إلى قضية حقيقية تعكس تغيّرًا واضحًا في وعي الأجيال الجديدة بشكل العلاقات ومعايير اختيار شريك الحياة. في وقت تتزايد فيه معدلات الانفصال، بدأت الفتيات في إعادة تعريف مفهوم “الشريك المناسب”، بعيدًا عن الصورة التقليدية.`,
        fullContent: [
            {
                heading: "الأمان النفسي أولًا: من الاحتياج العاطفي إلى شرط أساسي",
                text: "برز “الأمان النفسي” كأكثر مفهوم تكرر بشكل لافت، ليس كميزة إضافية، بل كشرط أساسي. المقصود هنا شعور عميق بالراحة في التعبير عن المشاعر دون خوف من السخرية. الفتيات أصبحن أكثر حساسية تجاه التلاعب أو الغموض، مما يعكس انتقالاً من البحث عن “رجل يحبها” إلى “رجل تشعر معه بالأمان”."
            },
            {
                heading: "النضج العاطفي يتقدم على الكمال: سقوط صورة الرجل المثالي",
                text: "تراجع واضح لفكرة “الرجل المثالي” مقابل صعود مفهوم “الرجل الواعي”. لم تعد الفتيات يضعن قائمة طويلة من الصفات، بل يركزن على النضج في المواقف، مثل الاعتراف بالخطأ واحترام المشاعر. السلوكيات البسيطة وقت الخلاف أصبحت معيارًا للحكم أكثر من أي مظاهر خارجية."
            },
            {
                heading: "الدين والأخلاق: مرجعية ثابتة في لحظات الاختبار",
                text: "ظل البعد الديني حاضرًا بقوة كمنظومة سلوك. الفتيات يربطن بين التدين الحقيقي والقدرة على الالتزام واحترام الحدود. “الخوف من الله” يُنظر إليه كضمان داخلي يحكم التصرفات في غياب الرقابة، مما يمنح ثقة واستقرارًا على المدى الطويل."
            },
            {
                heading: "من السيطرة إلى الشراكة: تحوّل في شكل العلاقة",
                text: "تراجع قبول نموذج “الرجل المسيطر” مقابل تفضيل “الشريك”. الفتيات يملن لعلاقات تقوم على الحوار وتبادل الآراء. مفهوم “القوامة” لم يعد يُفسر على أنه تحكم، بل مسؤولية قائمة على الرعاية والتفاهم، لتكون الفتاة طرفًا فاعلاً."
            },
            {
                heading: "الطموح بدلًا من الثراء: إعادة تعريف الاستقرار المادي",
                text: "خلافًا للصورة النمطية، لم يعد الغنى شرطًا أساسيًا، لكن “الطموح” أصبح عنصرًا حاسمًا. الفتيات يقيّمن الرجل بناءً على قدرته على السعي والتطور. الرجل ذو الرؤية الواضحة يُنظر إليه على أنه أكثر أمانًا من شخص يمتلك المال دون هدف."
            },
            {
                heading: "رأي المتخصصين: التوافق أهم من الانجذاب",
                text: "التوافق في القيم وطريقة التفكير أصبح عاملاً أساسياً في نجاح العلاقة. كثير من العلاقات تفشل رغم وجود الحب بسبب غياب هذا التوافق. الوعي بهذه النقطة هو ما يميز الاختيارات الناضجة عن غيرها."
            },
            {
                heading: "ما وراء الاختيار: تأثير التجارب والواقع",
                text: "المعايير تأثرت بالتجارب الشخصية لهن أو لمن حولهن. مشاهدة علاقات غير ناجحة دفعت الفتيات لإعادة التفكير في الأولويات. كما لعبت وسائل التواصل الاجتماعي دورًا في رفع سقف الوعي بمناقشة مفاهيم مثل “العلاقات السامة”."
            },
            {
                heading: "الخلاصة",
                text: "مفهوم “الراجل الصح” أصبح معادلة معقدة تجمع بين الأمان النفسي، النضج، التوافق، والطموح. التغيير الأهم ليس في المواصفات فقط، بل في طريقة الاختيار القائمة على الوعي بما تحتاجه الفتاة لبناء علاقة مستقرة."
            }
        ],
        image: "/imgs/3.png"
    },
    {
        id: 4,
        title: "هل فعلاً البنات “بقت مسترجلة”؟",
        category: "الصراعات الداخلية",
        content: `هل هو وصف حقيقي لتغير سلوك البنات فعلًا؟ أم أنه مجرد صورة نمطية ناتجة عن تغير المجتمع ونظرة الناس لدور المرأة؟ لفهم الإجابة، لازم نفصل بين الواقع الاجتماعي الحقيقي، وبين التعميمات والأحكام السريعة التي تنتشر بدون دراسة أو تحليل. المصطلح نفسه يحمل حكمًا اجتماعيًا وليس وصفًا محايدًا.`,
        fullContent: [
            {
                heading: "تغير أدوار المرأة في المجتمع",
                text: "حصل تغير كبير في دور المرأة؛ دخلت مجالات عمل كانت حكرًا على الرجال، وأصبحت مستقلة ماديًا. هذا التغير طبيعي نتيجة تطور المجتمع، لكنه أحيانًا يُفسر بشكل خاطئ على أنه “تشبه بالرجال” بدل ما يكون “تطور في دور المرأة”."
            },
            {
                heading: "الاستقلال مش “استرجال”",
                text: "وجود فتاة قوية ومستقلة لا يعني أنها فقدت أنوثتها. الاستقلال المادي والقدرة على اتخاذ القرار هي صفات شخصية وليست مرتبطة بالجنس. الربط بين الأنوثة والاعتماد الكامل على الآخرين هو تصور قديم لم يعد يناسب الواقع الحالي."
            },
            {
                heading: "رأي الطب النفسي",
                text: "صرحت د. هبة عيسوي أن الحكم من خلال سلوك خارجي هو تبسيط شديد. القوة أو الحزم ليست مرتبطة بالذكورة أو الأنوثة، بل هي سمات شخصية. استخدام مصطلحات مثل “مسترجلة” قد يسبب ضغطًا نفسيًا ويشوه الصورة الذاتية."
            },
            {
                heading: "رأي علم الاجتماع",
                text: "صرحت د. هالة يسري أن المصطلح هو تعبير ناتج عن مقاومة المجتمع لتغير أدوار المرأة. المجتمعات التي تتطور فيها المرأة عادة ما تواجه في البداية رفضًا أو أحكامًا نمطية قبل أن يتم تقبل التغير بشكل طبيعي."
            },
            {
                heading: "الأنوثة مش شكل واحد والتربية لها دور",
                text: "الأنوثة مزيج من الشخصية والمشاعر والقيم، ولا يمكن اختزالها في نمط واحد. طريقة التربية على الاعتماد على النفس تلعب دورًا كبيرًا في تشكيل الشخصية، وهذا الاختلاف الطبيعي لا علاقة له بالهوية الجنسية."
            },
            {
                heading: "هل هناك تغير حقيقي في سلوك البنات؟",
                text: "نعم، هناك تغير ناتج عن تغير الظروف (تعليم، استقلال، وعي) وليس فقدان الهوية. فكرة “الاسترجال” هي في الغالب صورة نمطية؛ التغير الحقيقي هو في مساحة الحرية والاختيارات المتاحة لهن."
            }
        ],
        image: "/imgs/5.png"
    },
    {
        id: 5,
        title: "ليه البنات بتخبي نجاحها أحيانًا؟",
        category: "الضغوط النفسية",
        content: `لماذا تخفي بعض البنات نجاحهن أحيانًا رغم أن النجاح شيء يستحق الفخر؟ هل هو خوف من الحسد أم ضغط المجتمع؟ فقد تحقق فتاة نجاحًا دراسيًا أو مهنيًا كبيرًا، لكنها تتعمد عدم الحديث عنه خوفًا من الانتقاد أو حتى فقدان العلاقات الاجتماعية.`,
        fullContent: [
            {
                heading: "الخوف من الحسد والانتقاد",
                text: "واحد من أكثر الأسباب انتشارًا هو خوف بعض الفتيات من الحسد أو الطاقة السلبية. كما تتعرض بعض الفتيات لانتقادات مستمرة مهما حققن من إنجازات، مما يدفعهم لتجنب الحديث عن نجاحهم من الأساس لتجنب دائرة الأحكام والتعليقات السلبية."
            },
            {
                heading: "نجاح البنت يزعج البعض أحيانًا وتأثير التواضع الزائد",
                text: "في بعض البيئات يُقابل نجاح الفتاة بحساسية أو مقارنة غير مريحة. كما أن بعض الفتيات تربين على فكرة أن الحديث عن الإنجازات قد يُعتبر غرورًا، فتحاول الفتاة التقليل من قيمة ما فعلته حتى لا تبدو متكبرة."
            },
            {
                heading: "الخوف من فقدان العلاقات والارتباط",
                text: "تخشى بعض البنات أن يؤدي نجاحهن إلى ابتعاد الناس عنهن. كما تشعر بعضهن أن النجاح قد يؤثر على فرص الارتباط في المجتمعات التي ترى أن الرجل يجب أن يكون دائمًا الطرف الأقوى، مما يدفعهم لتقليل الحديث عن إنجازاتهن."
            },
            {
                heading: "رأي الطب النفسي",
                text: "صرحت د. هبة عيسوي أن الفتيات قد يخفين نجاحهن بسبب الخوف من الضغط النفسي أو توقعات المجتمع العالية بعد كل إنجاز، مما يجعل الجميع يراقبها وينتظر منها المزيد دائمًا، ويسبب توترًا داخليًا يدفعها للصمت."
            },
            {
                heading: "رأي علم الاجتماع",
                text: "صرحت د. هالة يسري أن الثقافة الاجتماعية تفرض على المرأة أحيانًا صورة معينة قائمة على الهدوء وعدم الظهور القوي. المجتمع في بعض الأحيان يحتفي بنجاح الرجل بشكل أكبر، بينما يضع نجاح المرأة تحت النقد المستمر."
            },
            {
                heading: "السوشيال ميديا والنجاح الصامت",
                text: "خلقت السوشيال ميديا خوفًا من التنمر والمقارنات، مما دفع بعض البنات لتبني 'النجاح الصامت'؛ تحقيق الأهداف دون إعلان التفاصيل، بحثًا عن الراحة النفسية والاحتفاظ بالإنجاز بعيدًا عن الضغوط الخارجية."
            },
            {
                heading: "الخوف من الفشل بعد النجاح وتأثير التربية",
                text: "تخشى الفتاة من إعلان نجاحها ثم المرور بتجربة فشل لاحقًا فتشعر بالإحراج. كما تلعب التربية دورًا مهمًا؛ فبعض الأسر تربي البنات على ضرورة 'الهدوء' وعدم لفت الانتباه مهما حققن من نجاح."
            },
            {
                heading: "الخلاصة: هل إخفاء النجاح ضعف؟",
                text: "إخفاء النجاح لا يعني دائمًا ضعف الشخصية، بل قد يكون اختيارًا لحماية الخصوصية. لكن شعور الفتاة بالخوف من إعلان نجاحها يكشف عن مشكلة أعمق تتعلق بطريقة نظر المجتمع للمرأة الناجحة. تستحق كل فتاة أن تفتخر بإنجازاتها دون خوف."
            }
        ],
        image: "/imgs/1.png"
    }
]

export default function GowaAlkahkaPage() {
    const [selectedArticle, setSelectedArticle] = useState(null)
    const [pollVoted, setPollVoted] = useState(false)

    // إدارة السكرول عند فتح الـ Modal وإغلاقه عبر الـ Keyboard (Escape)
    useEffect(() => {
        if (selectedArticle) {
            document.body.style.overflow = 'hidden'
        } else {
            document.body.style.overflow = 'unset'
        }

        const handleKeyDown = (e) => {
            if (e.key === 'Escape') setSelectedArticle(null)
        }

        window.addEventListener('keydown', handleKeyDown)
        return () => {
            document.body.style.overflow = 'unset'
            window.removeEventListener('keydown', handleKeyDown)
        }
    }, [selectedArticle])

    // التحقق مما إذا كان المستخدم قد صوّت مسبقاً لحفظ حالته
    useEffect(() => {
        const hasVoted = localStorage.getItem('gowa_poll_voted')
        if (hasVoted) setPollVoted(true)
    }, [])

    const handleVote = () => {
        setPollVoted(true)
        localStorage.setItem('gowa_poll_voted', 'true')
    }

    return (
        <div className="relative min-h-screen overflow-x-hidden bg-slate-50 font-arabic" dir="rtl">
            <BackgroundSVG />
            <NavBar />
            
            <main className="relative z-10 mx-auto w-full max-w-7xl px-4 pb-24 pt-10 sm:px-6 lg:px-8">
                {/* Header Section */}
                <div className="mb-16 text-center animate-fadeIn">
                    <span className="inline-block bg-brand-secondary/10 text-brand-secondary rounded-full px-4 py-1.5 text-sm font-bold mb-4">
                        جوه الكحكة
                    </span>
                    <h1 className="text-4xl font-black text-brand-ink sm:text-6xl mb-6 tracking-tight leading-tight">
                        الضغوط النفسية والمشاعر
                    </h1>
                    <p className="mx-auto max-w-2xl text-lg text-brand-inkMuted/90 font-medium leading-relaxed">
                        مساحة لاستكشاف الصراعات الداخلية، المشاعر، وتجارب النساء الواقعية في مواجهة توقعات المجتمع.
                    </p>
                </div>

                {/* Articles Grid */}
                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {articles.map((article) => (
                        <article 
                            key={article.id}
                            className="group flex flex-col overflow-hidden rounded-3xl border border-brand-surface/70 bg-brand-surface shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-md"
                        >
                            <div className="relative aspect-[16/10] overflow-hidden bg-brand-surface-muted">
                                <img 
                                    src={article.image} 
                                    alt={article.title}
                                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                                    loading="lazy"
                                />
                                <div className="absolute top-4 right-4">
                                    <span className="rounded-full bg-brand-surface/90 backdrop-blur-sm px-3 py-1 text-xs font-bold text-brand-ink border border-brand-surface/70 shadow-sm">
                                        {article.category}
                                    </span>
                                </div>
                            </div>
                            
                            <div className="flex flex-1 flex-col p-6 text-right">
                                <h2 className="mb-4 text-xl font-black text-brand-ink leading-snug transition-colors group-hover:text-brand-secondary">
                                    {article.title}
                                </h2>
                                <p className="mb-6 line-clamp-3 text-sm leading-relaxed text-brand-inkMuted/80 font-medium whitespace-pre-wrap">
                                    {article.content}
                                </p>
                                <div className="mt-auto pt-4 border-t border-brand-offwhite/40">
                                    <button 
                                        onClick={() => setSelectedArticle(article)}
                                        className="inline-flex items-center gap-2 text-sm font-bold text-brand-accent transition-colors hover:text-brand-secondary"
                                    >
                                        إقرئي المزيد
                                        <svg className="h-4 w-4 transition-transform group-hover:-translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        </article>
                    ))}
                </div>

                {/* Interactive Poll Section */}
                <section className="mt-24 rounded-3xl bg-soft-sheen p-8 sm:p-16 text-brand-ink relative overflow-hidden shadow-sm border border-brand-surface/40">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-white/40 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl pointer-events-none"></div>
                    <div className="relative z-10 max-w-3xl mx-auto text-center">
                        <h2 className="text-2xl sm:text-3xl font-black mb-4">سؤال للنقاش: هل تشعرين بضغط "البنت القوية"؟</h2>
                        <p className="text-base sm:text-lg text-brand-inkMuted mb-10 font-medium">نحن نهتم برأيك. هل تشعرين أن المجتمع يفرض عليك القوة كخيار وحيد؟</p>
                        
                        {!pollVoted ? (
                            <div className="grid gap-4 sm:grid-cols-2 max-w-xl mx-auto">
                                <button 
                                    onClick={handleVote}
                                    className="p-5 rounded-2xl bg-brand-surface border border-brand-surface/70 hover:bg-brand-secondary/10 hover:border-brand-secondary/40 transition-all duration-200 font-bold text-lg text-brand-ink shadow-sm"
                                >
                                    نعم، بشكل دائم
                                </button>
                                <button 
                                    onClick={handleVote}
                                    className="p-5 rounded-2xl bg-brand-surface border border-brand-surface/70 hover:bg-brand-secondary/10 hover:border-brand-secondary/40 transition-all duration-200 font-bold text-lg text-brand-ink shadow-sm"
                                >
                                    أحياناً، بحكم الظروف
                                </button>
                            </div>
                        ) : (
                            <div className="bg-brand-surface rounded-2xl p-8 border border-brand-surface/70 max-w-xl mx-auto shadow-inner transition-all duration-300 animate-fadeIn">
                                <h4 className="text-xl font-bold text-brand-secondary mb-2">شكراً لمشاركتكِ!</h4>
                                <p className="font-medium text-brand-inkMuted text-base">82% من النساء شاركنكِ نفس الشعور. لستِ وحدكِ.</p>
                            </div>
                        )}
                    </div>
                </section>

                {/* Sociological Glossary */}
                <section className="mt-24">
                    <div className="mb-12 text-right">
                        <h2 className="text-3xl font-black text-brand-ink mb-3">قاموس المفاهيم</h2>
                        <div className="h-1.5 w-20 bg-brand-accent rounded-full"></div>
                    </div>
                    <div className="grid gap-6 md:grid-cols-3">
                        {[
                            { title: "متلازمة السوبر وومان", desc: "الضغط النفسي الناتج عن محاولة الكمال في كل الأدوار (العمل، البيت، المظهر) في وقت واحد." },
                            { title: "العبء العاطفي", desc: "المجهود غير المرئي الذي تبذله المرأة لإدارة مشاعر من حولها والحفاظ على توازن البيت." },
                            { title: "فخ الاستقلال", desc: "عندما يتحول الاعتماد على الذات من قوة إلى عزلة تمنع الفتاة من طلب الدعم عند الحاجة." }
                        ].map((item, i) => (
                            <div key={i} className="p-8 rounded-2xl bg-brand-surface border border-brand-surface/60 shadow-sm text-right hover:border-brand-accent/30 transition-colors">
                                <h3 className="text-lg font-black mb-3 text-brand-secondary">{item.title}</h3>
                                <p className="text-brand-inkMuted/90 font-medium text-sm leading-relaxed">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Additional Content: Perspectives & Experts */}
                <section className="mt-24 grid grid-cols-1 lg:grid-cols-2 gap-8">
                    <div className="bg-brand-surface rounded-2xl p-8 sm:p-10 border border-brand-surface/70 relative overflow-hidden group shadow-sm text-right">
                        <h3 className="text-xl font-black text-brand-ink mb-4 relative z-10">منظور اجتماعي للأجيال</h3>
                        <p className="text-base text-brand-inkMuted/90 leading-relaxed font-medium mb-6 relative z-10">
                            كيف تساهم التغيرات الاقتصادية المتسارعة في تشكيل مخاوف الجيل الجديد من الالتزام؟ نقاش مع خبراء علم الاجتماع حول تحول العلاقات من مربع "الواجب المفروض" إلى "الشراكة الواعية والاختيارية".
                        </p>
                        <div className="flex flex-wrap gap-3 relative z-10">
                            {["أثر الاستقلال المادي", "صراع الأجيال", "مفهوم السكن النفسي"].map((tag, i) => (
                                <span key={i} className="inline-flex items-center gap-1.5 text-xs font-bold text-brand-accent bg-brand-accent/5 px-3 py-1 rounded-full">
                                    <span className="w-1.5 h-1.5 rounded-full bg-brand-accent"></span>
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </div>

                    <div className="bg-brand-surface rounded-2xl p-8 sm:p-10 border border-brand-surface/70 relative overflow-hidden group shadow-sm text-right">
                        <h3 className="text-xl font-black text-brand-ink mb-4 relative z-10">استشارات ودعم نفسي</h3>
                        <p className="text-base text-brand-inkMuted/90 leading-relaxed font-medium mb-6 relative z-10">
                            مساحتنا تقدم لكِ قراءات مستمرة بالتعاون مع أخصائيين نفسيين لتفكيك العقد الاجتماعية وضغوطات الحياة اليومية وتوفير أدوات مرنة لحماية سلامك الداخلي.
                        </p>
                        <div className="flex flex-wrap gap-3 relative z-10">
                            {["جلسات استماع", "تفريغ انفعالي", "وعي بالذات"].map((tag, i) => (
                                <span key={i} className="inline-flex items-center gap-1.5 text-xs font-bold text-brand-secondary bg-brand-secondary/5 px-3 py-1 rounded-full">
                                    <span className="w-1.5 h-1.5 rounded-full bg-brand-secondary"></span>
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </div>
                </section>
            </main>

            {/* Modal Reader Overlay */}
            {selectedArticle && (
                <div 
                    className="fixed inset-0 z-[9999] bg-brand-ink/40 backdrop-blur-md flex justify-center items-start md:items-center overflow-y-auto p-0 md:p-6"
                    onClick={() => setSelectedArticle(null)}
                >
                    <div 
                        className="relative w-full max-w-5xl flex flex-col md:flex-row bg-brand-surface md:rounded-3xl min-h-screen md:min-h-0 md:max-h-[85vh] shadow-2xl border border-brand-surface/80 overflow-hidden animate-scaleUp"
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* Sticky Header for Mobile */}
                        <div className="sticky top-0 left-0 right-0 flex items-center justify-between p-4 border-b border-brand-offwhite bg-brand-surface/90 backdrop-blur-md z-30 md:hidden">
                            <h2 className="text-base font-black text-brand-ink leading-tight line-clamp-1">{selectedArticle.title}</h2>
                            <button 
                                onClick={() => setSelectedArticle(null)} 
                                className="p-2 rounded-full bg-brand-secondary/10 text-brand-secondary hover:bg-brand-secondary hover:text-white transition-colors"
                                aria-label="إغلاق النافذة"
                            >
                                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}><path d="M6 18L18 6M6 6l12 12" /></svg>
                            </button>
                        </div>

                        {/* Sidebar (Desktop Only) */}
                        <div className="hidden md:flex md:w-1/3 bg-soft-sheen p-10 flex-col justify-center text-brand-ink relative overflow-hidden border-l border-brand-offwhite text-right">
                            <div className="absolute top-0 right-0 w-64 h-64 bg-white/40 rounded-full -translate-y-1/2 translate-x-1/2 blur-2xl pointer-events-none"></div>
                            <span className="text-brand-accent font-black text-xs uppercase tracking-wider mb-3 block">تحقيق خاص</span>
                            <h2 className="text-3xl font-black leading-snug mb-4 relative z-10">{selectedArticle.title}</h2>
                            <div className="w-12 h-1 bg-brand-accent/60 mb-4 relative z-10 rounded-full"></div>
                            <p className="text-brand-inkMuted text-sm font-medium relative z-10">{selectedArticle.category}</p>
                        </div>

                        {/* Main Modal Content Scroll Area */}
                        <div className="flex-1 overflow-y-auto p-6 md:p-12 text-right">
                            {/* Close button for desktop */}
                            <button 
                                onClick={() => setSelectedArticle(null)}
                                className="hidden md:block absolute top-6 left-6 p-2 rounded-full bg-brand-offwhite text-brand-inkMuted hover:bg-brand-secondary/10 hover:text-brand-secondary transition-colors"
                            >
                                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>

                            <div className="space-y-8 max-w-3xl">
                                {selectedArticle.fullContent ? (
                                    selectedArticle.fullContent.map((paragraph, index) => (
                                        <div key={index} className="space-y-3">
                                            <h3 className="text-xl font-black text-brand-ink leading-tight">
                                                {paragraph.heading}
                                            </h3>
                                            <p className="text-brand-inkMuted text-base leading-relaxed font-medium whitespace-pre-wrap">
                                                {paragraph.text}
                                            </p>
                                        </div>
                                    ))
                                ) : (
                                    <p className="text-brand-inkMuted text-base leading-relaxed font-medium whitespace-pre-wrap">
                                        {selectedArticle.content}
                                    </p>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            )}
            <Footer />
        </div>
    )
}