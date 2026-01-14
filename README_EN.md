# ☁️ Fangenwu.cn Landing Page

> A minimalist landing page for technical profile. | 极简主义风格的个人技术入口主页

![Status](https://img.shields.io/badge/status-active-success.svg)
![License](https://img.shields.io/badge/license-MIT-blue.svg)
![React](https://img.shields.io/badge/react-19.0.0-61DAFB.svg)

[🇨🇳 中文文档](README.md)

## 📖 Introduction

This is the main entry point for `fangenwu.cn`. The design philosophy is **"Less is More"**.
It acts as a central hub connecting the blog, image services, AI labs, and other subsystems while maintaining high performance and a professional look.

## 🛠️ Tech Stack

- **Core**: ⚛️ React 19 + TypeScript
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
│   └── ui/          # Atomic Components
├── data/            # Data Source
├── locales/         # I18n Resources
│   ├── en/          # English
│   └── zh/          # Chinese
├── lib/             # Utilities
└── App.tsx          # Main Layout
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
