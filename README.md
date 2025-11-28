# 🚀 Quick Templates

<div align="center">
  <img src="images/logo.png" alt="Quick Templates Logo" width="120" height="120">
  
  <h3 align="center">Your templates. Organized. Accessible everywhere.</h3>

  <p align="center">
    A powerful Chrome Extension for managing text templates, accompanied by a stunning landing page.
    <br />
    <a href="#-installation--setup"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://chromewebstore.google.com/detail/quick-templates/fdkenmhhaadhadnfmhpmjhggjidognec?hl=ru">View on Chrome Web Store</a>
    ·
  </p>
</div>

---

![Version](https://img.shields.io/badge/version-1.1-blue?style=for-the-badge&color=4fc3dc)
![Manifest](https://img.shields.io/badge/Manifest-V3-success?style=for-the-badge&color=ff2d75)
![License](https://img.shields.io/badge/license-MIT-green?style=for-the-badge)

## 📖 Table of Contents

- [Overview](#-overview)
- [🌐 The Website (Landing Page)](#-the-website-landing-page)
  - [Design Philosophy](#design-philosophy)
  - [Tech Stack](#tech-stack-web)
- [🧩 The Chrome Extension](#-the-chrome-extension)
  - [User Features](#user-features)
  - [Technical Architecture](#technical-architecture)
  - [Permissions Explained](#permissions-explained)
- [📂 Project Structure](#-project-structure)
- [🛠️ Installation & Setup](#-installation--setup)
- [Author](#-author)

---

## 🔭 Overview

**Quick Templates** is a dual-component project designed to streamline productivity:

1.  **The Extension:** A comprehensive productivity tool replacing standard "Response Boxes." It allows users to create, organize, and inject text templates into any website via a context menu.
2.  **The Website:** A modern, high-performance landing page designed to showcase the extension's capabilities with advanced CSS animations and glassmorphism UI.

---

## 🌐 The Website (Landing Page)

The repository includes the official landing page (`index.html`), built to visually represent the fluidity and speed of the extension.

### Design Philosophy

*   **🎨 Glassmorphism UI:** The site heavily utilizes `backdrop-filter: blur()` and semi-transparent backgrounds (`rgba`) to create a deep, frosted glass aesthetic consistent with the extension's internal design.
*   **✨ Ambient Animations:**
    *   **Floating Bubbles:** A pure CSS animation (`domains-bubbles`) generates varying sizes of blue and pink orbs that float upward, creating a dynamic "lava lamp" effect.
    *   **Text Effects:** Gradient text animations (`animated-gradient-text`) and scroll-triggered fade-ins (`fade-in` class).
*   **📱 Responsive & Interactive:**
    *   Built with a mobile-first approach using **Tailwind CSS**.
    *   Includes a custom JavaScript Modal Gallery to view screenshots.

### Tech Stack (Web)
*   **HTML5:** Semantic structure.
*   **CSS3:** Custom animations, Flexbox/Grid layouts.
*   **Tailwind CSS:** Used via CDN for rapid utility styling.
*   **Vanilla JS:** Lightweight logic for DOM manipulation (Modals, Scroll Observers).

---

## 🧩 The Chrome Extension

The core of this repository is the **Manifest V3** Chrome Extension. It is engineered for privacy, speed, and ease of use, operating entirely client-side.

### User Features

*   **⚡ Drag & Drop Interface:**
    *   Sort templates and categories visually.
    *   Seamlessly move templates between categories.
    *   Automatic state saving ensures your layout is always preserved.
*   **🖱️ Smart Context Menu:**
    *   Right-click on *any* editable field on the web.
    *   Select a template to instantly insert text.
    *   *Fallback:* If no field is focused, the text is copied to the clipboard.
*   **📂 Organization:**
    *   Create unlimited categories (collapsible for cleaner UI).
    *   Search bar to filter templates by title or content in real-time.
*   **💾 Data Portability:**
    *   **Import/Export:** Full JSON backup support. Transfer your templates between computers easily.
    *   **Dark Mode:** Native dark theme (`#0c192c`) to reduce eye strain.

### Technical Architecture

*   **Manifest V3:** Fully compliant with modern Chrome security and performance standards.
*   **Service Worker (`background.js`):**
    *   Dynamically builds the Context Menu based on storage data.
    *   Uses `chrome.scripting.executeScript` to inject text safely into the active tab.
*   **Storage Strategy:** Utilizes `chrome.storage.local` for persistent, asynchronous data handling.
*   **Event Delegation:** The options page (`quick_templates.js`) uses robust event delegation to handle dynamic elements efficienty (minimizing event listeners).

### Permissions Explained

The extension requires specific permissions to function. Here is the technical justification for each:

| Permission | Justification |
| :--- | :--- |
| `storage` | Required to save categories, templates, and user preferences locally on the device. |
| `contextMenus` | Necessary to create the right-click menu items for quick insertion. |
| `scripting` | Used to programmatically insert text into the active web page's input fields. |
| `downloads` | Required for the "Export" feature to save your backup `.json` file. |
| `host_permissions` | `<all_urls>` is required so the Context Menu appears on every website you visit. |

---

## 📂 Project Structure

```text
root/
├── images/                 # Icons, Logos, and Screenshots
├── background.js           # Service Worker (Context Menu & Injection Logic)
├── manifest.json           # Extension Configuration (Manifest V3)
├── quick_templates.html    # Extension Main Interface (Options Page)
├── quick_templates.css     # Extension Specific Styling
├── quick_templates.js      # Extension Logic (CRUD, Drag&Drop, Import/Export)
├── index.html              # Landing Page HTML
├── style.css               # Landing Page Custom CSS & Animations
└── script.js               # Landing Page Logic
