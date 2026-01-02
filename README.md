# Pixel Perfect Quiz Interface

A high-fidelity, responsive React application that replicates a provided Figma design with pixel-perfect accuracy. This project demonstrates advanced frontend skills including glassmorphism, mesh gradients, and strict layout constraints.


## 🛠 Tech Stack
* **Framework:** React.JS (Vite)
* **Language:** TypeScript
* **Styling:** Tailwind CSS
* **Fonts:** Playfair Display (Google Fonts), Inter
* **Icons:** Lucide-React

##  Key Features
* **Pixel-Perfect Implementation:** Meticulous attention to padding, margins, and border radii to match the Figma reference.
* **Glassmorphism UI:** Implemented a "Double-Layer" glass effect using `backdrop-blur`, semi-transparent backgrounds, and white border overlays.
* **Advanced Typography:**
    * **Custom Font Loading:** Integrated *Playfair Display* (Italic/Bold) for headings.
    * **Text Gradients:** Applied complex CSS gradients (`bg-clip-text`) to the main heading (`#1F4E5F` to `#5C9DC3`).
* **Mesh Gradient Background:** A custom radial gradient stack (Cyan/Blue/Violet) that creates depth and ambiance.
* **Interactive States:** Smooth hover effects on quiz options and navigation buttons.

## 📂 Project Structure

```bash
.
├── public/
│   └── cat-paw.gif       # Decorative asset
├── src/
│   ├── components/
│   │   └── QuizCard.tsx  # Main card component containing the quiz logic
│   ├── App.tsx           # Main layout wrapper (Glass container)
│   ├── index.css         # Global styles & Font imports
│   └── main.tsx          # Entry point
├── tailwind.config.js    # Tailwind customizations
└── README.md
