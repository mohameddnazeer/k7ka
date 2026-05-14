const sections = [
    {
        title: 'عن كحكه',
        content: 'منصة صحفية عربية تسلط الضوء على تفاصيل الحياة الأسرية وتأثيرها النفسي والاجتماعي.',
    },
    {
        title: 'روابط سريعة',
        links: ['الرئيسية', 'التحقيق', 'فريق العمل', 'تواصل معنا'],
    },
    {
        title: 'تابعنا',
        links: ['Facebook', 'Instagram', 'X', 'YouTube'],
    },
    {
        title: 'التواصل',
        contactLines: [
            'info@kahkah.com',
            '+20 10 0000 0000',
            'القاهرة - مصر',
            'نعمل يوميًا من 9 ص إلى 6 م',
        ],
    },
]

export default function Footer() {
    return (
        <footer className="relative z-10 mt-20 border-t border-brand-brown/10 bg-brand-beige py-12" dir="rtl">
            <div className="mx-auto w-full  px-4 sm:px-8">
                <div className="mb-10 grid grid-cols-1 gap-10 md:grid-cols-2 xl:grid-cols-4">
                    {sections.map((section) => (
                        <div key={section.title}>
                            <h4 className="mb-4 text-lg font-bold text-brand-brown">{section.title}</h4>
                            {section.content && <p className="text-sm leading-7 text-brand-textSecondary">{section.content}</p>}
                            {section.links && (
                                <div className="flex flex-col gap-2.5">
                                    {section.links.map((link) => (
                                        <a
                                            key={link}
                                            href="#"
                                            className="text-sm text-brand-textSecondary transition hover:text-brand-orange"
                                        >
                                            {link}
                                        </a>
                                    ))}
                                </div>
                            )}
                            {section.contactLines && (
                                <div className="flex flex-col gap-2">
                                    {section.contactLines.map((line) => (
                                        <p key={line} className="text-sm text-brand-textSecondary">
                                            {line}
                                        </p>
                                    ))}
                                </div>
                            )}
                        </div>
                    ))}
                </div>
                <div className="border-t border-brand-brown/20 pt-6">
                    <p className="text-center text-sm text-brand-textLight">
                        © 2026 كحكه - جميع الحقوق محفوظة
                    </p>
                </div>
            </div>
        </footer>
    )
}
