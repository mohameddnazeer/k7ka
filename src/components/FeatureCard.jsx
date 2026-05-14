export default function FeatureCard({ title, text, variant }) {
    const isPurple = variant === 'purple' || !variant

    return (
        <article
            className={`rounded-2xl border bg-white p-6 shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-lg ${
                isPurple ? 'border-brand-purple/20 hover:border-brand-purple/40' : 'border-brand-pink/20 hover:border-brand-pink/40'
            }`}
        >
            <h2 className={`mb-3 text-2xl font-black ${isPurple ? 'text-brand-purple' : 'text-brand-pink'}`}>
                {title}
            </h2>
            <p className="text-base leading-relaxed text-brand-textSecondary font-medium">{text}</p>
        </article>
    )
}
