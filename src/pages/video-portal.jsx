import { useState, useEffect, useRef, useCallback } from 'react'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'

// Mock video data
const videosData = [
  {
    id: 1,
    title: "اختراق هاتف الجوال: كيف تحمين نفسك",
    category: "تقنية",
    views: "١٢٠ ألف",
    date: "٤ يونيو ٢٠٢٦",
    duration: "٥:٣٢",
    videoUrl: "/videos/اعرفي حقك.mp4",
    isBreaking: false,
    isTrending: true,
    isShort: false,
    description: "تقرير صحفي متكامل يغطي جميع جوانب هذا الموضوع مع شهادات وخبراء."
  },
  {
    id: 2,
    title: "رحلة الأمومة الأولى مع الدكتورة سارة",
    category: "صحة",
    views: "٨٥ ألف",
    date: "٣ يونيو ٢٠٢٦",
    duration: "١٢:١٥",
    videoUrl: "/videos/الصحه.mp4",
    isBreaking: false,
    isTrending: true,
    isShort: false,
    description: "مقابلة خاصة مع الدكتورة سارة حول التحديات الأولى للأمومة."
  },
  {
    id: 3,
    title: "حقوقك في الطلاق: ما الذي تنص عليه القوانين؟",
    category: "قانون",
    views: "٢٠٠ ألف",
    date: "٢ يونيو ٢٠٢٦",
    duration: "٨:٤٥",
    videoUrl: "/videos/الطلاق.mp4",
    isBreaking: true,
    isTrending: true,
    isShort: false,
    description: "حلقة قانونية تشرح حقوق المرأة في حال الطلاق."
  },
  {
    id: 4,
    title: "المرأة وزيرة مالية في بيتها",
    category: "اقتصاد",
    views: "٩٥ ألف",
    date: "١ يونيو ٢٠٢٦",
    duration: "١٠:٢٠",
    videoUrl: "/videos/عماد المجتمع.mp4",
    isBreaking: false,
    isTrending: true,
    isShort: false,
    description: "كيف تدير المرأة ميزانية المنزل بذكاء."
  },
  {
    id: 5,
    title: "كيف تتعاملين مع التواصل في العلاقات",
    category: "علاقات",
    views: "٧٥ ألف",
    date: "٣١ مايو ٢٠٢٦",
    duration: "٧:٠٠",
    videoUrl: "/videos/نتفاهم.mp4",
    isBreaking: false,
    isTrending: false,
    isShort: false,
    description: "نصائح ذهبية لتعزيز التواصل في العلاقات الزوجية."
  },
  {
    id: 6,
    title: "كريم أساسي للبشرة الجافة",
    category: "جمال",
    views: "١٥٠ ألف",
    date: "٣٠ مايو ٢٠٢٦",
    duration: "٠:٣٠",
    videoUrl: "/videos/ريلز Instagram الجمال بلون أبيض ووردي.mp4",
    isBreaking: false,
    isTrending: true,
    isShort: true,
    description: "نصائح سريعة للعناية بالبشرة الجافة في الشتاء."
  },
  {
    id: 7,
    title: "مرآة المرأة الحديثة",
    category: "مجتمع",
    views: "٦٠ ألف",
    date: "٢٩ مايو ٢٠٢٦",
    duration: "٩:١٠",
    videoUrl: "/videos/أخضر ذهبي عصري تصميم جرافيكي فيديو للهاتف الجوال.mp4",
    isBreaking: true,
    isTrending: false,
    isShort: false,
    description: "حوار حول دور المرأة في المجتمع المعاصر."
  },

]

const categories = ["الكل", "سياسة", "اقتصاد", "تقنية", "رياضة", "أخبار محلية", "تحقيقات"]

