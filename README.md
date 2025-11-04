# Neumorphism Tailwind CSS Plugin

A Tailwind CSS plugin that provides utility classes for creating beautiful neumorphic (soft UI) designs. This repository contains the plugin implementation and a Next.js showcase application demonstrating various neumorphism examples.

## Purpose

This repository serves two main purposes:

1. **Plugin Development**: Contains the complete Tailwind CSS plugin code that generates neumorphic design utilities
2. **Showcase Application**: The Next.js app provides a live demonstration of the plugin's capabilities and will be updated periodically with new neumorphism examples

## Neumorphism Design

Neumorphism (also known as "soft UI") is a design trend that uses shadows and highlights to create the illusion of elements being extruded from or pressed into a background. The effect is achieved through carefully crafted box shadows that combine both light and dark shadows.

## Plugin Code

The complete Tailwind CSS plugin is located in `tailwind-neu-plugin.js`. Here's the full implementation:

```javascript
const plugin = require('tailwindcss/plugin');

module.exports = plugin(function({ addUtilities, theme }) {
  // Helper function to generate neomorphic shadows
  const generateNeuShadows = (color, darkColor, intensity = 1) => {
    const distance = 8 * intensity;
    const blur = 16 * intensity;

    return {
      boxShadow: `${distance}px ${distance}px ${blur}px ${darkColor}, -${distance}px -${distance}px ${blur}px ${color}`
    };
  };

  const generateNeuInsetShadows = (color, darkColor, intensity = 1) => {
    const distance = 4 * intensity;
    const blur = 8 * intensity;

    return {
      boxShadow: `inset ${distance}px ${distance}px ${blur}px ${darkColor}, inset -${distance}px -${distance}px ${blur}px ${color}`
    };
  };

  // Light mode neomorphic utilities (for slate-200 elements on slate-100 background)
  const lightNeuUtilities = {
    '.neu-flat': generateNeuShadows('#ffffff', '#d1d5db', 1),
    '.neu-flat-sm': generateNeuShadows('#ffffff', '#d1d5db', 0.5),
    '.neu-flat-lg': generateNeuShadows('#ffffff', '#d1d5db', 1.5),

    '.neu-pressed': generateNeuInsetShadows('#ffffff', '#d1d5db', 1),
    '.neu-pressed-sm': generateNeuInsetShadows('#ffffff', '#d1d5db', 0.5),
    '.neu-pressed-lg': generateNeuInsetShadows('#ffffff', '#d1d5db', 1.5),
  };

  // Dark mode neomorphic utilities (for slate-800 elements on slate-700 background)
  const darkNeuUtilities = {
    '.dark .neu-flat-dark': generateNeuShadows('#334155', '#0f172a', 1),
    '.dark .neu-flat-dark-sm': generateNeuShadows('#334155', '#0f172a', 0.5),
    '.dark .neu-flat-dark-lg': generateNeuShadows('#334155', '#0f172a', 1.5),

    '.dark .neu-pressed-dark': generateNeuInsetShadows('#334155', '#0f172a', 1),
    '.dark .neu-pressed-dark-sm': generateNeuInsetShadows('#334155', '#0f172a', 0.5),
    '.dark .neu-pressed-dark-lg': generateNeuInsetShadows('#334155', '#0f172a', 1.5),
  };

  // Blue accent neomorphic utilities (for buttons)
  const blueNeuUtilities = {
    '.neu-blue': generateNeuShadows('#3b82f6', '#1e40af', 0.75),
    '.neu-blue-pressed': generateNeuInsetShadows('#3b82f6', '#1e40af', 0.75),
  };

  // Combine all utilities
  addUtilities({
    ...lightNeuUtilities,
    ...darkNeuUtilities,
    ...blueNeuUtilities,
  });
});
```

## Installation

### Using the Plugin in Your Project

1. Copy the `tailwind-neu-plugin.js` file to your project
2. Add it to your `tailwind.config.js`:

```javascript
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  plugins: [
    require('./tailwind-neu-plugin'),
  ],
};
```

### Running the Showcase App

```bash
# Install dependencies
npm install

# Start the development server
npm run dev
```

The showcase app will be available at `http://localhost:5080`.

## Available Utility Classes

### Light Mode (Flat/Raised)

- `neu-flat` - Standard raised neumorphic effect
- `neu-flat-sm` - Smaller, subtle raised effect
- `neu-flat-lg` - Larger, more pronounced raised effect

### Light Mode (Pressed/Inset)

- `neu-pressed` - Standard pressed/inset neumorphic effect
- `neu-pressed-sm` - Smaller, subtle pressed effect
- `neu-pressed-lg` - Larger, more pronounced pressed effect

### Dark Mode (Flat/Raised)

- `neu-flat-dark` - Standard raised neumorphic effect for dark mode
- `neu-flat-dark-sm` - Smaller, subtle raised effect for dark mode
- `neu-flat-dark-lg` - Larger, more pronounced raised effect for dark mode

### Dark Mode (Pressed/Inset)

- `neu-pressed-dark` - Standard pressed/inset neumorphic effect for dark mode
- `neu-pressed-dark-sm` - Smaller, subtle pressed effect for dark mode
- `neu-pressed-dark-lg` - Larger, more pronounced pressed effect for dark mode

### Blue Accent

- `neu-blue` - Blue-accented raised neumorphic effect (great for buttons)
- `neu-blue-pressed` - Blue-accented pressed/inset neumorphic effect

## Usage Examples

### Basic Card with Raised Effect

```jsx
<div className="bg-slate-200 neu-flat rounded-lg p-6">
  <h2 className="text-xl font-bold">Card Title</h2>
  <p>Card content goes here</p>
</div>
```

### Pressed Button Effect

```jsx
<button className="bg-slate-200 neu-pressed rounded-lg px-4 py-2">
  Click Me
</button>
```

### Blue Accent Button

```jsx
<button className="bg-blue-500 neu-blue rounded-lg px-6 py-3 text-white">
  Primary Action
</button>
```

### Dark Mode Support

```jsx
<div className="bg-slate-800 neu-flat-dark rounded-lg p-6">
  <p className="text-white">Dark mode neumorphic card</p>
</div>
```

## How It Works

The plugin generates neumorphic effects by creating dual box shadows:

1. **Raised Effects** (`neu-flat-*`): Combines a dark shadow (bottom-right) with a light highlight (top-left) to create an extruded appearance
2. **Pressed Effects** (`neu-pressed-*`): Uses inset shadows to create the appearance of elements being pressed into the surface

The intensity parameter controls the distance and blur of the shadows, allowing for subtle (`-sm`), standard, and pronounced (`-lg`) effects.

## Showcase Application

The Next.js application in this repository serves as a living showcase of the plugin's capabilities. It demonstrates:

- Various neumorphic design patterns
- Light and dark mode implementations
- Interactive elements (buttons, cards, inputs)
- Different intensity levels
- Creative use cases

The showcase will be updated periodically with new examples and patterns as the plugin evolves.

## Project Structure

```
.
├── tailwind-neu-plugin.js    # The Tailwind CSS plugin implementation
├── tailwind.config.js        # Tailwind configuration with plugin
├── app/                      # Next.js showcase application
│   ├── page.tsx             # Main showcase page
│   ├── layout.tsx           # Root layout
│   └── globals.css          # Global styles
└── package.json             # Dependencies and scripts
```

## Technologies

- **Tailwind CSS 4** - Utility-first CSS framework
- **Next.js 16** - React framework for the showcase app
- **TypeScript** - Type-safe development
- **React 19** - UI library

## License

This project is open source and available for use in your own projects.
