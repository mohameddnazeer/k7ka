import BackgroundSVG from '../components/BackgroundSVG'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'

export default function GowaAlkahkaPage() {
    return (
        <div className="relative min-h-screen overflow-hidden bg-white" dir="rtl">
            <BackgroundSVG />
            <NavBar />
            <main className="relative z-10 mx-auto w-full max-w-5xl px-4 pb-16 sm:px-8">
                <article className="rounded-3xl border border-brand-purple/10 bg-white/90 p-6 shadow-xl shadow-brand-purple/5 backdrop-blur-sm sm:p-12">
                    <div className="mb-8 flex justify-center">
                        <span className="inline-block rounded-full bg-brand-pink/10 px-4 py-1.5 text-sm font-bold text-brand-pink">بودكاست</span>
                    </div>
                    <h1 className="mb-8 text-center text-4xl font-black text-brand-purple sm:text-6xl tracking-tight">بودكاست كحكة</h1>
                    <div className="prose prose-purple max-w-none">
                        <p className="text-xl leading-relaxed text-brand-textSecondary text-center font-medium">
                            مساحة صوتية لاستقبال قضايا الجمهور وإشراك المتابعات في اقتراح الموضوعات. نناقش المشاعر, الضغوط، والطموحات بكل حرية.
                        </p>
                    </div>
                    
                    <div className="mt-12 flex justify-center">
                        <div className="w-full max-w-md rounded-2xl bg-gradient-to-br from-brand-purple to-brand-pink p-1">
                            <div className="rounded-[15px] bg-white p-8 text-center">
                                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-brand-purple/10">
                                    <svg className="h-8 w-8 text-brand-purple" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M7 4a3 3 0 016 0v4a3 3 0 11-6 0V4zm4 10.93A7.001 7.001 0 0017 8a1 1 0 10-2 0A5 5 0 015 8a1 1 0 00-2 0 7.001 7.001 0 006 6.93V17H6a1 1 0 100 2h8a1 1 0 100-2h-3v-2.07z" />
                                    </svg>
                                </div>
                                <h3 className="text-xl font-bold text-brand-purple">قريباً..</h3>
                                <p className="text-brand-textSecondary mt-2">انتظروا أولى حلقاتنا الصوتية قريباً على جميع المنصات.</p>
                            </div>
                        </div>
                    </div>
                </article>
            </main>
            <Footer />
        </div>
    )
}
