import BackgroundSVG from '../components/BackgroundSVG'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'

export default function AlaAlhameshPage() {
    return (
        <div className="relative min-h-screen overflow-hidden bg-brand-offwhite" dir="rtl">
            <BackgroundSVG />
            <NavBar />
            <main className="relative z-10 mx-auto w-full max-w-5xl px-4 pb-16 sm:px-8">
                <article className="glass-card p-6 sm:p-12">
                    <div className="mb-8 flex justify-center">
                        <span className="badge-soft">التقارير</span>
                    </div>
                    <h1 className="mb-8 text-center text-4xl font-black text-brand-ink sm:text-6xl tracking-tight">التقارير الصحفية</h1>
                    <div className="prose prose-purple max-w-none">
                        <p className="text-xl leading-relaxed text-brand-inkMuted text-center font-medium">
                            خمسة عشر تقريراً صحفياً يعالج قضايا المرأة بمهنية عالية، ويركز على التحديات الاجتماعية والاقتصادية التي تواجهها في حياتها اليومية.
                        </p>
                    </div>
                    
                    <div className="mt-12 grid gap-6 md:grid-cols-3">
                        <div className="rounded-2xl border border-brand-surface/70 bg-brand-surface p-6">
                            <div className="text-3xl font-black text-brand-ink mb-2">١٥</div>
                            <div className="text-sm font-bold text-brand-secondary">تقريراً معمقاً</div>
                        </div>
                        <div className="rounded-2xl border border-brand-surface/70 bg-brand-surface p-6">
                            <div className="text-3xl font-black text-brand-ink mb-2">تنوع</div>
                            <div className="text-sm font-bold text-brand-secondary">في القضايا المطروحة</div>
                        </div>
                        <div className="rounded-2xl border border-brand-surface/70 bg-brand-surface p-6">
                            <div className="text-3xl font-black text-brand-ink mb-2">مهنية</div>
                            <div className="text-sm font-bold text-brand-secondary">صحفية عالية</div>
                        </div>
                    </div>
                </article>
            </main>
            <Footer />
        </div>
    )
}
