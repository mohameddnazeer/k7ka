import { useEffect } from 'react'
import BackgroundSVG from '../components/BackgroundSVG'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import InteractionsPanel from '../components/InteractionsPanel'
import { TrendingTags, InteractivePoll, DailyCaricature, VideoMediaGallery, ExpertAdviceDesk } from '../components/Youm7Widgets'

const sections = [
  {
    title: 'من حق التنقل إلى معركة يومية لا تنتهي',
    text: 'تبدأ رحلة المرأة اليومية في كثير من المدن المصرية بخطوة بسيطة نحو وسيلة المواصلات، لكنها خطوة تحمل خلفها الكثير من التحديات. فبين السعي إلى العمل أو الدراسة أو قضاء الاحتياجات الأساسية، تتحول لحظات التنقل إلى مساحة مشحونة بالتوتر، تختلط فيها الحاجة بالقلق، والحق في الحركة بالخوف من التجربة نفسها. ورغم أن التنقل حق إنساني أصيل، فإن واقع وسائل المواصلات يكشف عن مشهد أكثر تعقيدًا، حيث الزحام الشديد لا يخلق فقط صعوبة في الحركة، بل أحيانًا بيئة تسمح بتجاوزات تمس خصوصية المرأة وكرامتها.'
  },
  {
    title: 'الزحام ليس مبررًا',
    text: 'في ساعات الذروة، تتكدس وسائل النقل العام بشكل يجعل الحركة شبه مستحيلة. لكن داخل هذا الازدحام، تظهر ممارسات تتجاوز حدود المقبول، تبدأ من التلاصق غير المبرر، وصولًا إلى سلوكيات تمثل انتهاكًا مباشرًا للخصوصية الشخصية. وتشير الدكتورة هبة عيسوي إلى أن الشعور بالخوف أو الانزعاج أو فقدان الأمان داخل مساحة عامة يُعد شكلًا من أشكال الضغط النفسي غير المباشر، خاصة عندما يتكرر دون قدرة الضحية على الانسحاب أو الاعتراض.'
  },
  {
    title: 'صمت إجباري: لماذا لا تشتبك النساء مع الموقف؟',
    text: 'رغم تكرار التجارب السلبية، فإن كثيرًا من النساء يفضلن الصمت وعدم المواجهة. هذا الصمت لا يعكس قبولًا، بقدر ما يعكس حسابات معقدة تتعلق بالخوف من التصعيد أو فقدان الأمان أو حتى تعطيل الحياة اليومية. وتوضح هبة عيسوي أن التعرض المتكرر لمواقف مزعجة دون دعم اجتماعي أو قانوني قد يؤدي إلى ما يشبه التطبيع القسري مع القلق، حيث تبدأ المرأة في تعديل سلوكها اليومي لتجنب المواقف بدلًا من مواجهتها.'
  },
  {
    title: 'السلوكيات المهينة: من التلامس إلى الوصاية الاجتماعية',
    text: 'لا تقف الإشكالية عند حدود الزحام الجسدي، بل تمتد إلى سلوكيات أخرى مثل التعليقات غير المرغوبة، أو التدخل في المظهر، أو إطلاق أحكام اجتماعية على النساء داخل المواصلات. وترى الدكتورة هالة يسري أن هذه السلوكيات تعكس بنية ثقافية ترى المرأة باعتبارها موضوعًا عامًا للنقاش أو التقييم، خصوصًا في الأماكن التي تقل فيها الرقابة الاجتماعية المباشرة.'
  },
  {
    title: 'النقل العام مرآة المجتمع',
    text: 'وسائل المواصلات ليست مجرد وسيلة انتقال، بل هي مساحة تعكس طبيعة المجتمع وسلوكياته اليومية. فعندما يتحول الانتهاك إلى أمر يُتجاوز عنه، أو يُبرر بأنه نتيجة الزحام، فإن ذلك يشير إلى خلل في منظومة القيم العامة. وتشير تقارير المجلس القومي للمرأة إلى أن العنف والمضايقات في الأماكن العامة لا تزال من أبرز التحديات التي تؤثر على مشاركة المرأة في الحياة اليومية.'
  },
  {
    title: 'التكلفة النفسية الخفية',
    text: 'الآثار النفسية لهذه التجارب لا تنتهي عند لحظة حدوثها، بل تمتد إلى ما بعدها. فبعض النساء يبدأن في تغيير أنماط حياتهن بالكامل: اختيار وسائل أكثر تكلفة، تجنب أوقات الذروة، أو حتى رفض فرص عمل أو دراسة بسبب صعوبة التنقل. وتوضح هبة عيسوي أن هذا النمط من الضغط المتكرر قد يؤدي إلى اضطرابات قلق مزمنة، ويؤثر على الإحساس العام بالأمان في الأماكن العامة.'
  },
  {
    title: 'خسائر اقتصادية غير مرئية',
    text: 'يرى خبير الاقتصاد الدكتور محمد الشوادفي أن انعدام الأمان داخل وسائل المواصلات لا ينعكس فقط على الأفراد، بل يمتد أثره إلى الاقتصاد ككل. فعندما تتراجع قدرة المرأة على التنقل بحرية، تتأثر مشاركتها في سوق العمل، ويحدث نوع من الخسارة غير المباشرة في الإنتاجية. ويشير إلى أن أي بيئة تحد من حركة نصف المجتمع تقريبًا، هي بيئة تخسر جزءًا من طاقتها الاقتصادية والتنموية دون أن تلاحظ ذلك بشكل مباشر.'
  },
  {
    title: 'مسؤولية مشتركة لا تقبل التجزئة',
    text: 'تنص القوانين، وعلى رأسها قانون العقوبات المصري، على تجريم السلوكيات التي تمس حرية وكرامة الأفراد في الأماكن العامة. لكن التطبيق وحده لا يكفي دون وعي مجتمعي داعم. وتؤكد تقارير UN Women أن تحسين بيئة النقل الآمن للنساء يرتبط مباشرة بزيادة مشاركتهن في التعليم والعمل والتنمية.'
  }
]

