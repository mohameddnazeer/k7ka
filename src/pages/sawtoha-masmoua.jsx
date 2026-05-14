import BackgroundSVG from '../components/BackgroundSVG'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'

export default function SawtohaMasmouaPage() {
    return (
        <div className="relative min-h-screen overflow-hidden bg-white" dir="rtl">
            <BackgroundSVG />
            <NavBar />
            <main className="relative z-10 mx-auto w-full max-w-5xl px-4 pb-16 sm:px-8">
                <article className="rounded-3xl border border-brand-purple/10 bg-white/90 p-6 shadow-xl shadow-brand-purple/5 backdrop-blur-sm sm:p-12">
                    <div className="mb-8 flex justify-center">
                        <span className="inline-block rounded-full bg-brand-pink/10 px-4 py-1.5 text-sm font-bold text-brand-pink">التحقيقات</span>
                    </div>
                    <h1 className="mb-8 text-center text-4xl font-black text-brand-purple sm:text-6xl tracking-tight">التحقيقات والميدان</h1>
                    <div className="prose prose-purple max-w-none">
                        <p className="text-xl leading-relaxed text-brand-textSecondary text-center font-medium">
                            إجراء تحقيقات ميدانية، توسيع شبكة المصادر، والاعتماد على الشهادات الحية وتجارب النساء الواقعية لإيصال أصواتهن بصدق وشفافية.
                        </p>
                    </div>
                    
                    <div className="mt-12 grid gap-6 sm:grid-cols-2">
                        <div className="rounded-2xl bg-brand-purple/5 p-6 border border-brand-purple/10">
                            <h3 className="text-xl font-bold text-brand-purple mb-3">الهدف الميداني</h3>
                            <p className="text-brand-textSecondary">الوصول إلى قصص حقيقية من الشارع المصري والعربي وتوثيقها بشكل مهني.</p>
                        </div>
                        <div className="rounded-2xl bg-brand-pink/5 p-6 border border-brand-pink/10">
                            <h3 className="text-xl font-bold text-brand-pink mb-3">صوت المرأة</h3>
                            <p className="text-brand-textSecondary">خلق مساحة آمنة للتعبير عن التحديات اليومية دون تنميط أو قيود.</p>
                        </div>
                    </div>
                </article>
            </main>
            <Footer />
        </div>
    )
}
