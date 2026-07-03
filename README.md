# BPATCSC - College Website Redesign

A front-end redesign concept for the Bangladesh Public Administration Training Centre School & College (BPATCSC) located in Savar, Dhaka. This project focuses on high legibility, performance, and strict web accessibility standards.

## Live Demo
[Insert your GitHub Pages link here after deployment]

## Key Features
* **Semantic HTML5 Structure:** Built using proper architectural tags (`<header>`, `<main>`, `<section>`, `<article>`, `<footer>`) to ensure clean document outline layouts.
* **Accessible Navigation:** Desktop mega-menu and mobile accordion drawer controlled natively via JavaScript using `aria-expanded` and `aria-controls` states for screen-reader and keyboard compatibility.
* **Vanilla SVG Animation:** A dependency-free line-drawing hero animation engineered using SVG `stroke-dasharray` and `stroke-dashoffset` properties triggered via `IntersectionObserver`.
* **Mobile-First Responsive Layout:** Handcrafted fluid grids and Flexbox systems adapting seamlessly from mobile viewports up to widescreen displays.
* **Performance & Performance Preferences:** Optimized using native CSS transitions and a system that respects user accessibility preferences via `prefers-reduced-motion` media queries.

## Tech Stack
* **Markup:** HTML5
* **Styling:** CSS3 (Custom Properties, Flexbox, CSS Grid)
* **Scripting:** Vanilla JavaScript (ES6+)

## Project File Architecture
* `index.html` - Core structural layout and accessibility anchor tags.
* `style.css` - Custom design tokens, typography scales, layouts, and responsive breakpoints.
* `script.js` - Dynamic DOM manipulation for sticky header behavior, menu states, and scroll animations.
