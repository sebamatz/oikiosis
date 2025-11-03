# Οικίωσις Website

Professional website for Οικίωσις therapy practice, specializing in high-conflict relationships and parental alienation.

## Technology Stack

- **Next.js 16** (App Router) with TypeScript
- **Tailwind CSS** for styling
- **shadcn/ui** component library
- **Lucide React** for icons

## Features

- Responsive design optimized for all screen sizes
- Greek language support
- Professional, calming design aesthetic
- Clean navigation with mobile menu
- Service pages with detailed information
- Team member profiles
- Contact information with phone numbers

## Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

## Project Structure

```
├── app/
│   ├── layout.tsx          # Root layout with metadata
│   ├── page.tsx            # Home page
│   ├── services/           # Services page
│   ├── about/              # About/Team page
│   └── contact/            # Contact page
├── components/
│   ├── ui/                 # shadcn/ui components
│   ├── Header.tsx          # Navigation header
│   ├── Footer.tsx          # Footer component
│   ├── Hero.tsx            # Hero section
│   └── Section.tsx         # Reusable section wrapper
└── lib/
    └── utils.ts            # Utility functions
```

## Pages

- **Home** (`/`) - Hero section, philosophy, services preview, team preview
- **Services** (`/services`) - Detailed service offerings
- **About** (`/about`) - Philosophy and team member profiles
- **Contact** (`/contact`) - Contact information and session details

## Design

The website uses a calming color palette with blue/teal tones, designed to create a sense of trust and safety appropriate for a therapy practice. The design emphasizes clarity, readability, and accessibility.

## License

Private project for Οικίωσις therapy practice.
