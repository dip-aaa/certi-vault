# CertiVault – Smart Certificate Locker for Students

A peaceful digital trophy room for students. Minimal, elegant, and trustworthy.

## Design Philosophy

CertiVault embodies calm confidence and academic beauty through:

- **Minimal & Calm**: Distraction-free interface with generous whitespace
- **Premium Feel**: Sophisticated typography with Instrument Serif and DM Sans
- **Student-Friendly**: Intuitive navigation and clear information hierarchy
- **Trustworthy**: Professional appearance suitable for portfolio sharing
- **Clean Design**: Custom SVG illustrations instead of heavy icon libraries

## Visual Design System

### Color Palette
- Primary: Royal Blue `#2563EB`
- Secondary: Soft Purple `#7C3AED`
- Background: Very light gray `#F8FAFC`
- Card: Pure white `#FFFFFF`
- Border: Subtle gray `#E2E8F0`

### Typography
- **Display Font**: Instrument Serif (elegant, academic)
- **Body Font**: DM Sans (clean, readable)
- **Style**: Generous spacing, rounded corners (2xl), subtle shadows

### Icon Style
- Custom SVG line illustrations
- Thin stroke, rounded edges
- Monochrome with soft blue tint
- No emoji or colorful icon packs

## Features

### 1. Dashboard
- Welcoming header with motivational message
- Stats cards showing:
  - Total Certificates
  - Courses
  - Internships
  - Achievements
- Recent certificates grid with hover animations

### 2. Certificate Vault
- Powerful search functionality
- Filter by:
  - Category (Courses, Internships, Achievements)
  - Year
- Responsive card grid layout
- Actions: View, Download, Share

### 3. Upload Modal
- Drag & drop interface
- File preview
- Category selection
- Success animation
- Supports PDF, JPG, PNG

### 4. Public Portfolio
- Professional layout for employers
- Student profile header
- Timeline-style certificate display
- Skills showcase
- Printable resume-style formatting

## Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Custom SVG components

## Getting Started

### Prerequisites
- Node.js 18.0 or higher
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

### Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
certivault/
├── app/
│   ├── layout.tsx          # Root layout with fonts
│   ├── page.tsx            # Main app component
│   └── globals.css         # Global styles
├── components/
│   ├── Navbar.tsx          # Navigation bar
│   ├── Dashboard.tsx       # Dashboard page
│   ├── VaultPage.tsx       # Certificate vault
│   ├── PortfolioPage.tsx   # Public portfolio
│   ├── CertificateCard.tsx # Certificate card component
│   └── UploadModal.tsx     # Upload modal
├── tailwind.config.ts      # Tailwind configuration
├── tsconfig.json           # TypeScript configuration
└── package.json            # Dependencies
```

## Responsive Design

The UI is fully responsive with breakpoints for:
- Mobile (< 640px)
- Tablet (640px - 1024px)
- Desktop (> 1024px)

All components adapt gracefully to different screen sizes while maintaining the minimal aesthetic.

## Micro-Interactions

Subtle animations enhance the user experience:
- Card hover elevation
- Soft fade-in page transitions
- Gentle button press feedback
- Smooth modal animations
- Staggered content reveals

## Customization

### Changing Colors

Edit the color values in `app/globals.css`:

```css
:root {
  --color-primary: 37 99 235;    /* Royal Blue */
  --color-secondary: 124 58 237; /* Soft Purple */
}
```

### Modifying Fonts

Update font imports in `app/layout.tsx`:

```typescript
import { Your_Font } from "next/font/google";
```

### Adding Certificate Data

Edit the mock data in:
- `components/Dashboard.tsx` (recent certificates)
- `components/VaultPage.tsx` (all certificates)
- `components/PortfolioPage.tsx` (selected certificates)

## Design Principles

1. **Whitespace is Your Friend**: Generous padding creates breathing room
2. **Subtle Over Flashy**: Gentle animations, not distracting
3. **Typography Hierarchy**: Clear size and weight differences
4. **Consistent Spacing**: Use Tailwind's spacing scale
5. **Accessible Contrasts**: Ensure text is readable
6. **Mobile First**: Design for small screens, enhance for large

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Performance

- Code splitting with Next.js App Router
- Optimized fonts with `next/font`
- CSS-only animations where possible
- Lazy loading of components
- Minimal JavaScript bundle

## Future Enhancements

Potential features for backend integration:
- User authentication
- Real file uploads
- Certificate verification
- Portfolio sharing links
- PDF generation
- Email notifications
- Analytics dashboard

## License

This is a front-end UI template. Feel free to use and modify for your projects.

## Credits

Designed and developed with attention to minimal aesthetics and student needs.

---

**Note**: This is a front-end only implementation. No backend logic or database is included. All data is currently static and for demonstration purposes.
