import { useState, useEffect } from 'react'
import BackgroundSVG from '../components/BackgroundSVG'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'

const articles = [
    {
        id: 1,
        title: "السوشيال ميديا: هل أصبحت سجناً غير مرئي؟",
        category: "التأثير الخارجي",
        content: "تحقيق حول كيف غيرت المنصات الرقمية معايير الجمال، النجاح، وحتى أسلوب التعبير عن الحزن لدى الفتيات في مصر.",
        fullContent: [
            {
                heading: "هوس الفلتر والمثالية",
                text: "لم يعد الفلتر مجرد أداة للتسلية، بل أصبح معياراً يقاس عليه الجمال الحقيقي، مما خلق فجوة نفسية بين المرآة والشاشة."
            },
            {
                heading: "الاستهلاك العاطفي المستمر",
                text: "متابعة حياة الآخرين المثالية على مدار الساعة تضع الفتاة في دوامة من المقارنة الاجتماعية التي لا تنتهي."
            }
        ],
        image: "/imgs/6.png"
    },
    {
        id: 2,
        title: "إتيكيت التعامل مع 'كلام الناس'",
        category: "المجتمع",
        content: "دليل عملي للتعامل مع الفضول الاجتماعي والتعليقات غير المرغوب فيها من الأقارب والجيران دون خسارة الرقي.",
        fullContent: [
            {
                heading: "حدود الخصوصية",
                text: "كيف تضعين حدوداً واضحة للأسئلة الشخصية دون الدخول في صراعات عدائية."
            },
            {
                heading: "فن التجاهل الذكي",
                text: "تحويل التركيز من رأي الآخرين إلى الرؤية الشخصية للحياة والأهداف."
            }
        ],
        image: "/imgs/4.png"
    }
]

