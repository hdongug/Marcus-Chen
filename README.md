# Marcus Chen - Full Stack Developer Portfolio

A modern, minimalist portfolio website showcasing full-stack development projects, technical skills, and open-source contributions. Built with React, TypeScript, and Tailwind CSS.

## 🎨 Design Philosophy

**Tech Minimalism + Neon Accent** - A sophisticated dark-mode interface combining extreme simplicity with technical elegance. The design emphasizes clean typography, strategic whitespace, and neon green accents to create a premium, developer-friendly aesthetic.

### Color Palette
- **Background**: Deep Black (`#0a0a0a`)
- **Text**: Light Slate Gray (`#e8e8e8`)
- **Accent**: Neon Green (`#00ff41`)
- **Secondary**: Slate Gray (`#64748b`)

### Typography
- **Headers**: Space Mono (Bold) - Technical and impactful
- **Body**: Inter (Regular, Medium) - Clean and readable
- **Code**: JetBrains Mono (Regular) - Developer-friendly

## ✨ Features

### Hero Section
- Eye-catching introduction with developer name and title
- Quick tech stack overview with interactive badges
- Call-to-action buttons (View Work, Download Resume)
- Social media links (GitHub, LinkedIn, Email)
- Animated background with circuit-board aesthetic

### Featured Projects
- Responsive grid layout showcasing 4 featured projects
- Project cards with hover effects and neon glow
- Technology tags for each project
- Links to GitHub repositories and live demos
- Smooth card elevation animation on hover

### Technical Skills
- Organized skill matrix by category (Frontend, Backend, Database, DevOps)
- Visual hierarchy with neon green borders
- Icon indicators for each skill category
- Hover effects for enhanced interactivity

### Blog Section
- Latest articles showcase with publication dates
- Card-based layout with consistent styling
- Quick preview of article content
- Links to full articles

### Contact Form
- Professional contact form with validation
- Name, email, and message fields
- Responsive design for all screen sizes
- Form submission handling

### Footer
- Copyright information
- Quick links (Privacy, Terms, Sitemap)
- Consistent branding throughout

## 🚀 Getting Started

### Prerequisites
- Node.js 18+
- pnpm (recommended) or npm

### Installation

```bash
# Clone the repository
git clone https://github.com/yourusername/marcus_portfolio.git
cd marcus_portfolio

# Install dependencies
pnpm install

# Start development server
pnpm dev
```

The site will be available at `http://localhost:3000`

### Build for Production

```bash
pnpm build
pnpm preview
```

## 📁 Project Structure

```
marcus_portfolio/
├── client/
│   ├── public/
│   │   └── images/          # Generated hero and pattern images
│   ├── src/
│   │   ├── components/      # Reusable UI components
│   │   ├── pages/
│   │   │   └── Home.tsx     # Main portfolio page
│   │   ├── App.tsx          # App routing and theme setup
│   │   ├── index.css        # Global styles and design tokens
│   │   └── main.tsx         # React entry point
│   └── index.html           # HTML template
├── server/                  # Static server configuration
├── package.json
└── README.md
```

## 🎯 Key Technologies

- **React 19** - Modern UI framework
- **TypeScript** - Type-safe development
- **Tailwind CSS 4** - Utility-first styling
- **Vite** - Fast build tool and dev server
- **shadcn/ui** - High-quality UI components
- **Lucide React** - Beautiful icon library
- **Wouter** - Lightweight client-side routing

## 🎨 Customization

### Changing Colors
Edit the CSS variables in `client/src/index.css`:

```css
:root {
  --primary: #00ff41;           /* Neon green */
  --background: #0a0a0a;        /* Deep black */
  --foreground: #e8e8e8;        /* Light gray */
  /* ... other variables */
}
```

### Updating Projects
Modify the `projects` array in `client/src/pages/Home.tsx` with your own projects.

### Updating Skills
Edit the `skills` array in `client/src/pages/Home.tsx` to reflect your technical expertise.

### Updating Content
All text content can be easily modified in the Home component. Replace placeholder text with your actual information.

## 🎬 Animations & Interactions

- **Fade-in animations** on page load
- **Card hover effects** with neon glow and elevation
- **Smooth transitions** on all interactive elements
- **Responsive design** that adapts to all screen sizes

## 📱 Responsive Design

The portfolio is fully responsive and optimized for:
- Mobile devices (320px+)
- Tablets (768px+)
- Desktop screens (1024px+)

## 🔍 SEO & Performance

- Semantic HTML structure
- Meta tags for social sharing
- Fast load times with Vite optimization
- Accessible color contrast ratios
- Keyboard navigation support

## 📄 License

This project is open source and available under the MIT License.

## 👤 Author

**Marcus Chen** - Full Stack Developer

- GitHub: [@yourusername](https://github.com/yourusername)
- LinkedIn: [Your LinkedIn Profile](https://linkedin.com/in/yourprofile)
- Email: marcus@example.com

## 🤝 Contributing

This is a personal portfolio project. However, if you find any issues or have suggestions for improvements, feel free to open an issue or submit a pull request.

## 📝 Changelog

### v1.0.0 (Initial Release)
- Hero section with tech stack overview
- Featured projects grid with live demos
- Technical skills matrix
- Blog section
- Contact form
- Responsive design
- Dark mode with neon accents
- Smooth animations and interactions

---

**Built with ❤️ using React and Tailwind CSS**
