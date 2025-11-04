# Digital Asset Manager

A modern, responsive digital asset management system built with Next.js, TypeScript, and Tailwind CSS.

## Features

- 📸 **Image Gallery** - Beautiful thumbnail grid view of all your assets
- 🔍 **Search** - Quickly find assets by filename
- 👁️ **Lightbox View** - Click any image to view it in full resolution with detailed metadata
- 🎨 **View Modes** - Switch between grid and list views
- 🌓 **Dark Mode** - Automatic dark mode support
- 📱 **Responsive** - Works perfectly on all device sizes

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

The project is already set up. To start the development server:

```bash
cd dam-app
npm run dev
```

The application will be available at [http://localhost:8080](http://localhost:8080)

### Project Structure

```
dam-app/
├── app/
│   ├── page.tsx          # Main DAM interface
│   ├── layout.tsx        # Root layout
│   └── globals.css       # Global styles
├── public/
│   └── images/           # Your image assets
└── package.json
```

## Usage

### Adding New Images

1. Place your images in the `public/images/` directory
2. Update the `assets` array in `app/page.tsx` with the new image details:

```typescript
const assets: Asset[] = [
  { 
    id: '13', 
    filename: 'your-image.jpg', 
    path: '/images/your-image.jpg', 
    type: 'JPG', 
    size: '2.5 MB' 
  },
  // ... other assets
];
```

### Customization

- **Colors**: Modify Tailwind classes in `app/page.tsx` to change the color scheme
- **Grid Layout**: Adjust the `grid-cols-*` classes to change thumbnail sizes
- **Metadata**: Add more fields to the `Asset` interface and display them in the lightbox

## Technologies Used

- **Next.js 16** - React framework with App Router
- **TypeScript** - Type-safe JavaScript
- **Tailwind CSS 4** - Utility-first CSS framework
- **Next/Image** - Optimized image loading

## Scripts

- `npm run dev` - Start development server on port 8080
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## License

This is a demo project created for digital asset management.
