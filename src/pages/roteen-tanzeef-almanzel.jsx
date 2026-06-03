import BackgroundSVG from '../components/BackgroundSVG'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import InteractionsPanel from '../components/InteractionsPanel'
import { TrendingTags, InteractivePoll, DailyCaricature, VideoMediaGallery, ExpertAdviceDesk } from '../components/Youm7Widgets'

const sections = [
  {
    title: 'ضغط المسؤوليات… حين يتحول التنظيف إلى عبء ذهني',
    text: 'داخل المنزل، لا تنتهي مهام الأم عند التنظيف فقط، بل تمتد إلى ما يُعرف علميًا بالعمل العقلي المنزلي، وهو التخطيط المستمر للمهام اليومية وإدارة تفاصيل البيت. هذا النوع من الضغط يؤدي إلى إرهاق ذهني مستمر، وتوتر نفسي متراكم، وشعور دائم بعدم الإنجاز، وضغط نفسي مرتبط بالكمال. ومع استمرار التوقعات التقليدية التي تُحمّل الأم الجزء الأكبر من المسؤولية، تصبح في مواجهة ضغط مزدوج بين الواجب والحاجة للراحة.'
  },
  {
    title: 'التنظيف كمساحة نفسية… بين الراحة والضغط',
    text: 'تنظيف المنزل لا يُنظر إليه فقط كواجب منزلي، بل كوسيلة نفسية لتنظيم المشاعر عند كثير من الأمهات. بعض النساء يشعرن أثناء التنظيف بأنهن يعِدن ترتيب أفكارهن، ويستعدن الشعور بالسيطرة، ويخففن التوتر الداخلي. لكن المشكلة تبدأ عندما يتحول التنظيف إلى ضرورة نفسية مرتبطة بالشعور بالذنب أو الكمال المفرط، فيتحول البيت من مساحة راحة إلى مصدر ضغط دائم.'
  },
  {
    title: 'أثر الفوضى المنزلية على الصحة النفسية للأم',
    text: 'الفوضى داخل المنزل ليست مجرد مشكلة تنظيم، بل عامل نفسي مباشر يؤثر على صحة الأم. فهي ترتبط بارتفاع مستويات القلق وزيادة احتمالات الاكتئاب وضعف التركيز وتوتر العلاقة مع الأطفال. كما أن الشعور بعدم السيطرة على المنزل يجعل الأم في حالة ضغط مستمر، خاصة مع غياب الدعم أو المشاركة من باقي أفراد الأسرة.'
  },
  {
    title: 'التنظيف كجزء من هوية الأم',
    text: 'روتين تنظيف المنزل قد يتحول لدى كثير من الأمهات إلى جزء من الهوية الشخصية وطريقة للتعامل مع الضغوط اليومية. فالحركة والتنظيم قد يساعدان في تقليل التوتر واستعادة الإحساس بالسيطرة، لكن الخطر يبدأ عندما يصبح هذا السلوك مرتبطًا بالشعور بالذنب أو عدم الرضا الدائم عن الذات. عندها يتحول التنظيم من وسيلة راحة إلى معيار قاسٍ لتقييم النفس.'
  },
  {
    title: 'أثر الروتين اليومي على الأسرة والعلاقات داخل المنزل',
    text: 'اضطراب النظام داخل المنزل لا يؤثر فقط على الأم، بل يمتد إلى العلاقة بينها وبين الأطفال وباقي أفراد الأسرة. فالفوضى المنزلية ترتبط بارتفاع مستويات التوتر داخل الأسرة، مما قد ينعكس على زيادة العصبية في التعامل اليومي وضعف التواصل وشعور الأم بالإرهاق المستمر. وفي المقابل، فإن وجود روتين منزلي واضح يساعد في خلق استقرار أسري أكبر ويمنح الأسرة شعورًا بالاتساق والتنظيم.'
  },
  {
    title: 'التنظيف بين الواجب الديني والمسؤولية الاجتماعية',
    text: 'من الجانب الديني، أعمال المنزل ليست واجبًا شرعيًا ملزمًا على المرأة بشكل كامل، لكنها من أعمال المعروف التي تؤجر عليها إذا قامت بها برضاها ونية صالحة. كما أن الإسلام لا يُلزم المرأة بجميع أعمال المنزل، ويراعي ظروف التعب والمرض والعمل، ويدعو إلى التعاون بين الزوجين، ويحث الزوج على المساعدة والمعاشرة بالمعروف.'
  },
  {
    title: 'السوشيال ميديا وصناعة صورة البيت المثالي',
    text: 'تلعب مواقع التواصل الاجتماعي دورًا مهمًا في تشكيل تصور غير واقعي عن الحياة المنزلية. فالمحتوى المنتشر غالبًا ما يظهر منازل مثالية دائمًا منظمة، وأمهات بلا إرهاق ظاهر، وروتين يومي مثالي وسهل التنفيذ. وهذا يخلق ضغطًا نفسيًا غير مباشر على الأمهات لأنهن يقارن حياتهن اليومية الواقعية بصور مفلترة وغير كاملة.'
  },
  {
    title: 'التنظيف بين العادة اليومية والضغط النفسي المستمر',
    text: 'روتين تنظيف المنزل ليس مجرد نشاط متكرر، بل نظام معقد يتداخل فيه الجهد الجسدي مع العبء النفسي. ومع تراكم المسؤوليات، يتحول التنظيف من مهمة منزلية إلى ضغط يومي صامت لا يلاحظه الآخرون، لكنه ينعكس بشكل مباشر على الحالة النفسية للأم. واستمرار هذا الضغط دون دعم أو توزيع عادل للمسؤوليات قد يؤدي إلى حالة من الإرهاق المزمن.'
  },
  {
    title: 'تنظيف البيت بين العبء والهوية الاجتماعية',
    text: 'ما زال المجتمع يربط بين نجاح الأم وبين نظافة المنزل وتنظيمه، وهو ما يخلق ضغطًا مضاعفًا عليها. فبعض الأمهات يرين في تنظيف المنزل جزءًا من هويتهن اليومية، ليس فقط كواجب، بل كوسيلة لإثبات الكفاءة والقدرة على التحكم في تفاصيل الحياة. لكن هذا الارتباط قد يتحول إلى عبء نفسي عندما يصبح معيار تقييم الأم هو شكل المنزل فقط.'
  },
  {
    title: 'بين النظام والضغط… أين تقف الأم؟',
    text: 'التحقيق يكشف أن روتين تنظيف المنزل ليس مهمة بسيطة كما يبدو، بل هو جزء من منظومة واسعة تتداخل فيها العوامل النفسية والاجتماعية والثقافية. فمن جهة، يمنح التنظيم والنظافة شعورًا بالراحة والسيطرة والاستقرار داخل الأسرة. ومن جهة أخرى، قد يتحول إلى مصدر ضغط مستمر عندما يُحمّل بالكامل على الأم دون دعم أو مشاركة.'
  }
]

