import BackgroundSVG from '../components/BackgroundSVG'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'

export default function HikayatSettatPage() {
    return (
        <div className="relative min-h-screen overflow-hidden bg-white" dir="rtl">
            <BackgroundSVG />
            <NavBar />
            <main className="relative z-10 mx-auto w-full max-w-5xl px-4 pb-16 sm:px-8">
                <article className="rounded-3xl border border-brand-purple/10 bg-white/90 p-6 shadow-xl shadow-brand-purple/5 backdrop-blur-sm sm:p-12">
                    <div className="mb-8 flex justify-center">
                        <span className="inline-block rounded-full bg-brand-pink/10 px-4 py-1.5 text-sm font-bold text-brand-pink">الحوارات</span>
                    </div>
                    <h1 className="mb-8 text-center text-4xl font-black text-brand-purple sm:text-6xl tracking-tight">حوارات كحكة</h1>
                    <div className="prose prose-purple max-w-none">
                        <p className="text-xl leading-relaxed text-brand-textSecondary text-center font-medium">
                            خمسة حوارات معمقة تعبر عن صوت المرأة بعيداً عن التنميط، وترسم ملامح القوة والتحدي في حياة النساء المصريات والعربيات.
                        </p>
                    </div>
                    
                    <div className="mt-12 space-y-4">
                        {[1, 2, 3, 4, 5].map((i) => (
                            <div key={i} className="flex items-center gap-4 rounded-2xl border border-brand-purple/5 bg-brand-purple/5 p-4 transition hover:bg-brand-purple/10">
                                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-brand-purple text-white font-bold">{i}</div>
                                <div className="text-brand-purple font-bold">حوار خاص حول قضايا التمكين والوعي المجتمعي</div>
                            </div>
                        ))}
                    </div>
                </article>
            </main>
            <Footer />
        </div>
    )
}
