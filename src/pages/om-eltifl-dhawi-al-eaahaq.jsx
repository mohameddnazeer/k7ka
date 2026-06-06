import { useEffect } from 'react'
import BackgroundSVG from '../components/BackgroundSVG'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import InteractionsPanel from '../components/InteractionsPanel'
import { TrendingTags, InteractivePoll, DailyCaricature, VideoMediaGallery, ExpertAdviceDesk } from '../components/Youm7Widgets'

const sections = [
  {
    title: 'صدمة التشخيص: اللحظة التي يتغير فيها كل شيء',
    text: 'تبدأ الرحلة غالبًا بلحظة واحدة فاصلة: لحظة التشخيص. لحظة لا تعلن فقط عن حالة طبية، بل تعيد تشكيل حياة الأسرة بالكامل. الصدمة الأولى لتشخيص الإعاقة قد تمر بعدة مراحل نفسية متتابعة، تبدأ بالإنكار، ثم الغضب، ثم الحزن، وصولًا إلى القلق المستمر على المستقبل. كثير من الأمهات يعشن هذه المرحلة دون دعم نفسي كافٍ، مما يجعل الصدمة أكثر قسوة واستمرارية، وكأنها تُخاض في عزلة تامة بعيدًا عن أي احتواء اجتماعي.'
  },
  {
    title: 'أمومة من نوع مختلف: رعاية بلا توقف',
    text: 'تربية طفل من ذوي الإعاقة ليست مهمة إضافية داخل يوم الأم، بل هي يوم كامل بحد ذاته. فالمتابعات الطبية، وجلسات التأهيل، والتدريب السلوكي، تتحول إلى نمط حياة دائم لا يعرف التوقف. بعض الحالات تحتاج إلى تدخلات يومية لا يمكن تأجيلها، وغياب الدعم الأسري والمجتمعي يجعل الأم في حالة إنهاك مزمن، وكأنها تؤدي وظيفة بدوام كامل بلا إجازات.'
  },
  {
    title: 'صورة المجتمع: بين الشفقة والتنميط',
    text: 'لا تواجه الأم فقط تحديات الرعاية، بل أيضًا نظرة المجتمع. نظرة قد تتأرجح بين الشفقة المفرطة أو التمييز الصامت، وكلاهما يضع الأم تحت ضغط نفسي مضاعف. المجتمع غالبًا ما يتعامل مع الطفل من ذوي الإعاقة وأسرته بنمطين غير صحيين: إما التعاطف الذي يتحول إلى وصم غير مباشر، أو التجاهل الذي يعمّق العزلة. وبعض الأسر تلجأ إلى إخفاء الطفل خوفًا من نظرات الآخرين أو التعليقات، وهو ما يزيد العبء النفسي على الأم.'
  },
  {
    title: 'العبء النفسي: أم بين الذنب والخوف المستمر',
    text: 'لا يقتصر الضغط على الجهد البدني، بل يمتد إلى الداخل النفسي للأم. فالكثير منهن يعانين من شعور دائم بالقلق، وأحيانًا بالذنب، وكأنهن مسؤولات عن حالة الطفل. هذا الشعور غالبًا لا يستند إلى أي أساس علمي، لكنه يتكون نتيجة ضغط اجتماعي ونفسي متراكم. واستمرار هذا الضغط دون دعم قد يؤدي إلى اكتئاب أو إنهاك نفسي شديد، ينعكس على قدرة الأم على الرعاية نفسها، وليس فقط طفلها.'
  },
  {
    title: 'الطفل نفسه: احتياج مضاعف لفهم مختلف',
    text: 'لا يمكن فهم معاناة الأم دون النظر إلى طبيعة الطفل نفسه. فالأطفال من ذوي الإعاقة يحتاجون إلى أساليب تعامل خاصة، تختلف حسب نوع الإعاقة. بعض السلوكيات مثل نوبات الغضب أو الانسحاب ليست سلوكًا عدوانيًا، بل وسيلة تعبير عن احتياجات غير قادرة على التعبير عنها بشكل طبيعي. تدريب الأم على فهم هذه السلوكيات جزء أساسي من العلاج، وليس مجرد إضافة اختيارية، لأنه يساعد في تقليل التوتر داخل الأسرة.'
  },
  {
    title: 'من الداخل: شهادة أم تعيش التجربة',
    text: 'تحكي السيدة روحية محمد، أم لطفلة من متلازمة داون، جانبًا من رحلتها قائلة: “لما جاتني بنتي حسّيت إني محتارة… بحبها حب مالوش حدود، لكن كنت خايفة من بكرة. الناس ساعات بتبصلها بنظرات وجع، وأنا بقاوم عشان أثبت لهم إنها مش أقل من حد”. أصعب ما في التجربة ليس العلاج فقط، بل نظرات المجتمع والضغط النفسي المستمر.'
  },
  {
    title: 'الطريق إلى الدعم: ماذا تحتاج هذه الأم؟',
    text: 'الدعم يجب ألا يقتصر على العلاج الطبي، بل يمتد إلى جلسات دعم نفسي للأم، وبرامج إرشاد، ومؤسسات تساعد في التأهيل والتأقلم. التغيير الحقيقي يبدأ من المجتمع نفسه، عبر تقليل الوصمة، وتوفير بيئة تعليمية وتأهيلية حقيقية، تخفف العبء عن الأم بدل أن تتركه وحدها.'
  }
]

