import BackgroundSVG from '../components/BackgroundSVG'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'

export default function BaraAlkahkaPage() {
    return (
        <div className="relative min-h-screen overflow-hidden bg-white" dir="rtl">
            <BackgroundSVG />
            <NavBar />
            <main className="relative z-10 mx-auto w-full max-w-5xl px-4 pb-16 sm:px-8">
                <article className="rounded-3xl border border-brand-purple/10 bg-white/90 p-6 shadow-xl shadow-brand-purple/5 backdrop-blur-sm sm:p-12">
                    <div className="mb-8 flex justify-center">
                        <span className="inline-block rounded-full bg-brand-pink/10 px-4 py-1.5 text-sm font-bold text-brand-pink">المستقبل</span>
                    </div>
                    <h1 className="mb-8 text-center text-4xl font-black text-brand-purple sm:text-6xl tracking-tight">الخطة المستقبلية</h1>
                    <div className="prose prose-purple max-w-none">
                        <p className="text-xl leading-relaxed text-brand-textSecondary text-center font-medium">
                            نسعى لتطوير خطة النشر، تعزيز التفاعل المجتمعي، وفتح قنوات تواصل مباشرة لاستقبال قضايا الجمهور وإشراك المتابعات في اقتراح الموضوعات.
                        </p>
                    </div>
                    
                    <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                        <div className="rounded-2xl border border-brand-purple/10 bg-white p-6 shadow-sm flex flex-col items-center text-center">
                            <div className="p-3 rounded-full bg-brand-purple/10 mb-4">
                                <svg className="h-6 w-6 text-brand-purple" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                                </svg>
                            </div>
                            <h4 className="font-bold text-brand-purple mb-2">تطوير النشر</h4>
                            <p className="text-sm text-brand-textSecondary">تحقيق التوازن بين المحتوى المقروء والمرئي.</p>
                        </div>
                        <div className="rounded-2xl border border-brand-purple/10 bg-white p-6 shadow-sm flex flex-col items-center text-center">
                            <div className="p-3 rounded-full bg-brand-pink/10 mb-4">
                                <svg className="h-6 w-6 text-brand-pink" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                                </svg>
                            </div>
                            <h4 className="font-bold text-brand-purple mb-2">قنوات تواصل</h4>
                            <p className="text-sm text-brand-textSecondary">فتح باب استقبال القصص والقضايا مباشرة.</p>
                        </div>
                        <div className="rounded-2xl border border-brand-purple/10 bg-white p-6 shadow-sm flex flex-col items-center text-center">
                            <div className="p-3 rounded-full bg-brand-blue/10 mb-4">
                                <svg className="h-6 w-6 text-brand-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                                </svg>
                            </div>
                            <h4 className="font-bold text-brand-purple mb-2">شراكات</h4>
                            <p className="text-sm text-brand-textSecondary">بروتوكولات تعاون مع مؤسسات نسائية وحقوقية.</p>
                        </div>
                    </div>
                </article>
            </main>
            <Footer />
        </div>
    )
}
