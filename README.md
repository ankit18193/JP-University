# JG University - Institutional Web Portal

link :  https://jg-university-104947840324.asia-south1.run.app


<img width="1920" height="969" alt="{A5CF71A0-9CF7-4FB5-A293-7D0E1BFE485B}" src="https://github.com/user-attachments/assets/3d1cf34c-9dec-4722-a5c4-7228edb1e278" />



A high-performance, visually stunning institutional web portal for JG University, built with Next.js 15, Tailwind CSS, and Framer Motion. This application is designed to provide a premium user experience with a focus on bold typography, fluid animations, and a "Mobile-First" production-ready architecture.

## 🚀 Features

### 1. Dynamic Hero Experience
- **Cinematic Slider**: Custom-built high-performance slider with `motion/react` transitions.
- **Action-Oriented**: Integrated "Apply Now" (Enquiry Modal) and "Download Brochure" functionality.

### 2. Institutional Modules
- **About/Legacy**: Multi-layered image composition with staggered entrance animations.
- **Academic Programs**: Interactive grid showcasing diverse schools and courses.
- **Faculty & Leadership**: Detailed sections for visionary leadership and elite academic staff.
- **Global Alumni Network**: Visual representation of the university's worldwide impact.

### 3. Lead Generation Tools
- **Enquiry Modal**: A sleek, pop-up enquiry form that appears automatically after 15 seconds or via manual trigger.
- **Smart Floating Actions**: Compact, horizontal floating buttons for instant WhatsApp support and Enquiry access.
- **Lead Validation**: Real-time form validation for name, email, phone, and department selection.

### 4. Advanced UI/UX
- **Bento Grid Layouts**: Used for modern data visualization and feature highlighting.
- **Fluid Typography**: Responsive font scaling (inter/outfit/playfair) for optimal readability across devices.
- **Staggered Animations**: Micro-interactions that guide the user's attention without being intrusive.

## 🛠 Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS 4.0
- **Animations**: Motion (framer-motion)
- **Icons**: Lucide React
- **Typography**: Google Fonts (Inter, Outfit, Playfair Display)

## 📱 Mobile Optimization
The application is strictly optimized for mobile devices:
- **Responsive Grids**: Stacking logic that preserves visual hierarchy.
- **Touch-Friendly Targets**: Minimum 44px hit-zones for all interactive elements.
- **Adaptive Spacing**: Reduced padding and margins for smaller viewport density.

## 📁 Project Structure

```text
├── app/                  # Next.js App Router core
├── components/           # Atomic & Complex UI Components
│   ├── EnquiryModal.tsx  # Optimized pop-up form
│   ├── FloatingContact.tsx # Adaptive action buttons
│   ├── Navbar.tsx        # Responsive navigation with mega-menu logic
│   └── ...               # Modular section components
├── public/               # Static assets and images
├── lib/                  # Utility functions (cn helper, etc.)
└── metadata.json         # Platform-specific app metadata
```

## 🏁 Getting Started

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Run the development server**:
   ```bash
   npm run dev
   ```

3. **Build for production**:
   ```bash
   npm run build
   ```

## 📄 License
This project is for institutional use by JG University. All rights reserved.
