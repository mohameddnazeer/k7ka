import { useState } from "react"
import { Link } from "react-router-dom"
import BackgroundSVG from "../components/BackgroundSVG"
import NavBar from "../components/NavBar"
import Footer from "../components/Footer"
import { TrendingTags } from "../components/Youm7Widgets"

const socialMediaTopics = [
    {
        id: 1,
        title: "التريندات القاتلة",
        category: "التحديات الرقمية",
        bgImage: "/imgs/carousel/Eradicating-female-illiteracy.jpeg",
        content: "كيف يتحول العالم الافتراضي والبحث عن الشهرة إلى فخ يهدد حياة المراهقات.. تحليل عميق لظاهرة التريندات القاتلة.",
        sectionsCount: 7
    },
    {
        id: 2,
        title: "إدمان الشوبينج الأونلاين",
        category: "التحديات الرقمية",
        bgImage: "/imgs/carousel/Women-obsession-with-beauty.jpeg",
        content: "بين ضغطة زر واحدة وهوس الشراء.. كيف تحول التسوق الإلكتروني من وسيلة لتلبية الاحتياجات إلى اعتماد نفسي يؤثر على حياة البنات المالية والنفسية؟",
        sectionsCount: 7
    }
]

const streetTopics = [
    {
        id: 3,
        title: "التحرش اللفظي وجرح الوجدان الخفي",
        category: "أمان الشارع",
        bgImage: "/imgs/carousel/suffering-of-women-on-public-transportation.jpeg",
        content: "تحقيق ميداني حول ظاهرة التحرش اللفظي في المساحات العامة والخاصة.. كيف يؤثر ذلك على شعور الفتيات بالأمان؟",
        sectionsCount: 15
    },
    {
        id: 4,
        title: "التصرف في الشارع دون مضايقة",
        category: "أمان الشارع",
        bgImage: "/imgs/carousel/First-year-of-motherhood.jpeg",
        content: "بين الزحام والكرامة… معاناة المرأة في وسائل المواصلات من حق التنقل إلى معركة يومية.",
        sectionsCount: 7
    }
]

const homeTopics = [
    {
        id: 5,
        title: "المرأه وزيرة مالية في بيتها",
        category: "ثقافة البيت والأسواق",
        bgImage: "/imgs/carousel/house-cleaning-routine.jpeg",
        content: "المرأة وزيرة مالية في بيتها: في قلب كل منزل، تلعب المرأة دورًا اقتصاديًا واجتماعيًا ونفسيًا لا يقل أهمية عن أي وظيفة رسمية، فهي وزيرة مالية في بيتها.",
        sectionsCount: 7
    },
    {
        id: 6,
        title: "فنون الديكور المنزلي كمرآة للذات",
        category: "ثقافة البيت والأسواق",
        bgImage: "/imgs/carousel/Women-obsession-with-beauty.jpeg",
        content: "عندما يصبح البيت مرآة للنفس وهوية للمرأة. أولًا: الديكور… لغة غير منطوقة تحكي عن المرأة.",
        sectionsCount: 7
    },
    {
        id: 7,
        title: "ثقافة الموبيليا واختيار الأثاث المستدام",
        category: "ثقافة البيت والأسواق",
        bgImage: "/imgs/carousel/Women-obsession-with-beauty.jpeg",
        content: "لأثاث… حين تتحول القطع إلى شركاء في الحياة اليومية. الأثاث ليس مجرد كراسي وطاولات، بل شريك يومي في تفاصيل حياة المرأة.",
        sectionsCount: 7
    }
]

