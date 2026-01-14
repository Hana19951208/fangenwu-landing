import { Github } from 'lucide-react';

// Custom WeChat Icon since it's not in standard Lucide
export const WeChatIcon = ({ className }: { className?: string }) => (
    <svg
        viewBox="0 0 24 24"
        fill="currentColor"
        className={className}
        xmlns="http://www.w3.org/2000/svg"
    >
        <path d="M8.69 13.69c-4.48 0-8.1-3.23-8.1-7.21 0-3.99 3.61-7.21 8.1-7.21 4.48 0 8.1 3.22 8.1 7.21 0 3.98-3.62 7.21-8.1 7.21-0.9 0-1.78-0.13-2.6-0.37l-2.27 1.4c-0.18 0.11-0.42 0.05-0.53-0.14-0.03-0.06-0.05-0.13-0.05-0.2v-1.95c-1.57-1.42-2.55-3.41-2.55-5.6 0-4.14 3.8-7.5 8.5-7.5s8.5 3.36 8.5 7.5-3.8 7.5-8.5 7.5c-0.94 0-1.87-0.14-2.73-0.39l-2.39 1.47c-0.19 0.12-0.44 0.06-0.56-0.13-0.04-0.06-0.05-0.13-0.05-0.2v-2.05c-1.65-1.49-2.67-3.58-2.67-5.88z m-2.59-4.12c0.41 0 0.75-0.34 0.75-0.75s-0.34-0.75-0.75-0.75-0.75 0.34-0.75 0.75 0.34 0.75 0.75 0.75z m5.19 0c0.41 0 0.75-0.34 0.75-0.75s-0.34-0.75-0.75-0.75-0.75 0.34-0.75 0.75 0.34 0.75 0.75 0.75z m7.09 7.42c0.36 0 0.65-0.29 0.65-0.65s-0.29-0.65-0.65-0.65-0.65 0.29-0.65 0.65 0.29 0.65 0.65 0.65z m-4.52 0c0.36 0 0.65-0.29 0.65-0.65s-0.29-0.65-0.65-0.65-0.65 0.29-0.65 0.65 0.29 0.65 0.65 0.65z" />
    </svg>
);

export const SOCIALS = [
    {
        label: "GitHub",
        href: "https://github.com/Hana19951208",
        icon: Github
    },
    {
        label: "WeChat",
        href: "#", // Placeholder or QR trigger if needed
        icon: WeChatIcon,
        isWeChat: true // Flag to potentially handle WeChat differently (e.g. tooltip)
    },
];
