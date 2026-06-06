import { useEffect } from 'react'
import BackgroundSVG from '../components/BackgroundSVG'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import InteractionsPanel from '../components/InteractionsPanel'
import { TrendingTags, InteractivePoll, DailyCaricature, VideoMediaGallery, ExpertAdviceDesk } from '../components/Youm7Widgets'

const sections = [
  {
    title: 'أرقام تكشف الفجوة… بين التقدم وعدم المساواة',
    text: 'تشير بيانات الجهاز المركزي للتعبئة العامة والإحصاء إلى أن معدل الأمية في مصر انخفض من 25.8% عام 2017 إلى 16.6% عام 2024 بين الأفراد فوق سن 10 سنوات، وهو ما يعكس تقدمًا نسبيًا في ملف محو الأمية. لكن الفجوة بين الجنسين ما زالت واضحة، كما تظهر الفجوة الجغرافية بوضوح بين الحضر والريف، وتظل محافظات الوجه القبلي الأعلى في المعدلات.'
  },
  {
    title: 'الأمية… عبء نفسي خفي لا يظهر في الإحصاءات',
    text: 'أمية المرأة لا تقتصر على الجانب التعليمي، بل تمتد لتترك آثارًا نفسية عميقة. كثير من النساء الأميات يعانين من انخفاض تقدير الذات، والشعور بالدونية، والخوف من التعامل مع المجتمع، والاعتماد الكامل على الآخرين. وقد تتطور هذه الضغوط في بعض الحالات إلى اكتئاب مزمن أو قلق اجتماعي أو عزلة نفسية مستمرة.'
  },
  {
    title: 'الأمية وعلاقتها بالأطفال… دائرة التأثير المستمر',
    text: 'تأثير الأمية لا يتوقف عند الأم فقط، بل يمتد مباشرة إلى الأبناء. فالأم غير المتعلمة قد تواجه صعوبة في متابعة التعليم الدراسي للأبناء والتواصل مع المدرسة وتقديم الدعم الأكاديمي للطفل، وهذا قد يؤدي إلى فجوة نفسية بين الأم والطفل تؤثر على ثقته بنفسه وتحصيله الدراسي.'
  },
  {
    title: 'الأمية والإقصاء الاجتماعي… امرأة على الهامش',
    text: 'أمية المرأة تصنع حالة من الإقصاء الاجتماعي تجعل كثيرًا من النساء خارج دائرة المشاركة الفعلية في المجتمع. فالمرأة الأمية غالبًا ما تُحاصر داخل أدوار تقليدية محدودة، ما يقلل من فرصها في اتخاذ القرار داخل الأسرة والمشاركة في سوق العمل ومعرفة حقوقها القانونية والصحية.'
  },
  {
    title: 'العادات والتقاليد… العائق الأكبر أمام تعليم المرأة',
    text: 'تظل العادات والتقاليد واحدة من أقوى العوائق أمام تعليم الفتيات، خاصة في بعض المناطق الريفية، حيث يُنظر إلى تعليم الفتاة على أنه أمر ثانوي أو غير ضروري. وتساهم عوامل مثل الزواج المبكر وتحميل الفتاة مسؤوليات منزلية مبكرة وتفضيل تعليم الذكور في استمرار الأمية بين النساء.'
  },
  {
    title: 'البعد الاقتصادي للأمية… خسارة لا تُرى في الميزانيات',
    text: 'أمية المرأة تمثل خسارة مباشرة وغير مباشرة للاقتصاد الوطني. فالمرأة غير المتعلمة تواجه صعوبة في الاندماج في سوق العمل والحصول على وظائف مستقرة وتحسين دخل الأسرة، وهذا يؤدي إلى زيادة معدلات الفقر واستمرار الاعتماد على الدعم الحكومي.'
  },
  {
    title: 'بين الواقع والتغيير… مبادرات لا تكفي وحدها',
    text: 'رغم وجود جهود رسمية ومبادرات من الهيئة العامة لتعليم الكبار وبرامج حكومية بالتعاون مع منظمات دولية، إلا أن المشكلة ما زالت قائمة، خاصة في المناطق الأكثر فقرًا. ونجاح هذه المبادرات يتطلب تعزيز الوعي المجتمعي ودعم الأسر في تعليم البنات ومواجهة الزواج المبكر وتوفير فرص تعليم مرنة للنساء البالغات.'
  },
  {
    title: 'شهادة من الواقع… حين يتحول التعليم إلى حياة جديدة',
    text: 'وراء الأرقام والتقارير، تظل التجارب الإنسانية هي الأكثر تعبيرًا عن قيمة محو أمية المرأة. فبعض المستفيدات من برامج محو الأمية يؤكدن أن حياتهن تغيرت بالكامل بعد التعلم، إذ أصبح بإمكانهن إدارة شؤونهن دون اعتماد دائم على الآخرين، واكتسبن إحساسًا جديدًا بالكرامة والاستقلالية.'
  },
  {
    title: 'محو الأمية والصحة النفسية… علاقة لا تُرى بوضوح',
    text: 'تعليم المرأة يرتبط مباشرة بصحتها النفسية. فالمرأة الأمية غالبًا ما تعاني من شعور مستمر بالعجز وقلق اجتماعي وانخفاض الثقة بالنفس وخوف من التعامل مع المؤسسات والمجتمع. ومحو الأمية يساعد في تقليل هذه الضغوط بشكل كبير لأنه يمنح المرأة أدوات للفهم والتعامل مع الحياة اليومية بثقة أكبر.'
  },
  {
    title: 'معركة تنمية قبل أن تكون تعليمًا',
    text: 'قضية محو أمية المرأة ليست مجرد ملف تعليمي، بل قضية تنموية شاملة تمس الاقتصاد والصحة النفسية والاستقرار الأسري. ومواجهة الأمية لا تتطلب فقط فتح فصول تعليم، بل تحتاج إلى تغيير ثقافي في نظرة المجتمع للمرأة ودعم اقتصادي للأسر الفقيرة ومواجهة الزواج المبكر وتوسيع برامج تعليم الكبار.'
  }
]

