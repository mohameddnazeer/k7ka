import { useState } from "react";
import { Link } from "react-router-dom";

// 1. شريط الكلمات الدالة والهاشتاجات
export function TrendingTags({ tags = [] }) {
  if (!tags.length) return null;
  return (
    <div className="flex flex-wrap gap-2 ">
      {tags.map((tag, idx) => (
        <span
          key={idx}
          className="px-3 py-1.5 rounded-full bg-brand-accent/10 text-brand-accent text-xs font-bold"
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
  const total = results.opt1 + results.opt2;

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
    <div className="bg-white border border-slate-200 p-6 rounded-2xl shadow-sm space-y-4">
      <h3 className="text-lg font-black text-brand-ink">{question}</h3>
      
      {!voted ? (
        <div className="space-y-3">
          <button
            onClick={() => handleVote(1)}
            className="w-full text-right py-3 px-4 rounded-xl bg-slate-50 hover:bg-brand-accent/10 border border-slate-200 text-slate-700 font-bold transition-all"
          >
            {options[0]}
          </button>
          <button
            onClick={() => handleVote(2)}
            className="w-full text-right py-3 px-4 rounded-xl bg-slate-50 hover:bg-brand-secondary/10 border border-slate-200 text-slate-700 font-bold transition-all"
          >
            {options[1]}
          </button>
        </div>
      ) : (
        <div className="space-y-4">
          <div className="space-y-2">
            <div className="flex justify-between items-center text-sm">
              <span className="font-bold text-slate-700">{options[0]}</span>
              <span className="text-brand-accent font-black">{Math.round((results.opt1 / total) * 100)}%</span>
            </div>
            <div className="w-full bg-slate-100 rounded-full h-2.5 overflow-hidden">
              <div
                className="bg-brand-accent h-full rounded-full transition-all duration-700"
                style={{ width: `${(results.opt1 / total) * 100}%` }}
              ></div>
            </div>
          </div>
          <div className="space-y-2">
            <div className="flex justify-between items-center text-sm">
              <span className="font-bold text-slate-700">{options[1]}</span>
              <span className="text-brand-secondary font-black">{Math.round((results.opt2 / total) * 100)}%</span>
            </div>
            <div className="w-full bg-slate-100 rounded-full h-2.5 overflow-hidden">
              <div
                className="bg-brand-secondary h-full rounded-full transition-all duration-700"
                style={{ width: `${(results.opt2 / total) * 100}%` }}
              ></div>
            </div>
          </div>
          <p className="text-xs text-slate-400 text-center">الإجمالي: {total} صوتًا</p>
        </div>
      )}
    </div>
  );
}

// 3. كاريكاتير الجريدة اليومي
export function DailyCaricature({ caption, desc, emoji = "👵🧗‍♀️" }) {
  return (
    <div className="bg-white border border-slate-200 p-6 rounded-2xl shadow-sm space-y-3">
      <div className="bg-slate-50 rounded-xl p-8 text-center border border-slate-100">
        <span className="text-6xl">{emoji}</span>
      </div>
      <h3 className="text-lg font-black text-brand-ink">{caption}</h3>
      <p className="text-sm text-slate-600">{desc}</p>
    </div>
  );
}

// 4. معرض التغطية المرئية والبودكاست
export function VideoMediaGallery({ title = "تقارير ميدانية مصورة", clips = [] }) {
  return null;
}

// 5. أسئلة وإرشادات الخبراء (Q&A Accordion)
export function ExpertAdviceDesk({ qaList = [] }) {
  return null;
}
