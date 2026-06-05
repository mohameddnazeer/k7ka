import BackgroundSVG from '../components/BackgroundSVG'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import InteractionsPanel from '../components/InteractionsPanel'
import { TrendingTags, InteractivePoll, DailyCaricature, VideoMediaGallery, ExpertAdviceDesk } from '../components/Youm7Widgets'

const sections = [
  {
    title: 'حالة التغيرات: بين صورة المجتمع والواقع الحقيقي',
    text: 'رغم أن الخطاب الاجتماعي يربط الأمومة بالدفء والسعادة المطلقة، إلا أن التجربة الواقعية تكشف عن جانب آخر مختلف تمامًا. فالأم الجديدة تواجه منذ الأيام الأولى بعد الولادة ضغطًا كبيرًا ناتجًا عن المسؤوليات المتراكمة، إلى جانب توقعات اجتماعية مثالية تطالبها بأن تكون في أفضل حالاتها دائمًا. تجد الأم نفسها مطالبة بالتماسك، والهدوء، والقدرة على إدارة كل التفاصيل، في الوقت الذي تعيش فيه حالة من الإرهاق الجسدي والذهني، نتيجة التغير الكامل في نمط الحياة.'
  },
  {
    title: 'التغيرات الجسدية بعد الولادة وتأثيرها النفسي',
    text: 'تمر الأم بعد الولادة بسلسلة من التغيرات الجسدية التي تنعكس بشكل مباشر على حالتها النفسية. وتشير دراسات طبية إلى أن انخفاض هرموني الأستروجين والبروجسترون بعد الولادة يؤدي إلى تقلبات مزاجية، وزيادة الحساسية العاطفية، والشعور بالتوتر. كما تشمل التغيرات الجسدية زيادة أو فقدان الوزن، تساقط الشعر، آلام العضلات والمفاصل، وتغيرات في شكل الجسم والبشرة.'
  },
  {
    title: 'اضطراب نوم الرضيع وتأثيره على صحة الأم النفسية',
    text: 'يُعد اضطراب نوم الطفل من أبرز العوامل التي تؤثر على الأم في السنة الأولى، حيث تعاني من النوم المتقطع لفترات طويلة، ما يؤدي إلى حالة من الإرهاق المزمن. هذا الإرهاق لا يقتصر على التعب الجسدي فقط، بل يمتد إلى ضعف التركيز، وزيادة التوتر، وتقلب المزاج، وانخفاض القدرة على اتخاذ القرار.'
  },
  {
    title: 'ما بين الإرهاق الطبيعي واكتئاب ما بعد الولادة',
    text: 'تمر أغلب الأمهات في السنة الأولى بحالة من الإرهاق النفسي والجسدي، وهو أمر طبيعي نتيجة التغيرات الكبيرة في نمط الحياة. لكن هناك حالة أكثر عمقًا تُعرف بـ اكتئاب ما بعد الولادة، وهي حالة نفسية تستمر لفترة أطول وتؤثر بشكل واضح على حياة الأم اليومية، من أبرز علاماتها الحزن المستمر، وفقدان الاهتمام، والشعور بالذنب، والعزلة الاجتماعية، واضطرابات النوم والشهية.'
  },
  {
    title: 'متى تحتاج الأم إلى تدخل نفسي متخصص؟',
    text: 'هناك علامات تحذيرية لا يجب تجاهلها، وتشير إلى ضرورة طلب المساعدة النفسية فورًا، أبرزها استمرار الحزن العميق لفترة طويلة، وفقدان القدرة على التفاعل مع الطفل، ونوبات بكاء متكررة، وشعور شديد بالذنب أو انعدام القيمة، وأفكار إيذاء النفس أو الطفل، والانعزال الكامل عن المحيط الاجتماعي.'
  },
  {
    title: 'دور الأب: شريك لا مساعد',
    text: 'لم تعد الأمومة مسؤولية فردية، بل أصبحت تجربة مشتركة تتطلب مشاركة فعّالة من الأب. فدوره لا يقتصر على الدعم المادي فقط، بل يمتد ليشمل المساعدة في رعاية الطفل ليلًا، ودعم الأم نفسيًا وتقليل شعورها بالضغط، والمشاركة في القرارات المتعلقة بالطفل، وتخفيف الأعباء المنزلية.'
  },
  {
    title: 'السوشيال ميديا وصناعة الأمومة المثالية',
    text: 'أصبحت منصات التواصل الاجتماعي مصدرًا رئيسيًا لتشكيل صورة الأمومة لدى الكثير من النساء. لكنها في كثير من الأحيان تقدم نموذجًا غير واقعي، تظهر فيه الأم دائمًا في حالة مثالية، والطفل هادئًا طوال الوقت، والمنزل منظمًا بلا ضغوط، وهو ما يزيد المقارنة والإحساس بالتقصير والضغط النفسي المستمر.'
  },
  {
    title: 'الأمومة ليست واحدة للجميع',
    text: 'تختلف تجربة السنة الأولى من أم لأخرى حسب الظروف الاجتماعية والاقتصادية. فالأمهات اللاتي يتمتعن بدعم مادي وأسري أكبر غالبًا ما يواجهن ضغوطًا أقل، بينما تعاني الأمهات في ظروف أقل دعمًا من أعباء مضاعفة. وهذا يؤكد أن الأمومة ليست تجربة موحدة، بل تجربة تتشكل وفق البيئة المحيطة بكل أم.'
  },
  {
    title: 'كيف تختلف التجربة بين الطبقات الاجتماعية؟',
    text: 'الأمهات في الطبقات الأعلى غالبًا ما يمتلكن وسائل دعم متعددة مثل المساعدة المنزلية والرعاية الطبية الخاصة والقدرة على الحصول على استشارات نفسية متخصصة. في المقابل، تواجه الأمهات في الطبقات المتوسطة والأقل دخلًا تحديات أكبر نتيجة قلة الدعم المادي وصعوبة الحصول على خدمات صحية متخصصة والاعتماد الكامل على النفس في رعاية الطفل.'
  },
  {
    title: 'ما الذي يحتاجه المجتمع لدعم الأمهات الجدد؟',
    text: 'تحسين تجربة الأمومة لا يعتمد فقط على الأم نفسها، بل على منظومة اجتماعية كاملة. ومن أبرز ما يحتاجه المجتمع: توفير دعم نفسي متاح وسهل، وتعزيز دور الأب كشريك أساسي، ونشر الوعي بأن الأمومة ليست مثالية دائمًا، وتوفير إجازات أمومة مناسبة، ودعم مراكز رعاية الطفل بأسعار مناسبة.'
  }
]

