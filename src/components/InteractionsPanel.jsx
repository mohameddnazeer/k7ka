import { useState, useEffect } from 'react'

export default function InteractionsPanel({ articleId }) {
    const [likes, setLikes] = useState(0)
    const [userLiked, setUserLiked] = useState(false)
    const [commentList, setCommentList] = useState([])
    const [name, setName] = useState('')
    const [text, setText] = useState('')

    // Seed data based on articleId to make it feel rich and contextual on first load
    useEffect(() => {
        if (!articleId) return

        // 1. Load likes
        const savedLikes = localStorage.getItem(`likes-${articleId}`)
        const savedUserLiked = localStorage.getItem(`user-liked-${articleId}`) === 'true'
        
        if (savedLikes !== null) {
            setLikes(parseInt(savedLikes, 10))
        } else {
            // Seed a realistic random like count
            const seedLikes = Math.floor(Math.random() * 80) + 40
            setLikes(seedLikes)
            localStorage.setItem(`likes-${articleId}`, seedLikes.toString())
        }
        setUserLiked(savedUserLiked)

        // 2. Load comments
        const savedComments = localStorage.getItem(`comments-${articleId}`)
        if (savedComments !== null) {
            setCommentList(JSON.parse(savedComments))
        } else {
            // Seed 2 realistic comments in Arabic
            const seedComments = [
                {
                    user: "مريم عبد الله",
                    text: "قراءة هذا التحقيق تلمس واقعاً نعيشه يومياً. نحتاج فعلاً لمزيد من النقاشات القانونية والاجتماعية المماثلة لحماية حقوق الفتيات.",
                    date: "منذ يومين"
                },
                {
                    user: "د. هدى سليم",
                    text: "التحليل ممتاز ويتناول القضية من جذورها الثقافية بدلاً من السطحية. كل التقدير لأسرة تحرير الصحيفة.",
                    date: "منذ ٣ أيام"
                }
            ]
            setCommentList(seedComments)
            localStorage.setItem(`comments-${articleId}`, JSON.stringify(seedComments))
        }
    }, [articleId])

    const handleLike = () => {
        const nextLiked = !userLiked
        const nextLikesCount = likes + (nextLiked ? 1 : -1)
        
        setLikes(nextLikesCount)
        setUserLiked(nextLiked)
        
        localStorage.setItem(`likes-${articleId}`, nextLikesCount.toString())
        localStorage.setItem(`user-liked-${articleId}`, nextLiked.toString())
    }

    const handleSubmitComment = (e) => {
        e.preventDefault()
        if (!text.trim()) return

        const newComment = {
            user: name.trim() || "قارئة مجهولة",
            text: text.trim(),
            date: "الآن"
        }

        const updatedComments = [newComment, ...commentList]
        setCommentList(updatedComments)
        localStorage.setItem(`comments-${articleId}`, JSON.stringify(updatedComments))
        
        setText('')
        setName('')
    }

    return (
        <section className="mt-12 pt-8 border-t border-slate-100 space-y-8 animate-fadeIn">
            {/* Reactions Area */}
            <div className="flex flex-wrap items-center justify-between gap-4 py-4 border-y border-slate-100/80 bg-slate-50/50 px-4 rounded-xl">
                <div className="flex items-center gap-3">
                    <span className="text-sm font-bold text-[#1F2937] font-serif">هل أعجبكِ هذا الملف؟</span>
                    <button 
                        onClick={handleLike}
                        className={`flex items-center gap-2 px-5 py-2.5 rounded-full border text-xs font-black active:scale-95 transition-all duration-150 ${
                            userLiked 
                            ? 'bg-red-50 border-[#A91D22] text-[#A91D22]' 
                            : 'bg-white border-slate-200 text-slate-700 hover:bg-slate-50'
                        }`}
                    >
                        ❤️ {userLiked ? 'مُعجبة' : 'إعجاب'} ({likes})
                    </button>
                </div>
                <div className="text-xs text-gray-400 font-bold">
                    📝 {commentList.length} مشاركات للقرّاء
                </div>
            </div>

            {/* Comments Area */}
            <div className="space-y-6">
                <h3 className="text-lg font-black text-[#1F2937] font-serif border-r-4 border-[#A91D22] pr-3">مناقشات القراء ({commentList.length})</h3>
                
                {/* Form */}
                <form onSubmit={handleSubmitComment} className="bg-slate-50/60 border border-slate-100 rounded-2xl p-5 space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="space-y-1">
                            <label className="block text-xs font-bold text-slate-500">الاسم المستعار (اختياري)</label>
                            <input 
                                type="text"
                                placeholder="اكتبي اسمكِ أو اتركيها فارغة..."
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                className="w-full border border-slate-200 bg-white rounded-xl px-4 py-2.5 text-xs outline-none focus:border-[#A91D22] font-semibold transition"
                            />
                        </div>
                    </div>
                    <div className="space-y-1">
                        <label className="block text-xs font-bold text-slate-500 font-serif">تعليقكِ أو رأيكِ</label>
                        <textarea 
                            required
                            rows={3}
                            placeholder="شاركينا برأيكِ حول القضايا المطروحة في هذا التحقيق..."
                            value={text}
                            onChange={(e) => setText(e.target.value)}
                            className="w-full border border-slate-200 bg-white rounded-xl px-4 py-3 text-xs outline-none focus:border-[#A91D22] font-semibold transition"
                        ></textarea>
                    </div>
                    <div className="flex justify-end">
                        <button 
                            type="submit"
                            className="bg-[#A91D22] hover:bg-red-700 text-white text-xs font-bold px-6 py-2.5 rounded-xl shadow-xs transition active:scale-95"
                        >
                            نشر المشاركة
                        </button>
                    </div>
                </form>

                {/* Comment List */}
                <div className="space-y-4 max-h-[400px] overflow-y-auto pr-2">
                    {commentList.map((item, idx) => (
                        <div key={idx} className="bg-white border border-slate-100 p-4 rounded-xl shadow-3xs hover:shadow-2xs transition duration-200">
                            <div className="flex items-center justify-between text-[10px] font-bold text-slate-400 mb-2">
                                <span className="flex items-center gap-1.5 text-[#1F2937]">
                                    <span className="w-6 h-6 bg-slate-100 rounded-full flex items-center justify-center text-xs">👤</span>
                                    {item.user}
                                </span>
                                <span>{item.date}</span>
                            </div>
                            <p className="text-xs text-[#1F2937]/90 leading-relaxed font-semibold">
                                {item.text}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
