import { useState, useEffect, useRef } from "react";
import BackgroundSVG from "../components/BackgroundSVG";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import Modal from "../components/Modal";
import InteractionsPanel from "../components/InteractionsPanel";
import {
  TrendingTags,
  InteractivePoll,
  DailyCaricature,
  VideoMediaGallery,
  ExpertAdviceDesk,
} from "../components/Youm7Widgets";

export default function SawtohaMasmouaPage() {
  // تحديد التحقيق النشط حالياً في الصفحة
  const [activeInvestigation, setActiveInvestigation] = useState(1);
  const [query, setQuery] = useState("");
  const [showTOC, setShowTOC] = useState(false);
  const tocRef = useRef(null);

  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' })
  }, []);

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") setShowTOC(false);
    };
    if (showTOC) {
      document.body.style.overflow = "hidden";
      document.addEventListener("keydown", onKey);
      setTimeout(() => tocRef.current?.focus(), 60);
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("keydown", onKey);
    };
  }, [showTOC]);

  const investigationsData = {
    1: {
      tag: "التحقيق الأول",
      title: "دور الحضانة وأهميتها للمرأة العاملة وغير العاملة",
      intro: `تتخطى الحضانة وظيفة حفظ الطفل إلى كونها فضاءً تربوياً يدعم تطور الطفل ويسهّل على الأم المشاركة في سوق العمل أو متابعة شؤونها الحياتية. تلعب الحاضنات دورًا محوريًا في توفير بيئة آمنة، تعليمية، وصحية للأطفال، وتخفف العبء عن الأسر بتقديم رعاية مهنية وتنظيمية.`,
      content: [
        {
          heading: "أثر الحضانة على تمكين المرأة",
          text: `توفر الحضانة للمرأة العاملة وقتًا ومساحة للتركيز على العمل أو التعليم، مما يزيد من فرصها المهنية ويقلل من التوتر النفسي الناتج عن التضارب بين العمل ورعاية الأطفال. الحضانة عالية الجودة تُسهم في بناء مرونة اقتصادية للأسرة وتشجع على مشاركة أوسع للمرأة في النشاط الاقتصادي.`,
        },
        {
          heading: "معايير الحضانة الجيدة",
          text: `تشمل النظافة، السلامة، بيئة تعليمية محفزة، كوادر مؤهلة، وبرامج تطوير اجتماعي ولغوي. كما أن مرونة المواعيد والأسعار المناسبة وجودة التغذية والرعاية الصحية تُعد عوامل حاسمة في اختيار الأسر للحضانة.`,
        },
      ],
      summary: `الحضانة ليست رفاهية بل استثمار اجتماعي واقتصادي؛ هي دعم مباشر لحقوق المرأة في العمل والحياة الكريمة.`,
    },
    2: {
      tag: "التحقيق الثاني",
      title: "علاقة الأم بتنظيف البيت",
      intro: `تُحيط علاقة الأم بأعمال التنظيف بعدة دلالات ثقافية واجتماعية؛ فبينما تعتبرها بعض المجتمعات مسؤولية أنثوية بحتة، يسعى آخرون لإعادة توزيع المهام داخل الأسرة. هذا التحقيق يستعرض التأثير النفسي والاجتماعي لإسناد تنظيف البيت على الأم وعلى توازن الأسرة.`,
      content: [
        {
          heading: "الضغط غير المرئي لأعمال المنزل",
          text: `عمل التنظيف اليومي قد يتحول إلى عبء متكرر وغير مرئي يستهلك وقت الأم وطاقتها، ويؤثر على فرصها في الراحة أو المشاركة في أنشطة مهنية واجتماعية. يُعد التقدير العائلي والمشاركة الحقيقية عناصر مركزية لتخفيف هذا العبء.`,
        },
        {
          heading: "إعادة تشكيل الأدوار داخل الأسرة",
          text: `تأييد المشاركة الذكورية في أعمال المنزل وتوزيع المهام يحرر الأم من أعباء مفرطة ويعزز نموذج تربية متساوية للأطفال. السياسات التي تشجع على تشارك العمل المنزلي والتعليم حول القيم الأسرية تُسهم في تغيير السلوكيات تدريجيًا.`,
        },
      ],
      summary: `تنظيف البيت مسؤولية جماعية؛ الاعتراف بالعمل المنزلي ومشاركته يحسن جودة الحياة الأسرية ويعزز المساواة.`,
    },
    3: {
      tag: "التحقيق الثالث",
      title: "عمل المرأة واستقرار المنزل",
      intro: `يناقش هذا التحقيق العلاقة بين مساهمة المرأة في العمل خارج المنزل واستقرار الأسرة، مع التركيز على العوامل التي تجعل التوازن ممكنًا أو صعبًا مثل الدعم الأسري، سياسات العمل، والروتين اليومي.`,
      content: [
        {
          heading: "التحديات والتوافق بين العمل والأسرة",
          text: `تواجه الأسر تحديات تتعلق بالوقت، تنسيق الجداول، وتوزيع المسؤوليات. الدعم من الشريك والأسرة وتوفر خدمات رعاية موثوقة يقللان الاحتكاكات ويساهمان في استقرار المنزل حتى مع مشاركة المرأة في سوق العمل.`,
        },
        {
          heading: "فوائد اقتصادية واجتماعية",
          text: `لدخول المرأة سوق العمل آثار إيجابية على دخل الأسرة واستقلاليتها، وقد يؤدي ذلك إلى تحسين الموارد المنزلية وجودة التعليم والصحة للأبناء، شرط وجود اتفاقات داخلية واضحة لتقاسم الأدوار.`,
        },
      ],
      summary: `عمل المرأة لا يهدد الاستقرار بالضرورة؛ بل قد يعززه إن توفر الدعم والتفاهم داخل الأسرة ومجتمع العمل.`,
    },
    4: {
      tag: "التحقيق الرابع",
      title: "مشاكل الرجل والمرأة في التربية",
      intro: `تتصادم في كثير من الأسر رؤى الأب والأم حول أساليب التربية، وهو ما ينعكس على الطفل وعلى مناخ المنزل. هذا التحقيق يبحث في جذور الخلافات التربوية وطرق التوصل إلى توافق مدروس.`,
      content: [
        {
          heading: "مصادر الخلاف التربوي",
          text: `تختلف الخلفيات الشخصية، التجارب الأسرية، والآراء الثقافية في تحديد أنماط التربية. فقد يرى أحد الوالدين أن الانضباط مهم بشدة، بينما يفضّل الآخر النهج الحواري، وهذا يخلق تناقضات يومية أمام الأطفال.`,
        },
        {
          heading: "بناء لغة تربوية مشتركة",
          text: `الحوار بين الزوجين، التوافق على قواعد منزلية واضحة، واستعانة بخبرات تربوية محترفة عند الحاجة، تساعد في تقليل الصدامات. يعد توحيد الرسائل أمام الطفل أمرًا ضروريًا لتعزيز الشعور بالأمان والاستقرار.`,
        },
      ],
      summary: `التوافق التربوي ليس تامًا بالضرورة لكنه ممكن عبر التواصل والتخطيط المشترك بين الأب والأم.`,
    },
    5: {
      tag: "التحقيق الخامس",
      title: "أسباب الانفصال",
      intro: `الانفصال ظاهرة اجتماعية معقدة تنجم عن تراكم عوامل تتراوح بين اقتصادية وعاطفية وسلوكية. يستعرض هذا التحقيق أكثر الأسباب شيوعًا وكيف يمكن الوقاية منها بالوقوف المبكر على المؤشرات.`,
      content: [
        {
          heading: "عوامل مالية ونفسية",
          text: `الضغوط المالية، البطالة، أو اختلاف التوقعات الاقتصادية تتصدر أسباب الخلافات. كذلك، ضعف التواصل، الغياب العاطفي، والخيانة تترك آثارًا عميقة تقود في كثير من الأحيان إلى قرار الانفصال.`,
        },
        {
          heading: "الوقاية والتدخل المبكر",
          text: `الاستشارة الزوجية، تحسين مهارات التواصل، وتقديم دعم مجتمعي وبنيوي للأسر يمكن أن يخفف من حدّة الأزمات. التعرف على علامات التدهور في العلاقة والبحث عن مساعدة مهنية في مراحل مبكرة يقلّل من احتمال الانفصال.`,
        },
      ],
      summary: `فهم الأسباب لا يبرر الانفصال، لكنه يفتح الباب أمام حلول قد تحافظ على الأسرة إن توفرت الإرادة والدعم.`,
    },
    6: {
      tag: "التحقيق السادس",
      title:
        "سنة أولى أمومة: ما لا يُقال عن العام الأكثر حساسية في حياة المرأة",
      intro: `تُعدّ السنة الأولى بعد الولادة واحدة من أكثر المراحل حساسية في حياة المرأة، إذ تنتقل فيها من نمط حياة معتاد إلى مسؤوليات جديدة بالكامل، تتداخل فيها مشاعر الفرح والخوف، والاحتواء والارتباك. ورغم أن المجتمع يقدّم الأمومة غالبًا في صورة مثالية، فإن الواقع يكشف عن تجربة أكثر تعقيدًا، مليئة بالتغيرات الجسدية والنفسية والاجتماعية. في هذه المرحلة، لا تواجه الأم فقط مسؤولية رعاية طفل جديد، بل تدخل أيضًا في مواجهة مباشرة مع تغيّرات داخلية عميقة، تجعلها في حالة بحث مستمر عن التوازن بين ذاتها واحتياجات طفلها.`,
      content: [
        {
          heading: `حالة التغيرات… بين صورة المجتمع والواقع الحقيقي`,
          text: `رغم أن الخطاب الاجتماعي يربط الأمومة بالدفء والسعادة المطلقة، إلا أن التجربة الواقعية تكشف عن جانب آخر مختلف تمامًا. فالأم الجديدة تواجه منذ الأيام الأولى بعد الولادة ضغطًا كبيرًا ناتجًا عن المسؤوليات المتراكمة، إلى جانب توقعات اجتماعية مثالية تطالبها بأن تكون في أفضل حالاتها دائمًا.\nتجد الأم نفسها مطالبة بالتماسك، والهدوء، والقدرة على إدارة كل التفاصيل، في الوقت الذي تعيش فيه حالة من الإرهاق الجسدي والذهني، نتيجة التغير الكامل في نمط الحياة.\nوتؤكد دراسات متخصصة في الصحة النفسية للأمهات أن هذا التناقض بين “الأم المثالية” في المجتمع و”الأم الواقعية” هو أحد أهم أسباب التوتر في السنة الأولى.`,
        },
        {
          heading: `التغيرات الجسدية بعد الولادة وتأثيرها النفسي`,
          text: `تمر الأم بعد الولادة بسلسلة من التغيرات الجسدية التي تنعكس بشكل مباشر على حالتها النفسية. وتشير دراسات طبية إلى أن انخفاض هرموني الأستروجين والبروجسترون بعد الولادة يؤدي إلى تقلبات مزاجية، وزيادة الحساسية العاطفية، والشعور بالتوتر.\nكما تشمل التغيرات الجسدية: زيادة أو فقدان الوزن، تساقط الشعر، آلام العضلات والمفاصل، تغيرات في شكل الجسم والبشرة. هذه التغيرات قد تؤثر على صورة الأم لذاتها، وتضعف ثقتها بنفسها، خاصة في ظل المقارنات المستمرة مع صور مثالية على مواقع التواصل الاجتماعي.`,
        },
        {
          heading: `اضطراب نوم الرضيع وتأثيره على الصحة النفسية للأم`,
          text: `يُعدّ اضطراب نوم الطفل من أبرز العوامل التي تؤثر على الأم في السنة الأولى، حيث تعاني من النوم المتقطع لفترات طويلة، ما يؤدي إلى حالة من الإرهاق المزمن. هذا الإرهاق لا يقتصر على التعب الجسدي فقط، بل يمتد إلى ضعف التركيز، زيادة التوتر، تقلب المزاج، وانخفاض القدرة على اتخاذ القرار.\nالدعم العائلي يلعب دورًا مهمًا في تخفيف الضغط، من خلال المشاركة في رعاية الطفل وتقليل العبء اليومي على الأم.`,
        },
        {
          heading: `ما بين الإرهاق الطبيعي واكتئاب ما بعد الولادة`,
          text: `تمر أغلب الأمهات في السنة الأولى بحالة من الإرهاق النفسي والجسدي، وهو أمر طبيعي نتيجة التغيرات الكبيرة في نمط الحياة. لكن في المقابل، هناك حالة أكثر عمقًا تُعرف بـ اكتئاب ما بعد الولادة، وهي حالة نفسية تستمر لفترة أطول وتؤثر بشكل واضح على حياة الأم اليومية. من أبرز علاماتها: حزن مستمر، فقدان الاهتمام، شعور دائم بالذنب، عزلة اجتماعية، واضطرابات في النوم والشهية. التدخل المبكر أساسي لحماية الأم والطفل.`,
        },
        {
          heading: `دور الأب في السنة الأولى… شريك لا مساعد`,
          text: `لم تعد الأمومة مسؤولية فردية، بل أصبحت تجربة مشتركة تتطلب مشاركة فعّالة من الأب. فدور الأب لا يقتصر على الدعم المادي فقط، بل يمتد ليشمل المشاركة اليومية في رعاية الطفل، التخفيف من الأعباء المنزلية، والدعم النفسي للأم. مشاركة الأب تقلل من احتمالية الاكتئاب بعد الولادة وتزيد من استقرار الأسرة.`,
        },
      ],
      summary: `السنة الأولى من الأمومة ليست اختباراً للكمال، بل فترة حساسة تتطلب وعيًا، دعماً، وتفهماً مجتمعياً. التدخل المبكر، مشاركة الشريك، وتوفير خدمات رعاية ونفسية مناسبة تجعل هذه السنة بداية صحية لعلاقة الأم بطفلها.`,
    },
    7: {
      tag: "التحقيق السابع",
      title: "المرأة وزيرة مالية بيتها",
      intro: `تتبوأ المرأة في الكثير من الأسر دورًا محورياً في إدارة الموارد المالية المنزلية، فتخطط للمصروفات، توازن بين الاحتياجات والموارد، وتتخذ قرارات يومية تؤثر على استقرار الأسرة المادي. هذا التحقيق يسلط الضوء على مهارات المرأة في الإدارة المالية المنزلية وكيف يمكن دعمها.`,
      content: [
        {
          heading: "آليات إدارة المال داخل الأسر",
          text: `تتضمن إدارة المال وضع ميزانية شهرية، تسجيل المصروفات، التخطيط للمستقبل والادخار للطوارئ. تُظهر الدراسات أن مشاركة الأسرة في التخطيط المالي ووجود وعي اقتصادي لدى الزوجين يحسن من استقرار الأسرة ويقلل من الصراعات المتعلقة بالمصروف.`,
        },
        {
          heading: "تمكين المرأة اقتصاديًا داخل البيت",
          text: `دعم مهارات التخطيط المالي، الوصول إلى موارد مالية مستقلة، وتعليم الأبناء مبادئ المال يُعزّز من مكانة المرأة داخل الأسرة ويمنحها قدرة أكبر على اتخاذ قرارات مستنيرة.`,
        },
      ],
      summary: `المرأة ليست مجرد منفقة، بل مديرة موارد قادرة على تحويل محدودية الموارد إلى استقرار وأمان للأسرة عند توفر الأدوات والدعم.`,
    },
  };

  const currentInvestigation = investigationsData[activeInvestigation];

  const investigationsList = Object.entries(investigationsData).filter(
    ([, inv]) => {
      const q = query.trim().toLowerCase();
      if (!q) return true;
      return (inv.title + " " + inv.intro + " " + (inv.summary || ""))
        .toLowerCase()
        .includes(q);
    },
  );

  const scrollToSection = (idx) => {
    const el = document.getElementById(`section-${idx}`);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    setShowTOC(false);
  };

  return (
    <div
      className="relative min-h-screen bg-slate-50 text-[#1F2937] overflow-hidden"
      dir="rtl"
    >
      <BackgroundSVG />
      <NavBar />

      {/* رأس الصفحة الرئيسي بتصميم صحفي فاخر */}
      <header className="relative z-10 pt-16 pb-12 text-center px-4 max-w-4xl mx-auto">
        <span className="text-xs font-bold tracking-widest text-brand-accent uppercase bg-brand-accent/10 px-3 py-1 rounded-full mb-4 inline-block">
          ملفات مميزة
        </span>
        <h1 className="text-5xl sm:text-7xl font-black text-brand-ink tracking-tight mt-2 mb-6">
          قضايا المرأة والمنزل والعمل
        </h1>
        <div className="mb-6 flex flex-col items-center justify-center gap-2">
          <img
            src="/imgs/10.jpeg"
            alt="صورة الكاتبة"
            className="w-60 h-60 rounded-full object-cover border-2 border-[#B572E8] shadow-xs"
          />
          <span className="text-2xl font-bold text-slate-700">
            كتبت: حورية أسامة
          </span>
        </div>
        <p className="text-lg sm:text-xl text-slate-600 leading-relaxed max-w-2xl mx-auto font-medium">
          سلسلة تحقيقات تغطي سبعة موضوعات مركزية: دور الحضانة وأهميتها، علاقة
          الأم بتنظيف البيت، عمل المرأة واستقرار المنزل، مشاكل الرجل والمرأة في
          التربية، أسباب الانفصال، السنة الأولى من الأمومة، ودور المرأة في إدارة
          المالية المنزلية.
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
              <div className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400">
                🔎
              </div>
            </label>
          </div>

          <div className="flex gap-3 items-center">
            <button
              onClick={() => setShowTOC((prev) => !prev)}
              className="px-4 py-2 rounded-full bg-white text-slate-700 border border-slate-200 shadow-sm text-sm"
            >
              فهرس الملف
            </button>
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
                    className={`px-5 py-2.5 rounded-full text-sm font-bold whitespace-nowrap transition-all duration-300 transform active:scale-95 ${isSelected
                      ? "bg-brand-ink text-white shadow-md shadow-brand-ink/20"
                      : "bg-white text-slate-600 hover:text-[#1F2937] hover:bg-slate-100/80 border border-slate-200/50"
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
      <main className="relative z-10 max-w-7xl mx-auto px-4 ">
        <div className="grid grid-cols-1  gap-8 items-start">
          {/* Right Side: Article Body & Bottom Widgets */}
          <div className=" space-y-12">
            <article
              key={activeInvestigation}
              className="animate-fadeIn space-y-12 bg-white border border-slate-100 p-8 sm:p-12 rounded-[2.5rem] shadow-sm relative overflow-hidden"
            >
              <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-brand-secondary via-brand-accent to-brand-ink opacity-80"></div>

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
              <div className="bg-[#faf9f6]/40 p-8 sm:p-10 rounded-3xl border-r-4 border-brand-accent shadow-2xs relative overflow-hidden">
                <p className="text-xl font-medium text-[#1F2937] leading-relaxed text-justify">
                  {currentInvestigation.intro}
                </p>
              </div>

              {/* سرد المحاور الداخلية على شكل بطاقات تحريرية متتالية */}
              <div className="space-y-8">
                {currentInvestigation.content.map((section, index) => (
                  <section
                    id={`section-${index}`}
                    key={`${activeInvestigation}-${index}`}
                    className="bg-[#faf9f6]/30 p-6 sm:p-10 rounded-3xl border border-slate-100/85 shadow-3xs hover:shadow-xs transition-shadow duration-300 group animate-fadeInUp opacity-0"
                    style={{
                      animationDelay: `${index * 100}ms`,
                      animationFillMode: "forwards",
                    }}
                  >
                    <div className="flex items-start gap-4 sm:gap-6">
                      {/* الرقم التسلسلي للمحور كعنصر بصري */}
                      <span className="text-4xl font-black text-slate-200 group-hover:text-brand-accent/30 transition-colors duration-300 select-none pt-1">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <div className="space-y-4 flex-1">
                        <div className="flex items-start justify-between">
                          <h3 className="text-2xl font-bold text-brand-ink group-hover:text-brand-accent transition-colors duration-300">
                            {section.heading}
                          </h3>
                          <div className="flex items-center gap-2">
                            <button
                              onClick={() =>
                                navigator.clipboard?.writeText(section.heading)
                              }
                              className="text-xs text-slate-400 hover:text-slate-700"
                            >
                              نسخ العنوان
                            </button>
                            <button
                              onClick={() => scrollToSection(index)}
                              className="text-xs text-slate-400 hover:text-slate-700"
                            >
                              اذهب للمحور
                            </button>
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
                <div className="absolute -bottom-10 -left-10 text-9xl opacity-5 pointer-events-none font-serif">
                  ”
                </div>
                <h4 className="text-xl font-bold text-brand-accent mb-4 tracking-wide">
                  خلاصة الملف الاستقصائي
                </h4>
                <p className="text-lg text-slate-100 leading-relaxed font-medium text-justify">
                  {currentInvestigation.summary}
                </p>
              </footer>
              <div className="">
                <TrendingTags
                  tags={[
                    "البيت_والشغل",
                    "سنة_أولى_أمومة",
                    "تنظيف_المنزل",
                    "دور_الحضانات",
                    "الانفصال",
                    "تربية_الأطفال",
                  ]}
                />
              </div>
            </article>
          </div>

          {/* Left Side: Sidebar Widgets */}
          {/* <div className="w-full space-y-6 lg:sticky lg:top-24">
                        <InteractivePoll
                            question="هل تؤيدين تقاسم أعباء تنظيف وتنسيق المنزل بالتساوي بين الزوج والزوجة كشرط أساسي لنجاح العلاقة الزوجية؟"
                            pollKey="bayn-albayt-walshoghl"
                            options={["نعم، التشارك ضروري", "لا، هي مسؤولية الأم بالأساس"]}
                        />

                        <DailyCaricature
                            caption="صراع الأولويات: العمل ضد البيت"
                            desc="عندما تحاول الأم الموازنة بين لوحة المفاتيح في العمل ومكنسة المنزل."
                            emoji="👩‍💻🧹"
                        />


                    </div> */}
        </div>
      </main>

      {/* Table of Contents Modal (portal) */}
      {showTOC && (
        <Modal
          onClose={() => setShowTOC(false)}
          className="modal-scroll bg-white w-full max-w-md rounded-lg shadow-2xl overflow-y-auto"
        >
          <div className="sticky top-0 bg-white/95 backdrop-blur-sm border-b border-slate-100 px-6 py-4 flex items-center justify-between">
            <h4 className="text-right font-bold">فهرس الملف</h4>
            <button
              onClick={() => setShowTOC(false)}
              className="w-9 h-9 rounded-full bg-[#faf9f6] flex items-center justify-center"
            >
              ✕
            </button>
          </div>
          <div className="p-6 space-y-4">
            {currentInvestigation.content.map((s, i) => (
              <button
                key={i}
                onClick={() => scrollToSection(i)}
                className="w-full text-right p-3 rounded-lg bg-[#faf9f6] hover:bg-slate-100 text-slate-700"
              >
                {String(i + 1).padStart(2, "0")}. {s.heading}
              </button>
            ))}
          </div>
        </Modal>
      )}

      <Footer />
    </div>
  );
}
