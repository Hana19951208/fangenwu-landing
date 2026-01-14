# ☁️ Fangenwu.cn Landing Page

> 极简主义风格的个人技术入口主页 | A minimalist landing page for technical profile.

![Status](https://img.shields.io/badge/status-active-success.svg)
![License](https://img.shields.io/badge/license-MIT-blue.svg)
![React](https://img.shields.io/badge/react-19.0.0-61DAFB.svg)
![Cloudflare](https://img.shields.io/badge/deploy-cloudflare-orange.svg)

[🇺🇸 English Documentation](README_EN.md)

## 📖 简介 | Introduction

这是 `fangenwu.cn` 的主入口页面。设计理念是 **"Less is More"**（少即是多）。
它作为一个中心枢纽，连接了博客、图床、AI 实验室等各个子系统，同时内置了一个轻量级的技术博客系统，保持了极高的加载速度和专业感。

## 🌟 功能特性 | Features

- **极简设计**: 黑白灰主色调，克制且专业的视觉风格。
- **国际化 (i18n)**: 中/英双语无缝切换，内容实时更新。
- **技术博客**: 
  - 内置 Markdown 渲染引擎，支持代码高亮。
  - 极简文章列表与详情页，丝滑的路由过渡动画。
  - 完全静态化，无需后端数据库。
- **高性能**: 基于 Vite (Rolldown) 构建，秒级加载。

## 🛠️ 技术栈 | Tech Stack

- **Core**: ⚛️ React 19 + TypeScript
- **Routing**: 🛣️ React Router v7
- **Content**: 📝 React Markdown + Syntax Highlighter + Remark GFM
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
│   ├── layout/      # 布局组件 (Footer)
│   └── ui/          # 原子组件 (Atomic Components)
├── data/            # 数据源 (Links, Blog Posts)
├── locales/         # 国际化资源 (I18n Resources)
│   ├── en/          # English
│   └── zh/          # 中文
├── pages/           # 页面视图 (Home, Blog List, Post Detail)
├── posts/           # Markdown 文章源文件
├── lib/             # 工具函数 (Utilities)
└── App.tsx          # 路由入口 (Routing)
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
