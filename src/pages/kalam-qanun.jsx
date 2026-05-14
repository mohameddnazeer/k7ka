import BackgroundSVG from '../components/BackgroundSVG'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'

export default function KalamQanunPage() {
    return (
        <div className="relative min-h-screen overflow-hidden bg-white" dir="rtl">
            <BackgroundSVG />
            <NavBar />
            <main className="relative z-10 mx-auto w-full max-w-5xl px-4 pb-16 sm:px-8">
                <article className="rounded-3xl border border-brand-purple/10 bg-white/90 p-6 shadow-xl shadow-brand-purple/5 backdrop-blur-sm sm:p-12">
                    <div className="mb-8 flex justify-center">
                        <span className="inline-block rounded-full bg-brand-pink/10 px-4 py-1.5 text-sm font-bold text-brand-pink">قانوني</span>
                    </div>
                    <h1 className="mb-8 text-center text-4xl font-black text-brand-purple sm:text-6xl tracking-tight">كلام قانون</h1>
                    <div className="prose prose-purple max-w-none">
                        <p className="text-xl leading-relaxed text-brand-textSecondary text-center font-medium">
                            دعم تمكين المرأة إعلامياً وقانونياً وتعزيز الوعي بحقوقها. نقدم تبسيطاً للمفاهيم القانونية بلغة واضحة ومهنية بالتعاون مع خبراء قانونيين.
                        </p>
                    </div>
                    
                    <div className="mt-12 rounded-2xl bg-brand-purple/5 p-8 border border-brand-purple/10">
                        <h3 className="text-2xl font-bold text-brand-purple mb-4 text-center">بروتوكول تعاون</h3>
                        <p className="text-brand-textSecondary text-center text-lg">
                            نفخر بوجود بروتوكول تعاون مع **مؤسسة قضايا المرأة المصرية** لتقديم الدعم القانوني والمعلوماتي الدقيق.
                        </p>
                    </div>
                </article>
            </main>
            <Footer />
        </div>
    )
}
