export default function BackgroundSVG() {
    return (
        <div className="pointer-events-none absolute inset-0 -z-10 h-full w-full overflow-hidden opacity-60 bg-brand-offwhite/30">
            {/* Top Left Brush Stroke - Pink Soft */}
            <svg
                className="absolute -top-10 -left-10 h-72 w-72 blur-3xl"
                viewBox="0 0 100 100"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <circle cx="50" cy="50" r="50" fill="#F48FB1" opacity="0.12" />
            </svg>

            {/* Top Right Blob - Blue Violet / Purple */}
            <svg
                className="absolute top-0 right-0 h-[45rem] w-[45rem] translate-x-1/4 -translate-y-1/4 opacity-15"
                viewBox="0 0 400 400"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    d="M380 200C380 299.411 299.411 380 200 380C100.589 380 20 299.411 20 200C20 100.589 100.589 20 200 20C299.411 20 380 100.589 380 200Z"
                    fill="url(#brand_gradient)"
                />
                <defs>
                    <linearGradient id="brand_gradient" x1="20" y1="20" x2="380" y2="380" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#4A90E2" />
                        <stop offset="1" stopColor="#5A3E9B" />
                    </linearGradient>
                </defs>
            </svg>

            {/* Mid Left Blob - Purple Medium */}
            <svg
                className="absolute top-1/2 -left-24 h-[30rem] w-[30rem] -translate-y-1/2 opacity-[0.08]"
                viewBox="0 0 400 400"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <circle cx="200" cy="200" r="180" fill="#7B5CCB" />
            </svg>

            {/* Bottom Right Wave - Light Blue */}
            <svg
                className="absolute bottom-0 right-0 h-2/3 w-1/2 opacity-15"
                viewBox="0 0 400 800"
                preserveAspectRatio="none"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    d="M400 0C300 100 200 50 100 200C0 350 150 500 50 650C-50 800 100 800 100 800H400V0Z"
                    fill="#7EC8E3"
                />
            </svg>
        </div>
    )
}