const stats = [
  { label: 'الحق', value: 'التنقل الآمن' },
  { label: 'المشكلة', value: 'الزحام والوصاية' },
  { label: 'الأثر', value: 'نفسي واقتصادي' },
  { label: 'الحل', value: 'وعي وقانون واحترام' }
]

export default function BaynAlZahmWalkaramaPage() {
    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'instant' });
    }, []);

  const scrollToSection = (index) => {
    const element = document.getElementById(`section-${index}`)
    if (!element) return
    element.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <div className="relative min-h-screen overflow-hidden bg-slate-50 text-slate-800" dir="rtl">
      <BackgroundSVG />
      <NavBar />

      <main className="relative z-10 mx-auto w-full max-w-7xl px-4 pb-24 pt-12 sm:px-8">
        <TrendingTags tags={["الزحام_والكرامة", "أمان_المواصلات", "الفضاء_العام", "كفاية_تحرش", "حق_التنقل", "المجلس_القومي_للمرأة"]} />
        <section className="relative overflow-hidden rounded-[2.5rem] border border-slate-100 bg-white shadow-sm">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(178,201,255,0.22),transparent_30%),radial-gradient(circle_at_bottom_left,rgba(181,114,232,0.14),transparent_28%)]" />
          <div className="relative grid gap-10 p-8 sm:p-12 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
            <div className="text-right">
              <span className="inline-flex rounded-full bg-brand-accent/10 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.25em] text-brand-accent">
                الفضاء العام والآمن
              </span>
              <h1 className="mt-5 text-4xl font-black tracking-tight text-brand-ink sm:text-5xl lg:text-6xl">
                بين الزحام والكرامة… معاناة المرأة في وسائل المواصلات
              </h1>
              <p className="mt-5 max-w-3xl text-base leading-8 text-slate-600 sm:text-lg">
                هذا التحقيق يرصد أبعاد الظاهرة، من خلال شهادات خبراء وتحليل اجتماعي ونفسي واقتصادي، ليكشف أن ما يحدث داخل المواصلات ليس مجرد “زحام”، بل انعكاس لمشكلة أعمق في الثقافة والسلوك العام.
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
              <h2 className="mt-4 text-2xl font-black leading-tight">التنقل حين يفقد معناه الآمن</h2>
              <p className="mt-4 text-sm leading-7 text-slate-200">
                هذه المادة تتابع كيف تتحول وسيلة النقل من حق يومي بديهي إلى اختبار متكرر للصبر والكرامة، وما الذي يمكن تغييره حتى تعود المواصلات مساحة آمنة للجميع.
              </p>
              <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
                <div className="rounded-2xl bg-white/10 p-4">
                  <div className="text-[11px] font-bold uppercase tracking-[0.2em] text-slate-300">المحاور</div>
                  <div className="mt-1 text-2xl font-black">{sections.length}</div>
                </div>
                <div className="rounded-2xl bg-white/10 p-4">
                  <div className="text-[11px] font-bold uppercase tracking-[0.2em] text-slate-300">التركيز</div>
                  <div className="mt-1 text-lg font-black">الكرامة في الفضاء العام</div>
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
                    className="block w-full rounded-2xl border border-slate-100 bg-slate-50 px-4 py-3 text-right text-sm font-bold text-brand-inkMuted transition hover:border-brand-accent hover:bg-brand-accent hover:text-white"
                  >
                    <span className="block text-[11px] uppercase tracking-[0.2em] opacity-60">{String(index + 1).padStart(2, '0')}</span>
                    <span className="block mt-1 leading-6">{section.title}</span>
                  </button>
                ))}
              </div>
            </div>

            <InteractivePoll
              question="هل تؤيدين تخصيص عربات أو وسائل نقل عامة (أتوبيسات) حصرية بالكامل للنساء والفتيات كحل فوري لمواجهة الزحام والمضايقات؟"
              pollKey="bayn-alzahm-walkarama"
              options={["نعم، أؤيد بشدة", "لا، أرى الرقابة والتثقيف كحل أفضل"]}
            />

            <DailyCaricature
              caption="الكرامة داخل المترو"
              desc="بين حلم الوصول بسلام وبين واقع التدافع والزحام اليومي."
              emoji="🚇🚶‍♀️"
            />
          </aside>

          <article className="space-y-6">
            <div className="rounded-[2rem] border border-slate-100 bg-white p-6 sm:p-8 shadow-sm">
              <p className="text-base leading-8 text-slate-700 sm:text-lg">
                بين الزحام اليومي وصمت التجارب المتكررة، تبقى معاناة المرأة في وسائل المواصلات قضية مفتوحة على أكثر من سؤال: هل يمكن أن تتحول المواصلات من مساحة توتر إلى مساحة أمان؟ وهل يصبح التنقل حقًا مضمونًا لا اختبارًا يوميًا للصبر؟
              </p>
            </div>

            {sections.map((section, index) => (
              <section key={section.title} id={`section-${index}`} className="scroll-mt-24 rounded-[2rem] border border-slate-100 bg-white p-6 sm:p-8 shadow-sm">
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
              <h2 className="mt-3 text-2xl font-black sm:text-3xl">الإجابة ليست في الشارع وحده</h2>
              <p className="mt-4 text-base leading-8 text-slate-200 sm:text-lg">
                الإجابة ليست في الشارع وحده، بل في الوعي، والقانون، وإعادة تعريف مفهوم الاحترام داخل الفضاء العام. لأن التنقل الحقيقي لا يكتمل إلا عندما يكون آمنًا، لا مجرد متاح.
              </p>
            </section>


          </article>
        </section>
      </main>

      <Footer />
    </div>
  )
}
