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


}
