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
                text: "لم يعد وصف “البنت القوية” مجرد إطراء عابر، بل أصبح صورة نمطية متكررة يتم توقعها من الفتيات في مواقف مختلفة. فهي التي يجب أن تتحمل المسؤولية، وتتجاوز الألم بسرعة، وتنجح في الدراسة والعمل والعلاقات دون أن تُظهر ضعفًا واضحًا. خبراء الاجتماع يرون أن هذا التحول جعل القوة تتحول من خيار شخصي إلى “توقع اجتماعي”، ما يعني أن الفتاة لا تُمدح فقط عندما تكون قوية, بل تُحاسب إذا لم تكن كذلك. وهكذا، يتغير المعنى تدريجيًا من دعم الفتاة إلى فرض نموذج مثالي عليها."
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
                text: "في المقابل, يدعو مختصون نفسيون إلى إعادة تعريف مفهوم القوة نفسه، بحيث لا يُختزل في التحمل والصمت فقط. القوة الحقيقية هي القدرة على التوازن بين الإنجاز والتعبير عن المشاعر، وبين الاعتماد على الذات وطلب الدعم عند الحاجة. هذا الفهم الجديد يخفف من الضغط على الفتيات، ويعيد للقوة معناها الإنساني الطبيعي بدل صورتها المثالية الصارمة."
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
                text: "صرحت هبة عيسوي أن الحكم من خلال سلوك خارجي هو تبسيط شديد. القوة أو الحزم ليست مرتبطة بالذكورة أو الأنوثة، بل هي سمات شخصية. استخدام مصطلحات مثل “مسترجلة” قد يسبب ضغطًا نفسيًا ويشوه الصورة الذاتية."
            },
            {
                heading: "رأي علم الاجتماع",
                text: "صرحت هالة يسري أن المصطلح هو تعبير ناتج عن مقاومة المجتمع لتغير أدوار المرأة. المجتمعات التي تتطور فيها المرأة عادة ما تواجه في البداية رفضًا أو أحكامًا نمطية قبل أن يتم تقبل التغير بشكل طبيعي."
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
                heading: "رأي الطب النفسي (هبة عيسوي)",
                text: "صرحت هبة عيسوي أن الفتيات قد يخفين نجاحهن بسبب الخوف من الضغط النفسي أو توقعات المجتمع العالية بعد كل إنجاز، مما يجعل الجميع يراقبها وينتظر منها المزيد دائمًا، ويسبب توترًا داخليًا يدفعها للصمت."
            },
            {
                heading: "رأي علم الاجتماع (هالة يسري)",
                text: "صرحت هالة يسري أن الثقافة الاجتماعية تفرض على المرأة أحيانًا صورة معينة قائمة على الهدوء وعدم الظهور القوي. المجتمع في بعض الأحيان يحتفي بنجاح الرجل بشكل أكبر، بينما يضع نجاح المرأة تحت النقد المستمر."
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
        <div className="relative min-h-screen overflow-hidden bg-brand-offwhite font-arabic" dir="rtl">
            <BackgroundSVG />
            <NavBar />
            
            <main className="relative z-10 mx-auto w-full max-w-7xl px-4 pb-24 sm:px-6 lg:px-8">
                {/* Header Section */}
                <div className="mb-16 text-center">
                    <span className="inline-block rounded-full bg-brand-orange/10 px-4 py-1.5 text-sm font-bold text-brand-orange mb-4">
                        جوه الكحكة
                    </span>
                    <h1 className="text-4xl font-black text-brand-brown sm:text-6xl mb-6 tracking-tight">
                        الضغوط النفسية والمشاعر
                    </h1>
                    <p className="mx-auto max-w-2xl text-lg text-brand-brown/70 font-medium">
                        مساحة لاستكشاف الصراعات الداخلية، المشاعر، وتجارب النساء الواقعية في مواجهة توقعات المجتمع.
                    </p>
                </div>

                {/* Articles Grid */}
                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {articles.map((article) => (
                        <article 
                            key={article.id}
                            className="group flex flex-col overflow-hidden rounded-3xl border border-brand-brown/10 bg-white shadow-sm transition-all hover:-translate-y-1 hover:shadow-xl hover:shadow-brand-brown/5"
                        >
                            <div className="relative aspect-[16/10] overflow-hidden bg-brand-brown/5">
                                <img 
                                    src={article.image} 
                                    alt={article.title}
                                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                                <div className="absolute top-4 right-4">
                                    <span className="rounded-full bg-white/90 backdrop-blur-sm px-3 py-1 text-xs font-bold text-brand-brown shadow-sm border border-brand-brown/5">
                                        {article.category}
                                    </span>
                                </div>
                            </div>
                            
                            <div className="flex flex-1 flex-col p-6 text-right">
                                <h2 className="mb-4 text-xl font-black text-brand-brown leading-tight transition-colors group-hover:text-brand-orange">
                                    {article.title}
                                </h2>
                                <p className="mb-6 line-clamp-3 text-sm leading-relaxed text-brand-brown/60 font-medium whitespace-pre-wrap">
                                    {article.content}
                                </p>
                                <div className="mt-auto">
                                    <button 
                                        onClick={() => setSelectedArticle(article)}
                                        className="inline-flex items-center gap-2 text-sm font-bold text-brand-orange transition hover:gap-3"
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

                {/* Interactive Poll Section */}
                <section className="mt-24 rounded-[3rem] bg-brand-brown p-8 sm:p-16 text-white relative overflow-hidden shadow-2xl">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-brand-orange/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"></div>
                    <div className="relative z-10 max-w-3xl mx-auto text-center">
                        <h2 className="text-3xl font-black mb-6">سؤال للنقاش: هل تشعرين بضغط "البنت القوية"؟</h2>
                        <p className="text-lg text-white/70 mb-10 font-medium">نحن نهتم برأيك. هل تشعرين أن المجتمع يفرض عليك القوة كخيار وحيد؟</p>
                        
                        {!pollVoted ? (
                            <div className="grid gap-4 sm:grid-cols-2">
                                <button 
                                    onClick={() => setPollVoted(true)}
                                    className="p-6 rounded-2xl bg-white/10 border border-white/20 hover:bg-brand-orange transition-all font-bold text-xl"
                                >
                                    نعم، بشكل دائم
                                </button>
                                <button 
                                    onClick={() => setPollVoted(true)}
                                    className="p-6 rounded-2xl bg-white/10 border border-white/20 hover:bg-brand-orange transition-all font-bold text-xl"
                                >
                                    أحياناً، بحكم الظروف
                                </button>
                            </div>
                        ) : (
                            <div className="bg-white/10 rounded-3xl p-8 border border-white/20 animate-pulse">
                                <h4 className="text-2xl font-bold text-brand-orange mb-2">شكراً لمشاركتك!</h4>
                                <p className="font-medium opacity-80">82% من النساء شاركنك نفس الشعور. لستِ وحدك.</p>
                            </div>
                        )}
                    </div>
                </section>

                {/* Modal Reader Overlay */}
                {selectedArticle && (
                    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-brand-brown/60 p-2 md:p-6 backdrop-blur-xl"
                         onClick={() => setSelectedArticle(null)}>
                        
                        <div className="relative w-full max-w-6xl flex flex-col md:flex-row bg-brand-offwhite rounded-[2rem] md:rounded-[4rem] overflow-hidden shadow-2xl h-full md:h-auto max-h-[95vh] md:max-h-[85vh] border border-brand-brown/10"
                             onClick={(e) => e.stopPropagation()}>
                            
                            {/* Sticky Header for Mobile */}
                            <div className="flex items-center justify-between p-6 border-b border-brand-brown/5 bg-brand-offwhite z-20 md:hidden">
                                <h2 className="text-xl font-black text-brand-brown leading-tight line-clamp-1">{selectedArticle.title}</h2>
                                <button onClick={() => setSelectedArticle(null)} className="p-2 rounded-full bg-brand-brown text-white shadow-lg">
                                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}><path d="M6 18L18 6M6 6l12 12" /></svg>
                                </button>
                            </div>

                            {/* Sidebar (Desktop Only) */}
                            <div className="hidden md:flex md:w-1/3 bg-brand-brown p-12 flex-col justify-center text-white relative overflow-hidden">
                                <div className="absolute top-0 right-0 w-64 h-64 bg-brand-orange/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-2xl"></div>
                                <span className="text-brand-orange font-black text-sm uppercase mb-4 block underline decoration-4 underline-offset-8">تحقيق خاص</span>
                                <h2 className="text-5xl font-black leading-tight mb-6 relative z-10">{selectedArticle.title}</h2>
                                <div className="w-16 h-1 bg-brand-orange/30 mb-6 relative z-10"></div>
                                <p className="text-brand-offwhite/50 italic leading-relaxed relative z-10">"{selectedArticle.category}"</p>
                            </div>

                            {/* Main Content Area */}
                            <div className="flex-1 flex flex-col min-w-0 h-full relative">
                                {/* Desktop Close Button */}
                                <button onClick={() => setSelectedArticle(null)} className="absolute left-8 top-8 z-50 rounded-full bg-brand-brown text-white p-4 shadow-xl hover:bg-brand-orange transition-all hidden md:block">
                                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}><path d="M6 18L18 6M6 6l12 12" /></svg>
                                </button>

                                {/* Scrollable Content */}
                                <div className="flex-1 p-6 md:p-16 overflow-y-auto text-right custom-scrollbar bg-brand-offwhite">
                                    <span className="inline-block rounded-full bg-brand-orange/10 px-5 py-2 text-xs font-black text-brand-orange mb-8 uppercase tracking-widest">{selectedArticle.category}</span>
                                    
                                    <div className="space-y-10 max-w-4xl">
                                        <p className="text-xl md:text-2xl font-black text-brand-brown leading-relaxed border-r-4 border-brand-orange pr-6 italic mb-12">
                                            {selectedArticle.content}
                                        </p>

                                        {selectedArticle.fullContent?.map((section, idx) => (
                                            <div key={idx} className="border-b border-brand-brown/5 pb-10 last:border-0 group">
                                                <h3 className="text-lg md:text-xl font-black text-brand-brown mb-4 flex items-center gap-4 transition-colors group-hover:text-brand-orange">
                                                    <span className="text-brand-orange/20 text-3xl font-serif">0{idx + 1}</span>
                                                    {section.heading}
                                                </h3>
                                                <p className="text-base md:text-lg text-brand-brown/70 leading-loose font-medium">{section.text}</p>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                {/* Sociological Glossary */}
                <section className="mt-24">
                    <div className="mb-12 text-right">
                        <h2 className="text-3xl font-black text-brand-brown mb-4">قاموس المفاهيم</h2>
                        <div className="h-1.5 w-24 bg-brand-orange rounded-full mr-0 ml-auto"></div>
                    </div>
                    <div className="grid gap-8 md:grid-cols-3">
                        {[
                            { title: "متلازمة السوبر وومان", desc: "الضغط النفسي الناتج عن محاولة الكمال في كل الأدوار (العمل، البيت، المظهر) في وقت واحد." },
                            { title: "العبء العاطفي", desc: "المجهود غير المرئي الذي تبذله المرأة لإدارة مشاعر من حولها والحفاظ على توازن البيت." },
                            { title: "فخ الاستقلال", desc: "عندما يتحول الاعتماد على الذات من قوة إلى عزلة تمنع الفتاة من طلب الدعم عند الحاجة." }
                        ].map((item, i) => (
                            <div key={i} className="p-8 rounded-[2rem] bg-white border border-brand-brown/10 shadow-sm hover:shadow-md transition-shadow text-right">
                                <h3 className="text-xl font-black text-brand-orange mb-4">{item.title}</h3>
                                <p className="text-brand-brown/70 font-medium leading-relaxed">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Additional Content: Perspectives & Experts */}
                <section className="mt-24 grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {/* Perspective Card 1 */}
                    <div className="bg-brand-orange/5 rounded-[2.5rem] p-10 border border-brand-orange/10 relative overflow-hidden group">
                        <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
                            <svg className="w-24 h-24 text-brand-orange" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M14.017 21L14.017 18C14.017 16.8954 13.1216 16 12.017 16L9.01703 16C7.91246 16 7.01703 16.8954 7.01703 18L7.01703 21M14.017 21L17.017 21C18.1216 21 19.017 20.1046 19.017 19L19.017 12C19.017 10.8954 18.1216 10 17.017 10L7.01703 10C5.91246 10 5.01703 10.8954 5.01703 12L5.01703 19C5.01703 20.1046 5.91246 21 7.01703 21L10.017 21M14.017 21L14.017 12M10.017 21L10.017 12M15.017 6C15.017 7.65685 13.6739 9 12.017 9C10.3602 9 9.01703 7.65685 9.01703 6C9.01703 4.34315 10.3602 3 12.017 3C13.6739 3 15.017 4.34315 15.017 6Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                        </div>
                        <h3 className="text-2xl font-black text-brand-brown mb-4 relative z-10">منظور اجتماعي</h3>
                        <p className="text-lg text-brand-brown/70 leading-relaxed font-medium mb-6 relative z-10">
                            كيف تساهم التغيرات الاقتصادية في تشكيل مخاوف الجيل الجديد من الالتزام؟ نقاش مع خبراء الاجتماع حول تحول العلاقات من "الواجب" إلى "الشراكة الاختيارية".
                        </p>
                        <ul className="space-y-3 relative z-10">
                            {["أثر الاستقلال المادي", "صراع الأجيال", "مفهوم السكن النفسي"].map((tag, i) => (
                                <li key={i} className="flex items-center gap-2 text-brand-orange font-bold">
                                    <span className="w-1.5 h-1.5 rounded-full bg-brand-orange"></span>
                                    {tag}
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Perspective Card 2 */}
                    <div className="bg-brand-brown/5 rounded-[2.5rem] p-10 border border-brand-brown/10 relative overflow-hidden group">
                        <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
                            <svg className="w-24 h-24 text-brand-brown" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                        </div>
                        <h3 className="text-2xl font-black text-brand-brown mb-4 relative z-10">نصائح الخبراء</h3>
                        <p className="text-lg text-brand-brown/70 leading-relaxed font-medium mb-6 relative z-10">
                            مجموعة من الخطوات العملية للتعامل مع ضغوط "البنت القوية" وكيفية وضع حدود صحية تحمي السلام النفسي دون التنازل عن الطموح.
                        </p>
                        <div className="flex flex-wrap gap-2 relative z-10">
                            {["الوعي الذاتي", "التوازن", "الدعم النفسي"].map((tip, i) => (
                                <span key={i} className="bg-white px-4 py-2 rounded-full text-sm font-bold text-brand-brown shadow-sm border border-brand-brown/5">
                                    {tip}
                                </span>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Quote Block */}
                <section className="mt-24 text-center px-4">
                    <div className="max-w-3xl mx-auto">
                        <span className="text-6xl text-brand-orange/20 font-serif leading-none h-8 block">“</span>
                        <p className="text-2xl sm:text-3xl font-black text-brand-brown leading-snug italic">
                            القوة الحقيقية ليست في إنكار الضعف، بل في القدرة على احتضانه والمضي قدماً بوعي أكبر.
                        </p>
                        <span className="text-6xl text-brand-orange/20 font-serif leading-none h-8 block rotate-180 mt-4">“</span>
                    </div>
                </section>

                {/* Bottom CTA / Community Section */}
                <section className="mt-24 rounded-[3rem] bg-gradient-to-br from-brand-brown to-brand-brown/95 p-8 text-white sm:p-20 relative overflow-hidden shadow-2xl shadow-brand-brown/20">
                    <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-[500px] h-[500px] bg-brand-orange/10 rounded-full blur-[120px]"></div>
                    <div className="absolute bottom-0 left-0 translate-y-1/3 -translate-x-1/4 w-[400px] h-[400px] bg-brand-gold/5 rounded-full blur-[100px]"></div>
                    
                    <div className="relative z-10 text-center max-w-4xl mx-auto">
                        <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-6 py-2 text-sm font-bold text-brand-offwhite mb-8 border border-white/10 backdrop-blur-md">
                            انضمي لحديثنا
                        </div>
                        <h2 className="text-4xl font-black sm:text-6xl mb-8 tracking-tight leading-tight">
                            جوه الكحكة.. <span className="text-brand-orange">صوتك مسموع</span>
                        </h2>
                        <p className="text-xl text-white/70 leading-relaxed font-medium mb-12 max-w-3xl mx-auto">
                            هذه المساحة لم تنتهِ هنا. نحن نؤمن أن كل تجربة شخصية هي درس جماعي، وكل شعور صامت يستحق أن يخرج للنور. شاركينا برأيك أو قصتك، لنعيد معاً تعريف القوة، الاستقرار، والنجاح.
                        </p>
                        
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                            <div className="flex flex-col items-center p-6 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-sm transition-transform hover:-translate-y-1">
                                <div className="text-3xl mb-3 text-brand-orange font-black">15+</div>
                                <div className="text-sm text-white/60 font-medium">تحقيق ميداني</div>
                            </div>
                            <div className="flex flex-col items-center p-6 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-sm transition-transform hover:-translate-y-1">
                                <div className="text-3xl mb-3 text-brand-orange font-black">500+</div>
                                <div className="text-sm text-white/60 font-medium">مشاركة وقصة</div>
                            </div>
                            <div className="flex flex-col items-center p-6 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-sm transition-transform hover:-translate-y-1">
                                <div className="text-3xl mb-3 text-brand-orange font-black">24/7</div>
                                <div className="text-sm text-white/60 font-medium">مساحة آمنة</div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    )
}