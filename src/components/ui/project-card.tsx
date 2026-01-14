import { ArrowUpRight } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { cn } from '../../lib/utils';
import type { LinkItem } from '../../data/links';

interface ProjectCardProps {
    item: LinkItem;
    className?: string;
}

export function ProjectCard({ item, className }: ProjectCardProps) {
    const { t } = useTranslation();
    const Icon = item.icon;

    const isExternal = item.isExternal !== false;
    const content = (
        <>
            <div className="flex justify-between items-start">
                <Icon className="w-6 h-6 stroke-1 text-gray-500 group-hover:text-black transition-colors" />
                <ArrowUpRight className={cn("w-4 h-4 text-gray-300 group-hover:text-black transition-colors", !isExternal && "rotate-45")} />
            </div>

            <div>
                <h3 className="text-lg font-medium text-black group-hover:underline underline-offset-4 decoration-1">
                    {t(`links.${item.id}.title`)}
                </h3>
                <p className="mt-2 text-sm text-gray-500 font-normal leading-relaxed group-hover:text-gray-700">
                    {t(`links.${item.id}.description`)}
                </p>
            </div>
        </>
    );

    if (isExternal) {
        return (
            <a
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                    "group block px-6 py-6 border border-gray-200 transition-all duration-300",
                    "hover:border-black hover:bg-neutral-50 cursor-pointer",
                    "flex flex-col gap-4",
                    className
                )}
            >
                {content}
            </a>
        );
    }

    return (
        <Link
            to={item.href}
            className={cn(
                "group block px-6 py-6 border border-gray-200 transition-all duration-300",
                "hover:border-black hover:bg-neutral-50 cursor-pointer",
                "flex flex-col gap-4",
                className
            )}
        >
            {content}
        </Link>
    );
}