export default function BaraAlkahkaPage() {
    const [selectedArticle, setSelectedArticle] = useState(null)

    useEffect(() => {
        if (selectedArticle) {
            document.body.style.overflow = 'hidden'
        } else {
            document.body.style.overflow = 'unset'
        }
        return () => {
            document.body.style.overflow = 'unset'
        }
    }, [selectedArticle])

    return (
        <div className="relative min-h-screen overflow-hidden bg-brand-offwhite" dir="rtl">
            <BackgroundSVG />
            <NavBar />
            
            <main className="relative z-10 mx-auto w-full max-w-7xl px-4 pb-24 sm:px-6 lg:px-8">
                {/* Header Section */}
                <div className="mb-16 text-center">
                    <span className="inline-block rounded-full bg-brand-orange/10 px-4 py-1.5 text-sm font-bold text-brand-orange mb-4">
                        بره الكحكة
                    </span>
                    <h1 className="text-4xl font-black text-brand-brown sm:text-6xl mb-6">
                        المجتمع والتأثير الخارجي
                    </h1>
                    <p className="mx-auto max-w-2xl text-lg text-brand-brown/70 font-medium">
                        عالم واسع من التأثيرات الخارجية، من السوشيال ميديا إلى العادات والتقاليد، وكيف نتفاعل معها بوعي.
                    </p>
                </div>

                {/* Articles Grid */}
                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {articles.map((article) => (
                        <article 
                            key={article.id}
                            className="group flex flex-col overflow-hidden rounded-3xl border border-brand-brown/10 bg-white shadow-sm transition-all hover:-translate-y-1 hover:shadow-xl hover:shadow-brand-brown/5"
                        >
                            <div className="relative aspect-[16/10] overflow-hidden">
                                <img 
                                    src={article.image} 
                                    alt={article.title}
                                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                                <div className="absolute top-4 right-4">
                                    <span className="rounded-full bg-white/90 backdrop-blur-sm px-3 py-1 text-xs font-bold text-brand-brown shadow-sm border border-brand-brown/5">
                                        {article.category}
                                    </span>
                                </div>
                            </div>
                            
                            <div className="flex flex-1 flex-col p-6">
                                <h2 className="mb-4 text-xl font-black text-brand-brown leading-tight transition-colors group-hover:text-brand-orange">
                                    {article.title}
                                </h2>
                                <p className="mb-6 line-clamp-3 text-sm leading-relaxed text-brand-brown/60 font-medium">
                                    {article.content}
                                </p>
                                <div className="mt-auto flex items-center justify-between">
                                    <button 
                                        onClick={() => setSelectedArticle(article)}
                                        className="inline-flex items-center gap-2 text-sm font-bold text-brand-orange transition hover:gap-3"
                                    >
                                        إقرئي المزيد
                                        <svg className="h-4 w-4 rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        </article>
                    ))}
                </div>

                {/* Article Modal */}
                {selectedArticle && (
                    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
                        <div 
                            className="absolute inset-0 bg-brand-brown/40 backdrop-blur-md"
                            onClick={() => setSelectedArticle(null)}
                        ></div>
                        <div className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-[2.5rem] bg-white p-6 shadow-2xl sm:p-12 no-scrollbar">
                            <button 
                                onClick={() => setSelectedArticle(null)}
                                className="absolute top-6 left-6 rounded-full bg-brand-offwhite p-2 text-brand-brown transition hover:bg-brand-orange hover:text-white"
                            >
                                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>

                            <div className="mb-8 text-right">
                                <span className="inline-block rounded-full bg-brand-orange/10 px-4 py-1 text-sm font-bold text-brand-orange mb-4">
                                    {selectedArticle.category}
                                </span>
                                <h2 className="text-3xl font-black text-brand-brown sm:text-5xl mb-6 leading-tight">
                                    {selectedArticle.title}
                                </h2>
                                <img 
                                    src={selectedArticle.image} 
                                    alt={selectedArticle.title} 
                                    className="w-full h-[300px] sm:h-[400px] object-cover rounded-[2rem] mb-8"
                                />
                                <p className="text-xl text-brand-brown/80 font-medium leading-relaxed mb-12">
                                    {selectedArticle.content}
                                </p>

                                <div className="space-y-12">
                                    {selectedArticle.fullContent?.map((section, idx) => (
                                        <div key={idx} className="border-r-4 border-brand-orange pr-6 text-right">
                                            <h3 className="text-2xl font-black text-brand-brown mb-4">{section.heading}</h3>
                                            <p className="text-lg text-brand-brown/70 leading-relaxed font-medium">
                                                {section.text}
                                            </p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                {/* Future Roadmap Section */}
                <section className="mt-24 rounded-[3rem] bg-brand-brown p-8 text-white sm:p-20 relative overflow-hidden">
                    <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-4xl font-black mb-6 leading-tight">الخطة المستقبلية</h2>
                            <p className="text-xl text-white/70 font-medium leading-relaxed mb-8">
                                نسعى لتطوير خطة النشر، تعزيز التفاعل المجتمعي، وفتح قنوات تواصل مباشرة لاستقبال قضايا الجمهور.
                            </p>
                            <div className="space-y-4">
                                {[
                                    { title: "تطوير النشر", desc: "التوازن بين المحتوى المقروء والمرئي" },
                                    { title: "قنوات تواصل", desc: "فتح باب استقبال القصص مباشرة" },
                                    { title: "شراكات مجتمعية", desc: "تعاون مع مؤسسات نسائية وحقوقية" }
                                ].map((item, i) => (
                                    <div key={i} className="flex gap-4 items-start">
                                        <div className="w-6 h-6 rounded-full bg-brand-orange flex-shrink-0 mt-1"></div>
                                        <div>
                                            <h4 className="font-bold text-lg">{item.title}</h4>
                                            <p className="text-white/60 text-sm">{item.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="bg-white/5 rounded-3xl p-8 backdrop-blur-sm border border-white/10">
                            <h3 className="text-2xl font-black mb-4">شاركينا رؤيتك</h3>
                            <p className="text-white/70 mb-6">ما هي المواضيع التي ترغبين في رؤيتها في "بره الكحكة"؟</p>
                            <div className="flex gap-2">
                                <input type="text" placeholder="اكتبي موضوعاً..." className="flex-1 bg-white/10 rounded-full px-6 py-3 border border-white/20 focus:outline-none focus:border-brand-orange transition-colors" />
                                <button className="bg-brand-orange px-8 py-3 rounded-full font-bold hover:bg-brand-orange/90 transition-colors">إرسال</button>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    )
}