const VideoCard = ({ video, isSelected, onClick, isShort = false, currentlyPlaying, onPlayStateChange }) => {
  const videoRef = useRef(null)
  const [isHovered, setIsHovered] = useState(false)
  const isPlaying = currentlyPlaying === video.id

  const togglePlay = (e) => {
    e.preventDefault()
    e.stopPropagation()
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause()
        onPlayStateChange(null)
      } else {
        videoRef.current.play()
        onPlayStateChange(video.id)
      }
    }
  }

  const handleCardClick = (e) => {
    if (isShort) {
      togglePlay(e)
    } else if (onClick) {
      onClick()
    }
  }

  useEffect(() => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.play()
      } else {
        videoRef.current.pause()
      }
    }
  }, [isPlaying])

  return (
    <div
      className={`group cursor-pointer bg-white border-2 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 ease-out ${isSelected ? 'border-[#6551a0] bg-red-50' : 'border-gray-200 hover:border-[#6551a0]'} ${isShort ? 'overflow-hidden' : 'p-5 hover:scale-[1.01]'}`}
      onClick={handleCardClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className={`relative ${isShort ? 'aspect-[9/16] max-h-[395px]' : 'aspect-video'} rounded-xl overflow-hidden bg-black border border-gray-100 w-full ${!isShort && 'mb-4'}`}>
        <video
          ref={videoRef}
          src={video.videoUrl}
          className="w-full h-full object-cover"
          onClick={togglePlay}
          playsInline
          loop
        />
        <div
          className={`absolute inset-0 flex items-center justify-center transition-opacity duration-300 cursor-pointer ${isPlaying && !isHovered ? 'opacity-0' : 'opacity-100'}`}
          onClick={togglePlay}
        >
          <div className={`${isShort ? 'h-16 w-16' : 'h-14 w-14'} rounded-full bg-[#6551a0]/90 flex items-center justify-center shadow-lg transition-all duration-300 group-hover:scale-110`}>
            {isPlaying ? (
              <svg className={`${isShort ? 'h-7 w-7' : 'h-6 w-6'} text-white`} viewBox="0 0 24 24" fill="currentColor">
                <rect x="6" y="4" width="4" height="16" rx="1" />
                <rect x="14" y="4" width="4" height="16" rx="1" />
              </svg>
            ) : (
              <svg className={`${isShort ? 'h-8 w-8 ml-1' : 'h-6 w-6 ml-1'} text-white fill-current`} viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z" />
              </svg>
            )}
          </div>
        </div>
        {!isShort && (
          <span className="absolute bottom-3 left-3 bg-[#1F2937]/90 text-[10px] font-bold px-2 py-0.5 rounded text-white">
            {video.duration}
          </span>
        )}
        {!isShort && (
          <span className="absolute top-3 right-3 bg-white/90 text-[#6551a0] text-[9px] font-black px-2 py-0.5 rounded-full border border-gray-200">
            {video.category}
          </span>
        )}
        {isShort && (
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
        )}
      </div>
      <div className={`space-y-2 ${isShort ? 'p-4' : ''}`}>
        <h3 className={`font-black font-serif leading-snug line-clamp-2 group-hover:text-[#6551a0] transition ${isShort ? 'text-sm ' : 'text-base text-[#1F2937]'}`}>
          {video.title}
        </h3>
        {!isShort && (
          <div className="flex items-center justify-between text-[10px] font-bold text-gray-500">
            <span>📊 {video.views}</span>
            <span>📅 {video.date}</span>
          </div>
        )}
        {isShort && (
          <div className="text-[10px] font-bold ">
            📊 {video.views} • ⏱️ {video.duration}
          </div>
        )}
      </div>
    </div>
  )
}

