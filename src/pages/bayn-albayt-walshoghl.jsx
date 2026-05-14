import BackgroundSVG from '../components/BackgroundSVG'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'

export default function BaynAlbaytWalshoghlPage() {
    return (
        <div className="relative min-h-screen overflow-hidden bg-brand-offwhite bg-hero-radial" dir="rtl">
            <BackgroundSVG />
            <NavBar />
            <main className="relative z-10 mx-auto w-full  px-4 pb-16 sm:px-8">
                <article className="rounded-3xl border border-brand-brown/10 bg-white/85 p-6 shadow-card backdrop-blur sm:p-10">
                    <h1 className="mb-5 text-center text-4xl font-extrabold text-brand-brown sm:text-5xl">بين البيت والشغل</h1>
                    <p className="text-lg leading-9 text-brand-textSecondary">
                        مساحة تناقش يوميات المرأة بين متطلبات المنزل وضغط العمل. نعرض حلولًا عملية، وتوازنات
                        واقعية، وتجارب تساعد على إدارة الوقت والطاقة بشكل أذكى.
                    </p>
                </article>
            </main>
            <Footer />
        </div>
    )
}
