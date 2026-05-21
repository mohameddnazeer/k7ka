import BackgroundSVG from '../components/BackgroundSVG'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'

export default function SawtohaMasmouaPage() {
    return (
        <div className="relative min-h-screen overflow-hidden bg-brand-offwhite" dir="rtl">
            <BackgroundSVG />
            <NavBar />
            <main className="relative z-10 mx-auto w-full max-w-5xl px-4 pb-16 sm:px-8">
                <article className="glass-card p-6 sm:p-12">
                    <div className="mb-8 flex justify-center">
                        <span className="badge-soft">التحقيقات</span>
                    </div>
                    <h1 className="mb-8 text-center text-4xl font-black text-brand-ink sm:text-6xl tracking-tight">التحقيقات والميدان</h1>
                    <div className="prose prose-purple max-w-none">
                        <p className="text-xl leading-relaxed text-brand-inkMuted text-center font-medium">
                            إجراء تحقيقات ميدانية، توسيع شبكة المصادر، والاعتماد على الشهادات الحية وتجارب النساء الواقعية لإيصال أصواتهن بصدق وشفافية.
                        </p>
                    </div>
                    
                    <div className="mt-12 grid gap-6 sm:grid-cols-2">
                        <div className="rounded-2xl bg-brand-surface p-6 border border-brand-surface/70">
                            <h3 className="text-xl font-bold text-brand-ink mb-3">الهدف الميداني</h3>
                            <p className="text-brand-inkMuted">الوصول إلى قصص حقيقية من الشارع المصري والعربي وتوثيقها بشكل مهني.</p>
                        </div>
                        <div className="rounded-2xl bg-brand-surface p-6 border border-brand-surface/70">
                            <h3 className="text-xl font-bold text-brand-ink mb-3">صوت المرأة</h3>
                            <p className="text-brand-inkMuted">خلق مساحة آمنة للتعبير عن التحديات اليومية دون تنميط أو قيود.</p>
                        </div>
                    </div>
                </article>
            </main>
            <Footer />
        </div>
    )
}