const stats = [
  { label: 'المنزل', value: 'منظومة مشتركة' },
  { label: 'العبء', value: 'ذهني وجسدي' },
  { label: 'النتيجة', value: 'توتر أو استقرار' },
  { label: 'الحل', value: 'عدالة الأدوار' }
]

export default function RoTeenTanzeefAlManzelPage() {
  const scrollToSection = (index) => {
    const element = document.getElementById(`section-${index}`)
    if (!element) return
    element.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <div className="relative min-h-screen overflow-hidden bg-[#faf9f6] text-[#1F2937]" dir="rtl">
      <BackgroundSVG />
      <NavBar />

      <main className="relative z-10 mx-auto w-full max-w-7xl px-4 pb-24 pt-12 sm:px-8">
        <TrendingTags tags={["روتين_المنزل", "العبء_الذهني", "المشاركة_الزوجية", "تنظيم_البيت", "الكمال_المنزلي", "راحة_الأم"]} />

        <section className="relative overflow-hidden rounded-[2.5rem] border border-slate-100 bg-white shadow-sm">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(178,201,255,0.22),transparent_30%),radial-gradient(circle_at_bottom_left,rgba(181,114,232,0.14),transparent_28%)]" />
          <div className="relative grid gap-10 p-8 sm:p-12 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
            <div className="text-right">
              <span className="inline-flex rounded-full bg-brand-accent/10 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.25em] text-brand-accent">
                المجهود المنزلي الخفي
              </span>
              <h1 className="mt-5 text-4xl font-black tracking-tight text-brand-ink sm:text-5xl lg:text-6xl">
                روتين تنظيف المنزل: بين عبء الأم واستقرار الأسرة
              </h1>
              <p className="mt-5 max-w-3xl text-base leading-8 text-slate-600 sm:text-lg">
                لا يبدو روتين تنظيف البيت مجرد مهام يومية متكررة، بل يتحول إلى انعكاس مباشر لدور الأم داخل الأسرة، وما تتحمله من مسؤوليات نفسية جسدية واجتماعية.
              </p>

              <div className="mt-7 grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
                {stats.map((item) => (
                  <div key={item.label} className="rounded-2xl border border-slate-100 bg-white/80 p-4 shadow-sm backdrop-blur-sm">
                    <div className="text-xs font-bold uppercase tracking-[0.2em] text-slate-400">{item.label}</div>
                    <div className="mt-2 text-lg font-black text-brand-ink">{item.value}</div>
                  </div>
                ))}
              </div>
            </div>

            <aside className="rounded-[2rem] border border-slate-100 bg-brand-ink p-6 text-white shadow-lg">
              <div className="flex items-center gap-3 text-brand-accent">
                <span className="text-2xl">✦</span>
                <span className="text-xs font-bold uppercase tracking-[0.25em]">ملخص المحور</span>
              </div>
              <h2 className="mt-4 text-2xl font-black leading-tight">التنظيف بين الراحة والضغط</h2>
              <p className="mt-4 text-sm leading-7 text-slate-200">
                المنزل قد يمنح الأم إحساسًا بالسيطرة والتنظيم، لكنه قد يتحول أيضًا إلى مصدر استنزاف نفسي إذا أصبح معيارًا لتقييمها وحدها.
              </p>
              <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
                <div className="rounded-2xl bg-white/10 p-4">
                  <div className="text-[11px] font-bold uppercase tracking-[0.2em] text-slate-300">المحاور</div>
                  <div className="mt-1 text-2xl font-black">{sections.length}</div>
                </div>
                <div className="rounded-2xl bg-white/10 p-4">
                  <div className="text-[11px] font-bold uppercase tracking-[0.2em] text-slate-300">التركيز</div>
                  <div className="mt-1 text-lg font-black">التنظيم لا الكمال</div>
                </div>
              </div>
            </aside>
          </div>
        </section>

        <section className="mt-8 grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <aside className="lg:sticky lg:top-6 space-y-6">
            <div className="rounded-[2rem] border border-slate-100 bg-white p-6 shadow-sm">
              <div className="mb-4 flex items-center justify-between">
                <h3 className="text-xs font-bold uppercase tracking-[0.25em] text-slate-400">فهرس سريع</h3>
                <span className="rounded-full bg-brand-secondary/10 px-3 py-1 text-xs font-bold text-brand-secondary">{sections.length} أقسام</span>
              </div>
              <div className="space-y-2">
                {sections.map((section, index) => (
                  <button
                    key={section.title}
                    type="button"
                    onClick={() => scrollToSection(index)}
                    className="block w-full rounded-2xl border border-slate-100 bg-[#faf9f6] px-4 py-3 text-right text-sm font-bold text-brand-inkMuted transition hover:border-brand-accent hover:bg-brand-accent hover:text-white animate-fadeInUp opacity-0"
                    style={{ animationDelay: `${index * 50}ms` }}
                  >
                    <span className="block text-[11px] uppercase tracking-[0.2em] opacity-60">{String(index + 1).padStart(2, '0')}</span>
                    <span className="block mt-1 leading-6">{section.title}</span>
                  </button>
                ))}
              </div>
            </div>

            <InteractivePoll 
              question="هل توافقين على أن مشاركة الزوج والأبناء في الأعمال المنزلية يجب أن تُطرح كواجب اجتماعي وثقافي وليس كمساعدة اختيارية للأم؟" 
              pollKey="roteen-tanzeef-almanzel"
              options={["نعم، واجب تشاركي أصيل", "لا، نفضل المساعدة الودية الطوعية"]}
            />

            <DailyCaricature 
              caption="المجهود الخفي!" 
              desc="بين تلال الصحون ومسح الأرضيات، يختفي جهد الأم اليومي خلف عبارة 'يعطيكِ العافية' دون مشاركة فعلية."
              emoji="🧹🧼🧺"
            />
          </aside>

          <article className="space-y-6">
            <div className="rounded-[2rem] border border-slate-100 bg-white p-6 sm:p-8 shadow-sm">
              <p className="text-base leading-8 text-slate-700 sm:text-lg">
                بين السعي المستمر للحفاظ على النظام والنظافة، وبين الضغوط الناتجة عن تراكم الأعمال المنزلية ورعاية الأطفال، تتشكل علاقة معقدة بين الأم وبيتها تؤثر بشكل مباشر على حالتها النفسية وعلى استقرار الأسرة ككل.
              </p>
            </div>

            {sections.map((section, index) => (
              <section 
                key={section.title} 
                id={`section-${index}`} 
                className="scroll-mt-24 rounded-[2rem] border border-slate-100 bg-white p-6 sm:p-8 shadow-sm animate-fadeInUp opacity-0"
                style={{ animationDelay: `${(index + 1) * 100}ms` }}
              >
                <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-brand-accent/10 px-3 py-1.5 text-xs font-bold text-brand-accent">
                  <span>✦</span>
                  {String(index + 1).padStart(2, '0')}
                </div>
                <h2 className="text-2xl font-black text-brand-ink sm:text-3xl font-serif">{section.title}</h2>
                <p className="mt-4 text-base leading-8 text-slate-700 sm:text-lg">{section.text}</p>
              </section>
            ))}

            <div className="space-y-8 bg-white p-6 sm:p-8 rounded-[2rem] border border-slate-100 shadow-xs text-right">
              <VideoMediaGallery 
                title="البيت وإدارته الصحية"
                clips={[
                  { title: "فيديو توعوي: كيف تتغلب الأم على العبء الذهني الناتج عن التخطيط للمهام المنزلية؟", dur: "٦:٠٥" },
                  { title: "تحقيق مصور: قصص لعائلات مصرية نجحت في تطبيق مبدأ تقسيم المهام بعدالة", dur: "٣:٥٥" }
                ]}
              />

              <ExpertAdviceDesk 
                qaList={[
                  { q: "أشعر بالذنب والتقصير الشديد إذا تركت البيت غير منظم ليوم واحد، كيف أتحكم في هذا الشعور؟", a: "تذكري دائماً أن نظافة البيت غايتها توفير الراحة لأهله وليس التضحية بصحتكِ النفسية من أجل صورة مثالية. تدربي على غض الطرف عن الفوضى الطفيفة وجدولة المهام بمرونة." },
                  { q: "ما هي الطريقة الفعّالة لتدريب الأطفال الصغار على تنظيم غرفهم ومساعدة الأم؟", a: "ابدئي بتحويل التنظيم إلى لعبة مسلية بدلاً من الأوامر الجافة. خصصي صناديق ملونة ومصنفة للألعاب، وامنحيهم مكافآت بسيطة أو تشجيعاً لفظياً معنوياً عند إتمام ترتيب غرفهم." }
                ]}
              />
            </div>

            <section className="rounded-[2.25rem] bg-brand-ink p-8 text-white shadow-lg animate-fadeInUp opacity-0" style={{ animationDelay: `${(sections.length + 1) * 100}ms` }}>
              <div className="text-xs font-bold uppercase tracking-[0.25em] text-brand-accent">الخلاصة</div>
              <h2 className="mt-3 text-2xl font-black sm:text-3xl font-serif">المنزل ليس مسؤولية شخص واحد</h2>
              <p className="mt-4 text-base leading-8 text-slate-200 sm:text-lg">
                المنزل ليس مسؤولية شخص واحد، بل منظومة حياة مشتركة، وأن استقرار الأسرة يبدأ من عدالة الأدوار لا من حجم المجهود الفردي.
              </p>
            </section>

            <InteractionsPanel articleId="roteen-tanzeef-almanzel" />
          </article>
        </section>
      </main>

      <Footer />
    </div>
  )
}
