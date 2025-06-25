# 🍕 PizzaFast

A modern, responsive pizza ordering web application built with Next.js, TypeScript, and Tailwind CSS. PizzaFast allows users to quickly browse, search, and order delicious pizzas with a clean and interactive UI.

[![Live Demo](https://img.shields.io/badge/Live-Demo-orange)](https://pizza-fast-psi.vercel.app/)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE.md)
[![Made with Next.js](https://img.shields.io/badge/Made%20with-Next.js-000000?style=flat&logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=flat&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)

![Screenshot](https://raw.githubusercontent.com/irfan-za/pizza-fast/refs/heads/main/public/images/screenshot.png)

Live demo: [PizzaFast App](https://pizza-fast-psi.vercel.app/)

## ✨ Features

- **Responsive Design**: Looks great on all devices from mobile to desktop
- **Interactive UI**: Smooth animations and micro-interactions for a better user experience
- **Search Functionality**: Find your favorite pizza with URL query persistence for sharing search results
- **Order Management**:
  - Create, read, update, and delete (CRUD) operations for orders
  - Session persistence using sessionStorage
  - Limit of 10 pizzas per item for inventory management
- **Hybrid Rendering**:
  - Partial pre-rendering with server-side components
  - Client-side rendering for interactive elements
- **Loading States**: Skeleton UI with simulated loading for better UX
- **Accessibility**: Built with accessibility in mind for all users

## ⚡ Performance

![Lighthouse Scores](https://raw.githubusercontent.com/irfan-za/pizza-fast/refs/heads/main/public/images/lighthouse.png)

You can check the Lighthouse scores yourself using this link:
[View Lighthouse Report](https://googlechrome.github.io/lighthouse/viewer/?psiurl=https%3A%2F%2Fpizza-fast-psi.vercel.app%2F&strategy=desktop&category=performance&category=accessibility&category=best-practices&category=seo&locale=en-US&utm_source=lh-chrome-ext)

## 🛠️ Tech Stack

- **Framework**: [Next.js 15](https://nextjs.org/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **UI Components**: [shadcn/ui](https://ui.shadcn.com/)
- **State Management**: [Zustand](https://github.com/pmndrs/zustand)
- **Package Manager**: [pnpm](https://pnpm.io/)
- **Deployment**: [Vercel](https://vercel.com/)

## 🏃‍♂️ Getting Started

### Prerequisites

- Node.js 20+
- pnpm (recommended) or npm/yarn

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/irfan-za/pizza-fast.git
   cd pizza-fast
   ```

2. Install the dependencies:

   ```bash
   pnpm install
   ```

3. Run the development server:

   ```bash
   pnpm dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) with your browser to see the application.

## 📁 Project Structure

```
pizza-fast/
├── public/              # Static assets
│   ├── images/          # Images for the application
├── src/                 # Source code
│   ├── app/             # Next.js App Router
│   │   ├── order/       # Order page
│   │   ├── globals.css  # Global styles
│   │   ├── layout.tsx   # Root layout
│   │   └── page.tsx     # Home page
│   ├── components/      # React components
│   │   ├── layout/      # Layout components
│   │   ├── order/       # Order-related components
│   │   ├── pizza/       # Pizza-related components
│   │   └── ui/          # UI components (shadcn)
│   ├── data/            # Static data
│   │   └── pizzas.json  # Pizza menu data
│   ├── lib/             # Utility functions
│   │   └── utils.ts     # Helper functions
│   ├── store/           # Zustand stores
│   │   └── order.ts     # Order state management
│   └── types/           # TypeScript type definitions
└── package.json         # Project dependencies
```

## 🔄 State Management

The application uses Zustand for state management, particularly for handling pizza orders:

- **Order Store**: Manages the ordered pizza state
- **Session Persistence**: Order data is stored in sessionStorage to persist across page refreshes
- **Pizza Store**: Manages the search and filtering state with URL query persistence

## 📱 Responsive Design

The UI is fully responsive with carefully crafted breakpoints:

- **Mobile**: Single column layout optimized for small screens
- **Tablet**: Two-column grid layout for pizza items
- **Desktop**: Clean four-column grid layout with enhanced visual elements

## 📄 License

This project is licensed under the MIT License - see the [LICENSE.md](https://github.com/irfan-za/pizza-fast/blob/main/LICENSE.md) file for details.
