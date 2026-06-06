import { useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function AlaAlhameshSection({ articles, openArticleDetails }) {
    useEffect(()=>{
        window.scrollTo({ top: 0, behavior: 'instant' });        
    },[])

    return (
        <section className="space-y-6">
            <div className="flex items-center justify-between border-b border-gray-300 pb-3">
                <div className="flex items-center gap-2">
                    <span className="w-4 h-4 bg-slate-800 block"></span>
                    <h2 className="text-xl sm:text-2xl font-black tracking-tight text-[#1F2937] font-serif">ملف على الهامش: تحديات صامتة وأسر تديرها نساء</h2>
                </div>
                <Link to="/ala-alhamesh" className="text-xs font-black text-[#6551a0] hover:underline">زيارة ملف على الهامش بالكامل ←</Link>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {articles.map((art, idx) => (
                    <article
                        key={art.id}
                        onClick={() => openArticleDetails(art)}
                        className="bg-white border border-gray-200 p-5 rounded-2xl shadow-3xs cursor-pointer group hover:border-[#6551a0] hover:scale-[1.01] hover:shadow-md transition-all duration-300 ease-out flex flex-col justify-between animate-fadeInUp opacity-0"
                        style={{ animationDelay: `${idx * 150}ms`, animationFillMode: 'forwards' }}
                    >
                        <div className="space-y-4">
                            <div className="relative w-full aspect-[9/10] rounded-xl overflow-hidden bg-slate-100 border border-gray-100 news-zoom-container">
                                <img
                                    src={art.image}
                                    alt={art.title}
                                    className="w-full h-full object-cover object-center news-zoom-img"
                                />
                            </div>
                            <div className="space-y-2 text-right">
                                <div className="flex justify-between items-center text-[10px] font-bold text-gray-400">
                                    <span className="bg-slate-100 text-slate-700 px-2 py-0.5 rounded border border-slate-200">{art.category}</span>
                                    <span>🗓️ {art.date}</span>
                                </div>
                                <h3 className="text-base font-black text-gray-800 leading-snug font-serif group-hover:text-[#6551a0] transition">
                                    {art.title}
                                </h3>
                                <p className="text-xs text-gray-500 font-medium leading-relaxed line-clamp-3">
                                    {art.subtitle}
                                </p>
                            </div>
                        </div>
                        <div className="mt-5 pt-3 border-t border-gray-50 flex justify-between items-center text-xs font-bold text-[#6551a0]">
                            <span>قراءة المزيد</span>
                            <span className="group-hover:translate-x-[-4px] transition-transform">←</span>
                        </div>
                    </article>
                ))}
            </div>
        </section>
    );
}
