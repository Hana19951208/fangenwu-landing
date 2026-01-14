# ☁️ Fangenwu.cn Landing Page

> A minimalist landing page for technical profile. | 极简主义风格的个人技术入口主页

![Status](https://img.shields.io/badge/status-active-success.svg)
![License](https://img.shields.io/badge/license-MIT-blue.svg)
![React](https://img.shields.io/badge/react-19.0.0-61DAFB.svg)
![Cloudflare](https://img.shields.io/badge/deploy-cloudflare-orange.svg)

[🇨🇳 中文文档](README.md)

## 📖 Introduction

This is the main entry point for `fangenwu.cn`. The design philosophy is **"Less is More"**.
It acts as a central hub connecting the blog, image services, AI labs, and other subsystems, while also featuring a built-in lightweight technical blog system, all maintaining high performance and a professional look.

## 🌟 Features

- **Minimalist Design**: Black, white, and gray palette for a restrained and professional visual style.
- **Internationalization (i18n)**: Seamless Chinese/English switching with real-time content updates.
- **Technical Blog**:
  - Built-in Markdown rendering engine with code highlighting.
  - Minimalist article list and detail pages with smooth route transition animations.
  - Fully static, no backend database required.
- **High Performance**: Built on Vite (Rolldown) for instant loading.

## 🛠️ Tech Stack

- **Core**: ⚛️ React 19 + TypeScript
- **Routing**: 🛣️ React Router v7
- **Content**: 📝 React Markdown + Syntax Highlighter + Remark GFM
- **Build**: ⚡ Vite (Rolldown)
- **Styling**: 🎨 Tailwind CSS v4 (Zero-runtime)
- **I18n**: 🌐 i18next (Dual language support)
- **Icons**: 🖌️ Lucide React

## 🚀 Quick Start

### Prerequisites
- Node.js > 18
- pnpm (Recommended)

### Installation & Running

```bash
# 1. Clone the repository
git clone https://github.com/Hana19951208/fangenwu-landing.git

# 2. Install dependencies
pnpm install

# 3. Start development server
pnpm dev
# Visit http://localhost:3333
```

## 📂 Project Structure

```bash
src/
├── components/
│   ├── layout/      # Layout Components (Footer)
│   └── ui/          # Atomic Components
├── data/            # Data Sources (Links, Blog Posts)
├── locales/         # I18n Resources
│   ├── en/          # English
│   └── zh/          # Chinese
├── pages/           # Page Views (Home, Blog List, Post Detail)
├── posts/           # Markdown Source Files
├── lib/             # Utilities
└── App.tsx          # Router Entry
```

## 🚢 Deployment

This project is optimized for **Cloudflare Pages**.

1.  Connect repository to Cloudflare Pages.
2.  **Build Settings**:
    *   **Framework Preset**: Vite
    *   **Build Command**: `pnpm build`
    *   **Output Directory**: `dist`

## 📄 License

MIT License © 2026 Hana
