export interface BlogPost {
    slug: string;
    date: string;
    tags: string[];
}

export const POSTS: BlogPost[] = [
    {
        slug: 'system-design-thinking',
        date: '2025-10-24',
        tags: ['architecture', 'system_design']
    },
    {
        slug: 'llm-agent-workflow',
        date: '2025-09-12',
        tags: ['ai', 'llm', 'engineering']
    },
    {
        slug: 'clean-code-practice',
        date: '2025-08-05',
        tags: ['refactoring', 'best_practices']
    },
    {
        slug: 'frontend-performance',
        date: '2025-07-20',
        tags: ['frontend', 'performance', 'vite']
    }
];
