import BackgroundSVG from '../components/BackgroundSVG'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'

export default function HikayatSettatPage() {
    return (
        <div className="relative min-h-screen overflow-hidden bg-brand-offwhite" dir="rtl">
            <BackgroundSVG />
            <NavBar />
            <main className="relative z-10 mx-auto w-full max-w-5xl px-4 pb-16 sm:px-8">
                <article className="glass-card p-6 sm:p-12">
                    <div className="mb-8 flex justify-center">
                        <span className="badge-soft">الحوارات</span>
                    </div>
                    <h1 className="mb-8 text-center text-4xl font-black text-brand-ink sm:text-6xl tracking-tight">حوارات كحكة</h1>
                    <div className="prose prose-purple max-w-none">
                        <p className="text-xl leading-relaxed text-brand-inkMuted text-center font-medium">
                            خمسة حوارات معمقة تعبر عن صوت المرأة بعيداً عن التنميط، وترسم ملامح القوة والتحدي في حياة النساء المصريات والعربيات.
                        </p>
                    </div>
                    
                    <div className="mt-12 space-y-4">
                        {[1, 2, 3, 4, 5].map((i) => (
                            <div key={i} className="flex items-center gap-4 rounded-2xl border border-brand-surface/70 bg-brand-surface p-4 transition hover:bg-brand-surface/90">
                                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-brand-secondary text-white font-bold">{i}</div>
                                <div className="text-brand-ink font-bold">حوار خاص حول قضايا التمكين والوعي المجتمعي</div>
                            </div>
                        ))}
                    </div>
                </article>
            </main>
            <Footer />
        </div>
    )
}
