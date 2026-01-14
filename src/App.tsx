import { useTranslation } from 'react-i18next';
import { HERO_NAME, LINKS } from './data/links';
import { SOCIALS } from './data/socials';
import { ProjectCard } from './components/ui/project-card';
import { Typewriter } from './components/ui/typewriter';
import { LanguageSwitcher } from './components/ui/language-switcher';

function App() {
  const { t } = useTranslation();

  return (
    // Use container-custom utility defined in index.css
    <div className="min-h-screen py-12 md:py-24 px-6 md:px-0 max-w-3xl mx-auto flex flex-col">
      <main className="flex-grow">
        {/* Header Section */}
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

        {/* Links / Projects Section */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {LINKS.map((link) => (
            <ProjectCard key={link.id} item={link} />
          ))}
        </section>
      </main>

      {/* Footer Section */}
      <footer className="mt-24 pt-8 border-t border-gray-100 flex flex-col md:flex-row items-center justify-between text-sm text-gray-400 gap-4">
        <div className="flex gap-6 items-center">
          {SOCIALS.map(social => {
            const Icon = social.icon;
            return (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                title={social.label}
                className="hover:text-black transition-colors p-2 -ml-2 rounded-full hover:bg-gray-50 flex items-center gap-2 group"
              >
                <Icon className="w-5 h-5" />
                <span className="md:hidden group-hover:inline-block">{social.label}</span>
              </a>
            );
          })}
        </div>
        <div className="flex flex-col md:flex-row items-center gap-2 md:gap-6">
          <a href="mailto:hana@fangenwu.cn" className="hover:text-black transition-colors">hana@fangenwu.cn</a>
          <p className="font-mono text-xs opacity-50">{t('footer.version')}</p>
        </div>
      </footer>
    </div>
  )
}

export default App