export default function BaraAlkahkaPage() {
    const [activeSection, setActiveSection] = useState("all")

    const filteredTopics = [...socialMediaTopics, ...streetTopics, ...homeTopics].filter(topic => {
        if (activeSection === "all") return true
        if (activeSection === "digital") return topic.category === "التحديات الرقمية"
        if (activeSection === "street") return topic.category === "أمان الشارع"
        if (activeSection === "home") return topic.category === "ثقافة البيت والأسواق"
        return true
    })

    return (
        <div className="relative min-h-screen bg-slate-50 font-arabic overflow-x-hidden selection:bg-brand-secondary/20" dir="rtl">
            <BackgroundSVG />
            <NavBar />

            <main className="relative z-10 mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">

                <header className="relative z-10 pt-10 pb-12 text-center px-4 max-w-4xl mx-auto">
                    <span className="text-xs font-bold tracking-widest text-brand-accent uppercase bg-brand-accent/10 px-3 py-1 rounded-full mb-4 inline-block">
                        ملفات استقصائية خاصة
                    </span>
                    <h1 className="text-5xl sm:text-7xl font-black text-brand-ink tracking-tight mt-2 mb-6">
                        بره الكحكة
                    </h1>
                    <div className="mb-6 flex flex-col items-center justify-center gap-2">
                        <img
                            src="/imgs/11.jpeg"
                            alt="صورة الكاتبة"
                            className="w-60 h-60 rounded-full object-cover border-2 border-[#B572E8] shadow-xs"
                        />
                        <span className="text-2xl font-bold text-slate-700">
                            كتبت: عائشة حسين
                        </span>
                    </div>
                    <p className="text-lg sm:text-xl text-slate-600 leading-relaxed max-w-2xl mx-auto font-medium">
                        جولة واقعية وتحليلات ميدانية معمقة ترصد تداخلات العالم الافتراضي ومتاهات السوشيال ميديا وأخلاقيات الفضاء العام للشارع والبيت.
                    </p>
                </header>

                <TrendingTags tags={["بره_الكحكة", "التريندات_القاتلة", "التحرش_اللفظي", "أمان_الشارع", "إدمان_الشراء", "حقوق_المرأة"]} />

                <div className="grid grid-cols-1 gap-8 items-start my-12">
                    <div className="lg:col-span-2 space-y-6">
                        <div className="flex flex-wrap items-center justify-start gap-2">
                            {[
                                { id: "all", label: "جميع التحقيقات" },
                                { id: "digital", label: "التحديات الرقمية" },
                                { id: "street", label: "أمان الشارع" },
                                { id: "home", label: "البيت والأسواق" }
                            ].map((btn) => (
                                <button
                                    key={btn.id}
                                    onClick={() => setActiveSection(btn.id)}
                                    className={`rounded-xl px-5 py-2.5 text-xs font-black transition-all duration-300 outline-none border ${activeSection === btn.id
                                        ? "bg-brand-ink text-white border-brand-ink shadow-md shadow-brand-ink/10 scale-[1.02]"
                                        : "bg-white text-slate-600 border-slate-200/80 hover:bg-[#faf9f6] hover:text-brand-ink"
                                        }`}
                                >
                                    {btn.label}
                                </button>
                            ))}
                        </div>

                        <div className="grid gap-6 sm:grid-cols-2">
                            {filteredTopics.map((topic, index) => {
                                const isFeatured = index === 0 && filteredTopics.length > 1
                                return (
                                    <Link
                                        key={topic.id}
                                        to={`/bara-alkahka/${topic.id}`}
                                        className={`group relative rounded-2xl overflow-hidden border border-slate-200/70 bg-white transition-all duration-300 hover:shadow-md hover:border-slate-300/90 flex flex-col justify-between min-h-[240px] p-6 animate-fadeInUp opacity-0 ${isFeatured ? "sm:col-span-2" : "sm:col-span-1"
                                            }`}
                                        style={{ animationDelay: `${index * 100}ms`, animationFillMode: 'forwards' }}
                                    >
                                        {topic.bgImage && (
                                            <>
                                                <div className="absolute inset-0 z-0">
                                                    <img
                                                        src={topic.bgImage}
                                                        alt={topic.title}
                                                        className="w-full h-full object-cover grayscale opacity-15 transition-all duration-500 group-hover:scale-105 group-hover:opacity-20 group-hover:grayscale-0"
                                                    />
                                                </div>
                                                <div className="absolute inset-0 bg-gradient-to-t from-white via-white/90 to-white/40 z-0" />
                                            </>
                                        )}
                                        <div className="relative z-10 space-y-4">
                                            <span className="inline-block text-[10px] font-bold text-brand-secondary bg-brand-secondary/5 border border-brand-secondary/10 rounded-md px-2 py-0.5">
                                                {topic.category}
                                            </span>
                                            <h3 className="text-xl font-black text-brand-ink leading-snug group-hover:text-brand-secondary transition-colors duration-200">
                                                {topic.title}
                                            </h3>
                                            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-medium line-clamp-3">
                                                {topic.content}
                                            </p>
                                        </div>
                                        <div className="relative z-10 pt-4 flex items-center justify-end border-t border-slate-100 mt-4">
                                            <span className="inline-flex items-center gap-1 text-[11px] font-bold text-brand-ink group-hover:text-brand-secondary transition-colors">
                                                <span>{topic.sectionsCount > 0 ? "اقرئي التحقيق الكامل" : "استكشفي الملف"}
                                                </span>
                                                <svg viewBox="0 0 24 24" className="h-3 w-3 fill-none stroke-current transition-transform duration-200 group-hover:-translate-x-1" strokeWidth={3}><path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" /></svg>
                                            </span>
                                        </div>
                                    </Link>
                                )
                            })}
                        </div>
                    </div>
                </div>

            </main>

            <Footer />
        </div>
    )
}
