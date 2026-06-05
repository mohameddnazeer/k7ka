import BackgroundSVG from '../components/BackgroundSVG'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import InteractionsPanel from '../components/InteractionsPanel'
import { TrendingTags, InteractivePoll, DailyCaricature, VideoMediaGallery, ExpertAdviceDesk } from '../components/Youm7Widgets'

const sections = [
  {
    title: 'معايير الجمال الحديثة… كيف يصنعها المجتمع وتعيد النساء إنتاجها؟',
    text: 'في عصر تهيمن فيه الصور المصقولة ومقاطع الفيديو القصيرة، لم تعد معايير الجمال تتشكل بشكل طبيعي أو عفوي، بل أصبحت صناعة متكاملة تقودها وسائل الإعلام ومنصات التواصل الاجتماعي. ومع تكرار هذه الصور يوميًا، تدخل كثير من النساء في دوامة المقارنة المستمرة، فيبدأن بمحاولة تعديل ملامحهن أو تغيير أشكالهن لمجاراة النموذج السائد. الأخطر من ذلك أن النساء أنفسهن أصبحن يساهمن — أحيانًا دون وعي — في إعادة إنتاج هذه المعايير، عبر نشر الصور المعدلة بالفلاتر أو تمجيد الملامح المثالية.'
  },
  {
    title: 'وراء المرآة… الدوافع النفسية لهوس التجميل',
    text: 'فكثير من النساء يربطن بين المظهر الخارجي والشعور بالقبول أو الاستحقاق أو النجاح، خاصة في مجتمعات تمنح المرأة الجميلة اهتمامًا أكبر وفرصًا أوسع. وتلجأ بعض النساء إلى التجميل كوسيلة لتعويض نقص داخلي أو استعادة الثقة بالنفس بعد تجربة مؤلمة، مثل التعرض للتنمر أو الفشل العاطفي أو المقارنات المستمرة منذ الطفولة. ومع الانتشار الواسع للفلاتر الرقمية، تتسع الفجوة بين شكل المرأة الحقيقي والصورة المعدلة التي تعتاد رؤيتها على الشاشة.'
  },
  {
    title: 'التجميل كسلطة اجتماعية… ضغط المقارنة وتأثيره على العلاقات',
    text: 'لم يعد التجميل مجرد قرار شخصي، بل أصبح أداة تؤثر على مكانة المرأة داخل المجتمع وعلاقاتها المختلفة. فالمقارنات اليومية بين النساء — سواء في العمل أو الجامعة أو حتى داخل الأسرة — تجعل كثيرات يشعرن بأن عليهن الحفاظ على مستوى معين من الجمال حتى لا يشعرن بأنهن أقل من الأخريات. ويمتد هذا الضغط إلى العلاقات العاطفية أيضًا، إذ تشعر بعض النساء بأن الحفاظ على العلاقة مرتبط بالحفاظ على مظهر مثالي طوال الوقت.'
  },
  {
    title: 'صناعة كاملة خلف اللمعة… الاقتصاد الخفي لهوس التجميل',
    text: 'خلف مستحضرات التجميل اللامعة والإعلانات الجذابة، تقف صناعة اقتصادية ضخمة تُعد من أسرع الصناعات نموًا في العالم. فالجمال لم يعد مجرد مفهوم اجتماعي، بل أصبح سوقًا بمليارات الدولارات. وتعتمد هذه الصناعة على خلق شعور دائم لدى المرأة بأنها بحاجة إلى تحسين إضافي، سواء عبر التخلص من التجاعيد أو تفتيح البشرة أو تعديل شكل الأنف أو الشفاه. وكلما ظهرت صيحة جديدة في عالم الموضة والجمال، تتولد احتياجات جديدة تُغذي السوق وتزيد أرباح الشركات.'
  },
  {
    title: 'من العناية الصحية إلى الهوس… أين نضع الخط الفاصل؟',
    text: 'الاهتمام بالمظهر والعناية بالبشرة والشعر أمر طبيعي وصحي، لكنه قد يتحول تدريجيًا إلى هوس عندما تصبح المرأة غير قادرة على الشعور بالرضا عن نفسها مهما فعلت. فالمرأة التي تقضي ساعات طويلة يوميًا أمام المرآة، أو تشعر بالتوتر الشديد عند الخروج دون مكياج، أو تنفق مبالغ تفوق قدرتها المادية على إجراءات التجميل، قد تكون دخلت بالفعل في دائرة الهوس بالمظهر. وعندما يصبح شكل الوجه أو الجسد هو المصدر الأساسي للثقة بالنفس، تتحول المرأة إلى أسيرة لصورة مثالية يصعب الوصول إليها.'
  },
  {
    title: 'عمليات التجميل… بين الرغبة في التغيير ومخاطر الإدمان الجراحي',
    text: 'في السنوات الأخيرة، تحولت عمليات التجميل من إجراءات محدودة تُجرى لعلاج عيوب واضحة إلى ظاهرة واسعة الانتشار، تلجأ إليها بعض النساء بهدف الوصول إلى صورة مثالية مستوحاة من المشاهير والمؤثرات على مواقع التواصل الاجتماعي. ورغم أن بعض العمليات تمنح نتائج إيجابية وتحسن الحالة النفسية، فإن الخطر يظهر عندما تتحول الرغبة في التغيير إلى سلوك متكرر لا يتوقف. ويحذر أطباء التجميل من ما يُعرف بـ الإدمان الجراحي، وهو حالة نفسية تدفع الشخص إلى إجراء عمليات متتالية دون حاجة طبية واضحة.'
  },
  {
    title: 'أصوات مضادة… نساء اخترن التصالح مع أنفسهن',
    text: 'وسط هذا الضغط المستمر، ظهرت أصوات نسائية تحاول مقاومة ثقافة الكمال الشكلي والدعوة إلى قبول الذات بعيدًا عن المقارنات المستنزفة. ومن بين هذه الأصوات الفنانة أمينة خليل التي تحدثت في أكثر من لقاء صحفي عن الضغوط التي تعرضت لها بسبب شكلها، مؤكدة أنها اختارت التصالح مع ملامحها الطبيعية، ورفضت الدخول في سباق التغييرات المستمرة لإرضاء الآخرين. وعلى مواقع التواصل الاجتماعي، بدأت تظهر حملات تدعو إلى تقبل البشرة الطبيعية والجسد الحقيقي، في محاولة لمواجهة ثقافة المقارنة التي فرضتها الصور المعدلة والإعلانات التجارية.'
  },
  {
    title: 'السوشيال ميديا… المرآة التي لا ترحم',
    text: 'لعبت مواقع التواصل الاجتماعي دورًا محوريًا في تضخيم هوس التجميل، بعدما أصبحت المنصات الرقمية مساحة مفتوحة للمقارنة المستمرة. فالمرأة اليوم تتعرض يوميًا لعشرات الصور والفيديوهات التي تعرض وجوهًا مثالية وأجسادًا خالية من العيوب، دون أن تدرك أحيانًا أن كثيرًا من هذه الصور خضع لتعديلات تقنية وفلاتر رقمية معقدة. ومع تكرار التعرض لهذا المحتوى، يبدأ العقل في التعامل مع هذه الصور باعتبارها الشكل الطبيعي والمطلوب، ما يؤدي إلى انخفاض الرضا عن المظهر الحقيقي.'
  },
  {
    title: 'بين الحرية الشخصية وضغط المجتمع',
    text: 'رغم الانتقادات المتزايدة لظاهرة هوس التجميل، يرى البعض أن للمرأة الحق الكامل في الاهتمام بمظهرها أو إجراء ما تراه مناسبًا من تعديلات طالما كان القرار نابعًا من رغبتها الشخصية وليس من ضغط خارجي. لكن في عالم تُقاس فيه قيمة المرأة أحيانًا بمدى اقترابها من النموذج المثالي، يصبح من الصعب التمييز بين الرغبة الحقيقية والضغط غير المباشر. لذلك، يرى مختصون أن الحل لا يكمن في رفض التجميل بشكل كامل، بل في بناء وعي صحي يجعل المرأة قادرة على التمييز بين العناية بنفسها وبين الوقوع في دائرة الهوس والمقارنة المستمرة.'
  }
]

