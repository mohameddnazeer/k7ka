export default function HeroHeader() {
    return (
        <header className="relative mb-12 w-full pt-8 pb-12 overflow-hidden">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="grid items-center gap-12 lg:grid-cols-2">
                    {/* Left Side: Text Content */}
                    <div className="relative z-10 text-right">
                        <div className="inline-flex items-center gap-2 rounded-full bg-brand-pinkAccent/10 px-4 py-1 text-sm font-bold text-brand-pinkAccent mb-6">
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-pinkAccent opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-pinkAccent"></span>
                            </span>
                            منصة حكاياتها.. تصل صوتها
                        </div>
                        
                        <h2 className="text-5xl font-black leading-[1.1] text-brand-purple sm:text-7xl mb-6">
                            كحكة..<br />
                            <span className="text-brand-blueViolet">شغل وبيت وحياة</span>
                        </h2>
                        
                        <p className="max-w-xl text-lg leading-relaxed text-brand-textDark/80 mb-8 font-medium">
                            كحكة هي تلك اللحظة التي تلم فيها المرأة شتات يومها لتبدأ رحلتها.. نحن هنا لتوثيق هذه الرحلة، بكل ما فيها من تحديات العمل، دفء البيت، وتفاصيل الحياة التي لا يراها الجميع.
                        </p>
                        
                        <div className="flex flex-wrap gap-4 justify-start">
                            <button className="rounded-full bg-brand-purple px-8 py-4 text-lg font-black text-white transition hover:bg-brand-purpleMedium shadow-xl shadow-brand-purple/20">
                                استكشفي قصصنا
                            </button>
                            <button className="rounded-full border-2 border-brand-purple/20 px-8 py-4 text-lg font-black text-brand-purple transition hover:bg-brand-purple/5">
                                انضمي إلينا
                            </button>
                        </div>
                    </div>

                    {/* Right Side: Visual Image Representation */}
                    <div className="relative lg:h-[600px] flex items-center justify-center">
                        {/* Decorative background shapes */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-brand-purple/5 rounded-full blur-[100px] -z-10"></div>
                        
                        <div className="relative w-full aspect-square max-w-[500px]">
                            <div className="absolute inset-0 rounded-[40px] bg-gradient-to-tr from-brand-purple via-brand-pinkAccent to-brand-blueLight opacity-20 rotate-6 scale-105"></div>
                            <div className="absolute inset-0 rounded-[40px] bg-white shadow-2xl skew-y-3 lg:skew-y-0 overflow-hidden border border-brand-purple/10">
                                <img 
                                    src="/imgs/1.png" 
                                    alt="كحكة Lifestyle" 
                                    className="transition-transform duration-700 hover:scale-110 h-full w-full object-cover"
                                />
                                {/* Overlay Logo */}
                                <div className="absolute bottom-6 right-6 bg-white/90 backdrop-blur-md p-4 rounded-2xl shadow-xl flex items-center gap-3 border border-brand-purple/10">
                                    <img src="/imgs/newlogo.png" width={40} height={40} alt="Logo" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}
