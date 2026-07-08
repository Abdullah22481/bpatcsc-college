# BPATCSC Institutional Web Portal Architecture

A frontend web portal built for the Bangladesh Public Administration Training Centre School & College (BPATCSC)[cite: 1, 2, 3]. This repository demonstrates a highly structured vanilla frontend development workflow, showcasing maintainable component architecture, performance engineering, and accessible user flows without relying on heavy third-party framework overhead.

🔗 **Live Website Link:** [https://abdullah22481.github.io/bpatcsc-college/]

---

## Engineering & Architectural Highlights

* **BEM (Block-Element-Modifier) Structural Cascades:** CSS styling architecture uses strict BEM conventions throughout `style.css` to isolate component scope, enforce flat specificity trees, and prevent global style pollution[cite: 5].
* **Calculated Motion and Performance Optimization:** Animation layouts inside `script.js` track element coordinates natively using the browser's `IntersectionObserver` interface to trigger drawing states only when paths cross the active viewport matrix[cite: 4].
* **Responsive Fluidity & Layout Transitions:** Media tracking properties in `style.css` scale smoothly across different device sizes using native fluid functions like `clamp()`, adapting the header structure cleanly from multi-tiered desktop mega menus into locked mobile accordion drawer setups[cite: 5].
* **Built-in Accessibility Pipeline:** HTML templates incorporate a functional keyboard layout skip link navigation layer, semantic structural boundaries, explicitly handled layout target controls, and native styling configurations for keyboard-only focus states using `:focus-visible`[cite: 1, 2, 3, 5].
* **Reduced Motion Compliance:** Explicit design guardrails in `style.css` query user operating system motion profiles, overriding animation properties with immediate non-transition execution states to protect users sensitive to screen flashing or movement[cite: 5].

---

## Core Repository Layout

* **`index.html`**: Establishes the main institutional landing portal, displaying dynamic operational notices, responsive user action components, embedded structural vector assets, and system module shortcut grids.
* **`about.html`**: Handles static background data matrices, structural mission and vision statements, leadership briefs, and multi-tier administrative governance card grids[cite: 1].
* **`academics.html`**: Houses full informational tables detailing academic rules, continuous evaluation sequences, selective subject matrices, and school/college uniform criteria[cite: 2].
* **`style.css`**: Configures global variables for centralized theme tokens, custom typography parameters, structural alignment behaviors, and adaptive view configurations[cite: 5].
* **`script.js`**: Drives all non-blocking user interaction handling, responsive panel state updates, dynamic date mutations, and layout intersection tracking loops[cite: 4].

---

## Component Execution & Logic Paths

### Non-Blocking Vector Animation
The animated line-art architecture on the main interface runs on native asynchronous loops:
* The system evaluates paths across the SVG structure inside `index.html` during the initialization cycle[cite: 3].
* Code in `script.js` reads structural element dimensions via the native `getTotalLength()` boundary function to calculate explicit rendering delays on the fly[cite: 4].
* Execution updates pass calculations directly into custom CSS properties (`--len`, `--delay`), completing the animation process smoothly without causing thread blocks[cite: 4, 5].

### Complex Responsive Navigation Ecosystem
The primary navigation layer handles layouts differently depending on screen sizes:
* **Desktop Views:** Interactive drop-down nodes and multi-column mega menus deploy through CSS hover variables and back-end script actions that dismiss menus on outside clicks or `Escape` key inputs[cite: 4, 5].
* **Mobile Viewports (≤720px):** Scripts in `script.js` intercept target operations to cleanly transform the navigation layout into a vertical scroll drawer, modifying ARIA tracking elements dynamically to maintain accessibility[cite: 4, 5].

---

## Local Environment Execution

### System Pre-requisites
* Any standard modern desktop or mobile web browser environment.
* No package compilers, runtime engines, or toolchain dependencies required.

### Launch Sequence
1. Clone the project files locally:
   ```bash
   git clone https://github.com/Abdullah22481/bpatcsc-college.git
