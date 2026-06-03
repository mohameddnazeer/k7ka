import { useState } from "react";
import { Link } from "react-router-dom";

// 1. شريط الكلمات الدالة والهاشتاجات
export function TrendingTags({ tags = [] }) {
  return (
    <div className="flex flex-wrap items-center gap-2 border-b border-gray-200 pb-3 mb-6">
      <span className="text-xs font-black text-[#A91D22] ml-2">الوسوم النشطة:</span>
      {tags.map((tag, idx) => (
        <span 
          key={idx} 
          className="text-[10px] font-bold text-gray-500 bg-gray-150/70 border border-gray-200 px-2 py-0.5 rounded-full hover:bg-[#A91D22]/10 hover:text-[#A91D22] transition cursor-pointer"
        >
          #{tag}
        </span>
      ))}
    </div>
  );
}

// 2. استطلاع رأي تفاعلي لكل تبويب
export function InteractivePoll({ question, options = ["نعم، أؤيد وبشدة", "لا، أرى التوعية أولاً"], pollKey = "general" }) {
  const [voted, setVoted] = useState(() => {
    return localStorage.getItem(`k7ka-poll-${pollKey}`) === "true";
  });
  const [results, setResults] = useState({ opt1: 67, opt2: 33 });

  const handleVote = (choice) => {
    localStorage.setItem(`k7ka-poll-${pollKey}`, "true");
    setVoted(true);
    if (choice === 1) {
      setResults(prev => ({ ...prev, opt1: prev.opt1 + 1 }));
    } else {
      setResults(prev => ({ ...prev, opt2: prev.opt2 + 1 }));
    }
  };

  return (
    <div className="bg-[#faf9f6] border border-gray-200 p-5 rounded-2xl space-y-3">
      <span className="bg-[#A91D22] text-white text-[9px] font-black px-2 py-0.5 rounded shadow-2xs">استفتاء اليوم السابع التفاعلي</span>
      <h4 className="text-xs font-bold text-slate-800 leading-relaxed">{question}</h4>
      
      {!voted ? (
        <div className="grid grid-cols-2 gap-2 pt-1">
          <button 
            onClick={() => handleVote(1)}
            className="bg-white border border-gray-200 text-[10px] font-black py-2 rounded-lg hover:bg-slate-50 transition active:scale-95"
          >
            👍 {options[0]}
          </button>
          <button 
            onClick={() => handleVote(2)}
            className="bg-white border border-gray-200 text-[10px] font-black py-2 rounded-lg hover:bg-slate-50 transition active:scale-95"
          >
            👎 {options[1]}
          </button>
        </div>
      ) : (
        <div className="space-y-2 pt-1">
          <div className="space-y-1">
            <div className="flex justify-between text-[10px] font-bold text-slate-700">
              <span>{options[0]}</span>
              <span>{results.opt1}%</span>
            </div>
            <div className="w-full bg-slate-200 h-1.5 rounded-full overflow-hidden">
              <div className="bg-[#A91D22] h-full" style={{ width: `${results.opt1}%` }}></div>
            </div>
          </div>
          <div className="space-y-1">
            <div className="flex justify-between text-[10px] font-bold text-slate-700">
              <span>{options[1]}</span>
              <span>{results.opt2}%</span>
            </div>
            <div className="w-full bg-slate-200 h-1.5 rounded-full overflow-hidden">
              <div className="bg-gray-400 h-full" style={{ width: `${results.opt2}%` }}></div>
            </div>
          </div>
          <p className="text-[9px] text-gray-400 text-center font-bold">تم تسجيل صوتكِ بسرية. شكراً لمشاركتكِ!</p>
        </div>
      )}
    </div>
  );
}

