import { useTranslation } from 'react-i18next';
import { Languages } from 'lucide-react';

export function LanguageSwitcher() {
    const { i18n } = useTranslation();

    const toggleLanguage = () => {
        const newLang = i18n.language === 'zh' ? 'en' : 'zh';
        i18n.changeLanguage(newLang);
    };

    return (
        <button
            onClick={toggleLanguage}
            className="p-2 text-gray-400 hover:text-black transition-colors rounded-full hover:bg-gray-50 flex items-center gap-2 text-xs font-mono"
            aria-label="Toggle Language"
        >
            <Languages className="w-4 h-4" />
            <span>{i18n.language === 'zh' ? 'EN' : '中文'}</span>
        </button>
    );
}
