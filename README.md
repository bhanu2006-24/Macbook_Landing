# Apple MacBook Pro Landing Page Clone 🍎💻

A stunning, pixel-perfect clone of the Apple MacBook Pro landing page, built with modern web technologies including React, Three.js, and GSAP. This project demonstrates high-performance animations, interactive 3D models, and a responsive design that mimics the premium feel of Apple's official website.

![Project Preview](./public/laptop.png)

## 🚀 Live Demo

[Check out the live view here!](https://bhanu2006-24.github.io/Macbook_Landing/)

## ✨ Key Features

- **Interactive 3D Models**: Implemented using **Three.js** and **React Three Fiber**, allowing users to view the MacBook Pro in a realistic 3D environment.
- **Smooth Scrolling Animations**: Powered by **GSAP (GreenSock Animation Platform)** and **ScrollTrigger** for cinematic text reveals, image transitions, and parallax effects.
- **Responsive Design**: Fully responsive layout that adapts seamlessly to desktops, laptops, tablets, and mobile devices.
- **Dynamic Video Textures**: 3D screens that play video content in sync with user interaction.
- **Modern Styling**: Built with **Tailwind CSS v4** for rapid, utility-first styling and animations.
- **State Management**: Uses **Zustand** for efficient global state management (e.g., controlling 3D model properties).

## 🛠️ Tech Stack

- **Frontend Framework**: [React](https://react.dev/)
- **Build Tool**: [Vite](https://vitejs.dev/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Animations**: [GSAP](https://greensock.com/gsap/)
- **3D Graphics**: [Three.js](https://threejs.org/), [React Three Fiber](https://docs.pmnd.rs/react-three-fiber/), [React Three Drei](https://github.com/pmndrs/drei)
- **State Management**: [Zustand](https://github.com/pmndrs/zustand)
- **Responsiveness**: [React Responsive](https://github.com/yocontra/react-responsive)

## ⚙️ Installation & Running Locally

Follow these steps to set up the project locally on your machine:

1.  **Clone the repository:**

    ```bash
    git clone https://github.com/your-username/Macbook_Landing.git
    cd Macbook_Landing
    ```

2.  **Install dependencies:**

    ```bash
    npm install
    ```

3.  **Run the development server:**

    ```bash
    npm run dev
    ```

4.  **Open in Browser:**
    Navigate to `http://localhost:5173` to view the application.

## 📦 Building for Production

To create a production-ready build:

```bash
npm run build
```

The build artifacts will be stored in the `dist/` directory.

## 🚀 Deployment

This project is configured for deployment on **GitHub Pages**.

1.  **Build and Deploy:**

    ```bash
    npm run deploy
    ```

    This command runs the build script and then deploys the `dist` folder to the `gh-pages` branch.

## 📂 Project Structure

```
Macbook_Landing/
├── public/             # Static assets (3D models, images, videos)
├── src/
│   ├── components/     # Reusable React components (Navbar, Hero, 3D Models, etc.)
│   ├── constants/      # Static data and configuration
│   ├── store/          # Zustand store for state management
│   ├── App.jsx         # Main application component
│   ├── index.css       # Global styles and Tailwind imports
│   └── main.jsx        # Entry point
├── .gitignore
├── package.json
├── tailwind.config.js
└── vite.config.js
```

## 🤝 Credits

- Design inspiration layout from [Apple](https://www.apple.com/macbook-pro/).
- 3D Models sourced from Sketchfab/Community (Credits in component files).
- Tutorial/Inspiration: JS Mastery.

---

_Note: This is a fan-made educational project and is not affiliated with Apple Inc._
