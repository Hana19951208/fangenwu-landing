import { Link, useParams } from 'react-router-dom';
import { ArrowLeft, Calendar } from 'lucide-react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { oneLight } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { useTranslation } from 'react-i18next';
import { Footer } from '../components/layout/Footer';
import { HERO_NAME } from '../data/links';
import { POSTS } from '../data/posts';
import { LanguageSwitcher } from '../components/ui/language-switcher';
import { useEffect, useState } from 'react';

// Import all markdown files eagerly to ensure they are bundled
// In a larger app, we might use dynamic import()
const modules = import.meta.glob('../posts/*.md', { query: '?raw', import: 'default' });

export function BlogPost() {
    const { slug } = useParams();
    const { t } = useTranslation();
    const [content, setContent] = useState<string>('');
    const [loading, setLoading] = useState(true);

    const post = POSTS.find(p => p.slug === slug);

    useEffect(() => {
        async function loadContent() {
            if (!slug) return;
            const path = `../posts/${slug}.md`;
            const loader = modules[path];
            if (loader) {
                try {
                    const raw = await loader() as string;
                    // Remove frontmatter if present (simplified)
                    const contentWithoutFrontmatter = raw.replace(/^---[\s\S]*?---\n/, '');
                    setContent(contentWithoutFrontmatter);
                } catch (e) {
                    console.error("Failed to load markdown", e);
                    setContent(t('blog.error'));
                }
            } else {
                // If no markdown file, maybe show coming soon or placeholder
                setContent("> Content placeholder. Actual markdown file not found for this slug.");
            }
            setLoading(false);
        }
        loadContent();
    }, [slug, t]);

    if (!post) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="text-center">
                    <h1 className="text-2xl font-bold">Post not found</h1>
                    <Link to="/blog" className="text-blue-500 hover:underline mt-4 block">Back to Blog</Link>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen py-12 md:py-24 px-6 md:px-0 max-w-3xl mx-auto flex flex-col">
            <main className="flex-grow">
                {/* Header */}
                <header className="mb-12 fade-in-up">
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
                        to="/blog"
                        className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-black transition-colors mb-8 group"
                    >
                        <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                        {t('blog.backToBlog') || "Back to Blog"}
                    </Link>

                    <div className="space-y-4">
                        <div className="flex items-center gap-3 text-xs font-mono text-gray-400 uppercase tracking-widest">
                            <span className="flex items-center gap-1">
                                <Calendar className="w-3 h-3" />
                                {post.date}
                            </span>
                            <span>/</span>
                            <div className="flex gap-2">
                                {post.tags.map(tag => (
                                    <span key={tag}># {t(`tags.${tag}`)}</span>
                                ))}
                            </div>
                        </div>
                        <h1 className="text-3xl md:text-4xl font-light text-black tracking-tight leading-snug">
                            {t(`posts.${post.slug}.title`)}
                        </h1>
                    </div>
                </header>

                {/* Markdown Content */}
                <article className="prose prose-neutral max-w-none fade-in-up delay-100">
                    {loading ? (
                        <div className="animate-pulse space-y-4">
                            <div className="h-4 bg-gray-100 rounded w-3/4"></div>
                            <div className="h-4 bg-gray-100 rounded w-full"></div>
                            <div className="h-4 bg-gray-100 rounded w-5/6"></div>
                        </div>
                    ) : (
                        <ReactMarkdown
                            remarkPlugins={[remarkGfm]}
                            components={{
                                code({ node, inline, className, children, ...props }: any) {
                                    const match = /language-(\w+)/.exec(className || '');
                                    return !inline && match ? (
                                        <SyntaxHighlighter
                                            style={oneLight}
                                            language={match[1]}
                                            PreTag="div"
                                            customStyle={{
                                                background: '#f9fafb', // neutral-50
                                                border: '1px solid #e5e7eb', // gray-200
                                                borderRadius: '0.5rem',
                                                fontSize: '0.875rem',
                                                lineHeight: '1.5',
                                                padding: '1.25rem',
                                                margin: '1.5rem 0'
                                            }}
                                            {...props}
                                        >
                                            {String(children).replace(/\n$/, '')}
                                        </SyntaxHighlighter>
                                    ) : (
                                        <code className="bg-gray-100 px-1.5 py-0.5 rounded text-sm font-mono text-gray-800" {...props}>
                                            {children}
                                        </code>
                                    );
                                },
                                h2: ({ ...props }) => <h2 className="text-2xl font-normal mt-12 mb-6 text-black tracking-tight" {...props} />,
                                h3: ({ ...props }) => <h3 className="text-xl font-medium mt-8 mb-4 text-black" {...props} />,
                                p: ({ ...props }) => <p className="text-gray-600 leading-8 mb-6 font-light" {...props} />,
                                ul: ({ ...props }) => <ul className="list-disc list-outside ml-5 mb-6 text-gray-600 leading-7" {...props} />,
                                ol: ({ ...props }) => <ol className="list-decimal list-outside ml-5 mb-6 text-gray-600 leading-7" {...props} />,
                                blockquote: ({ ...props }) => (
                                    <blockquote className="border-l-2 border-black pl-4 italic text-gray-500 my-8" {...props} />
                                ),
                                a: ({ ...props }) => (
                                    <a className="text-black underline underline-offset-4 hover:text-gray-600 transition-colors" {...props} />
                                ),
                                table: ({ ...props }) => (
                                    <div className="overflow-x-auto my-8">
                                        <table className="min-w-full divide-y divide-gray-200 text-sm" {...props} />
                                    </div>
                                ),
                                th: ({ ...props }) => <th className="px-4 py-3 bg-gray-50 text-left font-medium text-gray-900" {...props} />,
                                td: ({ ...props }) => <td className="px-4 py-3 border-t border-gray-100 text-gray-600" {...props} />,
                            }}
                        >
                            {content}
                        </ReactMarkdown>
                    )}
                </article>
            </main>

            <Footer />
        </div>
    );
}