const stats = [
  { label: 'الزاوية', value: 'الضغط النفسي والاجتماعي' },
  { label: 'المحرك', value: 'المقارنة والمرآة' },
  { label: 'السوق', value: 'صناعة بمليارات' },
  { label: 'الهدف', value: 'تصالح لا مطاردة' }
]

export default function HousEltagmeelPage() {
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
        <TrendingTags tags={["هوس_التجميل", "عمليات_التجميل", "فلاتر_رقمية", "صناعة_الجمال", "الثقة_بالنفس", "التصالح_مع_الذات"]} />

        <section className="relative overflow-hidden rounded-[2.5rem] border border-slate-100 bg-white shadow-sm">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(178,201,255,0.22),transparent_30%),radial-gradient(circle_at_bottom_left,rgba(181,114,232,0.14),transparent_28%)]" />
          <div className="relative grid gap-10 p-8 sm:p-12 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
            <div className="text-right">
              <span className="inline-flex rounded-full bg-brand-accent/10 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.25em] text-brand-accent">
                تفكيك الصور النمطية
              </span>
              <h1 className="mt-5 text-4xl font-black tracking-tight text-brand-ink sm:text-5xl lg:text-6xl">
                هوس النساء بالتجميل… عندما تتحول المرآة إلى ساحة ضغط نفسي واجتماعي
              </h1>
              <p className="mt-5 max-w-3xl text-base leading-8 text-slate-600 sm:text-lg">
                هذا التحقيق يشرح كيف تتداخل الضغوط النفسية والاجتماعية والاقتصادية مع صناعة الجمال، وكيف تتحول العناية بالمظهر أحيانًا إلى سباق لا ينتهي نحو صورة مثالية يصعب الوصول إليها.
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
              <h2 className="mt-4 text-2xl font-black leading-tight">الجمال بين العناية والهوس</h2>
              <p className="mt-4 text-sm leading-7 text-slate-200">
                من الفلاتر الرقمية إلى عمليات التجميل، تتغير علاقة المرأة بصورة جسدها تحت ضغط صورة مثالية لا تتوقف عن التبدل.
              </p>
              <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
                <div className="rounded-2xl bg-white/10 p-4">
                  <div className="text-[11px] font-bold uppercase tracking-[0.2em] text-slate-300">المحاور</div>
                  <div className="mt-1 text-2xl font-black">{sections.length}</div>
                </div>
                <div className="rounded-2xl bg-white/10 p-4">
                  <div className="text-[11px] font-bold uppercase tracking-[0.2em] text-slate-300">التركيز</div>
                  <div className="mt-1 text-lg font-black">الثقة قبل التعديل</div>
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
              question="هل تشعرين أن منصات التواصل الاجتماعي وفلاتر الصور تؤثر سلباً على رضاكِ عن مظهركِ الطبيعي؟" 
              pollKey="hous-eltagmeel"
              options={["نعم، تزيد ضغط المقارنة", "لا، أثق بمظهري الطبيعي"]}
            />

            <DailyCaricature 
              caption="فلتر التجميل!" 
              desc="سعي مستمر وراء الفلاتر لتغيير الملامح التي صاغتها الطبيعة."
              emoji="💅🤳🎭"
            />
          </aside>

          <article className="space-y-6">
            <div className="rounded-[2rem] border border-slate-100 bg-white p-6 sm:p-8 shadow-sm">
              <p className="text-base leading-8 text-slate-700 sm:text-lg">
                لم يعد التجميل مجرد وسيلة للعناية بالمظهر أو تحسين الشكل الخارجي، بل تحوّل لدى كثير من النساء إلى ظاهرة معقدة تتشابك فيها مشاعر القلق والثقة بالنفس وتوقعات المجتمع. وبين جلسات مراكز التجميل، وعمليات التعديل الجراحي، وروتينات العناية الطويلة بالبشرة والشعر، تتزايد الأسئلة حول الأسباب الحقيقية وراء هذا السعي المستمر نحو الصورة المثالية.
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
                title="كواليس صناعة الجمال"
                clips={[
                  { title: "حوار خاص: أخصائي نفسي يكشف أسباب الإدمان الجراحي لعمليات التجميل وعلاجه", dur: "٧:٢٠" },
                  { title: "استطلاع ميداني: ما رأي الفتيات في الشارع المصري حول فلاتر السوشيال ميديا وتأثيرها؟", dur: "٤:٥٠" }
                ]}
              />

              <ExpertAdviceDesk 
                qaList={[
                  { q: "كيف أحمي ابنتي المراهقة من هوس المقارنة مع المؤثرات على إنستغرام وتيك توك؟", a: "عززي ثقتها بنفسها بتركيز المدح على إنجازاتها العقلية والرياضية، وتحدثي معها بصراحة حول كواليس الصور الرقمية واستخدام الإضاءة والفلاتر لتعديل المظهر الحقيقي." },
                  { q: "متى تعتبر الرغبة في التجميل مؤشراً على اضطراب نفسي كاضطراب تشوه الجسد؟", a: "عندما ينصب تركيز المرأة بالكامل ولساعات طويلة على عيب طفيف أو وهمي في مظهرها، مما يمنعها من عيش حياتها الاجتماعية والمهنية بشكل طبيعي، ويتكرر لجوؤها للعمليات التجميلية دون أي رضا." }
                ]}
              />
            </div>

            <section className="rounded-[2.25rem] bg-brand-ink p-8 text-white shadow-lg animate-fadeInUp opacity-0" style={{ animationDelay: `${(sections.length + 1) * 100}ms` }}>
              <div className="text-xs font-bold uppercase tracking-[0.25em] text-brand-accent">الخلاصة</div>
              <h2 className="mt-3 text-2xl font-black sm:text-3xl font-serif">الجمال الحقيقي ليس مطاردة الكمال</h2>
              <p className="mt-4 text-base leading-8 text-slate-200 sm:text-lg">
                التجميل قد يكون أحيانًا وسيلة طبيعية للعناية بالنفس أو استعادة الثقة، لكن المشكلة تبدأ عندما يتحول إلى مصدر دائم للقلق وعدم الرضا، أو عندما تصبح قيمة المرأة مرتبطة بشكلها الخارجي فقط. الحل لا يكمن في رفض التجميل بالكامل، بل في بناء وعي صحي يجعل المرأة قادرة على التمييز بين العناية بنفسها وبين الوقوع في دائرة الهوس.
              </p>
            </section>

            <InteractionsPanel articleId="hous-eltagmeel" />
          </article>
        </section>
      </main>

      <Footer />
    </div>
  )
}
