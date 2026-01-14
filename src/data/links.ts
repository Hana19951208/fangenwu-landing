import { BookOpen, Cloud, Terminal, Cpu } from 'lucide-react';

export const HERO_NAME = "fangenwu.cn";

export interface LinkItem {
    id: string; // Add ID for translation lookup
    href: string;
    icon: typeof BookOpen;
    isExternal?: boolean;
}

export const LINKS: LinkItem[] = [
    {
        id: "blog",
        href: "https://docs.fangenwu.cn",
        icon: BookOpen,
    },
    {
        id: "images",
        href: "https://img.fangenwu.cn",
        icon: Cloud,
    },
    {
        id: "ai",
        href: "https://api.fangenwu.cn",
        icon: Terminal,
    },
    {
        id: "status",
        href: "https://status.fangenwu.cn",
        icon: Cpu,
    }
];