const stats = [
  { label: 'أول سنة', value: 'الأكثر حساسية' },
  { label: 'تغيرات', value: 'جسدية ونفسية' },
  { label: 'الدعم', value: 'مسؤولية مشتركة' },
  { label: 'الرسالة', value: 'الأمومة ليست كمالًا' }
]

export default function SanaOlaOmomaPage() {
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
        <TrendingTags tags={["سنة_أولى_أمومة", "الأمومة_الواقعية", "اكتئاب_بعد_الولادة", "رعاية_الرضيع", "الصحة_النفسية_للأمهات", "شراكة_الزوجين"]} />

        <section className="relative overflow-hidden rounded-[2.5rem] border border-slate-100 bg-white shadow-sm">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(178,201,255,0.22),transparent_30%),radial-gradient(circle_at_bottom_left,rgba(181,114,232,0.14),transparent_28%)]" />
          <div className="relative grid gap-10 p-8 sm:p-12 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
            <div className="text-right">
              <span className="inline-flex rounded-full bg-brand-accent/10 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.25em] text-brand-accent">
                قصص وحكايات حية
              </span>
              <h1 className="mt-5 text-4xl font-black tracking-tight text-brand-ink sm:text-5xl lg:text-6xl">
                سنة أولى أمومة: ما لا يُقال عن العام الأكثر حساسية في حياة المرأة
              </h1>
              <p className="mt-5 max-w-3xl text-base leading-8 text-slate-600 sm:text-lg">
                السنة الأولى بعد الولادة ليست مجرد مرحلة عابرة، بل انتقال عميق من نمط حياة مألوف إلى مسؤوليات جديدة تتداخل فيها المشاعر والتغيرات الجسدية والضغوط الاجتماعية. هذه الصفحة تضع التجربة في إطارها الحقيقي: إنسانية، معقدة، وتحتاج دعماً لا صورة مثالية.
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
              <h2 className="mt-4 text-2xl font-black leading-tight">الأمومة بين الإرهاق الطبيعي والاحتياج إلى الدعم</h2>
              <p className="mt-4 text-sm leading-7 text-slate-200">
                هذه المادة تركز على أن التعب أو الارتباك في السنة الأولى لا يعني الفشل، وأن الدعم النفسي والعائلي جزء أساسي من حماية الأم والطفل معًا.
              </p>
              <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
                <div className="rounded-2xl bg-white/10 p-4">
                  <div className="text-[11px] font-bold uppercase tracking-[0.2em] text-slate-300">المحاور</div>
                  <div className="mt-1 text-2xl font-black">{sections.length}</div>
                </div>
                <div className="rounded-2xl bg-white/10 p-4">
                  <div className="text-[11px] font-bold uppercase tracking-[0.2em] text-slate-300">التركيز</div>
                  <div className="mt-1 text-lg font-black">الصحة النفسية للأم</div>
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
              question="هل عانيتِ أو تخشين من التعرض لأعراض 'اكتئاب ما بعد الولادة' دون العثور على توعية أو رعاية نفسية كافية؟"
              pollKey="sana-ola-omoma"
              options={["نعم، عانيت أو أخشى ذلك جداً", "لا، أشعر بالدعم الكافي حولي"]}
            />

            <DailyCaricature
              caption="الأمومة المثالية!"
              desc="بين واقع كحكة والرضيع الذي لا ينام، وصورة السوشيال ميديا الحالمة."
              emoji="👶🤱😵‍💫"
            />
          </aside>

          <article className="space-y-6">
            <div className="rounded-[2rem] border border-slate-100 bg-white p-6 sm:p-8 shadow-sm">
              <p className="text-base leading-8 text-slate-700 sm:text-lg">
                تُعدّ السنة الأولى بعد الولادة واحدة من أكثر المراحل حساسية في حياة المرأة، إذ تنتقل فيها من نمط حياة معتاد إلى مسؤوليات جديدة بالكامل، تتداخل فيها مشاعر الفرح والخوف، والاحتواء والارتباك. ورغم أن المجتمع يقدّم الأمومة غالبًا في صورة مثالية، فإن الواقع يكشف عن تجربة أكثر تعقيدًا، مليئة بالتغيرات الجسدية والنفسية والاجتماعية.
              </p>
              <p className="mt-4 text-base leading-8 text-slate-700 sm:text-lg">
                في هذه المرحلة, لا تواجه الأم فقط مسؤولية رعاية طفل جديد، بل تدخل أيضًا في مواجهة مباشرة مع تغيّرات داخلية عميقة، تجعلها في حالة بحث مستمر عن التوازن بين ذاتها واحتياجات طفلها.
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



            <section className="rounded-[2.25rem] bg-brand-ink p-8 text-white shadow-lg">
              <div className="text-xs font-bold uppercase tracking-[0.25em] text-brand-accent">الخلاصة</div>
              <h2 className="mt-3 text-2xl font-black sm:text-3xl">الأمومة بين الواقع والمثالية</h2>
              <p className="mt-4 text-base leading-8 text-slate-200 sm:text-lg">
                تكشف السنة الأولى من الأمومة أنها ليست مرحلة سهلة أو مثالية كما تُقدَّم اجتماعيًا، بل تجربة إنسانية معقدة تتداخل فيها المشاعر والتغيرات الجسدية والضغوط النفسية والاجتماعية. ورغم كل التحديات، تبقى هذه المرحلة أيضًا فرصة لإعادة اكتشاف الذات، وبناء علاقة جديدة بين الأم وطفلها، تقوم على التعلم والنمو التدريجي وليس الكمال.
              </p>
              <p className="mt-4 text-base leading-8 text-slate-200 sm:text-lg">
                في النهاية، تبقى الأمومة تجربة فردية فريدة، تختلف من امرأة لأخرى، لكن ما يجمعها جميعًا هو الحاجة إلى الدعم، والتفهم، والاعتراف بأن “السنة الأولى” ليست اختبارًا للكمال… بل بداية لحياة جديدة تمامًا.
              </p>
            </section>

            <InteractionsPanel articleId="sana-ola-omoma" />
          </article>
        </section>
      </main>

      <Footer />
    </div>
  )
}
