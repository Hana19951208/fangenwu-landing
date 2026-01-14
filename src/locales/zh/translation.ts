export default {
    hero: {
        role: "系统工程师 // AI 架构师",
        description: "探索后端架构与人工智能的边界。构建可靠、可扩展的自动化系统。"
    },
    links: {
        blog: {
            title: "技术笔记",
            description: "工程日志、架构决策与学习路径记录。"
        },
        images: {
            title: "图床服务",
            description: "内容分发网络与静态资源管理系统。"
        },
        ai: {
            title: "AI & API 实验室",
            description: "实验性 LLM 接口与智能体工作流。"
        },
        status: {
            title: "基础设施状态",
            description: "实时服务监控与健康度指标。"
        }
    },
    blog: {
        title: "技术笔记",
        description: "工程日志、架构思考与学习记录。",
        back: "返回主页",
        backToBlog: "返回博客"
    },
    tags: {
        architecture: "架构",
        system_design: "系统设计",
        ai: "AI",
        llm: "大模型",
        engineering: "工程化",
        refactoring: "重构",
        best_practices: "最佳实践",
        frontend: "前端",
        performance: "性能优化",
        vite: "Vite"
    },
    posts: {
        'system-design-thinking': {
            title: "复杂系统设计的取舍之道",
            summary: "在构建高可用分布式系统时，我们往往需要在一致性与可用性之间做出艰难抉择。本文记录了某金融核心系统重构过程中的关键决策。"
        },
        'llm-agent-workflow': {
            title: "构建可控的 LLM Agent 工作流",
            summary: "从 Prompt Engineering 到 Chain of Thought，探讨如何让大模型在生产环境中输出稳定、可预期的结果。"
        },
        'clean-code-practice': {
            title: "代码整洁之道：重构遗留系统",
            summary: "记录一次对 5 年陈旧代码库的重构经历，如何在不中断业务的前提下提升代码可维护性。"
        },
        'frontend-performance': {
            title: "极致性能优化：从 3s 到 0.3s",
            summary: "前端性能优化不仅仅是压缩图片。深入探讨 Resource Hints、Code Splitting 以及 Web Worker 的实际应用场景。"
        }
    },
    footer: {
        version: "v1.0.0"
    }
}