const stats = [
  { label: 'الأم', value: 'معلمة وممرضة ودرع' },
  { label: 'التشخيص', value: 'بداية الصدمة الكبرى' },
  { label: 'الدعم', value: 'حاجة أساسية' },
  { label: 'الرسالة', value: 'لا تحتاج لقبًا بل سندًا' }
]

export default function OmEltiflDhawiAlEaahaqPage() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  const scrollToSection = (index) => {
    const element = document.getElementById(`section-${index}`)
    if (!element) return
    element.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <div className="relative min-h-screen overflow-hidden bg-slate-50 text-[#1F2937]" dir="rtl">
      <BackgroundSVG />
      <NavBar />

      <main className="relative z-10 mx-auto w-full max-w-7xl px-4 pb-24 pt-12 sm:px-8">
        <TrendingTags tags={["ذوي_الإعاقة", "أمومة_خاصة", "الدعم_النفسي", "حقوق_المعاقين", "الدمج_المجتمعي", "سند_الأمهات"]} />

        <section className="relative overflow-hidden rounded-[2.5rem] border border-slate-100 bg-white shadow-sm">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(178,201,255,0.22),transparent_30%),radial-gradient(circle_at_bottom_left,rgba(181,114,232,0.14),transparent_28%)]" />
          <div className="relative grid gap-10 p-8 sm:p-12 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
            <div className="text-right">
              <span className="inline-flex rounded-full bg-brand-accent/10 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.25em] text-brand-accent">
                أمهات استثنائيات
              </span>
              <h1 className="mt-5 text-4xl font-black tracking-tight text-brand-ink sm:text-5xl lg:text-6xl">
                أمّ المعاق… سوبر هيرو لا يراه أحد
              </h1>
              <p className="mt-5 max-w-3xl text-base leading-8 text-slate-600 sm:text-lg">
                هذا التحقيق يفتح ملف “أم الطفل من ذوي الإعاقة”، لفهم ما تعيشه فعليًا خلف الأبواب المغلقة، وما الذي يفتقده المجتمع في دعمه لها.
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
              <h2 className="mt-4 text-2xl font-black leading-tight">رحلة بين الحب والخوف والإنهاك الصامت</h2>
              <p className="mt-4 text-sm leading-7 text-slate-200">
                في كل بيت يضم طفلًا من ذوي الإعاقة، تقف أم تحمل عبئًا لا يُرى بالعين المجردة، لكنه يثقل الحياة بكل تفاصيلها. هذه الصفحة تتبع الرحلة من لحظة التشخيص حتى الحاجة إلى الدعم الحقيقي.
              </p>
              <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
                <div className="rounded-2xl bg-white/10 p-4">
                  <div className="text-[11px] font-bold uppercase tracking-[0.2em] text-slate-300">المحاور</div>
                  <div className="mt-1 text-2xl font-black">{sections.length}</div>
                </div>
                <div className="rounded-2xl bg-white/10 p-4">
                  <div className="text-[11px] font-bold uppercase tracking-[0.2em] text-slate-300">التركيز</div>
                  <div className="mt-1 text-lg font-black">الدعم قبل اللقب</div>
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
                    className="block w-full rounded-2xl border border-slate-100 bg-[#faf9f6] px-4 py-3 text-right text-sm font-bold text-brand-inkMuted transition hover:border-brand-accent hover:bg-brand-accent hover:text-white"
                  >
                    <span className="block text-[11px] uppercase tracking-[0.2em] opacity-60">{String(index + 1).padStart(2, '0')}</span>
                    <span className="block mt-1 leading-6">{section.title}</span>
                  </button>
                ))}
              </div>
            </div>

            <InteractivePoll
              question="هل توافقين على أهمية توفير عيادات دعم نفسي إلزامية مجانية لأهالي الأطفال ذوي الإعاقة داخل مراكز التأهيل الحكومية؟"
              pollKey="om-eltifl-dhawi-al-eaahaq"
              options={["نعم، ضرورة ملحة للأهالي", "لا، نفضل دعم مالي مباشر"]}
            />


          </aside>

          <article className="space-y-6">
            <div className="rounded-[2rem] border border-slate-100 bg-white p-6 sm:p-8 shadow-sm">
              <p className="text-base leading-8 text-slate-700 sm:text-lg">
                أمّ الطفل من ذوي الإعاقة ليست مجرد “أم”، بل هي إنسانة تخوض معركة يومية بصمت، بين الحب والخوف، وبين القوة والإرهاق. ورغم أنها تُلقب أحيانًا بـ“السوبر هيرو”، إلا أن الحقيقة الأهم هي أنها لا تحتاج إلى لقب… بل تحتاج إلى دعم حقيقي، يفهمها، ويحتويها، ويمنح طفلها فرصة عادلة للحياة.
              </p>
            </div>

            {sections.map((section, index) => (
              <section
                key={section.title}
                id={`section-${index}`}
                className="scroll-mt-24 rounded-[2rem] border border-slate-100 bg-white p-6 sm:p-8 shadow-sm animate-fadeInUp opacity-0"
                style={{ animationDelay: `${index * 100}ms`, animationFillMode: 'forwards' }}
              >
                <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-brand-accent/10 px-3 py-1.5 text-xs font-bold text-brand-accent">
                  <span>✦</span>
                  {String(index + 1).padStart(2, '0')}
                </div>
                <h2 className="text-2xl font-black text-brand-ink sm:text-3xl">{section.title}</h2>
                <p className="mt-4 text-base leading-8 text-slate-700 sm:text-lg">{section.text}</p>
              </section>
            ))}

            <div className="space-y-8 bg-white p-6 sm:p-8 rounded-[2rem] border border-slate-100 shadow-xs text-right">
              <VideoMediaGallery
                title="تأهيل ودعم ذوي الإعاقة"
                clips={[
                  { title: "حوار خاص مع مستشارة أسرية حول التعامل النفسي السليم مع صدمة تشخيص إعاقة الطفل", dur: "٦:١٥" },
                  { title: "تغطية من داخل مركز التنمية الشاملة: أمهات يتبادلن الخبرات والدعم المشترك", dur: "٤:٤٥" }
                ]}
              />

              <ExpertAdviceDesk
                qaList={[
                  { q: "كيف أتصرف مع نوبات الغضب المتكررة لطفلي المصاب بالتوحد في الأماكن العامة؟", a: "يُنصح بعدم الانفعال أو معاقبة الطفل. حاولي نقله لمكان هادئ ومشتت للإنتباه، واستخدمي بطاقات بصرية بسيطة للتعبير، مع تجاهل نظرات المحيطين تماماً والتركيز على سلامة طفلكِ النفسية." },
                  { q: "ما هي الأوراق المطلوبة لاستخراج بطاقة الخدمات المتكاملة للطفل؟", a: "يتطلب تقريراً طبياً معتمداً من أحد مستشفيات وزارة الصحة أو الهيئات التعليمية يوضح نوع ودرجة الإعاقة، مع إجراء الكشف الوظيفي وتثبيته عبر الحجز الإلكتروني بموقع وزارة التضامن الاجتماعي." }
                ]}
              />
            </div>

            <section className="rounded-[2.25rem] bg-brand-ink p-8 text-white shadow-lg">
              <div className="text-xs font-bold uppercase tracking-[0.25em] text-brand-accent">الخلاصة</div>
              <h2 className="mt-3 text-2xl font-black sm:text-3xl">لا تحتاج إلى لقب… بل إلى دعم حقيقي</h2>
              <p className="mt-4 text-base leading-8 text-slate-200 sm:text-lg">
                الإعاقة ليست مأساة بحد ذاتها، لكن غياب الدعم هو ما يصنع المأساة الحقيقية. ما يحتاجه المجتمع هنا ليس التعاطف العابر، بل منظومة تفهم الأم، وتخفف عنها، وتمنح الطفل حقه في الحياة الكريمة.
              </p>
            </section>

            <InteractionsPanel articleId="om-eltifl-dhawi-al-eaahaq" />
          </article>
        </section>
      </main>

      <Footer />
    </div>
  )
}
