import { useTranslation } from 'react-i18next';
import { HERO_NAME, LINKS } from '../data/links';
import { ProjectCard } from '../components/ui/project-card';
import { Typewriter } from '../components/ui/typewriter';
import { LanguageSwitcher } from '../components/ui/language-switcher';
import { Footer } from '../components/layout/Footer';

export function Home() {
    const { t } = useTranslation();

    return (
        <div className="min-h-screen py-12 md:py-24 px-6 md:px-0 max-w-3xl mx-auto flex flex-col">
            <main className="flex-grow">
                <header className="mb-16 md:mb-24 fade-in-up">
                    <div className="flex items-center justify-between mb-6">
                        <div className="flex items-center gap-2">
                            <div className="w-2 h-2 bg-black rounded-full" />
                            <h1 className="text-sm font-semibold tracking-wider uppercase text-gray-500">
                                {HERO_NAME}
                            </h1>
                        </div>
                        <LanguageSwitcher />
                    </div>

                    <div className="space-y-6">
                        <h2 className="text-3xl md:text-4xl font-light text-black tracking-tight leading-snug">
                            {t('hero.role')}
                        </h2>
                        <div className="text-lg text-gray-500 max-w-xl leading-relaxed min-h-[3.5rem]">
                            <Typewriter text={t('hero.description')} />
                        </div>
                    </div>
                </header>

                <section className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {LINKS.map((link) => (
                        <ProjectCard key={link.id} item={link} />
                    ))}
                </section>
            </main>

            <Footer />
        </div>
    )
}
