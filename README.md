# Personal Developer Portfolio & Website

A clean, minimalist developer portfolio and personal site built with Astro 5, Tailwind CSS v4, TypeScript, and Keystatic CMS. It is designed to be fast, fully accessible, easy to update locally, and automatically deployed to DirectAdmin hosting via GitHub Actions.

## Overview

This project serves as both a personal portfolio and a technical blog. Content can be managed locally through a visual Keystatic CMS interface or edited directly in Markdown and JSON files.

### Key Highlights

- **Static Performance**: Uses Astro's static site generation to pre-render HTML pages for fast load times and minimal browser overhead.
- **Git-Backed CMS**: Integrated local Keystatic dashboard (`/keystatic`) to manage profile information, tech stack items, experience history, projects, and posts without a database.
- **Theme & Design**: Dark and light mode toggle with saved preferences, along with a subtle background canvas effect.
- **Search & Filtering**: In-browser search across projects and writing, with tag filters for quick navigation.
- **Accessibility Tools**: Built-in accessibility menu allowing visitors to adjust font size, enable high contrast, increase letter spacing, reduce motion, and highlight interactive links.
- **Work Phone & Extension Handling**: Contact section handles phone links containing extension pauses (such as commas and semicolons) for direct dialing.
- **Automated Deployment**: A GitHub Actions workflow builds and syncs static production files to DirectAdmin hosting over SSH/SFTP using `rsync`.

## Tech Stack

- **Framework**: Astro 5
- **Styling**: Tailwind CSS v4
- **CMS**: Keystatic CMS (Local Git-backed mode)
- **Icons**: Lucide Astro
- **Language**: TypeScript
- **Deployment**: GitHub Actions + `rsync` over SSH/SFTP

## Getting Started

### Prerequisites

- Node.js v20 or higher
- npm or pnpm

### Local Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/tolisdev/portfolio.git
   cd portfolio
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. View the project:
   - Website: `http://localhost:4321`
   - Keystatic Admin Panel: `http://localhost:4321/keystatic`

## Project Structure

```text
├── src/
│   ├── components/         # UI components (Header, Contact, ThemeToggle, AccessibilityWidget)
│   ├── content/            # Local Keystatic data (Profile, Stack, Experience, Projects, Posts)
│   ├── layouts/            # Base HTML layouts
│   ├── pages/              # Astro routes and dynamic post templates
│   ├── styles/             # Global CSS and Tailwind imports
│   └── utils/              # Helper functions (reading time, tag parsing)
├── public/                 # Static public assets and images
├── keystatic.config.ts     # Keystatic collections and schema definitions
├── astro.config.mjs        # Astro configuration
└── .github/workflows/      # GitHub Actions deployment workflow
```

## Deployment

To push content updates or code changes live to the server, run:

```bash
npm run publish
```

This script stages modified files, commits the update, and pushes to the `main` branch. GitHub Actions then builds the static site and syncs the output files to the DirectAdmin web directory.

## License

MIT License. Developed by [Apostolos Katsoudas](https://github.com/tolisdev).
