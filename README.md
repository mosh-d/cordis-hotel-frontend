"# Cordis Hotel Frontend

A modern, responsive hotel booking website built with React and styled-components. Features room reservations, amenity bookings, and a seamless user experience across all devices.

## 🏨 Features

- **Room Booking System**: Browse and reserve budget and diplomatic rooms
- **Amenity Booking**: Book spa and gym sessions with time slots
- **Interactive Room Gallery**: Flippable carousel with room details and amenities
- **Responsive Design**: Optimized for desktop, tablet, and mobile devices
- **State Management**: Unified booking state across all pages
- **Modern UI**: Clean design with smooth animations and transitions

## 🚀 Quick Start

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn package manager

### Installation

1. **Install dependencies:**
   ```bash
   npm install
   ```
   or
   ```bash
   yarn install
   ```

2. **Run in development mode:**
   ```bash
   npm run dev
   ```
   Then go to [http://localhost:5173](http://localhost:5173) and you should see the application running.

3. **Build for production:**
   ```bash
   npm run build
   ```
   (Static files will be generated in the `dist` folder)

4. **Preview production build:**
   ```bash
   npm run preview
   ```

5. **Run linting:**
   ```bash
   npm run lint
   ```

## 🛠️ Tech Stack

- **Frontend Framework**: React 19
- **Routing**: React Router DOM v7
- **Styling**: Styled Components
- **Animations**: Framer Motion
- **Icons**: React Icons & Lucide React
- **Maps**: Google Maps API
- **Build Tool**: Vite
- **CSS Processing**: Sass, PostCSS, Autoprefixer

## 📁 Project Structure

```
src/
├── components/
│   ├── home-components/     # Homepage sections
│   ├── shared/             # Reusable components
│   ├── about-components/   # About page components
│   ├── contact-components/ # Contact page components
│   └── blog-components/    # Blog page components
├── pages/
│   ├── Booking/           # Booking pages
│   ├── Rooms/             # Room-related pages
│   └── RootLayouts/       # Layout components
├── assets/                # Images and media files
├── util/                  # Utility functions and data
└── design-system.css      # Global styles and design tokens
```

## 🎨 Design System

The project uses a comprehensive design system with:
- **CSS Custom Properties**: Consistent colors, typography, and spacing
- **Responsive Breakpoints**: Mobile-first approach
- **Component Library**: Reusable UI components
- **Animation System**: Smooth transitions and micro-interactions

## 📱 Responsive Design

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px  
- **Desktop**: 1025px - 1200px
- **Large**: > 1200px

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint
- `npm run build:css` - Compile and process CSS
- `npm run vercel-build` - Build for Vercel deployment

## 🌐 Deployment

The project is configured for deployment on Vercel with the `vercel-build` script. Simply connect your repository to Vercel for automatic deployments.

## 📄 License

This project is licensed under the ISC License.

## 👨‍💻 Author

**Sope** - Frontend Developer

---