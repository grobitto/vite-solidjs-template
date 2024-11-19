# Vite SolidJS Template

This is a starter template for building applications with [Vite](https://vitejs.dev/), [SolidJS](https://solidjs.com/), and other essential tools for a modern development workflow.

## Features

- **Vite**: Fast and optimized build tool.
- **SolidJS**: A declarative JavaScript library for building user interfaces.
- **ESLint**: Pluggable linting utility for JavaScript and JSX.
- **Stylelint**: A mighty, modern linter that helps you avoid errors and enforce conventions in your styles.
- **Husky & Commit Hooks**: Git hooks made easy, ensuring code quality before commits.
- **Hey-API**: Client generation for API communication
- **scss-index-generator** to automatically generate \_index.scss files for your partials folder

## Getting Started

### Prerequisites

Make sure you have [Node.js](https://nodejs.org/) installed.

### Installation

1. Clone the repository:

```sh
npx degit grobitto/vite-solidjs-template my-new-project
cd my-new-project
npm install
```

2. Install dependencies:

```sh
npm install
```

### Development

Start the development server:

```sh
npm run dev
```

### Commit Hooks

Husky is used to manage Git hooks. Pre-configured hooks will run linting checks before commits.

### API Client Generation

Use Hey-API for generating API clients:

```sh
npm run api
```
