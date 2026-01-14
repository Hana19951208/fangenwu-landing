# ☁️ Fangenwu.cn Landing Page

> 极简主义风格的个人技术入口主页 | A minimalist landing page for technical profile.

![Status](https://img.shields.io/badge/status-active-success.svg)
![License](https://img.shields.io/badge/license-MIT-blue.svg)
![React](https://img.shields.io/badge/react-19.0.0-61DAFB.svg)

[🇺🇸 English Documentation](README_EN.md)

## 📖 简介 | Introduction

这是 `fangenwu.cn` 的主入口页面。设计理念是 **"Less is More"**（少即是多）。
它作为一个中心枢纽，连接了博客、图床、AI 实验室等各个子系统，同时保持了极高的加载速度和专业感。


## 🛠️ 技术栈 | Tech Stack

- **Core**: ⚛️ React 19 + TypeScript
- **Build**: ⚡ Vite (Rolldown)
- **Styling**: 🎨 Tailwind CSS v4 (Zero-runtime)
- **I18n**: 🌐 i18next (Dual language support)
- **Icons**: 🖌️ Lucide React

## 🚀 快速开始 | Quick Start

### 环境准备 | Prerequisites
- Node.js > 18
- pnpm (推荐 / Recommended)

### 安装与运行 | Installation & Running

```bash
# 1. 克隆项目
git clone https://github.com/Hana19951208/fangenwu-landing.git

# 2. 安装依赖
pnpm install

# 3. 启动开发服务器
pnpm dev
# 访问 http://localhost:3333
```

## 📂 目录结构 | Project Structure

```bash
src/
├── components/
│   └── ui/          # 原子组件 (Atomic Components)
├── data/            # 数据源 (Data Source)
├── locales/         # 国际化资源 (I18n Resources)
│   ├── en/          # English
│   └── zh/          # 中文
├── lib/             # 工具函数 (Utilities)
└── App.tsx          # 主布局 (Main Layout)
```

## 🚢 部署 | Deployment

本项目已针对 **Cloudflare Pages** 优化。

1.  Connect repository to Cloudflare Pages.
2.  **Build Settings**:
    *   **Framework Preset**: Vite
    *   **Build Command**: `pnpm build`
    *   **Output Directory**: `dist`

## 📄 许可证 | License

MIT License © 2026 Hana