const VideoListItem = ({ video, isSelected, onClick, currentlyPlaying, onPlayStateChange }) => {
  const videoRef = useRef(null)
  const [isHovered, setIsHovered] = useState(false)
  const isPlaying = currentlyPlaying === video.id

  const togglePlay = (e) => {
    e.preventDefault()
    e.stopPropagation()
    if (videoRef.current) {/*
      if (isPlaying) {
        videoRef.current.pause()
        onPlayStateChange(null)
      } else {
        videoRef.current.play()
        onPlayStateChange(video.id)
      }*/
    }
  }

  useEffect(() => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.play()
      } else {
        videoRef.current.pause()
      }
    }
  }, [isPlaying])

  return (
    <div
      key={video.id}
      className={`flex gap-3 cursor-pointer group p-3 rounded-xl transition border-2 ${isSelected ? 'border-[#6551a0] bg-red-50' : 'border-transparent hover:bg-slate-50 hover:border-gray-200'} h-[150px] w-full`}
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative shrink-0 w-54 aspect-video rounded-xl overflow-hidden bg-black border border-gray-200">
        <video
          ref={videoRef}
          src={video.videoUrl}
          className="w-full h-full object-cover"
          onClick={togglePlay}
        />
        <div
          className={`absolute inset-0 flex items-center justify-center transition-opacity duration-300 cursor-pointer ${isPlaying && !isHovered ? 'opacity-0' : 'opacity-100'}`}
          onClick={togglePlay}
        >
          <div className="h-10 w-10 rounded-full bg-[#6551a0]/90 flex items-center justify-center shadow-lg transition-all duration-300 group-hover:scale-110">
            {isPlaying ? (
              <svg className="h-4 w-4 text-white" viewBox="0 0 24 24" fill="currentColor">
                <rect x="6" y="4" width="4" height="16" rx="1" />
                <rect x="14" y="4" width="4" height="16" rx="1" />
              </svg>
            ) : (
              <svg className="h-4 w-4 text-white fill-current ml-0.5" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z" />
              </svg>
            )}
          </div>
        </div>
        <span className="absolute bottom-2 left-2 bg-[#1F2937]/90 text-white text-[9px] font-bold px-1.5 py-0.5 rounded">
          {video.duration}
        </span>
      </div>
      <div className="flex-1 space-y-2">
        <h4 className="text-sm font-black font-serif line-clamp-2 group-hover:text-[#6551a0] transition">
          {video.title}
        </h4>
        <div className="text-[10px] font-bold text-gray-500">
          📊 {video.views} • 📅 {video.date}
        </div>
      </div>
    </div>
  )
}

