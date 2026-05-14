import FeatureCard from './FeatureCard'

export default function FeatureGrid({ features }) {
    return (
        <section className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {features.map((feature) => (
                <FeatureCard key={feature.title} {...feature} />
            ))}
        </section>
    )
}