const stats = [
  { label: 'الأمية', value: 'قضية تنمية' },
  { label: 'التأثير', value: 'أسرة ومجتمع' },
  { label: 'الفجوة', value: 'إناث وريف' },
  { label: 'الحل', value: 'تعليم وتمكين' }
]

export default function MahwElOmyaPage() {
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
        <TrendingTags tags={["محو_الأمية", "تعليم_المرأة", "تعليم_الكبار", "الوعي_والتنمية", "تمكين_النساء", "الفرص_التعليمية"]} />
        <section className="relative overflow-hidden rounded-[2.5rem] border border-slate-100 bg-white shadow-sm">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(178,201,255,0.22),transparent_30%),radial-gradient(circle_at_bottom_left,rgba(181,114,232,0.14),transparent_28%)]" />
          <div className="relative grid gap-10 p-8 sm:p-12 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
            <div className="text-right">
              <span className="inline-flex rounded-full bg-brand-accent/10 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.25em] text-brand-accent">
                مواجهة الأمية لتمكين المرأة
              </span>
              <h1 className="mt-5 text-4xl font-black tracking-tight text-brand-ink sm:text-5xl lg:text-6xl">
                محو أمية المرأة… معركة الوعي الغائب خلف الأرقام
              </h1>
              <p className="mt-5 max-w-3xl text-base leading-8 text-slate-600 sm:text-lg">
                رغم التحولات الاجتماعية والاقتصادية، لا تزال أمية المرأة واحدة من أكثر القضايا تعقيدًا وعمقًا، لأنها تمس التعليم والأسرة والصحة النفسية والاقتصاد معًا.
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
              <h2 className="mt-4 text-2xl font-black leading-tight">الأمية ليست رقمًا فقط</h2>
              <p className="mt-4 text-sm leading-7 text-slate-200">
                القضية تمتد من البيت إلى المدرسة إلى سوق العمل، وتؤثر على القدرة على اتخاذ القرار والاستقلال والكرامة.
              </p>
              <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
                <div className="rounded-2xl bg-white/10 p-4">
                  <div className="text-[11px] font-bold uppercase tracking-[0.2em] text-slate-300">المحاور</div>
                  <div className="mt-1 text-2xl font-black">{sections.length}</div>
                </div>
                <div className="rounded-2xl bg-white/10 p-4">
                  <div className="text-[11px] font-bold uppercase tracking-[0.2em] text-slate-300">التركيز</div>
                  <div className="mt-1 text-lg font-black">التمكين بالمعرفة</div>
                </div>
              </div>
            </aside>
          </div>
        </section>

        <section className="mt-8 grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <aside className="lg:sticky lg:top-6">
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
              question="هل تؤيدين ربط صرف الدعم النقدي الحكومي للأسر (مثل تكافل وكرامة) بالتزام الأمهات والفتيات بحضور فصول محو الأمية والتعليم؟"
              pollKey="mahw-el-omya"
              options={["نعم، أؤيد لربط الدعم بالتنمية", "لا، أفضّل توفير حوافز إيجابية طوعية"]}
            />


          </aside>

          <article className="space-y-6">
            <div className="rounded-[2rem] border border-slate-100 bg-white p-6 sm:p-8 shadow-sm">
              <p className="text-base leading-8 text-slate-700 sm:text-lg">
                فالأمية لا تحرم المرأة من التعليم فقط، بل تنعكس آثارها على الأسرة بأكملها، بدءًا من مستوى الأبناء الدراسي، وصولًا إلى قدرة الأسرة على تحسين وضعها المعيشي والخروج من دائرة الفقر.
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
                title="تقارير محو الأمية"
                clips={[
                  { title: "قصة ملهمة: أم لثلاثة أطفال تتعلم القراءة وتساعدهم في المذاكرة لأول مرة", dur: "٤:٥٠" },
                  { title: "ميداني: جولة في فصول النور بمحافظات الصعيد وإقبال السيدات الكثيف", dur: "٣:١٥" }
                ]}
              />

              <ExpertAdviceDesk
                qaList={[
                  { q: "كيف أستطيع التسجيل مجاناً في فصول محو الأمية التابعة للدولة؟", a: "يمكن التوجه لأقرب فرع للهيئة العامة لتعليم الكبار في منطقتكِ وتقديم صورة بطاقة الرقم القومي، حيث توفر الهيئة فصولاً مسائية مجانية بالكامل وبمواعيد مرنة تناسب ظروف السيدات المنزلية." },
                  { q: "أريد التطوع لتعليم السيدات القراءة والكتابة في قريتي، ما هي الإجراءات؟", a: "ترحب الهيئة العامة لتعليم الكبار والعديد من الجمعيات الأهلية بالمتطوعين، حيث يتم تقديم دورة تدريبية مبسطة لكِ على مناهج تعليم الكبار، وتوفير الكتب والمستلزمات الدراسية مجاناً لتوزيعها على الدارسات." }
                ]}
              />

              <InteractionsPanel articleId="mahw-el-omya" />
            </div>

            <section className="rounded-[2.25rem] bg-brand-ink p-8 text-white shadow-lg">
              <div className="text-xs font-bold uppercase tracking-[0.25em] text-brand-accent">الخلاصة</div>
              <h2 className="mt-3 text-2xl font-black sm:text-3xl">استثمار في أسرة أكثر استقرارًا</h2>
              <p className="mt-4 text-base leading-8 text-slate-200 sm:text-lg">
                في النهاية، يظل محو أمية المرأة أكثر من مجرد مشروع تعليمي… إنه استثمار في أسرة أكثر استقرارًا، ومجتمع أكثر وعيًا، ومستقبل أكثر عدالة.
              </p>
            </section>

            <InteractionsPanel articleId="mahw-el-omya" />
          </article>
        </section>
      </main>

      <Footer />
    </div>
  )
}