export default function VideoPortalPage() {
  const [activeCategory, setActiveCategory] = useState("الكل")
  const [searchQuery, setSearchQuery] = useState("")
  const [featuredVideo, setFeaturedVideo] = useState(videosData[0])
  const [currentlyPlaying, setCurrentlyPlaying] = useState(null)
  const featuredVideoRef = useRef(null)

  const filteredVideos = videosData.filter(video => {
    const matchesCategory = activeCategory === "الكل" || video.category === activeCategory
    const matchesSearch = video.title.toLowerCase().includes(searchQuery.toLowerCase())
    const isNotShort = !video.isShort
    return matchesCategory && matchesSearch && isNotShort
  })

  const trendingVideos = videosData.filter(v => v.isTrending && !v.isShort).slice(0, 5)
  const shorts = videosData.filter(v => v.isShort)
  const breakingVideos = videosData.filter(v => v.isBreaking && !v.isShort)

  const handleSelectVideo = (video) => {
    setFeaturedVideo(video)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const handlePlayStateChange = useCallback((videoId) => {
    setCurrentlyPlaying(videoId)
  }, [])

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' })
  }, [])

  return (
    <div className="min-h-screen bg-white text-[#1F2937]" dir="rtl">
      <NavBar />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-8 ">
        <section className="mb-10">
          <div className="grid gap-8 lg:grid-cols-3">
            <div className="lg:col-span-2 relative group overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-md">
              <div className="relative aspect-video bg-black">
                <video
                  ref={featuredVideoRef}
                  src={featuredVideo.videoUrl}
                  controls
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6 space-y-4">
                <div className="flex items-center gap-3">
                  <span className="bg-[#6551a0] text-white px-3 py-1 rounded-full text-[10px] font-black">
                    {featuredVideo.category}
                  </span>
                  <span className="text-[10px] font-bold text-gray-500">
                    📅 {featuredVideo.date} • 📊 {featuredVideo.views} • ⏱️ {featuredVideo.duration}
                  </span>
                </div>
                <h2 className="text-xl sm:text-2xl font-black leading-tight font-serif text-[#1F2937]">
                  {featuredVideo.title}
                </h2>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {featuredVideo.description}
                </p>
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex items-center gap-2 pb-3 border-b border-gray-300">
                <span className="w-3.5 h-3.5 bg-[#6551a0] block"></span>
                <h3 className="text-xl font-black font-serif text-[#1F2937]">الأكثر مشاهدة</h3>
              </div>
              <div className="space-y-4">
                {trendingVideos.map((video) => (
                  <VideoListItem
                    key={video.id}
                    video={video}
                    isSelected={featuredVideo.id === video.id}
                    onClick={() => handleSelectVideo(video)}
                    currentlyPlaying={currentlyPlaying}
                    onPlayStateChange={handlePlayStateChange}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>

        {breakingVideos.length > 0 && (
          <section className="mb-10">
            <div className="flex items-center gap-3 mb-4 pb-3 border-b border-gray-300">
              <span className="w-4 h-4 bg-[#A91D22] block"></span>
              <h3 className="text-xl font-black font-serif text-[#1F2937]">فيديوهات عاجلة</h3>
            </div>
            <div className="no-scrollbar flex gap-6 overflow-x-auto pb-4">
              {breakingVideos.map((video) => (
                <div key={video.id} className="shrink-0 w-80">
                  <VideoCard
                    video={video}
                    isSelected={featuredVideo.id === video.id}
                    onClick={() => handleSelectVideo(video)}
                    currentlyPlaying={currentlyPlaying}
                    onPlayStateChange={handlePlayStateChange}
                  />
                </div>
              ))}
            </div>
          </section>
        )}

        <section className="mb-8">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div className="relative flex-1 max-w-md">
              <input
                type="text"
                placeholder="ابحث عن فيديو..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-white border border-gray-300 rounded-full py-3 px-6 pr-12 text-sm focus:outline-none focus:border-[#6551a0] focus:ring-1 focus:ring-[#6551a0] font-bold"
              />
              <svg className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
            <div className="no-scrollbar flex items-center gap-2 overflow-x-auto">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`shrink-0 px-4 py-2 rounded-full text-xs font-black transition-all duration-200 ${activeCategory === cat
                    ? 'bg-[#6551a0] text-white shadow-sm'
                    : 'bg-white text-gray-700 border border-gray-300 hover:border-[#6551a0] hover:text-[#6551a0]'
                    }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </section>

        <div className="grid gap-8 lg:grid-cols-4">
          <div className="lg:col-span-3">
            <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
              {filteredVideos.map((video) => (
                <VideoCard
                  key={video.id}
                  video={video}
                  isSelected={featuredVideo.id === video.id}
                  onClick={() => handleSelectVideo(video)}
                  currentlyPlaying={currentlyPlaying}
                  onPlayStateChange={handlePlayStateChange}
                />
              ))}
            </div>

          </div>

          <div className="space-y-4">
            <div className="flex items-center gap-2 pb-3 border-b border-gray-300">
              <span className="w-3.5 h-3.5 bg-slate-800 block"></span>
              <h3 className="text-xl font-black font-serif text-[#1F2937]">ريلز</h3>
            </div>
            <div className="space-y-6">
              {shorts.map((short) => (
                <VideoCard
                  key={short.id}
                  video={short}
                  isSelected={featuredVideo.id === short.id}
                  onClick={() => handleSelectVideo(short)}
                  isShort={true}
                  currentlyPlaying={currentlyPlaying}
                  onPlayStateChange={handlePlayStateChange}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}
