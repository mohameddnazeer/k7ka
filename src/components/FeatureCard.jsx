export default function FeatureCard({ title, text, variant }) {
    const isPurple = variant === 'purple' || !variant

    return (
        <article
            className={`rounded-2xl border p-6 transition-all duration-300 hover:-translate-y-1 ${
                isPurple
                    ? 'border-brand-surface/70 bg-brand-surface hover:border-brand-secondary/60'
                    : 'border-brand-surface/70 bg-brand-surface hover:border-brand-accent/70'
            }`}
        >
            <h2 className={`mb-3 text-2xl font-black ${isPurple ? 'text-brand-ink' : 'text-brand-inkMuted'}`}>
                {title}
            </h2>
            <p className="text-base leading-relaxed text-brand-inkMuted font-medium">{text}</p>
        </article>
    )
}