// 3. كاريكاتير الجريدة اليومي
export function DailyCaricature({ caption, desc, emoji = "👵🧗‍♀️" }) {
  return (
    <div className="bg-slate-50 border border-gray-200 p-4 rounded-2xl text-center space-y-3">
      <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest block">ريشة كحكة - كاريكاتير اليوم 🎨</span>
      <div className="relative aspect-square bg-white border border-gray-200 rounded-xl overflow-hidden flex items-center justify-center p-2 shadow-inner">
        <span className="text-6xl select-none">{emoji}</span>
        <div className="absolute bottom-2 left-2 right-2 bg-black/60 text-white text-[9px] font-bold p-1.5 rounded">
          {caption}
        </div>
      </div>
      <p className="text-[10px] text-slate-500 font-bold leading-relaxed">
        "{desc}"
      </p>
    </div>
  );
}

// 4. معرض التغطية المرئية والبودكاست
export function VideoMediaGallery({ title = "تقارير ميدانية مصورة", clips = [] }) {
  return (
    <div className="bg-slate-50 border border-gray-200 p-6 rounded-3xl space-y-4">
      <div className="flex items-center justify-between border-b border-gray-200 pb-2">
        <h5 className="text-xs font-black text-slate-800 flex items-center gap-1.5">
          <span>🎬</span> تغطية مرئية: {title}
        </h5>
        <span className="text-[10px] font-bold text-slate-400">بث ميداني حصري</span>
      </div>
      
      <div className="grid gap-4 md:grid-cols-12 items-center">
        <div className="md:col-span-7 relative aspect-video rounded-2xl overflow-hidden bg-slate-900 border border-gray-200 group shadow-xs">
          <img 
            src="/imgs/carousel/The-mother-of-the-disabled-a-superhero-no-one-sees.jpeg" 
            alt="تغطية مرئية" 
            className="w-full h-full object-cover opacity-75 group-hover:scale-102 transition duration-500"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <button className="w-12 h-12 rounded-full bg-[#A91D22] text-white flex items-center justify-center shadow-lg hover:scale-110 active:scale-95 transition duration-300">
              ▶
            </button>
          </div>
          <div className="absolute bottom-2 right-2 left-2 bg-black/60 text-white text-[9px] font-bold p-1.5 rounded">
            {clips[0]?.title || "تغطية ميدانية حصرية من قلب الحدث"}
          </div>
        </div>
        <div className="md:col-span-5 space-y-2">
          {clips.map((clip, cIdx) => (
            <div key={cIdx} className="bg-white border border-gray-200 p-2.5 rounded-xl flex justify-between items-center gap-2 hover:border-[#A91D22] transition duration-200 cursor-pointer shadow-3xs">
              <span className="text-[10px] font-bold text-slate-700 leading-snug line-clamp-2">🎥 {clip.title}</span>
              <span className="text-[9px] font-bold text-slate-450 bg-slate-100 px-1.5 py-0.5 rounded shrink-0">{clip.dur}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// 5. أسئلة وإرشادات الخبراء (Q&A Accordion)
export function ExpertAdviceDesk({ qaList = [] }) {
  return (
    <div className="bg-white border border-gray-200 p-6 rounded-3xl space-y-4">
      <div className="flex items-center justify-between border-b border-gray-200 pb-2">
        <h5 className="text-xs font-black text-slate-800 flex items-center gap-1.5">
          <span>⚖️</span> مستشار كحكة: أسئلة وإرشادات معتمدة
        </h5>
        <span className="text-[10px] font-bold text-slate-400">إرشادات تهمكِ</span>
      </div>
      
      <div className="space-y-3">
        {qaList.map((item, idx) => (
          <div key={idx} className="bg-slate-50 p-4 rounded-2xl border border-gray-200 space-y-2 text-right">
            <h6 className="text-xs font-black text-slate-800 flex items-start gap-1">
              <span className="text-[#A91D22]">س:</span> {item.q}
            </h6>
            <p className="text-[11px] text-slate-650 leading-relaxed font-medium">
              <span className="text-emerald-700 font-bold">ج:</span> {item.a}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
