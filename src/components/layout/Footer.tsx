import { SOCIALS } from '../../data/socials';
import { useTranslation } from 'react-i18next';

export function Footer() {
    const { t } = useTranslation();
    return (
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
    );
}
