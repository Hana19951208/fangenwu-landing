import { Link } from 'react-router-dom';
import { ArrowLeft, Calendar } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { Footer } from '../components/layout/Footer';
import { POSTS } from '../data/posts';
import { HERO_NAME } from '../data/links';
import { LanguageSwitcher } from '../components/ui/language-switcher';

export function Blog() {
    const { t } = useTranslation();

    return (
        <div className="min-h-screen py-12 md:py-24 px-6 md:px-0 max-w-3xl mx-auto flex flex-col">
            <main className="flex-grow">
                {/* Blog Header */}
                <header className="mb-16 md:mb-20 fade-in-up">
                    <div className="flex items-center justify-between mb-8">
                        <Link to="/" className="flex items-center gap-2 hover:opacity-70 transition-opacity">
                            <div className="w-2 h-2 bg-black rounded-full" />
                            <h1 className="text-sm font-semibold tracking-wider uppercase text-gray-500">
                                {HERO_NAME}
                            </h1>
                        </Link>
                        <LanguageSwitcher />
                    </div>

                    <Link
                        to="/"
                        className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-black transition-colors mb-6 group"
                    >
                        <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                        {t('blog.back')}
                    </Link>

                    <h2 className="text-3xl md:text-4xl font-light text-black tracking-tight leading-snug mb-4">
                        {t('blog.title')}
                    </h2>
                    <p className="text-lg text-gray-500 font-light">
                        {t('blog.description')}
                    </p>
                </header>

                {/* Post List */}
                <div className="space-y-12">
                    {POSTS.map(post => (
                        <Link to={`/blog/${post.slug}`} key={post.slug} className="block group cursor-pointer">
                            <div className="flex flex-col gap-2 mb-2">
                                <div className="flex items-center gap-3 text-xs font-mono text-gray-400 uppercase tracking-widest">
                                    <span className="flex items-center gap-1">
                                        <Calendar className="w-3 h-3" />
                                        {post.date}
                                    </span>
                                    <span>/</span>
                                    <div className="flex gap-2">
                                        {post.tags.map(tag => (
                                            <span key={tag} className="flex items-center gap-1 hover:text-black transition-colors">
                                                # {t(`tags.${tag}`)}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                <h3 className="text-xl font-medium text-black group-hover:underline underline-offset-4 decoration-1 decoration-gray-300 transition-all">
                                    {t(`posts.${post.slug}.title`)}
                                </h3>
                            </div>

                            <p className="text-gray-500 leading-relaxed font-light text-base max-w-2xl group-hover:text-gray-600 transition-colors">
                                {t(`posts.${post.slug}.summary`)}
                            </p>
                        </Link>
                    ))}
                </div>
            </main>

            <Footer />
        </div>
    );
}
