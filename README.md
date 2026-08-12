# 🚀 Developer Portfolio & Personal Website

A high-performance, minimalist developer portfolio and blog built with **Astro 5**, **Tailwind CSS v4**, **TypeScript**, and **Keystatic CMS**. Designed for lightning-fast page loads, exceptional typography, full accessibility, and automated static deployment to DirectAdmin via GitHub Actions.

---

## ✨ Features

- **⚡ Blazing Fast Architecture**: Built with Astro 5 static site generator for near-instant page load times and zero unnecessary runtime overhead.
- **🎨 Glassmorphic & Minimalist Design**: Custom dark/light mode toggle with persistent preferences and soft particle background animations.
- **📝 Git-Backed Keystatic CMS**: Integrated local CMS dashboard (`/keystatic`) allowing you to edit profile information, tech stack, experience, featured projects, tags, and articles visually with zero database setup.
- **🔍 Live Search & Tag Filtering**: Instant client-side search across projects and posts, with dynamic tag badge filtering.
- **👁️ Full Accessibility Suite**: Integrated Accessibility Widget offering:
  - Text Size Scaling (Normal, Large, Extra Large)
  - High Contrast Theme Mode
  - Dyslexia-Friendly Reading Spacing
  - Reduced Motion Toggle (pauses animations)
  - Interactive Link & Focus Highlighting
- **⏱️ Article Reading Time Indicator**: Automatically calculates estimated reading times for long-form posts.
- **📞 Work Phone & Extension Dialing**: Supports standard `tel:` links with dial pauses (commas `,` and wait semicolons `;`) for extensions.
- **📱 100% Responsive & SEO Optimized**: Complete Open Graph meta tags, Twitter cards, RSS feed, XML sitemap, and JSON-LD structured schema.
- **🔄 Automated GitHub Actions Deployment**: Instant deployment to DirectAdmin hosting via native `rsync` over SSH/SFTP on every push to `main`.

---

## 🛠️ Tech Stack

- **Framework**: [Astro 5](https://astro.build/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **CMS**: [Keystatic CMS](https://keystatic.com/) (Local Git-backed mode)
- **Icons**: [Lucide Astro](https://lucide.dev/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Deployment**: [GitHub Actions](https://github.com/features/actions) + `rsync` SFTP

---

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) v20 or higher
- `npm` or `pnpm`

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/tolisdev/portfolio.git
   cd portfolio
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the local development server:
   ```bash
   npm run dev
   ```

4. Open your browser:
   - **Main Website**: `http://localhost:4321`
   - **Keystatic Admin UI**: `http://localhost:4321/keystatic`

---

## 📦 Project Structure

```text
├── src/
│   ├── components/         # Reusable Astro UI components (Header, Contact, ThemeToggle, AccessibilityWidget, etc.)
│   ├── content/            # Keystatic content files (Profile, Tech Stack, Experience, Projects, Posts)
│   ├── layouts/            # Page layouts (BaseLayout)
│   ├── pages/              # Astro routes & dynamic post pages ([slug].astro)
│   ├── styles/             # Global CSS variables & Tailwind imports
│   └── utils/              # Helper utilities (readingTime, tag extractors)
├── public/                 # Static assets, images, and favicons
├── keystatic.config.ts     # Keystatic schema & singleton configuration
├── astro.config.mjs        # Astro configuration & integrations
└── .github/workflows/      # Automated DirectAdmin SFTP deployment workflow
```

---

## 🚀 Publishing Updates Live

When you finish editing your content in Keystatic or making code changes, run:

```bash
npm run publish
```

This script stages your changes, creates a content commit, and pushes to `main`. GitHub Actions will automatically compile the static site and upload the updated files to your web server via `rsync`.

---

## 📄 License

MIT License. Designed and developed by [Apostolos Katsoudas](https://github.com/tolisdev).
