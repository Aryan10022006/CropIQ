# YieldGuard - AI-Powered Crop Insurance Assessment Platform

![YieldGuard](public/images/logo.png)

**Enterprise-grade PMFBY (Pradhan Mantri Fasal Bima Yojana) insurance assessment platform powered by AI, UAV surveillance, and IoT sensors.**

[![Next.js](https://img.shields.io/badge/Next.js-14.2-black)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue)](https://www.typescriptlang.org/)
[![Mantine](https://img.shields.io/badge/Mantine-7.0-339af0)](https://mantine.dev/)
[![License](https://img.shields.io/badge/License-MIT-green)](LICENSE)

## 📱 Features

### Core Functionality
- 🤖 **AI-Powered Claims Assessment** - Automated damage analysis using computer vision
- 🚁 **UAV Surveillance Integration** - Real-time drone imagery analysis with NDVI
- 📡 **IoT Sensor Network** - Live soil moisture, temperature, and environmental monitoring
- 🔐 **Blockchain Verification** - Immutable evidence storage and audit trails
- 📢 **Real-time Farmer Alerts** - SMS and app notifications for critical events
- 📊 **Interactive Dashboard** - Live maps, analytics, and claim tracking
- 🔍 **Advanced Search & Filters** - Efficient claim management with multiple filter options
- 🌾 **Farmer Portal (CropIQ)** - User-friendly interface for farmers to monitor crops and file claims

### Technical Excellence
- ⚡ **Next.js 14 App Router** - Server-side rendering and optimal performance
- 🎨 **Enterprise UI/UX** - Professional design with Mantine v7 components
- 📱 **Fully Responsive** - Mobile-first design with burger menus and fluid layouts
- 🔒 **Security Headers** - HSTS, CSP, XSS protection, and frame options
- 📦 **PWA Ready** - Progressive Web App with offline capabilities
- ♿ **Accessibility** - WCAG 2.1 AA compliant
- 🔍 **SEO Optimized** - Complete metadata, OpenGraph, and sitemap
- 🚀 **Performance** - Code splitting, lazy loading, and image optimization

##  Prerequisites

- Node.js 18.x or higher
- npm 9.x or higher
- Git

##  Installation

### 1. Clone the repository
```bash
git clone https://github.com/yourusername/yieldguard.git
cd yieldguard
```

### 2. Install dependencies
```bash
npm install
```

### 3. Set up environment variables
```bash
cp .env.example .env.local
```

Edit `.env.local` with your configuration:
```env
NEXT_PUBLIC_APP_NAME=YieldGuard
NEXT_PUBLIC_APP_URL=https://yieldguard.vercel.app
NEXT_PUBLIC_API_URL=https://api.yieldguard.com
```

### 4. Run development server
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

##  Deployment to Vercel

### Quick Deploy (Recommended)

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/yourusername/yieldguard)

### Manual Deployment

1. **Install Vercel CLI**
   ```bash
   npm install -g vercel
   ```

2. **Login to Vercel**
   ```bash
   vercel login
   ```

3. **Deploy**
   ```bash
   vercel
   ```

4. **Deploy to Production**
   ```bash
   vercel --prod
   ```

### Vercel Configuration

The project includes `vercel.json` with optimized settings:
- **Framework Detection**: Automatic Next.js detection
- **Region**: Mumbai (bom1) for Indian users
- **Security Headers**: Built-in protection
- **Build Command**: Optimized for production

### Environment Variables on Vercel

Add these in your Vercel project settings (Settings  Environment Variables):

| Variable | Value | Environment |
|----------|-------|-------------|
| `NEXT_PUBLIC_APP_NAME` | YieldGuard | Production |
| `NEXT_PUBLIC_APP_URL` | https://your-domain.vercel.app | Production |
| `NEXT_PUBLIC_API_URL` | Your API endpoint | Production |

## 📂 Project Structure

```
yieldguard/
├─ app/
│   ├─ layout.tsx              # Root layout with SEO metadata
│   ├─ page.tsx                # Landing page (dual portal selection)
│   ├─ error.tsx               # Global error boundary
│   ├─ loading.tsx             # Global loading state
│   ├─ not-found.tsx           # 404 page
│   ├─ global.css              # Global styles
│   ├─ theme.ts                # Mantine theme configuration
│   ├─ dashboard/              # ASSESSOR PORTAL
│   │   ├─ layout.tsx          # Dashboard AppShell (Sidebar + Header)
│   │   ├─ page.tsx            # Main dashboard with stats & map
│   │   └─ loading.tsx         # Dashboard loading state
│   ├─ farmer/                 # FARMER PORTAL (CropIQ)
│   │   ├─ layout.tsx          # Farmer AppShell with green theme
│   │   ├─ page.tsx            # Farmer dashboard
│   │   ├─ my-fields/          # Field monitoring
│   │   ├─ claims/             # Claim tracking
│   │   ├─ alerts/             # Alerts & advisories
│   │   ├─ weather/            # Weather forecast
│   │   └─ support/            # Help & support
│   ├─ claims/
│   │   ├─ page.tsx            # Claims workflow with filters
│   │   └─ loading.tsx         # Claims loading state
│   ├─ alerts/
│   │   ├─ page.tsx            # Farmer alerts dashboard
│   │   └─ loading.tsx         # Alerts loading state
│   ├─ plot/[id]/
│   │   └─ page.tsx            # Individual plot details
│   ├─ components/
│   │   ├─ dashboard/          # Dashboard components
│   │   ├─ claims/             # Claims components
│   │   ├─ plot/               # Plot components
│   │   └─ layout/             # Layout components
│   ├─ data/                   # Mock data
│   ├─ lib/                    # Utilities and types
│   └─ store/                  # State management
├─ public/
│   ├─ images/                 # Static images
│   ├─ manifest.json           # PWA manifest
│   └─ robots.txt              # SEO robots file
├─ next.config.js              # Next.js configuration
├─ vercel.json                 # Vercel deployment config
├─ tsconfig.json               # TypeScript configuration
├─ package.json                # Dependencies
├─ .env.example                # Environment variables template
├─ .gitignore                  # Git ignore rules
├─ MOBILE_RESPONSIVE.md        # Mobile responsiveness documentation
└─ FEATURES.md                 # Feature documentation
```

##  Key Pages

### Landing Page (`/`)
- Hero section with call-to-action
- Feature highlights (UAV, IoT, Claims)
- Professional branding and messaging

### Dashboard (`/dashboard`)
- Real-time statistics (Claims, Inspections, IoT Sensors, Success Rate)
- Interactive map with plot locations
- Recent activity timeline
- Live data updates

### Claims Workflow (`/claims`)
- Comprehensive claim statistics
- Advanced search and filtering
- Status tracking (Pending, In Review, Approved, Flagged)
- Priority management
- Quick actions (Export, Refresh, Bulk Approve)
- AI confidence metrics

### Farmer Alerts (`/alerts`)
- Real-time alert monitoring
- Severity levels (Critical, High, Medium, Low)
- Alert categories (Pest, Irrigation, Soil, Weather, Nutrition, Advisory)
- SMS broadcast functionality
- Detailed farmer contact information
- AI confidence scoring

### Plot Details (`/plot/[id]`)
- Detailed claim information
- UAV imagery evidence
- Sensor data analysis
- Blockchain verification
- Decision panel with approval workflow

## 🎨 UI/UX Features

- **Dual Portal System** - Separate interfaces for Assessors and Farmers
- **Enterprise Design System** - Consistent, professional appearance
- **Fully Responsive Layout** - Mobile-first design (see [MOBILE_RESPONSIVE.md](MOBILE_RESPONSIVE.md))
  - Burger menus on mobile for both portals
  - Fluid typography with CSS clamp()
  - Adaptive grids (1/2/3/4 columns)
  - Touch-friendly buttons (min 44px)
  - No horizontal scroll on any device
- **Dark/Light Mode Support** - Professional light theme by default
- **Loading States** - Skeleton screens for smooth UX
- **Error Handling** - Comprehensive error boundaries
- **Accessibility** - Screen reader support and keyboard navigation
- **Professional Typography** - Clear hierarchy and readability
- **Color System** - Blue primary (#2563eb), Green accent (#059669)

##  Performance Optimizations

- **Code Splitting** - Automatic route-based splitting
- **Image Optimization** - Next.js Image component with AVIF/WebP
- **Dynamic Imports** - Lazy loading for heavy components (maps)
- **Bundle Optimization** - Tree shaking and minification
- **Caching Strategy** - Optimized headers for static assets
- **Font Optimization** - Preconnect to font providers
- **Compression** - Gzip/Brotli enabled

##  Security Features

- **Security Headers** - HSTS, X-Frame-Options, CSP
- **XSS Protection** - Content Security Policy
- **CORS Configuration** - Controlled cross-origin requests
- **Environment Variables** - Secure secret management
- **No Sensitive Data** - Client-side security best practices

##  Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Android)

##  Testing

```bash
# Run linting
npm run lint

# Type checking
npm run type-check

# Build for production
npm run build

# Start production server
npm start
```

##  Performance Metrics

Target performance scores:
- **Performance**: 90+
- **Accessibility**: 95+
- **Best Practices**: 95+
- **SEO**: 100

##  Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

##  License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

##  Team

Built with ❤️ by the YieldGuard Team

### Contact Details

- **Anmol Surekha**  
  📞 +91 94796 89897

- **Aryan Tamboli**  
  📞 +91 97022 76874
  


##  Support

For support, email support@yieldguard.com or open an issue in the repository.

##  Acknowledgments

- Next.js team for the amazing framework
- Mantine team for the UI library
- Vercel for hosting platform
- All contributors and supporters

---

**Made for SIH 2025** | **Empowering Agriculture with Technology**
