# Horizon UI Dashboard Clone

A responsive React dashboard inspired by the Horizon UI admin template. This project recreates the core Horizon-style experience with reusable components, clean folder organization, route-based navigation, authentication screens, dark/light mode support, and multiple dashboard pages such as NFT Marketplace, Tables, Kanban, and Profile.

## Overview

This project was built as a frontend-focused implementation using React, Vite, Tailwind CSS, and React Router. The goal was to create a polished admin dashboard UI with a structure that is easy to understand, maintain, and extend.

It includes:

- A reusable layout system with sidebar, navbar, cards, tables, and charts
- Responsive pages for desktop and mobile screens
- Dark and light theme support
- Auth pages for sign in, sign up, and forgot password
- Protected routes and a simple local demo auth flow
- Horizon-style visual design across multiple sections

## Pages Included

- Main Dashboard
- NFT Marketplace
- Data Tables
- Kanban Board
- Profile
- Sign In
- Sign Up
- Forgot Password

## Tech Stack

- React 19
- Vite
- Tailwind CSS
- React Router DOM
- React Icons
- Framer Motion
- ESLint

## Features

- Reusable UI components for cards, buttons, inputs, tables, charts, and layout
- Sidebar navigation with protected routes
- Clickable profile access from the navbar
- Light and dark theme switching
- Responsive design improvements for smaller screens
- Mock authentication using `localStorage`
- Clean project structure for GitHub presentation and future scaling

## Authentication Behavior

This project currently uses a frontend-only demo authentication flow.

- Sign in and sign up are handled locally
- User data is stored in `localStorage`
- After login or registration, the app redirects to the dashboard
- Logout clears the stored session

Demo user behavior is defined in [src/Services/authService.js](/c:/Users/HARSHA/Downloads/Harsha_Horizon_UI_Development/horizon-ui/src/Services/authService.js).

## Project Structure

```text
src/
  Components/     Reusable UI, layout, cards, charts, forms, tables
  Context/        App-wide context such as auth and theme
  Hooks/          Custom hooks
  Pages/          Page-level screens and page-specific components
  Routes/         Route configuration and protected route logic
  Services/       Mock data services and auth service
  Utils/          Helpers and validators
```

## Getting Started

### 1. Clone the repository

```bash
git clone <your-repository-url>
cd horizon-ui
```

### 2. Install dependencies

```bash
npm install
```

### 3. Start the development server

```bash
npm run dev
```

### 4. Build for production

```bash
npm run build
```

### 5. Preview the production build

```bash
npm run preview
```

## Available Scripts

- `npm run dev` starts the local development server
- `npm run build` creates the production build
- `npm run preview` previews the production build locally
- `npm run lint` runs ESLint

## Design Notes

- The UI is inspired by the Horizon UI dashboard design language
- The implementation focuses on reusable React components rather than static page-only styling
- Several sections were adjusted for responsive behavior and dark mode support
- Some data, charts, and auth flows are demo implementations for frontend presentation purposes

## Why This Project Is Structured This Way

This repository is organized to make it easy for recruiters, collaborators, and future contributors to understand the code quickly.

- Shared UI lives in reusable component folders
- Page-specific logic stays inside page folders
- Services handle mock data separately from presentation
- Route definitions are centralized for easier maintenance
- Theme and auth logic are isolated in context providers

## Future Improvements

- Connect authentication to a real backend
- Replace mock dashboard data with API-driven data
- Add unit and integration tests
- Improve accessibility with deeper keyboard and screen-reader support
- Add chart libraries for more advanced visualizations
- Add role-based access control

## Author

Built by Harsha as a frontend dashboard implementation project.

## License

This project is for learning, portfolio, and development purposes. If you plan to use Horizon UI brand assets or exact design resources commercially, please review the original design/template licensing terms separately.
