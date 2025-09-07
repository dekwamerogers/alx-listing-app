# ALX Listing App

This project is the foundational setup for an Airbnb clone listing page, created as part of the ALX program. The goal is to build a well-structured and maintainable codebase that can be expanded to create a full-featured web application.

## Project Structure

**components/:** Contains all reusable React components, such as Card.tsx and Button.tsx, organized into sub-directories for common elements and specific pages.

**interfaces/:** A central location for all TypeScript interfaces and types, ensuring type safety and consistency across the entire project.

**constants/:** Stores all reusable data, strings, and configuration settings, such as API URLs or text strings, following the principle of "Don't Repeat Yourself" (DRY).

**public/assets/:** This directory is used for all static assets like images, SVGs, and other media files that are served directly to the browser.

## Getting Started

Follow these steps to set up and run the project locally.

**1. Install Dependencies:** Navigate to the project root and install the required packages.

    npx create-next-app@latest alx-listing-app --typescript --tailwind --eslint --no-app-router --no-src-dir

**2. Run the Development Server:** Start the Next.js development server.

    npm run dev

**3. View the App:** Open your browser and visit http://localhost:3000 to see the application running.
